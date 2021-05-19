import logger from "./logger.js";
import Worker from "./worker.js";

class Config {
    constructor() {
        this.brand = "Viki";
        this.brandIcon = "";
        this.title = "Viki - A simple Wiki page in Markdown from notebook of VNote";
        this.favicon = "https://github.com/vnotex/viki/raw/master/resources/viki.ico";
        this.footer = "";
        // Whether show suffix in navigation panel.
        this.showSuffix = false;
        this.loadBeforeSearch = true;
        this.fuzzySearch = false;
        this.markdown = {
            html: true,
            breaks: false,
            linkify: true,
            typographer: false,
            langPrefix: 'lang-',
            imageCaption: true,
            plantUMLServer: 'http://www.plantuml.com/plantuml',
            plantUMLFormat: 'svg',
            codeBlockLineNumber: false
        };
    }

    readFromJson(p_jobj) {
        if (typeof p_jobj.brand != "undefined") {
            this.brand = p_jobj.brand;
        }

        if (typeof p_jobj.brand_icon != "undefined") {
            this.brandIcon = p_jobj.brand_icon;
        }

        if (typeof p_jobj.title != "undefined") {
            this.title = p_jobj.title;
        }

        if (typeof p_jobj.favicon != "undefined") {
            this.favicon = p_jobj.favicon;
        }

        if (p_jobj.footer != null) {
            this.footer = p_jobj.footer;
        }

        if (p_jobj.show_suffix != null) {
            this.showSuffix = p_jobj.show_suffix;
        }

        if (p_jobj.load_before_search != null) {
            this.loadBeforeSearch = p_jobj.load_before_search;
        }

        if (p_jobj.fuzzy_search != null) {
            this.fuzzySearch = p_jobj.fuzzy_search;
        }

        if (p_jobj.markdown) {
            let md = p_jobj.markdown;
            if (typeof md.html != "undefined") {
                this.markdown.html = md.html;
            }

            if (typeof md.breaks != "undefined") {
                this.markdown.breaks = md.breaks;
            }

            if (typeof md.linkify != "undefined") {
                this.markdown.linkify = md.linkify;
            }

            if (typeof md.typographer != "undefined") {
                this.markdown.typographer = md.typographer;
            }

            if (typeof md.lang_prefix != "undefined") {
                this.markdown.langPrefix = md.lang_prefix;
            }

            if (typeof md.image_caption != "undefined") {
                this.markdown.imageCaption = md.image_caption;
            }

            if (typeof md.plantuml_server != "undefined") {
                this.markdown.plantUMLServer = md.plantuml_server;
            }

            if (typeof md.plantuml_format != "undefined") {
                this.markdown.plantUMLFormat = md.plantuml_format;
            }

            if (typeof md.code_block_line_number != "undefined") {
                this.markdown.codeBlockLineNumber = md.code_block_line_number;
            }
        }
    }
}

class ConfigWorker extends Worker {
    constructor() {
        super();
    }

    register(p_viki) {
        super.register(p_viki);
        logger.log("register ConfigWorker");
    }

    run() {
        $.get("viki.json", (p_data) => {
            let config = new Config();
            config.readFromJson(p_data);

            logger.log("config:", config);

            this.viki.config = config;

            this.viki.scheduleNext();
        });
    }
}

export { Config, ConfigWorker };
