import logger from "./logger.js"
import { Config, ConfigWorker } from "./configworker.js"
import { NaviItem, NaviWorker } from "./naviworker.js"

class Viki {
    constructor() {
        this.workers = [];
        this.curWorkerIdx = -1;

        this.config = new Config();
        this.naviItems = [];
    }

    init() {
        let registerWorker = (p_worker) => {
            p_worker.register(this);
            this.workers.push(p_worker);
        };

        let configWorker = new ConfigWorker();
        registerWorker(configWorker);

        let naviWorker = new NaviWorker();
        registerWorker(naviWorker);

        $(document).ready(() => {
            $('body').empty();
            this.curWorkerIdx = -1;
            this.scheduleNext();
        });
    }

    scheduleNext() {
        if (this.curWorkerIdx >= this.workers.length - 1) {
            logger.log("all workers finished");
            this.curWorkerIdx = -1;
        } else {
            ++this.curWorkerIdx;
            logger.log("schedule worker", this.curWorkerIdx);
            this.workers[this.curWorkerIdx].run();
        }
    }
}

export default Viki
