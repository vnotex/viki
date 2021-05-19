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

        // The auto expand level of the navi tree on start.
        this.naviExpandLevel = 1;

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

        if (this.navi && p_jobj.navi_index != null) {
            this.naviIndex = p_jobj.navi_index;
        }

        if (this.navi && p_jobj.navi_expand_level != null) {
            this.naviExpandLevel = p_jobj.navi_expand_level;
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

class ActionItem {
    constructor(p_text = '', p_icon = '', p_target = '') {
        this.text = p_text;
        this.icon = p_icon;
        this.target = p_target;
    }

    readFromJson(p_jobj) {
        if (p_jobj.text != null) {
            this.text = p_jobj.text;
        }

        if (p_jobj.icon != null) {
            this.icon = p_jobj.icon;
        }

        if (p_jobj.target != null) {
            this.target = p_jobj.target;
        }

        return true;
    }

    toLi() {
        let li = $(`<li class="nav-item"></li>`);
        let a = $(`<a class="nav-link p-2" href="${this.target}" target="_blank" rel="noopener" aria-label="${this.text}"></a>`);
        if (this.icon) {
            let img = $(`<img class="navbar-nav-icon" src="${this.icon}" title="${this.text}"/>`);
            a.append(img);
        } else {
            a.text(this.text);
        }

        li.append(a);
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
            // Navigations.
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

            this.viki.naviItems = items;
            let activeItem = this.routeTarget();
            this.renderNaviBar(activeItem);

            // Actions.
            let actions = [];
            if (p_data.actions) {
                for (let i = 0; i < p_data.actions.length; ++i) {
                    let ac = new ActionItem();
                    if (!ac.readFromJson(p_data.actions[i])) {
                        continue;
                    }

                    actions.push(ac);
                }
            }

            this.renderActionBar(actions);

            this.viki.scheduleNext();
        });
    }

    renderNaviBar(p_activeItem) {
        let navbar = $(`<nav id="viki-navbar", class="navbar navbar-expand-md navbar-dark flex-row viki-navbar"></nav>`);

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
        let target = decodeURIComponent(this.viki.info.target).toLowerCase();

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
                info.naviExpandLevel = activeItem.naviExpandLevel;
            }
        }

        return activeItem;
    }

    renderActionBar(p_actionItems) {
        if (p_actionItems.length == 0) {
            return;
        }

        let ul = $(`<ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex"></ul>`);

        for (let i = 0; i < p_actionItems.length; ++i) {
            let li = p_actionItems[i].toLi();
            ul.append(li);
        }

        $("#viki-navbar").append(ul);
    }
}

export { NaviItem, NaviWorker };
