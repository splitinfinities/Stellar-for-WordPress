import { d as registerInstance, f as h, g as getElement } from './stellar-core-1e602ba1.js';
import './chunk-40f083d9.js';
import { a as eqjs } from './chunk-e7fcfe34.js';

class Layout {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.size = "medium";
        this.padding = "medium";
        this.align = "baseline";
        this.content = "baseline";
    }
    componentWillLoad() {
        const navs = Array.from(this.element.querySelectorAll('*[slot="nav"]'));
        this.hasNav = navs.length > 0;
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
        return (h("div", { class: "layout" }, h("slot", null), h("slot", { name: "nav" })));
    }
    get element() { return getElement(this); }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;position:relative;font-family:inherit;--grid-gap:3rem;--padding:4rem}:host .layout{display:grid;grid-gap:var(--grid-gap,3rem);margin:0 auto;padding:var(--padding) 0;width:95%;max-width:1024px;min-height:0;min-width:0}:host .layout>*{min-width:0}:host([size=tiny]) .layout{max-width:420px}:host([size=small]) .layout{max-width:700px}:host([size=medium]) .layout{max-width:1024px}:host([size=large]) .layout{max-width:1200px}:host([size=full]) .layout{max-width:100%}:host([size=flush]) .layout{max-width:100%;width:100%}:host([padding=none]){--padding:0}:host([padding=tiny]){--padding:0.5rem}:host([padding=small]){--padding:1rem}:host([padding=medium]){--padding:2rem}:host([padding=large]){--padding:4rem}:host([align=top]) .layout{-ms-flex-align:start;align-items:flex-start}:host([align=center]) .layout{-ms-flex-align:center;align-items:center}:host([align=baseline]) .layout{-ms-flex-align:baseline;align-items:baseline}:host([type=supporting-content-right]) ::slotted(aside){-ms-flex-order:1;order:1}:host ::slotted(*){min-width:0}:host([has-nav]) .layout{padding-bottom:0}:host ::slotted([slot=nav]){margin-top:var(--padding)}\@media (min-width:700px){:host([type=sidebar-right]) .layout{grid-template-columns:3fr 1fr}:host([type=sidebar]) .layout{grid-template-columns:1fr 3fr}:host([type=half]) .layout{grid-template-columns:1fr 1fr}:host([type=supporting-content]) .layout{grid-template-columns:6fr 4fr}:host([type=supporting-content-right]) .layout{grid-template-columns:4fr 6fr}:host([type=supporting-content-right]) ::slotted(aside){-ms-flex-order:-1;order:-1}}"; }
}

export { Layout as stellar_layout };
