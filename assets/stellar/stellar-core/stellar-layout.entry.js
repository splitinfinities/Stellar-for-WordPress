import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';
import './chunk-452e3210.js';
import { a as eqjs } from './chunk-0e7bffec.js';

class Layout {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { class: "layout" }, h("slot", null)));
    }
    get element() { return getElement(this); }
    static get style() { return ":host, :host *, :host *:before, :host *:after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host {\n  display: block;\n  font-family: inherit;\n  --grid-gap: 3rem;\n}\n\n:host .layout {\n  display: grid;\n  grid-gap: var(--grid-gap, 3rem);\n  margin: 0 auto;\n  padding: 4rem 0;\n  width: 95%;\n  max-width: 1024px;\n  min-height: 0;\n  min-width: 0;\n}\n\n:host .layout > * {\n  min-width: 0;\n}\n\n:host([size=\"tiny\"]) .layout {\n  max-width: 420px;\n}\n\n:host([size=\"small\"]) .layout {\n  max-width: 700px;\n}\n\n:host([size=\"medium\"]) .layout {\n  max-width: 1024px;\n}\n\n:host([size=\"large\"]) .layout {\n  max-width: 1200px;\n}\n\n:host([size=\"full\"]) .layout {\n  max-width: 100%;\n}\n\n:host([size=\"flush\"]) .layout {\n  max-width: 100%;\n  width: 100%;\n}\n\n:host([padding=\"none\"]) .layout {\n  padding: 0;\n}\n\n:host([padding=\"tiny\"]) .layout {\n  padding: 0.5rem 0;\n}\n\n:host([padding=\"small\"]) .layout {\n  padding: 1rem 0;\n}\n\n:host([padding=\"medium\"]) .layout {\n  padding: 2rem 0;\n}\n\n:host([padding=\"large\"]) .layout {\n  padding: 4rem 0;\n}\n\n:host([type=\"copy\"]) .layout {\n  padding: 3rem 0;\n}\n\n:host([align=\"top\"]) .layout {\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n\n:host([align=\"center\"]) .layout {\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n:host([align=\"baseline\"]) .layout {\n  -ms-flex-align: baseline;\n  align-items: baseline;\n}\n\n:host([type=\"supporting-content-right\"]) ::slotted(aside) {\n  -ms-flex-order: 1;\n  order: 1;\n}\n\n:host ::slotted(*) {\n  min-width: 0;\n}\n\n\@media (min-width: 700px) {\n  :host([type=\"sidebar-right\"]) .layout {\n    grid-template-columns: 3fr 1fr;\n  }\n\n  :host([type=\"sidebar\"]) .layout {\n    grid-template-columns: 1fr 3fr;\n  }\n\n  :host([type=\"half\"]) .layout {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  :host([type=\"supporting-content\"]) .layout {\n    grid-template-columns: 6fr 4fr;\n  }\n\n  :host([type=\"supporting-content-right\"]) .layout {\n    grid-template-columns: 4fr 6fr;\n  }\n\n  :host([type=\"supporting-content-right\"]) ::slotted(aside) {\n    -ms-flex-order: -1;\n    order: -1;\n  }\n}\n\n\n\n\n/*\n\nstellar-header + :host .layout {\n  padding-top: 3rem;\n}\n\n:host + :host .layout {\n  padding-top: 0;\n}\n\nmain > :host:first-of-type > .layout {\n  padding-top: 0;\n}\n\n\n */"; }
}

export { Layout as stellar_layout };
