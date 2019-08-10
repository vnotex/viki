import logger from "./logger.js";
import Utils from "./utils.js";
import ImageViewHelper from "./imageviewhelper.js";
import PlantUMLHelper from "./plantumlhelper.js";

// Will be called after MathJax rendering finished.
// Make <pre><code>math</code></pre> to <p>math</p>
window.PostProcessMathJax = function() {
    let all = MathJax.Hub.getAllJax();
    for (let i = 0; i < all.length; ++i) {
        let node = all[i].SourceElement().parentNode;
        if (node.tagName.toLowerCase() == 'code') {
            let pre = node.parentNode;
            let p = document.createElement('p');
            p.innerHTML = node.innerHTML;
            pre.parentNode.replaceChild(p, pre);
        }
    }
};

window.MathJaxReady = function() {
    let texToRender = $('.tex-to-render');
    let nrTex = texToRender.length;
    if (nrTex == 0) {
        return;
    }

    let eles = [];
    for (let i = 0; i < nrTex; ++i) {
        eles.push(texToRender[i]);
    }

    try {
        MathJax.Hub.Queue(function () {
                              if (MathJax.InputJax.TeX.resetEquationNumbers) {
                                  MathJax.InputJax.TeX.resetEquationNumbers();
                              }
                          },
                          ["Typeset", MathJax.Hub, eles, PostProcessMathJax]);
    } catch (err) {
        console.log("err", err);
    }
};

class MarkdownIt {
    constructor(p_config) {
        this.config = p_config;

        this.tocCounter = 0;
        this.toc = [];

        this.frontMatterText = null;
        this.frontMatterClass = 'viki-markdown-metadata';

        this.mermaidParseError = false;
        this.mermaidIndex = 0;
        this.mermaidClass = 'viki-mermaid-diagram';

        this.flowchartIndex = 0;
        this.flowchartClass = 'viki-flowchart-diagram';

        this.wavedromIndex = 0;
        this.wavedromClass = 'viki-wavedrom-diagram';

        this.imageHelper = new ImageViewHelper();

        this.plantUMLIndex = 0;
        this.plantUMLClass = 'viki-plantuml-diagram';
        this.plantUMLCodeClass = 'viki-plantuml-code';

        this.inpageTocClass = 'viki-inpage-toc';

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
                           p_lang === 'wavedrom' ||
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
            anchorIcon: '#',
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

        // Enable file: scheme.
        this.validateLinkOri = this.mdit.validateLink;
        this.mdit.validateLink = (p_url) => {
            let str = p_url.trim().toLowerCase();
            return /^file:/.test(str) ? true : this.validateLinkOri(p_url);
        };

        this.mdit.use(window.markdownitTaskLists);

        this.mdit.use(window.markdownitSub);

        this.mdit.use(window.markdownitSup);

        this.mdit.use(window.markdownitFrontMatter, (p_text) => {
            this.frontMatterText = p_text;
        });

        this.mdit.use(window.markdownitEmoji);
        this.mdit.renderer.rules.emoji = (p_token, p_idx) => {
            return `<span class="emoji emoji_${p_token[p_idx].markup}">${p_token[p_idx].content}</span>`;
        };

        this.mdit.use(window.markdownitFootnote);

        this.mdit.use(window["markdown-it-imsize.js"]);

        this.mdit.use(texmath, { delimiters: ['dollars', 'raw'] });

        this.mdit.use(window.markdownitContainer, 'alert', {
            validate: function(p_params) {
                return p_params.trim().match(/^alert-\S+$/);
            },

            render: function (p_tokens, p_idx) {
                let type = p_tokens[p_idx].info.trim().match(/^(alert-\S+)$/);
                if (p_tokens[p_idx].nesting === 1) {
                    // opening tag
                    let alertClass = type[1];
                    return '<div class="alert ' + alertClass + '" role="alert">';
                } else {
                    // closing tag
                    return '</div>\n';
                }
            }
        });

        mermaid.mermaidAPI.initialize({
            startOnLoad: false
        });

        mermaid.mermaidAPI.parseError = (p_err, p_hash) => {
            console.log('mermaid parse err', p_err);
            this.mermaidParseError = true;

            // Clean the container element, or mermaidAPI won't render the graph with
            // the same id.
            $('#' + this.mermaidClass + '-' + this.mermaidIndex).parent().remove();
        };
    }

    // Render @p_md to HTML and write it to @p_containerNode.
    render(p_containerNode, p_md) {
        this.tocCounter = 0;
        this.toc = [];
        this.frontMatterText = null;

        if (!p_md) {
            p_containerNode.empty();
            return;
        }

        let html = this.mdit.render(p_md);

        let needToc = -1 != p_md.search(/(\n|^)\[toc\]/i);
        if (needToc) {
            html = html.replace(/<p>\[TOC\]<\/p>/ig, '<div class="' + this.inpageTocClass + '"></div>');
        }

        p_containerNode.html(html);

        this.handleToc(p_containerNode, needToc);

        if (this.config.imageCaption) {
            this.insertImageCaption(p_containerNode);
        }

        this.imageHelper.setupImageView(p_containerNode);

        this.handleFrontMatter(p_containerNode);

        this.renderMermaid(p_containerNode, this.config.langPrefix + 'mermaid');

        this.renderFlowchart(p_containerNode,
                             [this.config.langPrefix + 'flowchart', this.config.langPrefix + 'flow']);

        this.renderWavedrom(p_containerNode, this.config.langPrefix + 'wavedrom');

        this.renderPlantUML(p_containerNode, this.config.langPrefix + 'puml');

        this.makeImageFluid(p_containerNode);

        this.addClassToCodeBlock(p_containerNode);

        if (this.config.codeBlockLineNumber) {
            this.renderCodeBlockLineNumber(p_containerNode);
        }

        this.renderMathJax(p_containerNode);
    }

    handleToc(p_node, p_needToc) {
        if (!p_needToc) {
            return;
        }

        let utils = new Utils();
        let tocTree = utils.tocToTree(this.toc);
        let removeToc = this.toc.length == 0;

        // Add it to html.
        let eles = p_node.find('.' + this.inpageTocClass);
        if (removeToc) {
            eles.remove();
        } else {
            eles.html(tocTree);
            utils.rewriteAnchorInToc(eles);
        }
    }

    // Center the image block and insert the alt text as caption.
    insertImageCaption(p_node) {
        let isImageBlock = function(p_img) {
            let pn = p_img.parentNode;
            return (pn.children.length == 1) && (pn.textContent == '');
        };

        let isImageWithBr = function(p_img) {
            let sibling = p_img.nextSibling;
            while (sibling) {
                if (sibling.nodeType == 8) {
                    // Comment node.
                    // Just continue.
                    sibling = sibling.nextSibling;
                    continue;
                } else if (sibling.nodeType == 1) {
                    if (sibling.tagName == 'BR') {
                        break;
                    }
                }

                return false;
            }

            sibling = p_img.previousSibling;
            while (sibling) {
                if (sibling.nodeType == 8) {
                    // Comment node.
                    sibling = sibling.previousSibling;
                    continue;
                } else if (sibling.nodeType == 1) {
                    // Element node.
                    if (sibling.tagName == 'BR') {
                        break;
                    }
                } else if (sibling.nodeType == 3) {
                    // Text node.
                    if (sibling.nodeValue == '\n') {
                        let tmp = sibling.previousSibling;
                        if (tmp && tmp.tagName == 'BR') {
                            break;
                        }
                    }
                }

                return false;
            }

            return true;
        };

        let getImageType = function(p_img) {
            let type = -1;
            if (isImageBlock(p_img)) {
                type = 0;
            } else if (isImageWithBr(p_img)) {
                type = 1;
            }

            return type;
        };

        let imgs = p_node.find('img');
        for (let i = 0; i < imgs.length; ++i) {
            let img = imgs[i];

            let type = getImageType(img);

            if (type == -1) {
                continue;
            } else if (type == 1) {
                // Insert a div as the parent of the img.
                let imgPack = document.createElement('div');
                img.insertAdjacentElement('afterend', imgPack);
                imgPack.appendChild(img);
            }

            // Make the parent img-package.
            img.parentNode.classList.add('viki-img-package');

            // Make it center.
            img.classList.add('viki-img-center');

            if (img.alt == '') {
                continue;
            }

            // Add caption.
            let captionSpan = document.createElement('span');
            captionSpan.classList.add('viki-img-caption');
            captionSpan.textContent = img.alt;
            img.insertAdjacentElement('afterend', captionSpan);
        }
    }

    // Add a PRE containing frontMatterText if it is not empty.
    handleFrontMatter(p_node) {
        if (!this.frontMatterText || this.frontMatterText.length == 0) {
            return;
        }

        let pre = $(`<pre></pre>`);
        let code = $(`<code class=${this.frontMatterClass}></code>`);

        code.html(hljs.highlight('yaml', this.frontMatterText, true).value);
        pre.append(code);

        p_node.prepend(pre);
    }

    // @p_class: the class name of the mermaid code block.
    renderMermaid(p_node, p_class) {
        // Render @code as Mermaid graph.
        // Returns true if succeeded.
        let renderMermaidOne = (code) => {
            // Mermaid code block.
            this.mermaidParseError = false;
            this.mermaidIndex++;

            let graph = null;
            try {
                // Do not increment mermaidIdx here.
                graph = mermaid.mermaidAPI.render(this.mermaidClass + '-' + this.mermaidIndex,
                                                  code.textContent,
                                                  function(){});
            } catch (err) {
                console.log("err:", err);
                return false;
            }

            if (this.mermaidParseError || !graph) {
                return false;
            }

            let graphDiv = document.createElement('div');
            graphDiv.classList.add(this.mermaidClass);
            graphDiv.innerHTML = graph;

            let preNode = code.parentNode;
            preNode.parentNode.replaceChild(graphDiv, preNode);
            return true;
        };

        let codes = p_node.find('pre code');
        this.mermaidIndex = 0;
        for (let i = 0; i < codes.length; ++i) {
            let code = codes[i];
            if (code.classList.contains(p_class)) {
                renderMermaidOne(code);
            }
        }
    }

    renderFlowchart(p_node, p_classes) {
        // Render @code as Flowchart.js graph.
        // Returns true if succeeded.
        let renderFlowchartOne = (code) => {
            // Flowchart code block.
            this.flowchartIndex++;
            let graph = null;
            try {
                graph = flowchart.parse(code.textContent);
            } catch (err) {
                console.log("err", err);
                return false;
            }

            if (!graph) {
                return false;
            }

            let graphDiv = document.createElement('div');
            graphDiv.id = this.flowchartClass + '-' + this.flowchartIndex;
            graphDiv.classList.add(this.flowchartClass);
            let preNode = code.parentNode;
            let preParentNode = preNode.parentNode;
            preParentNode.replaceChild(graphDiv, preNode);

            // Draw on it after adding it to page.
            try {
                graph.drawSVG(graphDiv.id);
                this.imageHelper.setupSVGToView(graphDiv.children[0], true);
            } catch (err) {
                console.log("err", err);
                preParentNode.replaceChild(preNode, graphDiv);
                return false;
            }

            return true;
        };

        let codes = p_node.find('pre code');
        this.flowchartIndex = 0;
        for (let i = 0; i < codes.length; ++i) {
            let code = codes[i];
            let matched = false;
            for (let j = 0; j < p_classes.length; ++j) {
                if (code.classList.contains(p_classes[j])) {
                    matched = true;
                    break;
                }
            }

            if (matched) {
                renderFlowchartOne(code);
            }
        }
    }

    // @p_class: the class name of the wavedrom code block.
    renderWavedrom(p_node, p_class) {
        // Render @code as Wavedrom graph.
        // Returns true if succeeded.
        let renderWavedromOne = (code) => {
            // Create a script element.
            let script = document.createElement('script');
            script.setAttribute('type', 'WaveDrom');
            script.textContent = code.textContent;
            script.setAttribute('id', 'WaveDrom_JSON_' + this.wavedromIndex);

            let preNode = code.parentNode;
            preNode.parentNode.replaceChild(script, preNode);

            // Create a div element.
            let div = document.createElement('div');
            div.setAttribute('id', 'WaveDrom_Display_' + this.wavedromIndex);
            div.classList.add(this.wavedromClass);
            script.insertAdjacentElement('afterend', div);

            try {
                WaveDrom.RenderWaveForm(this.wavedromIndex,
                                        WaveDrom.eva(script.getAttribute('id')),
                                        'WaveDrom_Display_');
            } catch (err) {
                console.log("err:", err);
                this.wavedromIndex++;
                return false;
            }

            script.parentNode.removeChild(script);

            // Must increase it here.
            this.wavedromIndex++;
            return true;
        };

        let codes = p_node.find('pre code');
        this.wavedromIndex = 0;
        for (let i = 0; i < codes.length; ++i) {
            let code = codes[i];
            if (code.classList.contains(p_class)) {
                renderWavedromOne(code);
            }
        }
    }

    renderPlantUML(p_node, p_class) {
        let handlePlantUMLResultExt = (id, timeStamp, format, result, isSetupView) => {
            let code = document.getElementsByClassName(this.plantUMLCodeClass + '-' + id)[0];
            if (code && result.length > 0) {
                let obj = null;
                if (format == 'svg') {
                    obj = document.createElement('div');
                    obj.classList.add(this.plantUMLClass);
                    obj.innerHTML = result;
                    if (isSetupView) {
                        this.imageHelper.setupSVGToView(obj.children[0], true);
                    }
                } else {
                    obj = document.createElement('img');
                    obj.src = "data:image/" + format + ";base64, " + result;
                    if (isSetupView) {
                        this.imageHelper.setupIMGToView(obj);
                    }
                }

                let preNode = code.parentNode;
                preNode.parentNode.replaceChild(obj, preNode);
            }
        };

        // Render @code as PlantUML graph asynchronously.
        let renderPlantUMLOneOnline = (helper, code, cb) => {
            code.classList.add(this.plantUMLCodeClass + '-' + this.plantUMLIndex);

            let data = { index: this.plantUMLIndex,
                         setupView: true
            };

            helper.renderPlantUMLOnline(this.config.plantUMLServer,
                                        this.config.plantUMLFormat,
                                        code.textContent,
                                        function(data, format, result) {
                                            cb(data.index, 0, format, result, data.setupView);
                                        },
                                        data);

            this.plantUMLIndex++;
        };

        let helper = new PlantUMLHelper();

        let codes = p_node.find('pre code');
        this.plantUMLIndex = 0;
        for (let i = 0; i < codes.length; ++i) {
            let code = codes[i];
            if (code.classList.contains(p_class)) {
                renderPlantUMLOneOnline(helper, code, handlePlantUMLResultExt);
            }
        }
    }

    addClassToCodeBlock(p_node) {
        let hljsClass = 'hljs';
        let codes = p_node.find('pre code');
        for (let i = 0; i < codes.length; ++i) {
            let code = codes[i];
            code.classList.add(hljsClass);
            if (code.classList.contains("lang-mathjax") ||
                code.classList.contains("language-mathjax")) {
                // Add the class to pre.
                let pare = code.parentElement;
                pare.classList.add("lang-mathjax");
                pare.classList.add("language-mathjax");
                pare.classList.add("tex-to-render");
            }
        }
    }

    renderCodeBlockLineNumber(p_node) {
        let codes = p_node.find('pre code');
        for (let i = 0; i < codes.length; ++i) {
            let code = codes[i];
            let pare = code.parentElement;
            if (pare.classList.contains("lang-mathjax")) {
                continue;
            }

            hljs.lineNumbersBlock(code);
        }

        // Delete the last extra row.
        let tables = p_node.find('code table');
        for (let i = 0; i < tables.length; ++i) {
            let table = tables[i];
            if (table.classList.contains("hljs-ln")) {
                let rowCount = table.rows.length;
                table.deleteRow(rowCount - 1);
            }
        }
    }

    renderMathJax(p_node) {
        let texToRender = p_node.find('.tex-to-render');
        let nrTex = texToRender.length;
        if (nrTex == 0) {
            return;
        }

        let eles = [];
        for (let i = 0; i < nrTex; ++i) {
            eles.push(texToRender[i]);
        }

        try {
            MathJax.Hub.Queue(function () {
                                  if (MathJax.InputJax.TeX.resetEquationNumbers) {
                                      MathJax.InputJax.TeX.resetEquationNumbers();
                                  }
                              },
                              ["Typeset", MathJax.Hub, eles, PostProcessMathJax]);
        } catch (err) {
            console.log("err", err);
        }
    }

    makeImageFluid(p_node) {
        let imgs = p_node.find('img');
        for (let i = 0; i < imgs.length; ++i) {
            let img = imgs[i];
            if (img.id === 'image-view') {
                continue;
            }

            img.classList.add('img-fluid');
        }
    }
}

export default MarkdownIt;
