import logger from "./logger.js";
import Utils from "./utils.js";

class LinkRewriter {
    constructor() {
    }

    // Rewrite the link url of links and images.
    // @p_target: current viewing page.
    // @p_baseUrl: base url of @p_target.
    rewriteLinks(p_node, p_target, p_baseUrl) {
        let utils = new Utils();

        let rewriteA = function(p_a, p_target, p_base) {
            let href = p_a.getAttribute('href');
            if (!href || href.lastIndexOf('#!') >= 0) {
                return;
            }

            if (href.startsWith('#') && !href.startsWith('#!')) {
                // In page anchor, such as `#toc_1`.
                if (href === '#') {
                    return;
                }

                p_a.href = '#!' + p_target + href;
                return;
            }

            if (!utils.isRelativeUrl(href)) {
                // Absolute url.
                return;
            }

            let newHref = href;
            if (utils.isRelativePath(href)) {
                newHref = p_base + href;
            }

            // Only let markdown file / _vnote.json / vx.json go through our router.
            let suffix = utils.suffix(newHref);
            if (/^(?:md|markdown)$/i.test(suffix) ||
                /^(.*\/)?_vnote\.json$/i.test(newHref) ||
                /^(.*\/)?vx\.json$/i.test(newHref)) {
                p_a.href = '#!' + utils.cleanPath(newHref);
            } else {
                p_a.href = utils.cleanPath(newHref);
            }
        };

        let rewriteIMG = function(p_img, p_base) {
            let src = p_img.getAttribute('src');
            if (!src) {
                return;
            }

            if (!utils.isRelativeUrl(src)) {
                // Absolute url.
                return;
            }

            if (!utils.isRelativePath(src)) {
                // Absolute path.
                return;
            }

            p_img.src = utils.cleanPath(p_base + src);
        };

        // Link.
        let links = p_node.find('a');
        for (let i = 0; i < links.length; ++i) {
            rewriteA(links[i], p_target, p_baseUrl);
        }

        // Image.
        let imgs = p_node.find('img');
        for (let i = 0; i < imgs.length; ++i) {
            rewriteIMG(imgs[i], p_baseUrl);
        }
    }
}

export default LinkRewriter;
