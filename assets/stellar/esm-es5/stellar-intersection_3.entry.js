var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, g as getElement, h, H as Host, c as createEvent } from './index-d1f18b4d.js';
var Intersection = /** @class */ (function () {
    function Intersection(hostRef) {
        registerInstance(this, hostRef);
        this.in = function () { };
        this.out = function () { };
        this.margin = "0%";
    }
    Intersection.prototype.componentWillLoad = function () {
        if (!this.element) {
            this.element = this.el;
        }
        this.addIntersectionObserver();
    };
    Intersection.prototype.componentDidUnload = function () {
        this.removeIntersectionObserver();
    };
    Intersection.prototype.addIntersectionObserver = function () {
        var _this = this;
        try {
            if ('IntersectionObserver' in window) {
                this.io = new IntersectionObserver(function (data) {
                    if (!_this.multiple) {
                        if (data[0].isIntersecting) {
                            _this.in();
                            _this.removeIntersectionObserver();
                        }
                    }
                    else {
                        if (data[0].isIntersecting) {
                            _this.in();
                        }
                        else {
                            _this.out();
                        }
                    }
                }, {
                    rootMargin: this.margin,
                    threshold: [0]
                });
                if (typeof this.element === "string" && this.element.constructor.name === "String") {
                    this.io.observe(document.querySelector(this.element));
                }
                else {
                    this.io.observe(this.element);
                }
            }
        }
        catch (e) {
            // no intersection observer
        }
    };
    Intersection.prototype.removeIntersectionObserver = function () {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    };
    Object.defineProperty(Intersection.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return Intersection;
}());
var SimpleSlidesCss = ":host{display:grid;grid-gap:1rem;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;contain:content;position:relative}:host .wrapper{-ms-flex-order:1;order:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;display:grid;grid-gap:var(--grid-gap, 2rem);grid-template-rows:1fr;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;scrollbar-width:none;-ms-overflow-style:none;grid-auto-flow:column}:host ::slotted(stellar-slide){scroll-snap-align:center;display:block;-webkit-transition:all 200ms ease 0s;transition:all 200ms ease 0s;--object-fit:cover;height:100%}:host button.nav{grid-column:1;position:absolute;z-index:999;top:50%;height:4rem;width:4rem;cursor:pointer;border:0;left:1rem;background:var(--white);opacity:1;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);-webkit-transition:all 200ms ease 0s;transition:all 200ms ease 0s;-webkit-clip-path:circle();clip-path:circle();-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host button.nav:hover,:host button.nav:focus{left:0.5rem}:host button.nav.hide{-webkit-transform:translateX(200%) translateY(-50%);transform:translateX(200%) translateY(-50%)}:host button.nav.next{right:1rem;left:auto}:host button.nav.next:hover,:host button.nav.next:focus{right:0.5rem}:host button.nav.prev.hide{-webkit-transform:translateX(-200%) translateY(-50%);transform:translateX(-200%) translateY(-50%)}:host button.nav ion-icon{font-size:3rem;color:var(--black)}:host .pager{-ms-flex-order:2;order:2;display:grid;grid-auto-flow:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;grid-gap:1rem;width:auto}:host .pager button{width:1rem;height:1rem;border-radius:100%;border:none;background:var(--theme-base5);font-size:0;text-indent:-10000px;cursor:pointer;-webkit-filter:grayscale(100%);filter:grayscale(100%);-webkit-transform:scale(0.4);transform:scale(0.4);-webkit-transition:all 75ms ease-in-out 0s;transition:all 75ms ease-in-out 0s}:host .pager button.visible{-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-filter:grayscale(0%);filter:grayscale(0%)}:host .pager button:hover,:host .pager button:focus{-webkit-transform:scale(1.2);transform:scale(1.2)}";
var SimpleSlides = /** @class */ (function () {
    function SimpleSlides(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Show or hide the pager
         */
        this.pager = false;
        /**
         * Show or hide the pager
         */
        this.padding = "1rem";
        /**
         * Show or hide the pager
         */
        this.active = [];
        /**
         * Show or hide the pager
         */
        this.first = true;
        /**
         * Show or hide the pager
         */
        this.last = false;
    }
    SimpleSlides.prototype.componentWillLoad = function () {
        this.slides = this.el.querySelectorAll("stellar-slide");
        this.slides.forEach(function (slide, index) {
            slide.setAttribute("tabIndex", "0");
            slide.slideId = index;
        });
    };
    SimpleSlides.prototype.scrollToSlide = function (element) {
        element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };
    SimpleSlides.prototype.next = function () {
        var lastVisible = Array.from(this.el.shadowRoot.querySelectorAll('.pager > button.visible'));
        var element = lastVisible[lastVisible.length - 1].nextSibling;
        // @ts-ignore
        element.click();
    };
    SimpleSlides.prototype.previous = function () {
        var firstVisible = Array.from(this.el.shadowRoot.querySelectorAll('.pager > button.visible'));
        var element = firstVisible[0].previousSibling;
        // @ts-ignore
        element.click();
    };
    SimpleSlides.prototype.handleSwitched = function (e) {
        if (this.pager) {
            if (e.detail.visible) {
                this.active = __spreadArrays(this.active, [e.detail.slideId]);
            }
            else {
                this.active = this.active.filter(function (item) {
                    return item !== e.detail.slideId;
                });
            }
        }
        if (e.detail.visible) {
            if (e.detail.slideId === 0) {
                this.first = true;
            }
            else {
                this.first = false;
            }
            if (e.detail.slideId === (this.slides.length - 1)) {
                this.last = true;
            }
            else {
                this.last = false;
            }
        }
    };
    SimpleSlides.prototype.render = function () {
        var _this = this;
        return h(Host, { tabIndex: 0, style: { '--padding': this.padding } }, h("button", { class: "nav prev " + (this.first ? "hide" : ""), onClick: this.previous.bind(this) }, h("ion-icon", { name: "arrow-round-back" })), h("button", { class: "nav next " + (this.last ? "hide" : ""), onClick: this.next.bind(this) }, h("ion-icon", { name: "arrow-round-forward" })), this.pager && this.slides && h("div", { class: "pager" }, Array.from(this.slides).map(function (e, i) { return h("button", { onClick: function () { return _this.scrollToSlide(e); }, class: _this.active.includes(i) ? "visible" : "" }, "Slide ", i); })), h("div", { class: "wrapper" }, h("slot", null)));
    };
    Object.defineProperty(SimpleSlides.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleSlides, "style", {
        get: function () { return SimpleSlidesCss; },
        enumerable: true,
        configurable: true
    });
    return SimpleSlides;
}());
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
export { Intersection as stellar_intersection, SimpleSlides as stellar_simple_slides, Slide as stellar_slide };
