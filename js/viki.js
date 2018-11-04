import logger from "./logger.js"
import VikiInfo from "./vikiinfo.js"
import { Config, ConfigWorker } from "./configworker.js"
import { NaviItem, NaviWorker } from "./naviworker.js"

class Viki {
    constructor() {
        this.workers = [];
        this.curWorkerIdx = -1;

        this.config = new Config();
        this.naviItems = [];

        this.info = new VikiInfo();
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
            if (!this.initTargetFromHash()) {
                return;
            }

            logger.log("target", this.info.target,
                       "anchor", this.info.anchor);

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

    initTargetFromHash() {
        let isValidHash = function(hash) {
            var a = document.createElement('a');
            a.href = hash;
            return window.location.hostname === a.hostname;
        }

        let target = "index.md";
        let hash = window.location.hash || "";

        // Default hash completion.
        let newHash = '';
        if (hash === ''
            || hash === "#"
            || hash === "#!") {
            newHash = "#!" + target;
        } else if (hash.startsWith("#!")
                   && hash.endsWith('/')) {
            newHash = hash + target;
        }

        if (newHash) {
            window.location.hash = newHash;
            window.location.reload(false);
            return false;
        }

        if (hash.startsWith("#!")) {
            target = hash.substring(2);
        } else if (hash.startsWith("#")) {
            target = hash.substring(1);
        }

        // Validate if it could be located.
        if (!isValidHash(target)) {
            target = "index.md";
        }

        target = decodeURIComponent(target);

        // Anchor.
        let idx = target.indexOf('#');
        if (idx != -1) {
            this.info.target = target.substring(0, idx);
            this.info.anchor = target.substring(idx + 1);
        } else {
            this.info.target = target;
        }

        return true;
    }
}

export default Viki
