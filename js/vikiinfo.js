class VikiInfo {
    constructor() {
        // Target page specified by user.
        this.target = '';

        // Anchor within target page.
        this.anchor = '';

        // Whether enable toc.
        this.toc = true;

        // Whether enable navigation panel.
        this.navi = false;

        // Data of the target file.
        this.data = null;

        this.naviContainerId = '';
        this.contentContainerId = '';
        this.tocContainerId = '';
    }
}

export default VikiInfo;
