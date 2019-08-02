class Utils {
    constructor() {
    }

    tocToTree(p_toc) {
        // Return the topest level of @toc, starting from 1.
        let baseLevelOfToc = function(p_toc) {
            let level = -1;
            for (let i in p_toc) {
                if (level == -1) {
                    level = p_toc[i].level;
                } else if (level > p_toc[i].level) {
                    level = p_toc[i].level;
                }
            }

            if (level == -1) {
                level = 1;
            }

            return level;
        };

        // Handle wrong title levels, such as '#' followed by '###'.
        let toPerfectToc = function(p_toc, p_baseLevel) {
            let curLevel = p_baseLevel - 1;
            let perfToc = [];
            for (let i in p_toc) {
                let item = p_toc[i];
                // Insert empty header.
                while (item.level > curLevel + 1) {
                    curLevel += 1;
                    var tmp = { level: curLevel,
                                anchor: '',
                                title: '[EMPTY]'
                              };
                    perfToc.push(tmp);
                }

                perfToc.push(item);
                curLevel = item.level;
            }

            return perfToc;
        };

        let itemToHtml = function(p_item) {
            return '<a href="#' + p_item.anchor + '" title="' + p_item.title + '">' +
                   p_item.title + '</a>';
        };

        let baseLevel = baseLevelOfToc(p_toc);
        let perfectToc = toPerfectToc(p_toc, baseLevel);

        let front = '<li>';
        let ending = ['</li>'];
        let curLevel = baseLevel;
        for (let i in perfectToc) {
            var item = perfectToc[i];
            if (item.level == curLevel) {
                front += '</li>';
                front += '<li>';
                front += itemToHtml(item);
            } else if (item.level > curLevel) {
                // assert(item.level - curLevel == 1)
                front += '<ul>';
                ending.push('</ul>');
                front += '<li>';
                front += itemToHtml(item);
                ending.push('</li>');
                curLevel = item.level;
            } else {
                while (item.level < curLevel) {
                    var ele = ending.pop();
                    front += ele;
                    if (ele == '</ul>') {
                        curLevel--;
                    }
                }
                front += '</li>';
                front += '<li>';
                front += itemToHtml(item);
            }
        }

        while (ending.length > 0) {
            front += ending.pop();
        }

        front = front.replace("<li></li>", "");
        front = '<ul>' + front + '</ul>';
        return front;
    }

    rewriteAnchorInToc(p_tocNode) {
        p_tocNode.find('a').click((p_e) => {
            p_e.preventDefault();

            let href = p_e.target.getAttribute('href');
            let idx = href.lastIndexOf('#');
            if (idx != -1) {
                let anchor = href.substring(idx);
                if (anchor) {
                    let header = $(anchor);
                    if (header.length > 0) {
                        header[0].scrollIntoView();

                        // Change the hash.
                        this.updateHashSilently(href);
                    }
                }
            }
        });
    }

    isRelativeUrl(p_url) {
        return p_url.indexOf('://') === -1;
    }

    isRelativePath(p_path) {
        if (typeof p_path == "undefined" ||
            p_path.startsWith('/')) {
            return false;
        }

        return true;
    }

    cleanPath(p_path) {
        if (p_path.indexOf('/') === -1) {
            return p_path;
        }

        let absolute = p_path.startsWith('/');

        // Split it.
        let newParts = [];
        let parts = p_path.split('/');
        for (let i = 0; i < parts.length; ++i) {
            if (!parts[i] || parts[i] === '.') {
                continue;
            }

            if (parts[i] === '..') {
                if (newParts.length > 0) {
                    newParts.pop();
                    continue;
                }
            }

            newParts.push(parts[i]);
        }

        return (absolute ? '/' : '') + newParts.join('/');
    }

    // For root path, will return an empty string.
    baseOfPath(p_path) {
        let idx = p_path.lastIndexOf('/');
        return p_path.substring(0, idx + 1);
    }

    fileNameOfPath(p_path) {
        let idx = p_path.lastIndexOf('/');
        return p_path.substring(idx + 1);
    }

    // Escape @p_text to Html.
    escapeHtml(p_text) {
        var map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };

        return p_text.replace(/[&<>"']/g, function(m) { return map[m]; });
    }

    // Update the hash of the url without re-loading.
    updateHashSilently(p_hash) {
        window.viki_silent_hash = true;
        window.location.hash = p_hash;
    }

    // Whether @p_a and @p_b is equal.
    pathEqual(p_a, p_b) {
        let a = this.cleanPath(p_a.toLowerCase());
        let b = this.cleanPath(p_b.toLowerCase());

        return a === b;
    }

    // Whether @p_b is sub path of @p_a.
    isSubPath(p_a, p_b) {
        if (p_a === '') {
            return true;
        } else if (!p_a) {
            return false;
        }

        let a = this.cleanPath(p_a.toLowerCase());
        let b = this.cleanPath(p_b.toLowerCase());

        return b.startsWith(a);
    }

    // The base name without suffix.
    baseName(p_file) {
        let idx = p_file.lastIndexOf('.');
        if (idx == -1) {
            return p_file;
        }

        return p_file.substring(0, idx);
    }

    suffix(p_file) {
        let idx = p_file.lastIndexOf('.');
        if (idx == -1) {
            return '';
        }

        return p_file.substring(idx + 1);
    }
}

export default Utils;
