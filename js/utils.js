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
            return '<a href="#' + p_item.anchor + '">' + p_item.title + '</a>';
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
}

export default Utils;
