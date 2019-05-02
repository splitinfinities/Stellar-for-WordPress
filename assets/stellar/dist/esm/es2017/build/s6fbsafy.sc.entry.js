import { h } from '../stellar-core.core.js';

import { b as video } from './chunk-eee53063.js';

class Video360 {
    constructor() {
        this.width = 1280;
        this.height = 720;
    }
    componentDidLoad() {
        this.video = this.element.querySelector(".video");
        this.viewer = new video({
            source: this.src,
            container: this.video,
            width: this.width,
            height: this.height,
            autoplay: true,
            muted: true,
            loop: true
        });
        this.viewer.render();
        this.viewer.play();
    }
    render() {
        return [
            h("div", { class: "video" }),
            h("div", { class: "overlay" })
        ];
    }
    static get is() { return "stellar-360-video"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        },
        "height": {
            "type": Number,
            "attr": "height",
            "reflectToAttr": true
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
        "video": {
            "state": true
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
    static get style() { return "stellar-360-video{display:block;position:relative}stellar-360-video canvas{display:block;width:100%!important;height:auto!important}stellar-360-video .overlay{opacity:.3;z-index:3;pointer-events:none;background:var(--gradient,none);mix-blend-mode:var(--blend,multiply);position:absolute;top:0;left:0;width:100%;height:100%}"; }
}

export { Video360 as Stellar360Video };
