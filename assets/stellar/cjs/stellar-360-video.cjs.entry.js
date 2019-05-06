'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-c90f54d2.js');
const __chunk_4 = require('./chunk-8dfcea2f.js');

class Video360 {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.width = 1280;
        this.height = 720;
    }
    componentDidLoad() {
        this.video = this.element.querySelector(".video");
        this.viewer = new __chunk_4.video({
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
            __chunk_1.h("div", { class: "video" }),
            __chunk_1.h("div", { class: "overlay" })
        ];
    }
    get element() { return __chunk_1.getElement(this); }
    static get style() { return "stellar-360-video{display:block;position:relative}stellar-360-video canvas{display:block;width:100%!important;height:auto!important}stellar-360-video .overlay{opacity:.3;z-index:3;pointer-events:none;background:var(--gradient,none);mix-blend-mode:var(--blend,multiply);position:absolute;top:0;left:0;width:100%;height:100%}"; }
}

exports.stellar_360_video = Video360;
