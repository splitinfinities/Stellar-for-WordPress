'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-f620c3d3.js');
const __chunk_9 = require('./chunk-a8f4f7f7.js');

class Image360 {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.nolazyload = false;
        this.width = 1280;
        this.height = 720;
        this.ready = false;
    }
    componentDidLoad() {
        this.image = this.element.querySelector(".image");
        if (this.nolazyload) {
            this.prepare();
        }
        else {
            this.addIntersectionObserver();
        }
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
        this.viewer = new __chunk_9.Image({
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
        return __chunk_1.h("div", null, __chunk_1.h("div", { class: "image" }), __chunk_1.h("div", { class: "overlay" }), !this.ready && __chunk_1.h("skeleton-img", { width: this.width, height: this.height }));
    }
    get element() { return __chunk_1.getElement(this); }
    static get style() { return "stellar-360-image{display:block;position:relative}stellar-360-image canvas{display:block;width:100%!important;height:auto!important}stellar-360-image .overlay{opacity:.3;z-index:3;pointer-events:none;background:var(--gradient,none);mix-blend-mode:var(--blend,multiply);position:absolute;top:0;left:0;width:100%;height:100%}"; }
}

exports.stellar_360_image = Image360;
