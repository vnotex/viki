import logger from "./logger.js";
import Worker from "./worker.js";
import MarkdownRenderer from "./markdownrenderer.js";

// Render data from this.viki.info.data.
// - Navigation Panel for notebook's note;
// - Content;
// - Outline;
class ContentWorker extends Worker {
    constructor() {
        super();
    }

    register(p_viki) {
        super.register(p_viki);
        logger.log("register ContentWorker");
    }

    run() {
        this.renderSkelecton();

        if (this.isMarkdown(this.viki.info.target)) {
            let mder = new MarkdownRenderer($('#' + this.viki.info.contentContainerId));
            mder.render(this.viki.config.markdown, this.viki.info.data);
        }

        this.viki.scheduleNext();
    }

    // Render the container to hold contents.
    renderSkelecton() {
        this.viki.info.contentContainerId = 'viki-content';
        this.viki.info.tocContainerId = 'viki-toc';

        let mainDiv = $(`<div class="container-fluid" style="padding-top: 3rem;"></div>`);
        let containerDiv = $(`<div id="viki-content-container" class="row flex-xl-nowrap"></div>`);
        mainDiv.append(containerDiv);

        let contentDiv = $(`<main id="${this.viki.info.contentContainerId}" class="col-12 col-lg-9 py-md-3 pl-md-5 bd-content" role="main"></main>`);

        let tocDiv = $(`<div id="${this.viki.info.tocContainerId}" class="d-none d-lg-block col-lg-3 bd-toc"></div>`);

        containerDiv.append(contentDiv);
        containerDiv.append(tocDiv);

        $('body').append(mainDiv);
    }

    isMarkdown(p_name) {
        return p_name.endsWith('.md');
    }
}

export default ContentWorker;
