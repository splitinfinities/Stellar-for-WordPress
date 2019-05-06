import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';

class Callout {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { class: "callout-wrap" }, h("slot", null)));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "theme": ["handleTheme"],
        "type": ["handleType"]
    }; }
    static get style() { return ":host, :host *, :host *:before, :host *:after {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n:host {\n	display: block;\n	padding: 2rem;\n	background-color: var(--theme-base4);\n}\n\n:host .callout-wrap {\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-align: center;\n	align-items: center;\n}\n\n:host(.db) .callout-wrap {\n	display: block;\n}\n\n:host ::slotted(*) {\n	color: var(--gray9);\n}\n\n:host-context(.dark-mode):host {\n	background-color: var(--theme-base6);\n}"; }
}

export { Callout as stellar_callout };
