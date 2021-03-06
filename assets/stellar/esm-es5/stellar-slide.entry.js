import { r as registerInstance, e as createEvent, h, H as Host, g as getElement } from './index-36b06d19.js';
var SlideCss = "stellar-slide{display:block;width:var(--width, 100%);height:100%;contain:content}stellar-slide stellar-image,stellar-slide stellar-video{height:100%;--object-fit:cover;--figure-height:100%}.slide-zoom{text-align:center;display:block;width:100%}.swiper-slide{text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;font-size:18px}.swiper-slide img{width:auto;max-width:100%;height:auto;max-height:100%}";
var Slide = /** @class */ (function () {
    function Slide(hostRef) {
        registerInstance(this, hostRef);
        this.width = "auto";
        this.swiper = false;
        this.visible = false;
        this.switched = createEvent(this, "switched", 7);
    }
    Slide.prototype.componentWillLoad = function () {
        if (this.el.closest('stellar-slides, stellar-simple-slides')) {
            this.swiper = (this.el.closest('stellar-slides, stellar-simple-slides').nodeName === "STELLAR-SLIDES");
        }
    };
    Slide.prototype.onVisible = function () {
        this.switched.emit({ slideId: this.slideId, visible: this.visible });
    };
    Slide.prototype.in = function () {
        this.visible = true;
    };
    Slide.prototype.out = function () {
        this.visible = false;
    };
    Slide.prototype.render = function () {
        return h(Host, { style: { '--width': this.width }, class: {
                'slide-zoom': this.swiper,
                'swiper-slide': this.swiper,
            } }, h("slot", null), h("stellar-intersection", { element: this.el, multiple: true, in: this.in.bind(this), out: this.out.bind(this) }));
    };
    Object.defineProperty(Slide.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slide, "watchers", {
        get: function () {
            return {
                "visible": ["onVisible"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slide, "style", {
        get: function () { return SlideCss; },
        enumerable: true,
        configurable: true
    });
    return Slide;
}());
export { Slide as stellar_slide };
