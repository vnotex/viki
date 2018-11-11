import logger from "./logger.js";
import Worker from "./worker.js";

class PageWorker extends Worker {
    constructor() {
        super();
    }

    register(p_viki) {
        super.register(p_viki);
        logger.log("register PageWorker");
    }

    run() {
        // Title.
        document.title = this.viki.config.title;

        // Favicon.
        if (this.viki.config.favicon) {
            $("#favicon").attr("href", this.viki.config.favicon);
        } else {
            $("#favicon").remove();
        }

        this.viki.scheduleNext();
    }
}

export default PageWorker;
