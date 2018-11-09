import logger from "./logger.js";

class MarkdownIt {
    constructor(p_config) {
        this.config = p_config;

        this.tocCounter = 0;
        this.toc = [];

        this.mdit = window.markdownit({
            html: this.config.html,
            breaks: this.config.breaks,
            linkify: this.config.linkify,
            typographer: this.config.typographer,
            langPrefix: this.config.langPrefix,
            highlight: function(p_str, p_lang) {
                let isSpecialCodeBlock = function(p_lang) {
                    return p_lang === 'mathjax' ||
                           p_lang === 'mermaid' ||
                           p_lang === 'flowchart' ||
                           p_lang === 'flow' ||
                           p_lang === 'puml';
                };

                if (p_lang && !isSpecialCodeBlock(p_lang)) {
                    if (hljs.getLanguage(p_lang)) {
                        return hljs.highlight(p_lang, p_str, true).value;
                    } else {
                        return hljs.highlightAuto(p_str).value;
                    }
                }
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

        this.validateLinkOri = this.mdit.validateLink;
        this.mdit.validateLink = (p_url) => {
            var str = p_url.trim().toLowerCase();
            return /^file:/.test(str) ? true : this.validateLinkOri(p_url);
        };
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
