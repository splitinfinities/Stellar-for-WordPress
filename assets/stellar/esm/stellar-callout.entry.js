import { r as registerInstance, h, H as Host, d as getElement } from './index-bcfb4a9f.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-0e374e95.js';

const CalloutCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;display:block;padding:2rem;background-color:var(--theme-base4)}:host .callout-wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.db) .callout-wrap{display:block}:host ::slotted(*){color:var(--gray9)}:host([dark]){background-color:var(--theme-base6)}";

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
