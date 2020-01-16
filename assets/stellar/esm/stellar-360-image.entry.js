import { r as registerInstance, h, d as getElement } from './index-bcfb4a9f.js';
import { I as Image } from './kaleidoscope.es-5946172c.js';

const Image360 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            this.viewer = new Image({
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
        return h("div", null, h("div", { class: "image" }), h("div", { class: "overlay" }), !this.nolazyload && h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this), margin: '50%' }), !this.ready && h("skeleton-img", { width: this.width, height: this.height }));
    }
    get element() { return getElement(this); }
};

export { Image360 as stellar_360_image };
