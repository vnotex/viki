import logger from "./logger.js";
import Worker from "./worker.js";

class Config {
    constructor() {
        this.brand = "Viki";
        this.brandIcon = "";
        this.title = "Viki - A simple Wiki page in Markdown from notebook of VNote";
        this.favicon = "https://github.com/tamlok/viki/raw/master/resources/viki.ico";
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

        if (typeof p_jobj.brandIcon != "undefined") {
            this.brandIcon = p_jobj.brandIcon;
        }

        if (typeof p_jobj.title != "undefined") {
            this.title = p_jobj.title;
        }

        if (typeof p_jobj.favicon != "undefined") {
            this.favicon = p_jobj.favicon;
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

            if (typeof md.langPrefix != "undefined") {
                this.markdown.langPrefix = md.langPrefix;
            }

            if (typeof md.imageCaption != "undefined") {
                this.markdown.imageCaption = md.imageCaption;
            }

            if (typeof md.plantUMLServer != "undefined") {
                this.markdown.plantUMLServer = md.plantUMLServer;
            }

            if (typeof md.plantUMLFormat != "undefined") {
                this.markdown.plantUMLFormat = md.plantUMLFormat;
            }

            if (typeof md.codeBlockLineNumber != "undefined") {
                this.markdown.codeBlockLineNumber = md.codeBlockLineNumber;
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
        $.get("config.json", (p_data) => {
            let config = new Config();
            config.readFromJson(p_data);

            logger.log("config:", config);

            this.viki.config = config;

            this.viki.scheduleNext();
        });
    }
}

export { Config, ConfigWorker };
