import Worker from "./worker.js"

class NaviItem {
    constructor() {
        this.text = "";
        this.target = "";

        // Only 2 levels.
        this.children = [];
    }

    readFromJson(p_jobj) {
        this.text = p_jobj.text;
        this.target = p_jobj.target;

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

                this.children.push(child);
            }
        }

        return true;
    }

    toLi() {
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
                div.append(sub);
            }

            li.append(div);
        } else {
            li = $(`<li class="nav-item">
                <a class="nav-link" href="${this.target}">${this.text}</a>
            </li>`);
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
        console.log("register NaviWorker");
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

            console.log("navigation:", items);
            this.viki.naviItems = items;

            this.renderNaviBar();

            this.viki.scheduleNext();
        });
    }

    renderNaviBar() {
        let navbar = $('<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">');

        // Brand.
        let brand = $(`<a class="navbar-brand" href="#">${this.viki.config.brand}</a>`);
        navbar.append(brand);

        // Navigaton items.
        if (this.viki.naviItems.length > 0) {
            let navDiv = $(`<div class="collapse navbar-collapse"></div>`);
            let navUl = $(`<ul class="navbar-nav mr-auto"></ul>`)
            for (let i = 0; i < this.viki.naviItems.length; ++i) {
                let navLi = this.viki.naviItems[i].toLi();
                navUl.append(navLi);
            }

            navDiv.append(navUl);
            navbar.append(navDiv);
        }

        $('body').append(navbar);
    }
}

export { NaviItem, NaviWorker }
