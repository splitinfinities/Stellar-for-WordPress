import { h } from '../stellar-core.core.js';

import './chunk-7646164d.js';
import { a as eqjs } from './chunk-27578b57.js';

class Layout {
    constructor() {
        this.size = "medium";
        this.padding = "medium";
        this.align = "top";
    }
    componentWillLoad() {
        eqjs.definePts(this.element, {
            "tiny": 320,
            "small": 480,
            "medium": 640,
            "large": 800,
            "massive": 1024,
        });
        this.refresh();
    }
    componentDidLoad() {
        this.refresh();
    }
    refresh() {
        var resizeEvent = window.document.createEvent('UIEvents');
        resizeEvent.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(resizeEvent);
    }
    render() {
        return (h("div", { class: "layout" },
            h("slot", null)));
    }
    static get is() { return "stellar-layout"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "align": {
            "type": String,
            "attr": "align",
            "reflectToAttr": true
        },
        "element": {
            "elementRef": true
        },
        "padding": {
            "type": String,
            "attr": "padding",
            "reflectToAttr": true
        },
        "refresh": {
            "method": true
        },
        "size": {
            "type": String,
            "attr": "size",
            "reflectToAttr": true
        },
        "type": {
            "type": String,
            "attr": "type",
            "reflectToAttr": true
        }
    }; }
    static get style() { return ".sc-stellar-layout-h, .sc-stellar-layout-h   *.sc-stellar-layout, .sc-stellar-layout-h   .sc-stellar-layout:after, .sc-stellar-layout-h   .sc-stellar-layout:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-layout-h{display:block;font-family:inherit;--grid-gap:3rem}.sc-stellar-layout-h   .layout.sc-stellar-layout{display:grid;grid-gap:var(--grid-gap,3rem);margin:0 auto;padding:4rem 0;width:95%;max-width:1024px;min-height:0;min-width:0}.sc-stellar-layout-h   .layout.sc-stellar-layout > *.sc-stellar-layout{min-width:0}[size=tiny].sc-stellar-layout-h   .layout.sc-stellar-layout{max-width:420px}[size=small].sc-stellar-layout-h   .layout.sc-stellar-layout{max-width:700px}[size=medium].sc-stellar-layout-h   .layout.sc-stellar-layout{max-width:1024px}[size=large].sc-stellar-layout-h   .layout.sc-stellar-layout{max-width:1200px}[size=full].sc-stellar-layout-h   .layout.sc-stellar-layout{max-width:100%}[size=flush].sc-stellar-layout-h   .layout.sc-stellar-layout{max-width:100%;width:100%}[padding=none].sc-stellar-layout-h   .layout.sc-stellar-layout{padding:0}[padding=tiny].sc-stellar-layout-h   .layout.sc-stellar-layout{padding:.5rem 0}[padding=small].sc-stellar-layout-h   .layout.sc-stellar-layout{padding:1rem 0}[padding=medium].sc-stellar-layout-h   .layout.sc-stellar-layout{padding:2rem 0}[padding=large].sc-stellar-layout-h   .layout.sc-stellar-layout{padding:4rem 0}[type=copy].sc-stellar-layout-h   .layout.sc-stellar-layout{padding:3rem 0}[align=top].sc-stellar-layout-h   .layout.sc-stellar-layout{-ms-flex-align:start;align-items:flex-start}[align=center].sc-stellar-layout-h   .layout.sc-stellar-layout{-ms-flex-align:center;align-items:center}[align=baseline].sc-stellar-layout-h   .layout.sc-stellar-layout{-ms-flex-align:baseline;align-items:baseline}.sc-stellar-layout-h[type=supporting-content-right] .sc-stellar-layout-s > aside{-ms-flex-order:1;order:1}.sc-stellar-layout-h .sc-stellar-layout-s > *{min-width:0}\@media (min-width:700px){[type=sidebar-right].sc-stellar-layout-h   .layout.sc-stellar-layout{grid-template-columns:3fr 1fr}[type=sidebar].sc-stellar-layout-h   .layout.sc-stellar-layout{grid-template-columns:1fr 3fr}[type=half].sc-stellar-layout-h   .layout.sc-stellar-layout{grid-template-columns:1fr 1fr}[type=supporting-content].sc-stellar-layout-h   .layout.sc-stellar-layout{grid-template-columns:6fr 4fr}[type=supporting-content-right].sc-stellar-layout-h   .layout.sc-stellar-layout{grid-template-columns:4fr 6fr}.sc-stellar-layout-h[type=supporting-content-right] .sc-stellar-layout-s > aside{-ms-flex-order:-1;order:-1}}"; }
}

export { Layout as StellarLayout };
