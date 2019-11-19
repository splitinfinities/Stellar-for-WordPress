import { d as registerInstance, f as h, g as getElement } from './stellar-core-1e602ba1.js';
import { a as Image } from './chunk-af15ecc2.js';
var Image360 = /** @class */ (function () {
    function Image360(hostRef) {
        registerInstance(this, hostRef);
        this.nolazyload = false;
        this.width = 1280;
        this.height = 720;
        this.ready = false;
    }
    Image360.prototype.componentDidLoad = function () {
        this.image = this.element.querySelector(".image");
        if (this.nolazyload) {
            this.prepare();
        }
        else {
            this.addIntersectionObserver();
        }
    };
    Image360.prototype.addIntersectionObserver = function () {
        var _this = this;
        if ('IntersectionObserver' in window) {
            this.io = new IntersectionObserver(function (data) {
                // because there will only ever be one instance
                // of the element we are observing
                // we can just use data[0]
                if (data[0].isIntersecting) {
                    _this.handleInScreen();
                }
                else {
                    _this.handleOffScreen();
                }
            }, {
                rootMargin: '50%',
                threshold: [0]
            });
            this.io.observe(this.element);
        }
    };
    Image360.prototype.handleInScreen = function () {
        this.prepare();
    };
    Image360.prototype.handleOffScreen = function () {
        this.destroy();
    };
    Image360.prototype.prepare = function () {
        this.viewer = new Image({
            source: this.src,
            container: this.image,
            width: this.width,
            height: this.height,
        });
        this.viewer.render();
        this.ready = true;
    };
    Image360.prototype.destroy = function () {
        this.viewer.destroy();
        this.ready = false;
    };
    Image360.prototype.render = function () {
        return h("div", null, h("div", { class: "image" }), h("div", { class: "overlay" }), !this.ready && h("skeleton-img", { width: this.width, height: this.height }));
    };
    Object.defineProperty(Image360.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image360, "style", {
        get: function () { return "stellar-360-image{display:block;position:relative}stellar-360-image canvas{display:block;width:100%!important;height:auto!important}stellar-360-image .overlay{opacity:.3;z-index:3;pointer-events:none;background:var(--gradient,none);mix-blend-mode:var(--blend,multiply);position:absolute;top:0;left:0;width:100%;height:100%}"; },
        enumerable: true,
        configurable: true
    });
    return Image360;
}());
export { Image360 as stellar_360_image };
