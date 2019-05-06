import { h } from '../stellar-core.core.js';

import { a as Image$1 } from './chunk-eee53063.js';

class Image360 {
    constructor() {
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
        this.viewer = new Image$1({
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
        return h("div", null,
            h("div", { class: "image" }),
            h("div", { class: "overlay" }),
            !this.ready && h("skeleton-img", { width: this.width, height: this.height }));
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
        "io": {
            "state": true
        },
        "poster": {
            "type": String,
            "attr": "poster",
            "reflectToAttr": true
        },
        "ready": {
            "state": true
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
