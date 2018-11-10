class ImageViewHelper {
    constructor() {
        this.imageViewDiv = null;
        this.viewBoxImageMouseDown = false;
        this.viewBoxImageOffsetToMouse = [0, 0];
    }

    // Construct a div to view image. Hook all the images.
    setupImageView(p_node) {
        p_node.find('#image-view-div').remove();

        let imgs = p_node.find('img');
        for (let i = 0; i < imgs.length; ++i) {
            this.setupIMGToView(imgs[i]);
        }

        this.imageViewDiv = $(`<div id="image-view-div" class="viki-modal-box">
            <span id="image-view-close" class="viki-modal-close">&times;</span>
            <img id="image-view" class="viki-modal-content">
        </div>`);
        p_node.append(this.imageViewDiv);

        this.initImageViewBox();
        this.closeImageViewBox();
    }

    initImageViewBox() {
        // Left and top in pixel.
        let moveImage = (img, left, top) => {
            if (img.style.position != 'absolute') {
                img.style.position = 'absolute';
                img.style.zIndex = parseInt(this.imageViewDiv.find('#image-view-close')[0].style.zIndex) - 1;
            }

            img.style.left = left + 'px';
            img.style.top  = top + 'px';
        };

        // View box.
        this.imageViewDiv.click((e) => {
            e = e || window.event;
            let boxImage = this.imageViewDiv.find('#image-view')[0];
            if (e.target.id != boxImage.id) {
                // Click outside the image to close the box.
                this.closeImageViewBox();
            }

            e.preventDefault();
        });

        this.imageViewDiv[0].onwheel = (e) => {
            e = e || window.event;
            let ctrl = !!e.ctrlKey;
            if (ctrl) {
                return;
            }

            let target = e.target;
            if (!target || target.id != 'image-view') {
                return;
            }

            let rect = target.getBoundingClientRect();
            let centerX = e.clientX - rect.left;
            let centerY = e.clientY - rect.top;

            let oriWidth = target.getAttribute('oriWidth');
            let oriHeight = target.getAttribute('oriWidth');
            if (!oriWidth) {
                oriWidth = rect.width;
                oriHeight = rect.height;

                target.setAttribute('oriWidth', oriWidth);
                target.setAttribute('oriHeight', oriHeight);
            }

            let step = Math.floor(oriWidth / 4);

            let value = e.wheelDelta || -e.detail;
            // delta >= 0 is up, which will trigger zoom in.
            let delta = Math.max(-1, Math.min(1, value));

            let newWidth = rect.width + (delta < 0 ? -step : step);
            if (newWidth < 200) {
                e.preventDefault();
                return;
            }

            let factor = newWidth / rect.width;

            target.style.width = newWidth + 'px';

            // Adjust the image around the center point.
            moveImage(target, e.clientX - centerX * factor, e.clientY - centerY * factor);

            e.preventDefault();
        };

        // Content image.
        let boxImage = this.imageViewDiv.find('#image-view')[0];
        boxImage.onmousedown = (e) => {
            e = e || window.event;
            let target = e.target;
            this.viewBoxImageMouseDown = true;
            this.viewBoxImageOffsetToMouse = [
                target.offsetLeft - e.clientX,
                target.offsetTop - e.clientY
            ];
            e.preventDefault();
        };

        boxImage.onmouseup = (e) => {
            e = e || window.event;
            this.viewBoxImageMouseDown = false;
            e.preventDefault();
        };

        boxImage.onmousemove = (e) => {
            e = e || window.event;
            let target = e.target;
            if (this.viewBoxImageMouseDown) {
                moveImage(target,
                          e.clientX + this.viewBoxImageOffsetToMouse[0],
                          e.clientY + this.viewBoxImageOffsetToMouse[1]);
            }

            e.preventDefault();
        };

        // Close button.
        this.imageViewDiv.find('#image-view-close')[0].onclick = () => {
            this.closeImageViewBox();
        };
    }

    setupIMGToView(p_domNode) {
        if (!p_domNode || p_domNode.nodeName.toLowerCase() != 'img') {
            return;
        }

        p_domNode.classList.add('viki-view-image');
        p_domNode.ondblclick = (p_e) => {
            this.viewImage(p_e.target.src);
        };
    }

    closeImageViewBox() {
        if (this.imageViewDiv) {
            this.imageViewDiv.hide();
        }
    }

    viewImage(p_imgSrc, p_background = 'transparent') {
        this.viewBoxImageMouseDown = false;
        this.imageViewDiv.show();

        let boxImage = this.imageViewDiv.find('#image-view')[0];
        boxImage.src = p_imgSrc;
        boxImage.style.backgroundColor = p_background;

        // Restore image-view.
        boxImage.style.width = '';
        boxImage.style.position = '';
        boxImage.style.zIndex = '';
    }

    isViewingImage() {
        return this.imageViewDiv && this.imageViewDiv[0].style.display == 'block';
    }

    viewSVG(svgNode, background = 'transparent') {
        let svg = svgNode.outerHTML.replace(/#/g, '%23').replace(/[\r\n]/g, '');
        let src = 'data:image/svg+xml;utf8,' + svg;

        this.viewImage(src, background);
    }

    setupSVGToView(node, forceBackground = false) {
        if (!node || node.nodeName.toLowerCase() != 'svg') {
            return;
        }

        let onSVGDoubleClick = function(forceBackground, e) {
            e = e || window.event;
            let name = e.target.nodeName.toLowerCase();
            if (name != 'text' && name != 'tspan') {
                let svgNode = e.target;
                while (svgNode && svgNode.nodeName.toLowerCase() != 'svg') {
                    svgNode = svgNode.parentNode;
                }

                if (svgNode) {
                    if (forceBackground) {
                        // Use <svg>'s parent's background color.
                        let style = window.getComputedStyle(svgNode.parentNode, null);
                        this.viewSVG(svgNode, style.backgroundColor);
                    } else {
                        this.viewSVG(svgNode);
                    }
                }

                e.preventDefault();
            }
        };

        node.classList.add('viki-view-svg');
        node.ondblclick = onSVGDoubleClick.bind(this, forceBackground);
    }
}

export default ImageViewHelper;
