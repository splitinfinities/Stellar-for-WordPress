import { Component, Element, h } from '@stencil/core';
export class Starscape {
    render() {
        return (h("stellar-parallax", { horizontal: true },
            h("stellar-parallax-section", { speed: 5 },
                h("div", { class: "stars" })),
            h("stellar-parallax-section", { speed: -10 },
                h("div", { class: "stars" })),
            h("stellar-parallax-section", { speed: -4 },
                h("div", { class: "stars" }))));
    }
    static get is() { return "stellar-starscape"; }
    static get originalStyleUrls() { return {
        "$": ["starscape.css"]
    }; }
    static get styleUrls() { return {
        "$": ["starscape.css"]
    }; }
    static get elementRef() { return "element"; }
}
