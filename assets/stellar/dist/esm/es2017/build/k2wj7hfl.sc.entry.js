import { h } from '../stellar-core.core.js';

import './chunk-7646164d.js';
import { a as properties } from './chunk-340b8099.js';
import './chunk-9f751763.js';
import { a as blurringEase } from './chunk-a955a305.js';
import './chunk-5ce278cb.js';

class Pagination {
    constructor() {
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
        return (h("a", { href: this.__firstPageUrl(), "data-page": this.__first, onClick: (event) => this.handleClick(event), class: "icon first", "data-hidden": hidden },
            h("stellar-asset", { name: "skip-backward", block: true })));
    }
    renderPreviousPageButton() {
        const hidden = (typeof this.__previous === "number" && this.__current > 1) ? "no" : "yes";
        return (h("a", { href: this.__previousPageUrl(), "data-page": this.__previous, onClick: (event) => this.handleClick(event), class: "icon previous", "data-hidden": hidden },
            h("stellar-asset", { name: "rewind", block: true })));
    }
    renderNextPageButton() {
        const hidden = (typeof this.__next === "number" || this.__current < this.pages) ? "no" : "yes";
        return (h("a", { href: this.__nextPageUrl(), "data-page": this.__next, onClick: (event) => this.handleClick(event), class: "icon next", "data-hidden": hidden },
            h("stellar-asset", { name: "fastforward", block: true })));
    }
    renderLastPageButton() {
        const hidden = (this.__current < this.pages) ? "no" : "yes";
        return (h("a", { href: this.__lastPageUrl(), "data-page": this.__last, onClick: (event) => this.handleClick(event), class: "icon last", "data-hidden": hidden },
            h("stellar-asset", { name: "skip-forward", block: true })));
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
            return (h("span", { class: "pagination-container" },
                h("div", { class: "pagination-wrap" },
                    this.renderFirstPageButton(),
                    this.renderPreviousPageButton(),
                    h("div", { class: "pages" },
                        this.renderPagesPreviousEllipsis(),
                        this.renderPagesList(),
                        this.renderPagesNextEllipsis(),
                        h("stellar-blur", { horizontal: this.blur },
                            h("div", { class: "indicator" }))),
                    this.renderNextPageButton(),
                    this.renderLastPageButton())));
        }
        else if (this.type === "compact") {
            return (h("span", { class: "compact-pagination-container" },
                h("p", null, "Page"),
                h("stellar-input", { type: "number", size: "small", max: this.pages, value: this.__current, min: 1, onChange: (e) => { this.handleChange(e); } }),
                "of ",
                this.pages));
        }
    }
    static get is() { return "stellar-pagination"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "__current": {
            "state": true,
            "watchCallbacks": ["currentObserver"]
        },
        "__first": {
            "state": true
        },
        "__last": {
            "state": true
        },
        "__next": {
            "state": true
        },
        "__previous": {
            "state": true
        },
        "__surroundingPages": {
            "state": true
        },
        "blur": {
            "state": true
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "current": {
            "type": Number,
            "attr": "current",
            "reflectToAttr": true,
            "mutable": true
        },
        "ease": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "padding": {
            "type": Number,
            "attr": "padding",
            "reflectToAttr": true,
            "mutable": true
        },
        "pages": {
            "type": Number,
            "attr": "pages",
            "reflectToAttr": true,
            "mutable": true
        },
        "type": {
            "type": String,
            "attr": "type",
            "reflectToAttr": true,
            "mutable": true
        },
        "url": {
            "type": "Any",
            "attr": "url"
        }
    }; }
    static get events() { return [{
            "name": "changed",
            "method": "changed",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-stellar-pagination-h, .sc-stellar-pagination-h   *.sc-stellar-pagination, .sc-stellar-pagination-h   .sc-stellar-pagination:after, .sc-stellar-pagination-h   .sc-stellar-pagination:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-pagination-h{display:block;color:var(--color);font-size:1.6rem;--color:var(--theme-base6);--hover:var(--theme-base9);text-align:center}.sc-stellar-pagination-h   .pagination-container.sc-stellar-pagination{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.sc-stellar-pagination-h   .indicator.sc-stellar-pagination{position:absolute;top:.2rem;left:var(--indicator-left,50%);-webkit-transition:all .22s var(--ease) 0s;transition:all .22s var(--ease) 0s;width:2.4rem;height:1.6rem;margin-left:-.125em;background:var(--theme-base5);z-index:0;border-radius:100%}.sc-stellar-pagination-h   stellar-blur[horizontal=\"0\"].sc-stellar-pagination   .indicator.sc-stellar-pagination{height:2.4rem;top:-.2rem}.sc-stellar-pagination-h   .pagination-wrap.sc-stellar-pagination{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}.sc-stellar-pagination-h   a.sc-stellar-pagination{text-decoration:none;border-radius:100%}.sc-stellar-pagination-h   a.icon.sc-stellar-pagination{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:2rem;height:2rem;color:var(--color)}.sc-stellar-pagination-h   a.icon.sc-stellar-pagination:active, .sc-stellar-pagination-h   a.icon.sc-stellar-pagination:hover{color:var(--hover)}.sc-stellar-pagination-h   a.current-number.sc-stellar-pagination:active, .sc-stellar-pagination-h   a.current-number.sc-stellar-pagination:focus, .sc-stellar-pagination-h   a.current-number.sc-stellar-pagination:hover{color:#fff}.sc-stellar-pagination-h   .ellipsis.sc-stellar-pagination{width:2rem;height:2rem;margin:0 .25rem}.sc-stellar-pagination-h   .ellipsis.sc-stellar-pagination, .sc-stellar-pagination-h   .pages.sc-stellar-pagination{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.sc-stellar-pagination-h   .pages.sc-stellar-pagination{margin:0 .5rem;position:relative;-webkit-transition:all .2s var(--ease) 0s;transition:all .2s var(--ease) 0s}.sc-stellar-pagination-h   .number.sc-stellar-pagination{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:currentColor;font-weight:700;-webkit-transition:all .2s var(--ease) 0ms;transition:all .2s var(--ease) 0ms;margin:1rem 0;width:0;height:0;opacity:1;z-index:1;padding:0}.sc-stellar-pagination-h   .number.sc-stellar-pagination, .sc-stellar-pagination-h   .number[data-visible=false].sc-stellar-pagination{-webkit-transform:scale(0);transform:scale(0)}.sc-stellar-pagination-h   .number[data-visible].sc-stellar-pagination{width:2rem;height:2rem;opacity:1;padding:0;margin:0 .25em;-webkit-transform:scale(1);transform:scale(1)}.sc-stellar-pagination-h   .number.sc-stellar-pagination:active, .sc-stellar-pagination-h   .number.sc-stellar-pagination:hover{color:var(--hover)}.sc-stellar-pagination-h   .current-number.sc-stellar-pagination{margin:1rem;color:#fff}.sc-stellar-pagination-h   .skip-button.sc-stellar-pagination{margin-left:36px;line-height:0}.sc-stellar-pagination-h   [data-hidden=yes].sc-stellar-pagination{display:none!important}.sc-stellar-pagination-h   .compact-pagination-container.sc-stellar-pagination{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline}.sc-stellar-pagination-h   .compact-pagination-container.sc-stellar-pagination   stellar-input.sc-stellar-pagination{width:5rem;--padding:0 1rem;margin:0 1rem}.sc-stellar-pagination-h   stellar-blur.sc-stellar-pagination{position:absolute;width:100%;height:100%}.dark-mode.sc-stellar-pagination-h -no-combinator.sc-stellar-pagination-h   a.number.sc-stellar-pagination:active, .dark-mode   .sc-stellar-pagination-h -no-combinator.sc-stellar-pagination-h   a.number.sc-stellar-pagination:active, .dark-mode.sc-stellar-pagination-h -no-combinator.sc-stellar-pagination-h   a.number.sc-stellar-pagination:focus, .dark-mode   .sc-stellar-pagination-h -no-combinator.sc-stellar-pagination-h   a.number.sc-stellar-pagination:focus, .dark-mode.sc-stellar-pagination-h -no-combinator.sc-stellar-pagination-h   a.number.sc-stellar-pagination:hover, .dark-mode   .sc-stellar-pagination-h -no-combinator.sc-stellar-pagination-h   a.number.sc-stellar-pagination:hover{color:#fff}.dark-mode.sc-stellar-pagination-h -no-combinator.sc-stellar-pagination-h   .current-number.sc-stellar-pagination, .dark-mode   .sc-stellar-pagination-h -no-combinator.sc-stellar-pagination-h   .current-number.sc-stellar-pagination{color:var(--gray9)!important}.dark-mode.sc-stellar-pagination-h -no-combinator.sc-stellar-pagination-h   a.icon.sc-stellar-pagination:active, .dark-mode   .sc-stellar-pagination-h -no-combinator.sc-stellar-pagination-h   a.icon.sc-stellar-pagination:active, .dark-mode.sc-stellar-pagination-h -no-combinator.sc-stellar-pagination-h   a.icon.sc-stellar-pagination:focus, .dark-mode   .sc-stellar-pagination-h -no-combinator.sc-stellar-pagination-h   a.icon.sc-stellar-pagination:focus, .dark-mode.sc-stellar-pagination-h -no-combinator.sc-stellar-pagination-h   a.icon.sc-stellar-pagination:hover, .dark-mode   .sc-stellar-pagination-h -no-combinator.sc-stellar-pagination-h   a.icon.sc-stellar-pagination:hover{color:#fff}"; }
}

export { Pagination as StellarPagination };
