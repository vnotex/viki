import logger from "./logger.js";
import Worker from "./worker.js";

class FetchTargetWorker extends Worker {
    constructor() {
        super();
    }

    register(p_viki) {
        super.register(p_viki);
        logger.log("register FetchTargetWorker");
    }

    run() {
        let info = this.viki.info;
        if (!info.target) {
            logger.log("FetchTargetWorker: no target to fetch");
            return;
        }

        $.get(info.target, (p_data) => {
            logger.log("FetchTargetWorker: data fetched");
            this.viki.info.data = p_data;

            this.viki.scheduleNext();
        });
    }
}

export default FetchTargetWorker;
