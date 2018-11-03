import Worker from "./worker.js"

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
            console.log("config:", p_data);

            this.viki.scheduleNext();
        });
    }
}

export default ConfigWorker
