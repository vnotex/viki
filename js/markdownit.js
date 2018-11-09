import logger from "./logger.js";

class MarkdownIt {
    constructor() {
        this.tocCounter = 0;
        this.toc = [];

        this.mdit = window.markdownit({
            html: true,
            breaks: false,
            linkify: true,
            typographer: false,
            langPrefix: 'lang-',
            highlight: function(str, lang) {
                // TODO
                return '';
            }
        });

        this.mdit.use(window.markdownitHeadingAnchor, {
            anchorClass: 'viki-anchor',
            addHeadingID: true,
            addHeadingAnchor: true,
            slugify: (p_md, p_s) => {
                return 'toc_' + this.tocCounter++;
            },
            headingHook: (p_openToken, p_inlineToken, p_anchor) => {
                this.toc.push({
                    level: parseInt(p_openToken.tag.substr(1)),
                    anchor: p_anchor,
                    title: this.mdit.utils.escapeHtml(p_inlineToken.content)
                });
            }
        });
    }

    render(p_containerNode, p_md) {
        this.startFreshRender();

        let result = this.mdit.render(p_md);
        p_containerNode.html(result);
    }

    startFreshRender() {
    }
}

export default MarkdownIt;
