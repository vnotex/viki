import Utils from "./utils.js";
import logger from "./logger.js";

class NavigationRenderer {
    constructor(p_node, p_contentWorker, p_config) {
        this.containerNode = p_node;

        this.fileTree = null;

        // Target to load after tree is ready.
        this.target = '';

        // Base of the navigation file.
        this.naviBase = '';

        // File name of the navigation file.
        this.naviFile = '';

        this.contentWorker = p_contentWorker;

        // showSuffix: whether show suffix.
        // loadBeforeSearch: whether load all nodes before a search.
        // fuzzySearch: whether do a fuzzy search.
        this.config = p_config;
    }

    // @p_openTarget: whether open target after tree is ready. If false, will
    // only expand to the corresponding node.
    render(p_hostPath, p_naviFile, p_target, p_openTarget) {
        this.containerNode.empty();

        // The search form.
        this.renderSearchForm();

        let nav = $(`<nav class="viki-links collapse show" id="viki-docs-nav"></nav>`);
        let tree = $(`<div id="viki-file-tree"></div>`);
        nav.append(tree);
        this.containerNode.append(nav);

        if (!p_naviFile) {
            return;
        }

        this.target = p_target;

        let utils = new Utils();
        this.naviBase = utils.baseOfPath(p_naviFile);
        this.naviFile = utils.fileNameOfPath(p_naviFile);

        this.fileTree = tree;

        let showSuffix = this.config.showSuffix;
        let fuzzySearch = this.config.fuzzySearch;

        tree.on('activate_node.jstree', (p_e, p_data) => {
            let node = p_data.node;
            if (node.original.v_type === 'file' && p_data.event) {
                this.contentWorker.renderFileInternal(node.original.v_path);
            }
        }).on('ready.jstree', (p_e, p_data) => {
            if (this.target) {
                if (p_openTarget) {
                    this.contentWorker.renderFileInternal(this.target);
                }

                // Expand to the target node.
                this.expandToNodeByPath(this.target);
            }
        }).jstree({
            "core": {
                "themes": {
                    "dots": false
                },
                "multiple": false,
                "data": {
                    "dataType": "json",
                    "url": (p_node) => {
                        let path = '';
                        if (p_node.id === '#') {
                            path = this.naviBase + this.naviFile;
                        } else {
                            path = p_node.original.v_path + '/' + this.naviFile;
                        }

                        return p_hostPath + path;
                    },
                    "data": (p_node) => {
                        let nodePath = '';
                        if (p_node.id === '#') {
                            nodePath = this.naviBase;
                            if (nodePath.endsWith('/')) {
                                nodePath = nodePath.substring(0, nodePath.length - 1);
                            }
                        } else {
                            nodePath = p_node.original.v_path;
                        }

                        return { 'id': p_node.id,
                                 'path': nodePath };
                    },
                    "dataFilter": function(p_data, p_type) {
                        let nodeFromNaviFile = function(p_opts, p_jobj) {
                            let basePath = p_opts.path.length > 0 ? p_opts.path + '/'
                                                                  : p_opts.path;

                            let utils = new Utils();

                            let children = [];
                            // Subfolders.
                            for (let i = 0; i < p_jobj.sub_directories.length; ++i) {
                                let folder = p_jobj.sub_directories[i];

                                let folderItem = {
                                    text: folder.name,
                                    icon: 'viki-jstree-folder-icon',
                                    a_attr: {
                                        href: '#!' + basePath + folder.name,
                                        title: folder.name
                                    },
                                    // Make jstree to load its children dynamically when user open it.
                                    children: true,

                                    // Viki specific attrs.
                                    v_type: 'folder',
                                    v_name: folder.name,
                                    // Path of this item without ending /.
                                    v_path: basePath + encodeURIComponent(folder.name)
                                };

                                children.push(folderItem);
                            }

                            // Files.
                            for (let i = 0; i < p_jobj.files.length; ++i) {
                                let file = p_jobj.files[i];

                                let showText = showSuffix ? file.name : utils.baseName(file.name);
                                let fileItem = {
                                    text: showText,
                                    icon: 'viki-jstree-file-icon',
                                    a_attr: {
                                        href: '#!' + basePath + file.name,
                                        title: showText
                                    },

                                    // Viki specific attrs.
                                    v_type: 'file',
                                    v_name: file.name,
                                    v_path: basePath + encodeURIComponent(file.name)
                                };

                                children.push(fileItem);
                            }

                            return children;
                        };

                        // Extract the data passed to GET.
                        let paras = this.url.substring(this.url.indexOf('?') + 1).split('&');
                        let opts = {};
                        for (let i = 0; i < paras.length; ++i) {
                            let key_val = paras[i].split('=');
                            opts[decodeURIComponent(key_val[0])] = decodeURIComponent(key_val[1]);
                        }

                        let data = nodeFromNaviFile(opts, JSON.parse(p_data));
                        return JSON.stringify(data);
                    }
                }
            },
            "plugins" : ["search"],
            "search" : {
                "fuzzy": fuzzySearch
            }
        });
    }

    renderSearchForm(p_node) {
        let form = $(`<form class="viki-search d-flex align-items-center" onsubmit="return false;">
            <span class="algolia-autocomplete" style="position: relative; display: inline-block; direction: ltr;">
            <input type="search" class="form-control ds-input" id="search-input" placeholder="Search..." autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-0" dir="auto" style="position: relative; vertical-align: top;">
            <pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 16px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;">
            </pre>
            <span class="ds-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-0" style="position: absolute; top: 100%; z-index: 100; left: 0px; right: auto; display: none;">
            <div class="ds-dataset-1">
            </div>
            </span>
            </span>
            <button class="btn btn-link viki-search-docs-toggle d-md-none p-0 ml-3" type="button" data-toggle="collapse" data-target="#viki-docs-nav" aria-controls="viki-docs-nav" aria-expanded="true" aria-label="Toggle docs navigation"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false"><title>Menu</title><path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"></path></svg>
            </button>
        </form>`);

        let loadBeforeSearch = this.config.loadBeforeSearch;
        let to = false;
        let lastSearchText = '';
        form.find('#search-input').keyup(function(p_e) {
            if (to) {
                clearTimeout(to);
            }

            if (p_e.keyCode === 27 ||
                p_e.keyCode === 219 && p_e.ctrlKey) {
                // Esc to clear the search.
                $('#search-input').val('');
                lastSearchText = '';
                $('#viki-file-tree').jstree(true).clear_search();
                return;
            }

            to = setTimeout(function() {
                let text = $('#search-input').val();
                if (text === lastSearchText) {
                    return;
                }

                lastSearchText = text;
                if (text.length > 0) {
                    if (loadBeforeSearch) {
                        $('#viki-file-tree').jstree(true).load_all(null, function() {
                            logger.log('search', text);
                            $('#viki-file-tree').jstree(true).search(text);
                        });
                    } else {
                        logger.log('search', text);
                        $('#viki-file-tree').jstree(true).search(text);
                    }
                } else {
                    $('#viki-file-tree').jstree(true).clear_search();
                }
            }, 500);
        });

        this.containerNode.append(form);
    }

    expandToNode(p_startNode, p_pathNodes, p_idx) {
        let tree = this.fileTree.jstree(true);
        let hitNode = null;
        for (let i = 0; i < p_startNode.children.length; ++i) {
            let child = p_startNode.children[i];
            let childNode = tree.get_node(child);
            if (childNode.original.v_name === p_pathNodes[p_idx]) {
                hitNode = childNode;
                break;
            }
        }

        if (hitNode) {
            if (p_idx === p_pathNodes.length - 1) {
                // That's it.
                tree.select_node(hitNode);
            } else {
                tree.open_node(hitNode, (p_node) => {
                    this.expandToNode(p_node, p_pathNodes, p_idx + 1);
                },
                false);
            }
        }
    }

    // Expand to the node by @p_path.
    expandToNodeByPath(p_path) {
        let tree = this.fileTree.jstree(true);
        tree.deselect_all();

        let utils  = new Utils();
        let basePath = utils.cleanPath(this.naviBase);
        let path = utils.cleanPath(p_path);
        path = decodeURIComponent(path);
        if (!path.startsWith(basePath)) {
            return;
        }

        path = path.substring(basePath.length + 1);
        if (!path) {
            return;
        }

        let pathNodes = path.split('/');
        this.expandToNode(tree.get_node('#'), pathNodes, 0);
    }
}

export default NavigationRenderer;
