'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-c90f54d2.js');

class Callout {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.type = "default";
        this.theme = "gray";
    }
    componentDidLoad() {
        this.element.setAttribute('aria-label', `An ${this.type} message. ${this.element.textContent}`);
        this.element.setAttribute('aria-role', "status");
        this.element.setAttribute('tabindex', `0`);
        this.handleType();
        this.handleTheme();
    }
    handleTheme() {
        this.element.classList.forEach((c) => {
            if (c.startsWith('theme-')) {
                this.element.classList.remove(c);
            }
        });
        this.element.classList.add(`theme-${this.theme}`);
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
        return (__chunk_1.h("div", { class: "callout-wrap" }, __chunk_1.h("slot", null)));
    }
    get element() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "theme": ["handleTheme"],
        "type": ["handleType"]
    }; }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;padding:2rem;background-color:var(--theme-base4)}:host .callout-wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.db) .callout-wrap{display:block}:host ::slotted(*){color:var(--gray9)}:host-context(.dark-mode):host{background-color:var(--theme-base6)}"; }
}

exports.stellar_callout = Callout;
