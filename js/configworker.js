import Worker from "./worker.js"

class Config {
    constructor() {
        this.brand = "viki";
        this.entry = "index.md";
    }

    readFromJson(p_jobj) {
        if (p_jobj.brand) {
            this.brand = p_jobj.brand;
        }

        if (p_jobj.entry) {
            this.entry = p_jobj.entry;
        }
    }
}

class ConfigWorker extends Worker {
    constructor() {
        super();
    }

    register(p_viki) {
        super.register(p_viki);
        console.log("register ConfigWorker");
    }

    run() {
        $.get("config.json", (p_data) => {
            let config = new Config();
            config.readFromJson(p_data);

            console.log("config:", config);

            this.viki.config = config;

            this.viki.scheduleNext();
        });
    }
}

export { Config, ConfigWorker }
