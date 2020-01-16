import { r as registerInstance, h, H as Host, g as getElement } from './index-cc4604b3.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';

const CalloutCss = ":host, :host *, :host *:before, :host *:after {\n    box-sizing: border-box;\n}\n\n:host {\n\tcontain: content;\n\tdisplay: block;\n\tpadding: 2rem;\n\tbackground-color: var(--theme-base4);\n}\n\n:host .callout-wrap {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n:host(.db) .callout-wrap {\n\tdisplay: block;\n}\n\n:host ::slotted(*) {\n\tcolor: var(--gray9);\n}\n\n:host([dark]) {\n\tbackground-color: var(--theme-base6);\n}\n";

const Callout = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dark = false;
        this.type = "default";
        this.theme = "gray";
    }
    componentDidLoad() {
        this.element.setAttribute('aria-label', `An ${this.type} message. ${this.element.textContent}`);
        this.element.setAttribute('aria-role', "status");
        this.element.setAttribute('tabindex', `0`);
        this.handleType();
    }
    handleType() {
        switch (this.type) {
            case "alert":
                this.theme = "yellow";
                break;
            case "error":
                this.theme = "red";
                break;
            case "info":
                this.theme = "cyan";
                break;
            case "success":
                this.theme = "green";
                break;
            case "default":
            case undefined:
                this.theme = "gray";
                break;
            default:
                this.theme = "gray";
                break;
        }
    }
    render() {
        return h(Host, { class: `theme-${this.theme}` }, h("div", { class: "callout-wrap" }, h("slot", null)));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "type": ["handleType"]
    }; }
    static get style() { return CalloutCss; }
};
Tunnel.injectProps(Callout, ['dark']);

export { Callout as stellar_callout };
