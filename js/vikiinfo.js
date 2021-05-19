import Utils from "./utils.js";

class VikiInfo {
    constructor() {
        // Target page specified by user (encoded).
        this.target = '';

        // Anchor within target page (encoded).
        this.anchor = '';

        // Base url.
        this.baseUrl = '';

        // Host + path.
        this.hostPath = '';

        // Whether enable toc.
        this.toc = true;

        // Navigation file for this target.
        this.naviFile = '';

        // Index page of navigation file.
        // Base URL prepended.
        this.naviIndex = '';

        // Auto expand level of the navigation tree on start.
        this.naviExpandLevel = 1;

        // Data of the target file.
        this.data = null;

        this.naviContainerId = '';
        this.contentContainerId = '';
        this.tocContainerId = '';
    }

    setTarget(p_target, p_anchor = '') {
        this.hostPath = window.location.origin + window.location.pathname;

        this.target = p_target;
        this.anchor = p_anchor;

        let utils = new Utils();
        this.baseUrl = utils.baseOfPath(p_target);
    }
}

export default VikiInfo;
