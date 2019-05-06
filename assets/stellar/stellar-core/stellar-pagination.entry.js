import { c as registerInstance, h as createEvent, d as h, f as getElement } from './stellar-core-d63b686e.js';
import './chunk-452e3210.js';
import { a as properties } from './chunk-aefb00c1.js';
import { a as blurringEase } from './chunk-15cea9da.js';
import './chunk-f26db59a.js';

class Pagination {
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
        return (h("a", { href: this.__firstPageUrl(), "data-page": this.__first, onClick: (event) => this.handleClick(event), class: "icon first", "data-hidden": hidden }, h("stellar-asset", { name: "skip-backward", block: true })));
    }
    renderPreviousPageButton() {
        const hidden = (typeof this.__previous === "number" && this.__current > 1) ? "no" : "yes";
        return (h("a", { href: this.__previousPageUrl(), "data-page": this.__previous, onClick: (event) => this.handleClick(event), class: "icon previous", "data-hidden": hidden }, h("stellar-asset", { name: "rewind", block: true })));
    }
    renderNextPageButton() {
        const hidden = (typeof this.__next === "number" || this.__current < this.pages) ? "no" : "yes";
        return (h("a", { href: this.__nextPageUrl(), "data-page": this.__next, onClick: (event) => this.handleClick(event), class: "icon next", "data-hidden": hidden }, h("stellar-asset", { name: "fastforward", block: true })));
    }
    renderLastPageButton() {
        const hidden = (this.__current < this.pages) ? "no" : "yes";
        return (h("a", { href: this.__lastPageUrl(), "data-page": this.__last, onClick: (event) => this.handleClick(event), class: "icon last", "data-hidden": hidden }, h("stellar-asset", { name: "skip-forward", block: true })));
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
    static get style() { return ":host, :host *, :host *:before, :host *:after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host {\n  display: block;\n  color: var(--color);\n  font-size: 1.6rem;\n  --color: var(--theme-base6);\n  --hover: var(--theme-base9);\n  text-align: center;\n}\n\n:host .pagination-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n:host .indicator {\n  position: absolute;\n  top: .2rem;\n  left: var(--indicator-left, 50%);\n  -webkit-transition: all 220ms var(--ease) 0s;\n  transition: all 220ms var(--ease) 0s;\n  width: 2.4rem;\n  height: 1.6rem;\n  margin-left: -0.125em;\n  background: var(--theme-base5);\n  z-index: 0;\n  border-radius: 100%;\n}\n\n:host stellar-blur[horizontal=\"0\"] .indicator {\n  height: 2.4rem;\n  top: -0.2rem;\n}\n\n:host .pagination-wrap {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n}\n\n:host a {\n  text-decoration: none;\n  border-radius: 100%;\n}\n\n:host a.icon {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  color: var(--color);\n}\n\n:host a.icon:hover,\n:host a.icon:active {\n  color: var(--hover);\n}\n\n:host a.current-number:hover,\n:host a.current-number:active,\n:host a.current-number:focus {\n  color: white;\n}\n\n:host .ellipsis {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  margin: 0 0.25rem;\n}\n\n:host .pages {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  margin: 0 0.5rem;\n  position: relative;\n  -webkit-transition: all 200ms var(--ease) 0s;\n  transition: all 200ms var(--ease) 0s;\n}\n\n:host .number {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  color: currentColor;\n  font-weight: 700;\n  -webkit-transition: all 200ms var(--ease) 0ms;\n  transition: all 200ms var(--ease) 0ms;\n  margin: 1rem 0;\n  width: 0;\n  height: 0;\n  opacity: 1;\n  z-index: 1;\n  padding: 0;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n\n:host .number[data-visible=\"false\"] {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n\n:host .number[data-visible] {\n  width: 2rem;\n  height: 2rem;\n  opacity: 1;\n  padding: 0;\n  margin: 0 0.25em;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n}\n\n:host .number:hover,\n:host .number:active {\n  color: var(--hover);\n}\n\n:host .current-number {\n  margin: 1rem;\n  color: white;\n}\n\n:host .skip-button {\n  margin-left: 36px;\n  line-height: 0;\n}\n\n:host *[data-hidden=yes] {\n  display: none !important;\n}\n\n:host .compact-pagination-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: baseline;\n  align-items: baseline;\n}\n\n:host .compact-pagination-container stellar-input {\n  width: 5rem;\n  --padding: 0 1rem;\n  margin: 0 1rem;\n}\n\n:host stellar-blur {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n:host-context(.dark-mode):host a.number:hover,\n:host-context(.dark-mode):host a.number:active,\n:host-context(.dark-mode):host a.number:focus {\n  color: white;\n}\n\n:host-context(.dark-mode):host .current-number {\n  color: var(--gray9) !important;\n}\n\n:host-context(.dark-mode):host a.icon:hover,\n:host-context(.dark-mode):host a.icon:active,\n:host-context(.dark-mode):host a.icon:focus {\n  color: white;\n}"; }
}

export { Pagination as stellar_pagination };
