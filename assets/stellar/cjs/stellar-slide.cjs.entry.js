'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-c90f54d2.js');

class Slide {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    render() {
        return __chunk_1.h(__chunk_1.Host, { class: {
                'slide-zoom': true,
                'swiper-slide': true
            } }, __chunk_1.h("slot", null));
    }
    static get style() { return "stellar-slide{display:block;width:100%;height:100%}.slide-zoom{display:block}.slide-zoom,.swiper-slide{text-align:center;width:100%}.swiper-slide{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;font-size:18px}.swiper-slide img{width:auto;max-width:100%;height:auto;max-height:100%}"; }
}

exports.stellar_slide = Slide;
