import logger from "./logger.js";
import Worker from "./worker.js";
import LinkRewriter from "./linkrewriter.js";
import Utils from "./utils.js";

class NaviItem {
    constructor() {
        // Text to display.
        this.text = "";

        // Target of this item.
        this.target = "";

        // Whether display toc for this item.
        this.toc = true;

        // Whether display navigation tree for this item.
        this.navi = false;

        // If @navi is true, this hold the start page of that navigation item.
        this.naviIndex = "";

        // Only 2 levels.
        // If not empty, only the text filed of this item is valid.
        this.children = [];
    }

    readFromJson(p_jobj) {
        this.text = p_jobj.text;
        this.target = p_jobj.target;

        if (p_jobj.toc != null) {
            this.toc = p_jobj.toc;
        }

        if (p_jobj.navi != null) {
            this.navi = p_jobj.navi;
        }

        if (this.navi && p_jobj.naviIndex != null) {
            this.naviIndex = p_jobj.naviIndex;
        }

        if (!this.target) {
            if (!p_jobj.children || p_jobj.children.length == 0) {
                return false;
            }

            for (let i = 0; i < p_jobj.children.length; ++i) {
                let child = new NaviItem();
                child.text = p_jobj.children[i].text;
                child.target = p_jobj.children[i].target;
                if (!child.target) {
                    return false;
                }

                if (p_jobj.children[i].toc != null) {
                    child.toc = p_jobj.children[i].toc;
                }

                if (p_jobj.children[i].navi != null) {
                    child.navi = p_jobj.children[i].navi;
                }

                this.children.push(child);
            }
        }

        return true;
    }

    toLi(p_activeItem) {
        let li;
        if (this.children.length > 0) {
            // A drop down item.
            li = $(`<li class="nav-item dropdown"></li>`);

            // Toggle.
            let a = $(`<a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">${this.text}</a>`);
            li.append(a);

            // Div.
            let div = $(`<div class="dropdown-menu"></div>`);

            // Sub items.
            for (let i = 0; i < this.children.length; ++i) {
                let child = this.children[i];
                let sub = $(`<a class="dropdown-item" href="${child.target}">${child.text}</a>`);

                if (p_activeItem === child) {
                    sub.addClass('active');
                    li.addClass('active');
                }

                div.append(sub);
            }

            li.append(div);
        } else {
            li = $(`<li class="nav-item">
                <a class="nav-link" href="${this.target}">${this.text}</a>
            </li>`);
            if (p_activeItem === this) {
                li.addClass('active');
            }
        }

        return li;
    }
}

class NaviWorker extends Worker {
    constructor() {
        super();
    }

    register(p_viki) {
        super.register(p_viki);
        logger.log("register NaviWorker");
    }

    run() {
        $.get("navigation.json", (p_data) => {
            let items = [];
            if (p_data.navigation) {
                for (let i = 0; i < p_data.navigation.length; ++i) {
                    let it = new NaviItem();
                    if (!it.readFromJson(p_data.navigation[i])) {
                        continue;
                    }

                    items.push(it);
                }
            }

            logger.log("navigation:", items);
            this.viki.naviItems = items;

            let activeItem = this.routeTarget();

            this.renderNaviBar(activeItem);

            this.viki.scheduleNext();
        });
    }

    renderNaviBar(p_activeItem) {
        let navbar = $(`<nav class="navbar navbar-expand-md navbar-dark flex-row viki-navbar"></nav>`);

        // Brand.
        let brandHtml = this.viki.config.brand;
        if (this.viki.config.brandIcon) {
            brandHtml = `<img class="d-block navbar-brand-icon" width="36" height="36" src="${this.viki.config.brandIcon}"/>`;
        }

        let brand = $(`<a class="navbar-brand" href="#">${brandHtml}</a>`);
        navbar.append(brand);

        // Toggle button.
        let button = $(`<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#viki-navbarCollapse" aria-controls="viki-navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>`);
        navbar.append(button);

        // Navigaton items.
        if (this.viki.naviItems.length > 0) {
            let navDiv = $(`<div class="navbar-collapse collapse" id="viki-navbarCollapse"></div>`);
            let navUl = $(`<ul class="navbar-nav mr-auto"></ul>`);

            let items = this.viki.naviItems;
            for (let i = 0; i < items.length; ++i) {
                let navLi = items[i].toLi(p_activeItem);
                navUl.append(navLi);
            }

            navDiv.append(navUl);
            navbar.append(navDiv);
        }

        let linkRewriter = new LinkRewriter();
        linkRewriter.rewriteLinks(navbar, this.viki.info.target, '');

        $('body').append(navbar);
    }

    // Route current access target through navigation items.
    routeTarget() {
        let items = this.viki.naviItems;
        let target = this.viki.info.target.toLowerCase();

        let utils = new Utils();

        let matchTarget = function(p_item, p_target) {
            if (utils.pathEqual(p_item.target, p_target)) {
                return true;
            }

            return false;
        };

        let activeItem = null;

        // First match non-navi items.
        let naviItems = [];
        for (let i = 0; i < items.length && !activeItem; ++i) {
            let item = items[i];
            if (item.navi) {
                naviItems.push(item);
                continue;
            }

            if (item.children.length > 0) {
                // Match the child item.
                for (let j = 0; j < item.children.length; ++j) {
                    let child = item.children[j];
                    if (child.navi) {
                        naviItems.push(child);
                        continue;
                    }

                    if (matchTarget(child, target)) {
                        activeItem = child;
                        break;
                    }
                }
            } else if (matchTarget(item, target)) {
                activeItem = item;
                break;
            }
        }

        // Check navi items.
        for (let i = 0; i < naviItems.length && !activeItem; ++i) {
            let base = utils.baseOfPath(naviItems[i].target);
            if (utils.isSubPath(base, target)) {
                activeItem = naviItems[i];
                break;
            }
        }

        // Update info according to hit target.
        if (activeItem) {
            let info = this.viki.info;
            info.toc = activeItem.toc;
            if (activeItem.navi) {
                info.naviFile = activeItem.target;
                info.naviIndex = info.baseUrl + activeItem.naviIndex;
            }
        }

        return activeItem;
    }
}

export { NaviItem, NaviWorker };
