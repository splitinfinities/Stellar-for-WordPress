import { h } from '../stellar-core.core.js';

class Callout {
    constructor() {
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
        return (h("div", { class: "callout-wrap" },
            h("slot", null)));
    }
    static get is() { return "stellar-callout"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        },
        "theme": {
            "state": true,
            "watchCallbacks": ["handleTheme"]
        },
        "type": {
            "type": String,
            "attr": "type",
            "watchCallbacks": ["handleType"]
        }
    }; }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;padding:2rem;background-color:var(--theme-base4)}:host .callout-wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.db) .callout-wrap{display:block}:host ::slotted(*){color:var(--gray9)}:host-context(.dark-mode):host{background-color:var(--theme-base6)}"; }
}

export { Callout as StellarCallout };
