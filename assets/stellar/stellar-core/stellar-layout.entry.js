import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';
import './_commonjsHelpers-bccf23a2.js';
import { e as eqjs } from './eq.min-27f8bedd.js';

const LayoutCss = ":host, :host *, :host *:before, :host *:after {\n  box-sizing: border-box;\n}\n\n:host {\n  display: block;\n  position: relative;\n  font-family: inherit;\n  contain: content;\n  --grid-gap: 3rem;\n  --padding: 4rem;\n  --layout: 1fr;\n  --tiny: 420px;\n  --small: 700px;\n  --medium: 1024px;\n  --large: 1200px;\n  --width: 95%;\n}\n\n:host .layout {\n  display: grid;\n  grid-gap: var(--grid-gap, 3rem);\n  margin: 0 auto;\n  padding: var(--padding) 0;\n  width: var(--width);\n  max-width: var(--medium);\n  min-height: 0;\n  min-width: 0;\n  grid-template-columns: var(--layout);\n}\n\n:host .layout > * {\n  min-width: 0;\n}\n\n:host([size=\"tiny\"]) .layout {\n  max-width: var(--tiny);\n}\n\n:host([size=\"small\"]) .layout {\n  max-width: var(--small);\n}\n\n:host([size=\"medium\"]) .layout {\n  max-width: var(--medium);\n}\n\n:host([size=\"large\"]) .layout {\n  max-width: var(--large);\n}\n\n:host([size=\"full\"]) .layout {\n  max-width: 100%;\n}\n\n:host([size=\"flush\"]) .layout {\n  max-width: 100%;\n  width: 100%;\n}\n\n:host([padding=\"none\"]) {\n  --padding: 0;\n}\n\n:host([padding=\"tiny\"]) {\n  --padding: 0.5rem;\n}\n\n:host([padding=\"small\"]) {\n  --padding: 1rem;\n}\n\n:host([padding=\"medium\"]) {\n  --padding: 2rem;\n}\n\n:host([padding=\"large\"]) {\n  --padding: 4rem;\n}\n\n:host([align=\"top\"]) .layout {\n  align-items: flex-start;\n}\n\n:host([align=\"center\"]) .layout {\n  align-items: center;\n}\n\n:host([align=\"baseline\"]) .layout {\n  align-items: baseline;\n}\n\n:host([type=\"supporting-content-right\"]) ::slotted(aside) {\n  order: 1;\n}\n\n:host ::slotted(*) {\n  min-width: 0;\n}\n\n:host([has-nav]) .layout {\n  padding-bottom: 0;\n}\n\n:host ::slotted(*[slot=\"nav\"]) {\n  margin-top: var(--padding);\n}\n\n@media (min-width: 700px) {\n  :host([type=\"one-third\"]) {\n    --layout: 2fr 1fr;\n  }\n\n  :host([type=\"one-third-right\"]) {\n    --layout: 1fr 2fr;\n  }\n\n  :host([type=\"sidebar-right\"]) {\n    --layout: 3fr 1fr;\n  }\n\n  :host([type=\"sidebar\"]) {\n    --layout: 1fr 3fr;\n  }\n\n  :host([type=\"half\"]) {\n    --layout: 1fr 1fr;\n  }\n\n  :host([type=\"supporting-content\"]) {\n    --layout: 6fr 4fr;\n  }\n\n  :host([type=\"supporting-content-right\"]) {\n    --layout: 4fr 6fr;\n  }\n\n  :host([type=\"split-screen\"]) {\n    --layout: 1fr 1fr;\n  }\n\n  :host([type=\"supporting-content-right\"]) ::slotted(aside) {\n    order: -1;\n  }\n}\n\n\n\n\n/*\n\nstellar-header + :host .layout {\n  padding-top: 3rem;\n}\n\n:host + :host .layout {\n  padding-top: 0;\n}\n\nmain > :host:first-of-type > .layout {\n  padding-top: 0;\n}\n\n\n */\n";

const Layout = class {
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
        resizeEvent.initEvent('resize', true, false);
        window.dispatchEvent(resizeEvent);
    }
    render() {
        return (h("div", { class: "layout" }, h("slot", null), h("slot", { name: "nav" })));
    }
    get element() { return getElement(this); }
    static get style() { return LayoutCss; }
};

export { Layout as stellar_layout };
