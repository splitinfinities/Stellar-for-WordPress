import { Component, Host, h, Element } from '@stencil/core';
export class HorizontalScroll {
    render() {
        return (h(Host, { style: { "--scroll-height": `${this.el.offsetWidth}px` } },
            h("div", null,
                h("slot", null))));
    }
    static get is() { return "horizontal-scroll"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["horizontal-scroll.css"]
    }; }
    static get styleUrls() { return {
        "$": ["horizontal-scroll.css"]
    }; }
    static get elementRef() { return "el"; }
}
