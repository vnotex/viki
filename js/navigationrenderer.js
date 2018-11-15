import Utils from "./utils.js";

class NavigationRenderer {
    constructor(p_node, p_contentWorker) {
        this.containerNode = p_node;

        this.fileTree = null;

        // Target to load after tree is ready.
        this.target = '';

        // Base of the navigation file.
        this.naviBase = '';

        // File name of the navigation file.
        this.naviFile = '';

        this.contentWorker = p_contentWorker;
    }

    // @p_openTarget: whether open target after tree is ready. If false, will
    // only expand to the corresponding node.
    render(p_naviFile, p_target, p_openTarget) {
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
                        if (p_node.id === '#') {
                            return this.naviBase + this.naviFile;
                        }

                        return p_node.original.v_path + '/' + this.naviFile;
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
                            let basePath = p_opts.path + '/';

                            let children = [];
                            // Subfolders.
                            for (let i = 0; i < p_jobj.sub_directories.length; ++i) {
                                let folder = p_jobj.sub_directories[i];

                                let folderItem = {
                                    text: folder.name,
                                    icon: 'viki-jstree-folder-icon',
                                    a_attr: {
                                        href: '#!' + basePath + folder.name
                                    },
                                    // Make jstree to load its children dynamically when user open it.
                                    children: true,
                                    // Viki specific attrs.
                                    v_type: 'folder',
                                    // Path of this item without ending /.
                                    v_path: basePath + folder.name
                                };

                                children.push(folderItem);
                            }

                            // Files.
                            for (let i = 0; i < p_jobj.files.length; ++i) {
                                let file = p_jobj.files[i];

                                let fileItem = {
                                    text: file.name,
                                    icon: 'viki-jstree-file-icon',
                                    a_attr: {
                                        href: '#!' + basePath + file.name
                                    },
                                    // Viki specific attrs.
                                    v_type: 'file',
                                    v_path: basePath + file.name
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
            }
        });
    }

    renderSearchForm(p_node) {
        let form = $(`<form class="viki-search d-flex align-items-center">
            <span class="algolia-autocomplete" style="position: relative; display: inline-block; direction: ltr;"><input type="search" class="form-control ds-input" id="search-input" placeholder="Search..." autocomplete="off" data-siteurl="https://getbootstrap.com" data-docs-version="4.1" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-0" dir="auto" style="position: relative; vertical-align: top;"><pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 16px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre><span class="ds-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-0" style="position: absolute; top: 100%; z-index: 100; left: 0px; right: auto; display: none;"><div class="ds-dataset-1"></div></span></span>
            <button class="btn btn-link viki-search-docs-toggle d-md-none p-0 ml-3" type="button" data-toggle="collapse" data-target="#viki-docs-nav" aria-controls="viki-docs-nav" aria-expanded="true" aria-label="Toggle docs navigation"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false"><title>Menu</title><path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"></path></svg>
            </button>
        </form>`);

        this.containerNode.append(form);
    }

    expandToNode(p_startNode, p_pathNodes, p_idx) {
        let tree = this.fileTree.jstree(true);
        let hitNode = null;
        for (let i = 0; i < p_startNode.children.length; ++i) {
            let child = p_startNode.children[i];
            let childNode = tree.get_node(child);
            if (childNode.text === p_pathNodes[p_idx]) {
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
