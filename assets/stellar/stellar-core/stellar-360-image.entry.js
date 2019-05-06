import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';
import { a as Image } from './chunk-af15ecc2.js';

class Image360 {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.viewer = new Image({
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
        return h("div", null, h("div", { class: "image" }), h("div", { class: "overlay" }), !this.ready && h("skeleton-img", { width: this.width, height: this.height }));
    }
    get element() { return getElement(this); }
    static get style() { return "stellar-360-image {\n  display: block;\n  position: relative;\n}\n\nstellar-360-image canvas {\n  display: block;\n  width: 100% !important;\n  height: auto !important;\n}\n\nstellar-360-image .overlay {\n  opacity: 0.3;\n  z-index: 3;\n  pointer-events: none;\n  background: var(--gradient, none);\n  mix-blend-mode: var(--blend, multiply);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}"; }
}

export { Image360 as stellar_360_image };
