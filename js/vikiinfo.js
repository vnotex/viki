class VikiInfo {
    constructor() {
        // Target page specified by user.
        this.target = '';

        // Anchor within target page.
        this.anchor = '';

        // Data of the target file.
        this.data = null;

        this.contentContainerId = '';
        this.tocContainerId = '';
    }
}

export default VikiInfo;
