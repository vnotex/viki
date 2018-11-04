import logger from "./logger.js"
import Worker from "./worker.js"

class Config {
    constructor() {
        this.brand = "viki";
    }

    readFromJson(p_jobj) {
        if (p_jobj.brand) {
            this.brand = p_jobj.brand;
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

export { Config, ConfigWorker }
