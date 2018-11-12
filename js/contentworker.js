import logger from "./logger.js";
import Worker from "./worker.js";
import MarkdownRenderer from "./markdownrenderer.js";
import TocRenderer from "./tocrenderer.js";
import LinkRewriter from "./linkrewriter.js";
import NavigationRenderer from "./navigationrenderer.js";

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

        let linkRewriter = new LinkRewriter();

        let info = this.viki.info;
        if (this.isMarkdown(info.target)) {
            let container = $('#' + info.contentContainerId);
            let mder = new MarkdownRenderer(container);
            mder.render(this.viki.config.markdown, info.data);
            linkRewriter.rewriteLinks(container, info.target, info.baseUrl);
        }

        if (info.toc) {
            let container = $('#' + info.tocContainerId);
            let tocer = new TocRenderer(container);
            tocer.render($('#' + info.contentContainerId));
            linkRewriter.rewriteLinks(container, info.target, info.baseUrl);
        }

        // Scroll to anchor.
        if (info.anchor) {
            let header = $('#' + info.contentContainerId + ' #' + info.anchor);
            if (header.length > 0) {
                header[0].scrollIntoView();
            }
        }

        // Render the navigation tree.
        if (info.naviFile) {
            let container = $('#' + info.naviContainerId);
            let navier = new NavigationRenderer(container);
            navier.render(info.naviFile, info.target);
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

        if (info.naviFile) {
            info.naviContainerId = 'viki-navi';
        }

        let mainDiv = $(`<div class="container-fluid"></div>`);

        let containerDivClass = 'row flex-xl-nowrap';
        if (!info.naviFile) {
            containerDivClass += ' justify-content-md-center';
        }

        let containerDiv = $(`<div id="viki-content-container" class="${containerDivClass}"></div>`);
        mainDiv.append(containerDiv);

        let naviDivClass = null;
        let contentDivClass = null;
        let tocDivClass = null;

        if (info.toc) {
            if (info.naviFile) {
                // Three panels.
                naviDivClass = "col-12 col-md-3 col-lg-2 viki-sidebar";
                contentDivClass = "col-12 col-md-9 col-lg-8 py-md-3 pl-md-5 viki-content";
                tocDivClass = "d-none d-lg-block col-lg-2 viki-toc";
            } else {
                // Two panels.
                contentDivClass = "col-12 col-md-9 col-lg-8 col-xl-8 py-md-3 pl-md-5 viki-content";
                tocDivClass = "d-none d-md-block col-md-3 col-lg-3 col-xl-2 viki-toc";
            }
        } else {
            if (info.naviFile) {
                // Two panels.
                naviDivClass = "col-12 col-md-3 viki-sidebar";
                contentDivClass = "col-12 col-md-9 py-md-3 pl-md-5 viki-content";
            } else {
                // Single panels.
                contentDivClass = "col-12 col-md-9 py-md-3 pl-md-5 viki-content";
            }
        }

        let naviDiv = null;
        let contentDiv = null;
        let tocDiv = null;

        if (naviDivClass) {
            naviDiv = $(`<div id="${info.naviContainerId}" class="${naviDivClass}"></div>`);
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
