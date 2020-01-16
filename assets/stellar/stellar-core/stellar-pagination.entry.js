import { r as registerInstance, d as createEvent, h, g as getElement } from './index-cc4604b3.js';
import './colors-eb996d31.js';
import './_commonjsHelpers-bccf23a2.js';
import { p as properties } from './css-custom-properties.min-d9d14253.js';
import { b as blurringEase } from './index-26976b63.js';
import './main-e9832563.js';
import './moment-5e7e00c2.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';
import './utils-06e0aad6.js';
import './index-88205cad.js';

const PaginationCss = ":host, :host *, :host *:before, :host *:after {\n  box-sizing: border-box;\n}\n\n:host {\n  display: block;\n  color: var(--color);\n  font-size: 1.6rem;\n  --color: var(--theme-base6);\n  --hover: var(--theme-base9);\n  text-align: center;\n  contain: content;\n}\n\n:host .pagination-container {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n:host .indicator {\n  position: absolute;\n  top: .2rem;\n  left: var(--indicator-left, 50%);\n  transition: all 220ms var(--ease) 0s;\n  width: 2.4rem;\n  height: 1.6rem;\n  margin-left: -0.125em;\n  background: var(--theme-base5);\n  z-index: 0;\n  border-radius: 100%;\n}\n\n:host stellar-blur[horizontal=\"0\"] .indicator {\n  height: 2.4rem;\n  top: -0.2rem;\n}\n\n:host .pagination-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n:host a {\n  text-decoration: none;\n  border-radius: 100%;\n}\n\n:host a.icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  color: var(--color);\n}\n\n:host a.icon:hover,\n:host a.icon:active {\n  color: var(--hover);\n}\n\n:host a.current-number:hover,\n:host a.current-number:active,\n:host a.current-number:focus {\n  color: white;\n}\n\n:host .ellipsis {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  margin: 0 0.25rem;\n}\n\n:host .pages {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0.5rem;\n  position: relative;\n  transition: all 200ms var(--ease) 0s;\n}\n\n:host .number {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: currentColor;\n  font-weight: 700;\n  transition: all 200ms var(--ease) 0ms;\n  margin: 1rem 0;\n  width: 0;\n  height: 0;\n  opacity: 1;\n  z-index: 1;\n  padding: 0;\n  transform: scale(0);\n}\n\n:host .number[data-visible=\"false\"] {\n  transform: scale(0);\n}\n\n:host .number[data-visible] {\n  width: 2rem;\n  height: 2rem;\n  opacity: 1;\n  padding: 0;\n  margin: 0 0.25em;\n  transform: scale(1);\n}\n\n:host .number:hover,\n:host .number:active {\n  color: var(--hover);\n}\n\n:host .current-number {\n  margin: 1rem;\n  color: white;\n}\n\n:host .skip-button {\n  margin-left: 36px;\n  line-height: 0;\n}\n\n:host *[data-hidden=yes] {\n  display: none !important;\n}\n\n:host .compact-pagination-container {\n  display: flex;\n  align-items: baseline;\n}\n\n:host .compact-pagination-container stellar-input {\n  width: 5rem;\n  --padding: 0 1rem;\n  margin: 0 1rem;\n}\n\n:host stellar-blur {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n:host([dark]) a.number:hover,\n:host([dark]) a.number:active,\n:host([dark]) a.number:focus {\n  color: white;\n}\n\n:host([dark]) .current-number {\n  color: var(--gray9) !important;\n}\n\n:host([dark]) a.icon:hover,\n:host([dark]) a.icon:active,\n:host([dark]) a.icon:focus {\n  color: white;\n}\n";

const Pagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Public: Sets the max cap of pages you can skip through
         */
        this.pages = 1;
        this.type = "full";
        this.current = 1;
        this.padding = 2;
        this.color = "gray";
        this.dark = false;
        this.url = "#page-{0}";
        this.__current = 1;
        this.__first = 1;
        this.__previous = false;
        this.__next = false;
        this.blur = 0;
        this.ease = blurringEase({
            end: 10,
            start: -1,
            duration: 125,
            tick: (args) => {
                this.blur = args.value;
            },
            complete: () => {
                this.blur = 0;
                this.ease.stop();
                this.affixDistance();
            },
        });
        this.changed = createEvent(this, "changed", 7);
    }
    __firstPageUrl() { return ""; }
    __previousPageUrl() { return ""; }
    __nextPageUrl() { return ""; }
    __lastPageUrl() { return ""; }
    currentObserver(current) {
        this.current = current;
        this.__previous = (current > this.__first) ? current - 1 : false;
        this.__next = (current < this.pages) ? current + 1 : false;
        this.changed.emit(current);
        if (this.type === "full") {
            this.updateSurroundingPages();
        }
        this.ease.start();
    }
    componentWillLoad() {
        this.__first = 1;
        this.__current = this.current;
        this.__previous = (this.current > this.__first) ? this.current - 1 : false;
        this.__next = (this.current < this.pages) ? this.current + 1 : false;
        this.__last = this.pages;
        this.updateSurroundingPages();
    }
    componentDidLoad() {
        setTimeout(() => {
            this.affixDistance();
        }, 300);
    }
    affixDistance() {
        const distance = this.element.shadowRoot.querySelector('.current-number');
        if (distance) {
            properties.set({
                "--indicator-left": `${distance.offsetLeft}px`
            }, this.element);
        }
    }
    updateSurroundingPages() {
        // @ts-ignore
        const pages = Array(this.pages).fill(0).map((item, index) => {
            const number = index + 1;
            return {
                number: number,
                url: this.formatUrl(number),
                visible: this.isVisible(number),
                current: number === this.current
            };
        });
        this.__surroundingPages = pages;
    }
    isVisible(number) {
        var minPad = this.__current - this.padding;
        var maxPad = this.__current + this.padding;
        if (maxPad >= this.pages) {
            maxPad = this.pages;
        }
        if (minPad < 1) {
            minPad = 1;
        }
        return number >= minPad && number <= maxPad;
    }
    handleChange(event) {
        event.preventDefault();
        const target = event.currentTarget;
        this.__current = parseInt(target.value);
    }
    handleClick(event) {
        event.preventDefault();
        const target = event.currentTarget;
        this.__current = parseInt(target.dataset.page);
    }
    formatUrl(pageNumber) {
        return this.url.format(pageNumber);
    }
    renderFirstPageButton() {
        const hidden = (this.__current > 1) ? "no" : "yes";
        return (h("a", { href: this.__firstPageUrl(), "data-page": this.__first, onClick: (event) => this.handleClick(event), class: "icon first", "data-hidden": hidden }, h("ion-icon", { name: "skip-backward" })));
    }
    renderPreviousPageButton() {
        const hidden = (typeof this.__previous === "number" && this.__current > 1) ? "no" : "yes";
        return (h("a", { href: this.__previousPageUrl(), "data-page": this.__previous, onClick: (event) => this.handleClick(event), class: "icon previous", "data-hidden": hidden }, h("ion-icon", { name: "rewind" })));
    }
    renderNextPageButton() {
        const hidden = (typeof this.__next === "number" || this.__current < this.pages) ? "no" : "yes";
        return (h("a", { href: this.__nextPageUrl(), "data-page": this.__next, onClick: (event) => this.handleClick(event), class: "icon next", "data-hidden": hidden }, h("ion-icon", { name: "fastforward" })));
    }
    renderLastPageButton() {
        const hidden = (this.__current < this.pages) ? "no" : "yes";
        return (h("a", { href: this.__lastPageUrl(), "data-page": this.__last, onClick: (event) => this.handleClick(event), class: "icon last", "data-hidden": hidden }, h("ion-icon", { name: "skip-forward" })));
    }
    renderPagesList() {
        return this.__surroundingPages.map((page) => {
            return (h("a", { href: page.url, "data-page": page.number, "data-visible": page.visible, "data-current": page.current, onClick: (event) => this.handleClick(event), class: (page.number === this.__current || page.number === this.current) ? 'current-number number' : 'number' }, page.number));
        });
    }
    renderPagesPreviousEllipsis() {
        const hidden = ((this.__current - this.padding) > 1) ? "no" : "yes";
        return (h("div", { class: "ellipsis previous", "data-hidden": hidden }, "\u2026"));
    }
    renderPagesNextEllipsis() {
        const hidden = ((this.__current + this.padding + 1) < this.pages) ? "no" : "yes";
        return (h("div", { class: "ellipsis next", "data-hidden": hidden }, "\u2026"));
    }
    render() {
        if (this.type === "full") {
            return (h("span", { class: "pagination-container" }, h("div", { class: "pagination-wrap" }, this.renderFirstPageButton(), this.renderPreviousPageButton(), h("div", { class: "pages" }, this.renderPagesPreviousEllipsis(), this.renderPagesList(), this.renderPagesNextEllipsis(), h("stellar-blur", { horizontal: this.blur }, h("div", { class: "indicator" }))), this.renderNextPageButton(), this.renderLastPageButton())));
        }
        else if (this.type === "compact") {
            return (h("span", { class: "compact-pagination-container" }, h("p", null, "Page"), h("stellar-input", { type: "number", size: "small", max: this.pages, value: this.__current, min: 1, onChange: (e) => { this.handleChange(e); } }), "of ", this.pages));
        }
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "__current": ["currentObserver"]
    }; }
    static get style() { return PaginationCss; }
};
Tunnel.injectProps(Pagination, ['dark']);

export { Pagination as stellar_pagination };
