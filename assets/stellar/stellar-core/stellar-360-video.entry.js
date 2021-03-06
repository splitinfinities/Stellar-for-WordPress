import { r as registerInstance, h, H as Host, g as getElement } from './index-cc4604b3.js';
import { v as video } from './kaleidoscope.es-84b434d1.js';

const Video360 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.width = 1280;
        this.height = 720;
    }
    componentDidLoad() {
        this.video = this.element.querySelector(".video");
        if (this.video && this.src) {
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
    }
    render() {
        return h(Host, null, h("div", { class: "video" }), h("div", { class: "overlay" }));
    }
    get element() { return getElement(this); }
};

export { Video360 as stellar_360_video };
