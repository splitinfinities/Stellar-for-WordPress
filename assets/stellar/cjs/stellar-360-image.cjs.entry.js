'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');
const kaleidoscope_es = require('./kaleidoscope.es-c30f5b1d.js');

const Image360 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.nolazyload = false;
        this.width = 1280;
        this.height = 720;
        this.ready = false;
    }
    componentDidLoad() {
        this.image = this.element.querySelector(".image");
        if (this.nolazyload) {
            this.in();
        }
    }
    in() {
        if (!this.viewer) {
            this.viewer = new kaleidoscope_es.Image({
                source: this.src,
                container: this.image,
                width: this.width,
                height: this.height,
            });
        }
        this.viewer.render();
        this.ready = true;
    }
    out() {
        this.viewer.destroy();
        this.ready = false;
    }
    render() {
        return index.h("div", null, index.h("div", { class: "image" }), index.h("div", { class: "overlay" }), !this.nolazyload && index.h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this), margin: '50%' }), !this.ready && index.h("skeleton-img", { width: this.width, height: this.height }));
    }
    get element() { return index.getElement(this); }
};

exports.stellar_360_image = Image360;
