class VikiInfo {
    constructor() {
        // Target page specified by user.
        this.target = '';

        // Anchor within target page.
        this.anchor = '';

        // Base url.
        this.baseUrl = '';

        // Whether enable toc.
        this.toc = true;

        // Navigation file for this target.
        this.naviFile = '';

        // Data of the target file.
        this.data = null;

        this.naviContainerId = '';
        this.contentContainerId = '';
        this.tocContainerId = '';
    }

    setTarget(p_target, p_anchor = '') {
        this.target = p_target;
        this.anchor = p_anchor;

        let idx = p_target.lastIndexOf('/');
        this.baseUrl = p_target.substring(0, idx + 1);
    }
}

export default VikiInfo;
