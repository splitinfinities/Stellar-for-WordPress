import { h } from '@stencil/core';
export class Starscape {
    render() {
        return (h("stellar-parallax", null,
            h("stellar-parallax-section", { layer: 2, speed: -5 },
                h("div", { class: "stars" })),
            h("stellar-parallax-section", { layer: 1, speed: -3 },
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
