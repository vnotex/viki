import "@babel/polyfill";
import logger from "./logger.js";
import VikiInfo from "./vikiinfo.js";
import { Config, ConfigWorker } from "./configworker.js";
import PageWorker from "./pageworker.js";
import { NaviItem, NaviWorker } from "./naviworker.js";
import FetchTargetWorker from "./fetchtargetworker.js";
import ContentWorker from "./contentworker.js";
import FooterWorker from "./footerworker.js";

class Viki {
    constructor() {
        this.workers = [];
        this.curWorkerIdx = -1;

        this.config = new Config();
        this.naviItems = [];

        this.info = new VikiInfo();
    }

    init() {
        window.viki_silent_hash = false;

        let registerWorker = (p_worker) => {
            p_worker.register(this);
            this.workers.push(p_worker);
        };

        let configWorker = new ConfigWorker();
        registerWorker(configWorker);

        let pageWorker = new PageWorker();
        registerWorker(pageWorker);

        let naviWorker = new NaviWorker();
        registerWorker(naviWorker);

        let fetchTargetWorker = new FetchTargetWorker();
        registerWorker(fetchTargetWorker);

        let contentWorker = new ContentWorker();
        registerWorker(contentWorker);

        let footerWorker = new FooterWorker();
        registerWorker(footerWorker);

        $(document).ready(() => {
            if (!this.initTargetFromHash()) {
                return;
            }

            $(window).bind('hashchange', function() {
                if (window.viki_silent_hash) {
                    window.viki_silent_hash = false;
                    return;
                }

                window.location.reload(false);
            });

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
            // In IE, a.hostname maybe empty if not specified in href.
            return !a.hostname || window.location.hostname === a.hostname;
        };

        let target = "index.md";
        let hash = window.location.hash || "";

        // Default hash completion.
        if (hash === '') {
            // Empty.
            this.info.setTarget(target);
            return true;
        }

        let newHash = '';
        if (hash === "#" ||
            hash === "#!") {
            newHash = "#!" + target;
        } else if (hash.startsWith("#!") && hash.endsWith('/')) {
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

        // Do not decode URI here.
        // Anchor.
        let idx = target.indexOf('#');
        if (idx != -1) {
            this.info.setTarget(target.substring(0, idx), target.substring(idx + 1));
        } else {
            this.info.setTarget(target);
        }

        return true;
    }
}

export default Viki;
