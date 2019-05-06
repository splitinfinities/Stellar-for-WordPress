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
    async refresh() {
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
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;font-family:inherit;--grid-gap:3rem}:host .layout{display:grid;grid-gap:var(--grid-gap,3rem);margin:0 auto;padding:4rem 0;width:95%;max-width:1024px;min-height:0;min-width:0}:host .layout>*{min-width:0}:host([size=tiny]) .layout{max-width:420px}:host([size=small]) .layout{max-width:700px}:host([size=medium]) .layout{max-width:1024px}:host([size=large]) .layout{max-width:1200px}:host([size=full]) .layout{max-width:100%}:host([size=flush]) .layout{max-width:100%;width:100%}:host([padding=none]) .layout{padding:0}:host([padding=tiny]) .layout{padding:.5rem 0}:host([padding=small]) .layout{padding:1rem 0}:host([padding=medium]) .layout{padding:2rem 0}:host([padding=large]) .layout{padding:4rem 0}:host([type=copy]) .layout{padding:3rem 0}:host([align=top]) .layout{-ms-flex-align:start;align-items:flex-start}:host([align=center]) .layout{-ms-flex-align:center;align-items:center}:host([align=baseline]) .layout{-ms-flex-align:baseline;align-items:baseline}:host([type=supporting-content-right]) ::slotted(aside){-ms-flex-order:1;order:1}:host ::slotted(*){min-width:0}\@media (min-width:700px){:host([type=sidebar-right]) .layout{grid-template-columns:3fr 1fr}:host([type=sidebar]) .layout{grid-template-columns:1fr 3fr}:host([type=half]) .layout{grid-template-columns:1fr 1fr}:host([type=supporting-content]) .layout{grid-template-columns:6fr 4fr}:host([type=supporting-content-right]) .layout{grid-template-columns:4fr 6fr}:host([type=supporting-content-right]) ::slotted(aside){-ms-flex-order:-1;order:-1}}"; }
}

export { Layout as StellarLayout };
