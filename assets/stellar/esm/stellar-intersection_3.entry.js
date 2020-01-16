import { r as registerInstance, g as getElement, h, H as Host, c as createEvent } from './index-d1f18b4d.js';

const Intersection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.in = () => { };
        this.out = () => { };
        this.margin = "0%";
    }
    componentWillLoad() {
        if (!this.element) {
            this.element = this.el;
        }
        this.addIntersectionObserver();
    }
    componentDidUnload() {
        this.removeIntersectionObserver();
    }
    addIntersectionObserver() {
        try {
            if ('IntersectionObserver' in window) {
                this.io = new IntersectionObserver((data) => {
                    if (!this.multiple) {
                        if (data[0].isIntersecting) {
                            this.in();
                            this.removeIntersectionObserver();
                        }
                    }
                    else {
                        if (data[0].isIntersecting) {
                            this.in();
                        }
                        else {
                            this.out();
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
    }
    removeIntersectionObserver() {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    }
    get el() { return getElement(this); }
};

const SimpleSlidesCss = ":host{display:grid;grid-gap:1rem;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;contain:content;position:relative}:host .wrapper{-ms-flex-order:1;order:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;display:grid;grid-gap:var(--grid-gap, 2rem);grid-template-rows:1fr;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;scrollbar-width:none;-ms-overflow-style:none;grid-auto-flow:column}:host ::slotted(stellar-slide){scroll-snap-align:center;display:block;-webkit-transition:all 200ms ease 0s;transition:all 200ms ease 0s;--object-fit:cover;height:100%}:host button.nav{grid-column:1;position:absolute;z-index:999;top:50%;height:4rem;width:4rem;cursor:pointer;border:0;left:1rem;background:var(--white);opacity:1;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);-webkit-transition:all 200ms ease 0s;transition:all 200ms ease 0s;-webkit-clip-path:circle();clip-path:circle();-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host button.nav:hover,:host button.nav:focus{left:0.5rem}:host button.nav.hide{-webkit-transform:translateX(200%) translateY(-50%);transform:translateX(200%) translateY(-50%)}:host button.nav.next{right:1rem;left:auto}:host button.nav.next:hover,:host button.nav.next:focus{right:0.5rem}:host button.nav.prev.hide{-webkit-transform:translateX(-200%) translateY(-50%);transform:translateX(-200%) translateY(-50%)}:host button.nav ion-icon{font-size:3rem;color:var(--black)}:host .pager{-ms-flex-order:2;order:2;display:grid;grid-auto-flow:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;grid-gap:1rem;width:auto}:host .pager button{width:1rem;height:1rem;border-radius:100%;border:none;background:var(--theme-base5);font-size:0;text-indent:-10000px;cursor:pointer;-webkit-filter:grayscale(100%);filter:grayscale(100%);-webkit-transform:scale(0.4);transform:scale(0.4);-webkit-transition:all 75ms ease-in-out 0s;transition:all 75ms ease-in-out 0s}:host .pager button.visible{-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-filter:grayscale(0%);filter:grayscale(0%)}:host .pager button:hover,:host .pager button:focus{-webkit-transform:scale(1.2);transform:scale(1.2)}";

const SimpleSlides = class {
    constructor(hostRef) {
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
    componentWillLoad() {
        this.slides = this.el.querySelectorAll("stellar-slide");
        this.slides.forEach((slide, index) => {
            slide.setAttribute("tabIndex", "0");
            slide.slideId = index;
        });
    }
    scrollToSlide(element) {
        element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    next() {
        const lastVisible = Array.from(this.el.shadowRoot.querySelectorAll('.pager > button.visible'));
        const element = lastVisible[lastVisible.length - 1].nextSibling;
        // @ts-ignore
        element.click();
    }
    previous() {
        const firstVisible = Array.from(this.el.shadowRoot.querySelectorAll('.pager > button.visible'));
        const element = firstVisible[0].previousSibling;
        // @ts-ignore
        element.click();
    }
    handleSwitched(e) {
        if (this.pager) {
            if (e.detail.visible) {
                this.active = [...this.active, e.detail.slideId];
            }
            else {
                this.active = this.active.filter((item) => {
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
    }
    render() {
        return h(Host, { tabIndex: 0, style: { '--padding': this.padding } }, h("button", { class: `nav prev ${this.first ? "hide" : ""}`, onClick: this.previous.bind(this) }, h("ion-icon", { name: "arrow-round-back" })), h("button", { class: `nav next ${this.last ? "hide" : ""}`, onClick: this.next.bind(this) }, h("ion-icon", { name: "arrow-round-forward" })), this.pager && this.slides && h("div", { class: "pager" }, Array.from(this.slides).map((e, i) => h("button", { onClick: () => this.scrollToSlide(e), class: this.active.includes(i) ? "visible" : "" }, "Slide ", i))), h("div", { class: "wrapper" }, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get style() { return SimpleSlidesCss; }
};

const SlideCss = "stellar-slide{display:block;width:var(--width, 100%);height:100%;contain:content}stellar-slide stellar-image,stellar-slide stellar-video{height:100%;--object-fit:cover;--figure-height:100%}.slide-zoom{text-align:center;display:block;width:100%}.swiper-slide{text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;font-size:18px}.swiper-slide img{width:auto;max-width:100%;height:auto;max-height:100%}";

const Slide = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.width = "auto";
        this.swiper = false;
        this.visible = false;
        this.switched = createEvent(this, "switched", 7);
    }
    componentWillLoad() {
        if (this.el.closest('stellar-slides, stellar-simple-slides')) {
            this.swiper = (this.el.closest('stellar-slides, stellar-simple-slides').nodeName === "STELLAR-SLIDES");
        }
    }
    onVisible() {
        this.switched.emit({ slideId: this.slideId, visible: this.visible });
    }
    in() {
        this.visible = true;
    }
    out() {
        this.visible = false;
    }
    render() {
        return h(Host, { style: { '--width': this.width }, class: {
                'slide-zoom': this.swiper,
                'swiper-slide': this.swiper,
            } }, h("slot", null), h("stellar-intersection", { element: this.el, multiple: true, in: this.in.bind(this), out: this.out.bind(this) }));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "visible": ["onVisible"]
    }; }
    static get style() { return SlideCss; }
};

export { Intersection as stellar_intersection, SimpleSlides as stellar_simple_slides, Slide as stellar_slide };
