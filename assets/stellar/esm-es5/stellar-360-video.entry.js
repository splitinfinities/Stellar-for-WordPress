import { r as registerInstance, h, H as Host, d as getElement } from './index-bcfb4a9f.js';
import { v as video } from './kaleidoscope.es-5946172c.js';
var Video360 = /** @class */ (function () {
    function Video360(hostRef) {
        registerInstance(this, hostRef);
        this.width = 1280;
        this.height = 720;
    }
    Video360.prototype.componentDidLoad = function () {
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
    };
    Video360.prototype.render = function () {
        return h(Host, null, h("div", { class: "video" }), h("div", { class: "overlay" }));
    };
    Object.defineProperty(Video360.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return Video360;
}());
export { Video360 as stellar_360_video };
