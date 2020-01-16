'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');
const kaleidoscope_es = require('./kaleidoscope.es-c30f5b1d.js');

const Video360 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.width = 1280;
        this.height = 720;
    }
    componentDidLoad() {
        this.video = this.element.querySelector(".video");
        if (this.video && this.src) {
            this.viewer = new kaleidoscope_es.video({
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
    }
    render() {
        return index.h(index.Host, null, index.h("div", { class: "video" }), index.h("div", { class: "overlay" }));
    }
    get element() { return index.getElement(this); }
};

exports.stellar_360_video = Video360;
