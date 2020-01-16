import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';
import './colors-eb996d31.js';
import './_commonjsHelpers-bccf23a2.js';
import './css-custom-properties.min-d9d14253.js';
import { b as blurringEase } from './index-26976b63.js';
import './main-e9832563.js';
import './moment-5e7e00c2.js';

const ContentCss = ":host, :host *, :host *:before, :host *:after {\n  box-sizing: border-box;\n}\n\n:host {\n  contain: content;\n  display: none;\n  animation-name: fadeInUp;\n  animation-timing-function: var(--ease);\n  animation-duration: 350ms;\n  animation-fill-mode: both;\n  transform: translate3d(0, 15px, 0);\n  opacity: 0;\n}\n\n:host([open]) {\n  display: block;\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 15px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n";

const Content = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.open = false;
        this.ease = blurringEase({
            end: 6,
            start: -1,
            duration: 200,
            tick: (args) => {
                this.blur = args.value;
            },
            complete: () => {
                this.blur = 0;
                this.ease.stop();
            },
        });
        this.blur = 0;
    }
    componentWillLoad() {
        this.tab = document.querySelector(`stellar-tabs[name="${this.for}"] stellar-tab[href="#${this.element.id}"]`);
        if (window.location.hash && this.element.id.includes(window.location.hash)) {
            this.open = true;
            this.tab.activate();
        }
    }
    handleOpen() {
        this.element.scrollIntoView(true);
    }
    async handleActive(event) {
        this.parent = event.detail.parent;
        const contents = await this.parent.contents();
        if (event.detail.name !== this.element.id) {
            contents.forEach((element) => {
                element.open = element.id === event.detail.name;
                if (element.open) {
                    this.ease.start();
                }
            });
        }
    }
    render() {
        return (h("div", { class: "wrap", role: "tabpanel", "aria-hidden": !this.open ? "true" : "false" }, h("slot", null)));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "open": ["handleOpen"]
    }; }
    static get style() { return ContentCss; }
};

export { Content as stellar_content };
