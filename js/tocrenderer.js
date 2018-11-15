import logger from "./logger.js";
import Utils from "./utils.js";

class TocRenderer {
    constructor(p_node) {
        this.containerNode = p_node;
        this.toc = [];
    }

    // Render the toc of @p_contentNode into this.containerNode.
    render(p_contentNode) {
        this.containerNode.empty();
        this.toc = [];

        let utils = new Utils();

        // Fetch the outline.
        let headers = p_contentNode.find('h1, h2, h3, h4, h5, h6');
        for (let i = 0; i < headers.length; ++i) {
            let header = headers[i];

            this.toc.push({
                level: parseInt(header.tagName.substr(1)),
                anchor: header.id,
                title: utils.escapeHtml(header.textContent)
            });
        }

        if (this.toc.length === 0) {
            return;
        }

        let tocTree = utils.tocToTree(this.toc);
        this.containerNode.html(tocTree);
        utils.rewriteAnchorInToc(this.containerNode);
    }
}

export default TocRenderer;
