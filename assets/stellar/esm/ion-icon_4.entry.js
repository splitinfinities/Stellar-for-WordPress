import { r as registerInstance, c as getMode, h, H as Host, d as getElement, e as createEvent } from './index-bcfb4a9f.js';
import { i as isStr, g as getUrl, a as getName } from './index-c982b830.js';

const validateContent = (svgContent) => {
    if (svgContent) {
        const div = document.createElement('div');
        div.innerHTML = svgContent;
        // setup this way to ensure it works on our buddy IE
        for (let i = div.childNodes.length - 1; i >= 0; i--) {
            if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
                div.removeChild(div.childNodes[i]);
            }
        }
        // must only have 1 root element
        const svgElm = div.firstElementChild;
        if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
            svgElm.setAttribute('class', 's-ion-icon');
            // root element must be an svg
            // lets double check we've got valid elements
            // do not allow scripts
            if (isValid(svgElm)) {
                return div.innerHTML;
            }
        }
    }
    return '';
};
const isValid = (elm) => {
    if (elm.nodeType === 1) {
        if (elm.nodeName.toLowerCase() === 'script') {
            return false;
        }
        for (let i = 0; i < elm.attributes.length; i++) {
            const val = elm.attributes[i].value;
            if (isStr(val) && val.toLowerCase().indexOf('on') === 0) {
                return false;
            }
        }
        for (let i = 0; i < elm.childNodes.length; i++) {
            if (!isValid(elm.childNodes[i])) {
                return false;
            }
        }
    }
    return true;
};

const requests = new Map();
const getSvgContent = (url) => {
    // see if we already have a request for this url
    let req = requests.get(url);
    if (!req) {
        // we don't already have a request
        req = fetch(url).then(rsp => {
            if (rsp.status <= 299) {
                return rsp.text();
            }
            return Promise.resolve(null);
        }).then(svgContent => validateContent(svgContent));
        // cache for the same requests
        requests.set(url, req);
    }
    return req;
};

const IconCss = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}.icon-inner,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";

const Icon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.mode = getIonMode(this);
        this.isVisible = false;
        /**
         * If enabled, ion-icon will be loaded lazily when it's visible in the viewport.
         * Default, `false`.
         */
        this.lazy = false;
    }
    connectedCallback() {
        // purposely do not return the promise here because loading
        // the svg file should not hold up loading the app
        // only load the svg if it's visible
        this.waitUntilVisible(this.el, '50px', () => {
            this.isVisible = true;
            this.loadIcon();
        });
    }
    disconnectedCallback() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    waitUntilVisible(el, rootMargin, cb) {
        if ( this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
            const io = this.io = new window.IntersectionObserver((data) => {
                if (data[0].isIntersecting) {
                    io.disconnect();
                    this.io = undefined;
                    cb();
                }
            }, { rootMargin });
            io.observe(el);
        }
        else {
            // browser doesn't support IntersectionObserver
            // so just fallback to always show it
            cb();
        }
    }
    loadIcon() {
        if ( this.isVisible) {
            const url = getUrl(this);
            if (url) {
                getSvgContent(url)
                    .then(svgContent => this.svgContent = svgContent);
            }
        }
        if (!this.ariaLabel) {
            const label = getName(this.name, this.icon, this.mode, this.ios, this.md);
            // user did not provide a label
            // come up with the label based on the icon name
            if (label) {
                this.ariaLabel = label
                    .replace('ios-', '')
                    .replace('md-', '')
                    .replace(/\-/g, ' ');
            }
        }
    }
    render() {
        const mode = this.mode || 'md';
        const flipRtl = this.flipRtl || (this.ariaLabel && this.ariaLabel.indexOf('arrow') > -1 && this.flipRtl !== false);
        return (h(Host, { role: "img", class: Object.assign({ [mode]: true }, createColorClasses(this.color), { [`icon-${this.size}`]: !!this.size, 'flip-rtl': !!flipRtl && this.el.ownerDocument.dir === 'rtl' }) }, (( this.svgContent)
            ? h("div", { class: "icon-inner", innerHTML: this.svgContent })
            : h("div", { class: "icon-inner" }))));
    }
    static get assetsDirs() { return ["svg"]; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "name": ["loadIcon"],
        "src": ["loadIcon"],
        "icon": ["loadIcon"]
    }; }
    static get style() { return IconCss; }
};
const getIonMode = (ref) => {
    return getMode(ref) || document.documentElement.getAttribute('mode') || 'md';
};
const createColorClasses = (color) => {
    return (color) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : null;
};

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

export { Icon as ion_icon, Intersection as stellar_intersection, SimpleSlides as stellar_simple_slides, Slide as stellar_slide };
