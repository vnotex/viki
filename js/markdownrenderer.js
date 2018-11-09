import logger from "./logger.js";
import MarkdownIt from "./markdownit.js";

class MarkdownRenderer {
    constructor(p_node) {
        this.containerNode = p_node;
    }

    render(p_md) {
        let mdit = new MarkdownIt();
        mdit.render(this.containerNode, p_md);
    }
}

export default MarkdownRenderer;
