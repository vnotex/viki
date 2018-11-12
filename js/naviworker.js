import logger from "./logger.js";
import Worker from "./worker.js";
import LinkRewriter from "./linkrewriter.js";

class NaviItem {
    constructor() {
        this.text = "";
        this.target = "";
        this.toc = true;

        // Only 2 levels.
        this.children = [];
    }

    readFromJson(p_jobj) {
        this.text = p_jobj.text;
        this.target = p_jobj.target;

        if (p_jobj.toc != null) {
            this.toc = p_jobj.toc;
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

    // Return the item that match @target.
    matchTarget(target) {
        if (this.children.length > 0) {
            for (let i = 0; i < this.children.length; ++i) {
                if (this.children[i].target === target) {
                    return this.children[i];
                }
            }
        } else if (this.target === target) {
            return this;
        }

        return null;
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

            this.renderNaviBar();

            this.viki.scheduleNext();
        });
    }

    renderNaviBar() {
        let navbar = $(`<nav class="navbar navbar-expand-md navbar-dark flex-row viki-navbar"></nav>`);

        // Brand.
        let brandHtml = this.viki.config.brand;
        if (this.viki.config.brandIcon) {
            brandHtml = `<img class="d-block" width="36" height="36" src="${this.viki.config.brandIcon}"/>`;
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
            let activeItem = null;
            for (let i = 0; i < items.length; ++i) {
                if (!activeItem) {
                    // Find active item according to current target.
                    var it = items[i].matchTarget(this.viki.info.target);
                    if (it) {
                        activeItem = it;

                        this.viki.info.toc = it.toc;
                    }
                }

                let navLi = items[i].toLi(activeItem);
                navUl.append(navLi);
            }

            navDiv.append(navUl);
            navbar.append(navDiv);
        }

        let linkRewriter = new LinkRewriter();
        linkRewriter.rewriteLinks(navbar, this.viki.info.target, '');

        $('body').append(navbar);
    }
}

export { NaviItem, NaviWorker };
