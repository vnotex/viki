module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },

        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';\n',
            },
            dist: {
                // the files to concatenate
                src: ['tmp/libs/**/*.js', 'tmp/viki.transpiled.js'],
                // the location of the resulting JS file
                dest: 'dist/js/<%= pkg.name %>.js'
            }
        },

        jshint: {
            // define the files to lint
            files: ['Gruntfile.js', 'js/**/*.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                },
                esversion: 6
            }
        },

        watch: {
            files: ['<%= jshint.files %>', 'viki.html'],
            tasks: ['default']
        },

        babel: {
            options: {
                sourceMap: false,
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            "targets": {
                                "chrome": "58",
                                "ie": "11"
                            }
                        }
                    ]
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'tmp/',
                    src: ['*.js'],
                    dest: 'tmp/'
                }]
            }
        },

        browserify: {
            dist: {
                files: {
                    // destination for transpiled js : source js
                    'tmp/viki.transpiled.js': 'tmp/*.js'
                },
                options: {
                    transform: [['babelify', { presets: ['@babel/preset-env']}]],
                }
            }
        },

        copy: {
            pre: {
                files: [
                    { expand: true, cwd: 'js', src: '**', dest: 'tmp/'},
                    { expand: true, src: 'libs/**/*.js', dest: 'tmp/'},
                ],
            },
            post: {
                files: [
                    { expand: true, src: 'viki.html', dest: 'dist/'},
                ],
            },
        },

        clean: {
            options: {
                force: true,
            },
            tmp: ['tmp/'],
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-browserify');

    // the default task can be run just by typing "grunt" on the command line
    grunt.registerTask('default', ['jshint', 'copy:pre', 'browserify', 'concat', 'copy:post', 'clean:tmp']);
    grunt.registerTask('watcher', ['watch']);
};
