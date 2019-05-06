import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';
import { b as video } from './chunk-af15ecc2.js';

class Video360 {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get element() { return getElement(this); }
    static get style() { return "stellar-360-video {\n  display: block;\n  position: relative;\n}\n\nstellar-360-video canvas {\n  display: block;\n  width: 100% !important;\n  height: auto !important;\n}\n\nstellar-360-video .overlay {\n  opacity: 0.3;\n  z-index: 3;\n  pointer-events: none;\n  background: var(--gradient, none);\n  mix-blend-mode: var(--blend, multiply);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}"; }
}

export { Video360 as stellar_360_video };
