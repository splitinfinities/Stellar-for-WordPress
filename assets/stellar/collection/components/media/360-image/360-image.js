import { h } from '@stencil/core';
import * as Kaleidoscope from "kaleidoscopejs";
export class Image360 {
    constructor() {
        this.width = 1280;
        this.height = 720;
        this.ready = false;
    }
    componentDidLoad() {
        this.image = this.element.querySelector(".image");
        this.addIntersectionObserver();
    }
    addIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            this.io = new IntersectionObserver((data) => {
                // because there will only ever be one instance
                // of the element we are observing
                // we can just use data[0]
                if (data[0].isIntersecting) {
                    this.handleInScreen();
                }
                else {
                    this.handleOffScreen();
                }
            }, {
                rootMargin: '50%',
                threshold: [0]
            });
            this.io.observe(this.element);
        }
    }
    handleInScreen() {
        this.prepare();
    }
    handleOffScreen() {
        this.destroy();
    }
    prepare() {
        this.viewer = new Kaleidoscope.Image({
            source: this.src,
            container: this.image,
            width: this.width,
            height: this.height,
        });
        this.viewer.render();
        this.ready = true;
    }
    destroy() {
        this.viewer.destroy();
        this.ready = false;
    }
    render() {
        return h("div", null,
            h("div", { class: "image" }),
            h("div", { class: "overlay" }),
            !this.ready && h("skeleton-img", { width: this.width, height: this.height }));
    }
    static get is() { return "stellar-360-image"; }
    static get originalStyleUrls() { return {
        "$": ["360-image.css"]
    }; }
    static get styleUrls() { return {
        "$": ["360-image.css"]
    }; }
    static get properties() { return {
        "src": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "src",
            "reflect": true
        },
        "poster": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "poster",
            "reflect": true
        },
        "width": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "width",
            "reflect": true,
            "defaultValue": "1280"
        },
        "height": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "height",
            "reflect": true,
            "defaultValue": "720"
        }
    }; }
    static get states() { return {
        "viewer": {},
        "image": {},
        "io": {},
        "ready": {}
    }; }
    static get elementRef() { return "element"; }
}
