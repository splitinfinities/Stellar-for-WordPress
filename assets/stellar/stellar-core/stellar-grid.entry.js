import { r as registerInstance, h, H as Host, g as getElement } from './index-cc4604b3.js';
import './_commonjsHelpers-bccf23a2.js';
import { e as eqjs } from './eq.min-27f8bedd.js';

const GridCss = ":host, :host *, :host *:before, :host *:after {\n    box-sizing: border-box;\n}\n\n:host {\n    --grid-width: 200px;\n    --grid-gap: 2rem;\n\n    contain: content;\n    position: relative;\n    display: flex;\n    display: grid;\n    flex-wrap: wrap;\n    grid-gap: var(--grid-gap);\n    grid-template-columns: repeat(auto-fit, minmax(var(--grid-width), 1fr));\n}\n\n:host([padding]) {\n    padding: var(--grid-gap);\n}\n\n/* Non-Responsive Grid */\n:host([noresponsive]) {\n    grid-template-columns: repeat(auto-fit, minmax(var(--grid-width), 1fr));\n}\n\n:host([noresponsive][cols=\"1\"]) {\n    grid-template-columns: 1fr;\n}\n\n:host([noresponsive][cols=\"2\"]) {\n    grid-template-columns: repeat(2, 1fr);\n}\n\n:host([noresponsive][cols=\"3\"]) {\n    grid-template-columns: repeat(3, 1fr);\n}\n\n:host([noresponsive][cols=\"4\"]) {\n    grid-template-columns: repeat(4, 1fr);\n}\n\n:host([noresponsive][cols=\"5\"]) {\n    grid-template-columns: repeat(5, 1fr);\n}\n\n:host([noresponsive][cols=\"6\"]) {\n    grid-template-columns: repeat(6, 1fr);\n}\n\n:host ::slotted(.width-all) {\n    grid-column: 1 / -1;\n}\n\n:host ::slotted(.width-2) {\n    grid-column: auto / span 2;\n}\n\n:host ::slotted(.width-3) {\n    grid-column: auto / span 3;\n}\n\n:host ::slotted(.width-4) {\n    grid-column: auto / span 4;\n}\n\n:host ::slotted(.width-5) {\n    grid-column: auto / span 5;\n}\n\n:host ::slotted(.width-6) {\n    grid-column: auto / span 6;\n}\n\n:host ::slotted(.height-all) {\n    grid-row: 1 / -1;\n}\n\n:host ::slotted(.height-2) {\n    grid-row: auto / span 2;\n}\n\n:host ::slotted(.height-3) {\n    grid-row: auto / span 3;\n}\n\n:host ::slotted(.height-4) {\n    grid-row: auto / span 4;\n}\n\n:host ::slotted(.height-5) {\n    grid-row: auto / span 5;\n}\n\n:host ::slotted(.height-6) {\n    grid-row: auto / span 6;\n}\n";

const Grid = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cols = "auto";
        this.compact = false;
        this.padding = false;
        this.align = "items-start";
        this.noresponsive = false;
    }
    async makeResponsive() {
        if (!this.noresponsive) {
            eqjs.definePts(this.element, {
                "tiny": 320,
                "small": 480,
                "medium": 640,
                "large": 800,
                "massive": 1024
            });
            this.refresh();
        }
    }
    componentWillLoad() {
        this.makeResponsive();
    }
    componentDidLoad() {
        this.makeResponsive();
    }
    async refresh() {
        var resizeEvent = window.document.createEvent('UIEvents');
        resizeEvent.initEvent('resize', true, false);
        window.dispatchEvent(resizeEvent);
    }
    render() {
        return h(Host, { class: `${this.align}` }, h("slot", null));
    }
    get element() { return getElement(this); }
    static get style() { return GridCss; }
};

export { Grid as stellar_grid };
