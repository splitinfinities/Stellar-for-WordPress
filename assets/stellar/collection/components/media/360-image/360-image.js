import * as Kaleidoscope from "kaleidoscopejs";
export class Image360 {
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
        this.viewer = new Kaleidoscope.Image({
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
    static get style() { return "/**style-placeholder:stellar-360-image:**/"; }
}
