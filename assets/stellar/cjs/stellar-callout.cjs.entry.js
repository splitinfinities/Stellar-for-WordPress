'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');
require('./index-9d31ce96.js');
const theme = require('./theme-1038bd3c.js');

const CalloutCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;display:block;padding:2rem;background-color:var(--theme-base4)}:host .callout-wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.db) .callout-wrap{display:block}:host ::slotted(*){color:var(--gray9)}:host([dark]){background-color:var(--theme-base6)}";

const Callout = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return index.h(index.Host, { class: `theme-${this.theme}` }, index.h("div", { class: "callout-wrap" }, index.h("slot", null)));
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "type": ["handleType"]
    }; }
    static get style() { return CalloutCss; }
};
theme.Tunnel.injectProps(Callout, ['dark']);

exports.stellar_callout = Callout;
