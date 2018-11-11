import logger from "./logger.js";
import Worker from "./worker.js";
import MarkdownRenderer from "./markdownrenderer.js";
import TocRenderer from "./tocrenderer.js";

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

        let info = this.viki.info;
        if (this.isMarkdown(info.target)) {
            let mder = new MarkdownRenderer($('#' + info.contentContainerId));
            mder.render(this.viki.config.markdown, info.data);
        }

        if (info.toc) {
            let tocer = new TocRenderer($('#' + info.tocContainerId));
            tocer.render($('#' + info.contentContainerId));
        }

        this.viki.scheduleNext();
    }

    // Render the container to hold contents.
    renderSkelecton() {
        let info = this.viki.info;
        info.contentContainerId = 'viki-content';
        if (info.toc) {
            info.tocContainerId = 'viki-toc';
        }

        if (info.navi) {
            info.naviContainerId = 'viki-navi';
        }

        let mainDiv = $(`<div class="container-fluid" style="padding-top: 3rem;"></div>`);

        let containerDivClass = 'row flex-xl-nowrap';
        if (!info.navi) {
            containerDivClass += ' justify-content-md-center';
        }

        let containerDiv = $(`<div id="viki-content-container" class="${containerDivClass}"></div>`);
        mainDiv.append(containerDiv);

        let naviDivClass = null;
        let contentDivClass = null;
        let tocDivClass = null;

        if (info.toc) {
            if (info.navi) {
                // Three panels.
                // TODO.
            } else {
                // Two panels.
                contentDivClass = "col-12 col-md-9 col-lg-8 col-xl-8 py-md-3 pl-md-5 bd-content";
                tocDivClass = "d-none d-md-block col-md-3 col-lg-3 col-xl-2 bd-toc";
            }
        } else {
            if (info.navi) {
                // Two panels.
                // TODO.
            } else {
                // Single panels.
                contentDivClass = "col-12 col-md-9 py-md-3 pl-md-5 bd-content";
            }
        }

        let naviDiv = null;
        let contentDiv = null;
        let tocDiv = null;

        if (naviDivClass) {

        }

        if (contentDivClass) {
            contentDiv = $(`<main id="${info.contentContainerId}" class="${contentDivClass}" role="main"></main>`);
        }

        if (tocDivClass) {
            tocDiv = $(`<div id="${info.tocContainerId}" class="${tocDivClass}"></div>`);
        }

        if (naviDiv) {
            containerDiv.append(naviDiv);
        }

        if (contentDiv) {
            containerDiv.append(contentDiv);
        }

        if (tocDiv) {
            containerDiv.append(tocDiv);
        }

        $('body').append(mainDiv);
    }

    isMarkdown(p_name) {
        return p_name.endsWith('.md');
    }
}

export default ContentWorker;
