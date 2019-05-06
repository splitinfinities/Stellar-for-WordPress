import { h } from '@stencil/core';
import { delay, properties, mediumZoom } from '../../../utils';
import { ColorThief } from './vendor/colorThief.js';
export class Picture {
    constructor() {
        this.nozoom = false;
        this.bg = "auto";
        this.sources = [];
        this.active = false;
    }
    componentWillLoad() {
        this.prepareSources();
        this.setBG();
        this.updateAspectRatio();
    }
    componentDidLoad() {
        this.addIntersectionObserver();
        this.figure = this.element.shadowRoot.querySelector('figure');
    }
    mountZoom() {
        let zoomable = this.element.shadowRoot.querySelector('img');
        this.zoom = mediumZoom(zoomable, {
            background: `${this.bg}`,
            scrollOffset: 1,
            margin: 30
        });
    }
    handlePosterChange() {
        this.setBG();
    }
    async medium() {
        return this.zoom;
    }
    async handleImage() {
        this.active = true;
        if (!this.nozoom) {
            await delay(200);
            this.mountZoom();
        }
    }
    addIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            this.io = new IntersectionObserver((data) => {
                // because there will only ever be one instance
                // of the element we are observing
                // we can just use data[0]
                if (data[0].isIntersecting) {
                    this.handleImage();
                    this.removeIntersectionObserver();
                }
            }, {
                rootMargin: '50%',
                threshold: [0]
            });
            this.io.observe(this.element.shadowRoot.querySelector('figure'));
        }
        else {
            // fall back to setTimeout for Safari and IE
            setTimeout(() => {
                this.handleImage();
            }, 300);
        }
    }
    removeIntersectionObserver() {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    }
    getPictureColor() {
        const img = new Image(80, 80);
        img.addEventListener('load', () => {
            const cf = new ColorThief();
            this.palette = cf.getColor(img);
            properties.set({
                "--bg": `rgb(${this.palette[0]}, ${this.palette[1]}, ${this.palette[2]})`
            }, this.element);
            this.bg = `rgb(${this.palette[0]}, ${this.palette[1]}, ${this.palette[2]})`;
            if (this.zoom) {
                this.zoom.update({
                    background: this.bg
                });
            }
        }, false);
        img.src = this.poster;
        img.crossOrigin = "Anonymous";
    }
    setBG() {
        if (this.bg === "auto") {
            this.getPictureColor();
        }
        else {
            properties.set({
                "--bg": `${this.bg}`
            }, this.element);
        }
    }
    prepareSources() {
        const sources = this.element.querySelectorAll("source");
        let sourcesArray = [];
        [].forEach.call(sources, (source) => {
            sourcesArray = [...sourcesArray, source];
            source.hidden = true;
        });
        this.sources = sourcesArray;
        this.poster = this.poster ? this.poster : this.sources[this.sources.length - 1].srcset;
    }
    updateAspectRatio() {
        this.aspectRatio = (this.height / this.width) * 100;
        properties.set({
            "--aspect_ratio": `${this.aspectRatio}%`,
            "--width": `${this.width}px`,
            "--height": `${this.height}px`,
        }, this.element);
    }
    renderPicture() {
        if (this.active) {
            return [
                this.sources.map((source) => h("source", { srcSet: source.srcset, media: source.media ? source.media : false })),
                h("img", { src: this.sources[0].srcset, class: "final_image" })
            ];
        }
    }
    render() {
        return (h("figure", { itemtype: "http://schema.org/ImageObject", class: this.active ? 'loaded' : '', onClick: () => { if (this.zoom) {
                this.zoom.open();
            } } },
            h("div", { class: "overlay" }),
            h("picture", null, this.renderPicture()),
            h("div", { class: "placeholder", style: { "background-image": `url(${this.poster})` } })));
    }
    static get is() { return "stellar-image"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["image.css"]
    }; }
    static get styleUrls() { return {
        "$": ["image.css"]
    }; }
    static get properties() { return {
        "poster": {
            "type": "string",
            "mutable": true,
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
            "reflect": false
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
            "reflect": false
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
            "reflect": false
        },
        "nozoom": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "nozoom",
            "reflect": true,
            "defaultValue": "false"
        },
        "bg": {
            "type": "string",
            "mutable": true,
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
            "attribute": "bg",
            "reflect": false,
            "defaultValue": "\"auto\""
        }
    }; }
    static get states() { return {
        "figure": {},
        "aspectRatio": {},
        "sources": {},
        "io": {},
        "active": {},
        "zoom": {},
        "palette": {}
    }; }
    static get methods() { return {
        "medium": {
            "complexType": {
                "signature": "() => Promise<any>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<any>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "poster",
            "methodName": "handlePosterChange"
        }]; }
}