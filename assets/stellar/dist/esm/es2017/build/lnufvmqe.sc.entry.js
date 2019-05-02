import { h } from '../stellar-core.core.js';

import { a as Image$1 } from './chunk-eee53063.js';

class Image360 {
    constructor() {
        this.width = 1280;
        this.height = 720;
    }
    componentDidLoad() {
        this.image = this.element.querySelector(".image");
        this.viewer = new Image$1({
            source: this.src,
            container: this.image,
            width: this.width,
            height: this.height,
        });
        this.viewer.render();
    }
    render() {
        return [
            h("div", { class: "image" }),
            h("div", { class: "overlay" })
        ];
    }
    static get is() { return "stellar-360-image"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        },
        "height": {
            "type": Number,
            "attr": "height",
            "reflectToAttr": true
        },
        "image": {
            "state": true
        },
        "poster": {
            "type": String,
            "attr": "poster",
            "reflectToAttr": true
        },
        "src": {
            "type": String,
            "attr": "src",
            "reflectToAttr": true
        },
        "viewer": {
            "state": true
        },
        "width": {
            "type": Number,
            "attr": "width",
            "reflectToAttr": true
        }
    }; }
    static get style() { return "stellar-360-image{display:block;position:relative}stellar-360-image canvas{display:block;width:100%!important;height:auto!important}stellar-360-image .overlay{opacity:.3;z-index:3;pointer-events:none;background:var(--gradient,none);mix-blend-mode:var(--blend,multiply);position:absolute;top:0;left:0;width:100%;height:100%}"; }
}

export { Image360 as Stellar360Image };
