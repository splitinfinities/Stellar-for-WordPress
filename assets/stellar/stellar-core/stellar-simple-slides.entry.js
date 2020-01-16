import { r as registerInstance, h, H as Host, g as getElement } from './index-cc4604b3.js';
import './utils-06e0aad6.js';
import './index-88205cad.js';

const SimpleSlidesCss = ":host {\n    display: grid;\n    grid-gap: 1rem;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    contain: content;\n    position: relative;\n}\n\n:host .wrapper {\n    order: 1;\n    scroll-snap-type: x mandatory;\n    overflow-x: scroll;\n    display: grid;\n    grid-gap: var(--grid-gap, 2rem);\n    grid-template-rows: 1fr;\n    scroll-behavior: smooth;\n    -webkit-overflow-scrolling: touch;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n    grid-auto-flow: column;\n}\n\n:host ::slotted(stellar-slide) {\n    scroll-snap-align: center;\n    display: block;\n    transition: all 200ms ease 0s;\n    --object-fit: cover;\n    height: 100%;\n}\n\n:host button.nav {\n    grid-column: 1;\n    position: absolute;\n    z-index: 999;\n    top: 50%;\n    height: 4rem;\n    width: 4rem;\n    cursor: pointer;\n    border: 0;\n    left: 1rem;\n    background: var(--white);\n    opacity: 1;\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n    transition: all 200ms ease 0s;\n    clip-path: circle();\n    transform: translateY(-50%);\n}\n\n:host button.nav:hover, \n:host button.nav:focus {\n    left: 0.5rem;\n}\n\n:host button.nav.hide {\n    transform: translateX(200%) translateY(-50%);;\n}\n\n:host button.nav.next {\n    right: 1rem;\n    left: auto;\n}\n\n:host button.nav.next:hover, \n:host button.nav.next:focus {\n    right: 0.5rem;\n}\n\n:host button.nav.prev.hide {\n    transform: translateX(-200%) translateY(-50%);\n}\n\n:host button.nav ion-icon {\n    font-size: 3rem;\n    color: var(--black);\n}\n\n:host .pager {\n    order: 2;\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: center;\n    grid-gap: 1rem;\n    width: auto;\n}\n\n:host .pager button {\n    width: 1rem;\n    height: 1rem;\n    border-radius: 100%;\n    border: none;\n    background: var(--theme-base5);\n    font-size: 0;\n    text-indent: -10000px;\n    cursor: pointer;\n    filter: grayscale(100%);\n    transform: scale(0.4);\n    transition: all 75ms ease-in-out 0s;\n}\n\n:host .pager button.visible {\n    transform: scale(1.1);\n    filter: grayscale(0%);\n}\n\n:host .pager button:hover,\n:host .pager button:focus {\n    transform: scale(1.2);\n}";

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

export { SimpleSlides as stellar_simple_slides };
