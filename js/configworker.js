import logger from "./logger.js";
import Worker from "./worker.js";

class Config {
    constructor() {
        this.brand = "viki";
        this.markdown = {
            html: true,
            breaks: false,
            linkify: true,
            typographer: false,
            langPrefix: 'lang-'
        };
    }

    readFromJson(p_jobj) {
        if (p_jobj.brand) {
            this.brand = p_jobj.brand;
        }

        if (p_jobj.markdown) {
            let md = p_jobj.markdown;
            if (md.html) {
                this.markdown.html = md.html;
            }

            if (md.breaks) {
                this.markdown.breaks = md.breaks;
            }

            if (md.linkify) {
                this.markdown.linkify = md.linkify;
            }

            if (md.typographer) {
                this.markdown.typographer = md.typographer;
            }

            if (md.langPrefix) {
                this.markdown.langPrefix = md.langPrefix;
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
