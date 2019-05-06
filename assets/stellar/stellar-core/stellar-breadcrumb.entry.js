import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';

class Breadcrumb {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.href = "/";
        this.target = "_self";
        this.label = "Breadcrumb link";
        this.disabled = false;
    }
    componentDidLoad() {
        this.label += ` for ${this.element.textContent}`;
    }
    render() {
        return (h("a", { class: "button", href: this.href, target: this.target, "aria-label": this.label, title: this.label, "data-disabled": this.disabled }, h("slot", null)));
    }
    get element() { return getElement(this); }
    static get style() { return ":host, :host *, :host *:before, :host *:after {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n:host {\n	display: -ms-flexbox;\n	display: flex;\n	position: relative;\n	-ms-flex-align: center;\n	align-items: center;\n	-ms-flex-pack: center;\n	justify-content: center;\n	-webkit-clip-path: polygon(1em 100%, 0% 0%, calc(100% - 1em) 0%, 100% 100%, calc(100% - 1em) 100%, 0% 100%);\n	clip-path: polygon(1em 100%, 0% 0%, calc(100% - 1em) 0%, 100% 100%, calc(100% - 1em) 100%, 0% 100%);\n	-webkit-clip-path: polygon(calc(100% - .5em) 0, 100% 50%, calc(100% - 0.5em) 100%, 0 100%, calc(0% + 0.5em) 50%, 0 0);\n	clip-path: polygon(calc(100% - .5em) 0, 100% 50%, calc(100% - 0.5em) 100%, 0 100%, calc(0% + 0.5em) 50%, 0 0);\n	margin: 0 0 0 -0.35em;\n	background: var(--white);\n	text-align: center;\n	text-decoration: none;\n	color: var(--theme-base8);\n}\n\n:host a:hover,\n:host a:focus,\n:host(:focus-within) {\n	background: var(--theme-base5);\n	color: white;\n}\n\n:host a {\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-align: center;\n	align-items: center;\n	padding: 1em 1.75em;\n	height: auto;\n	text-decoration: none;\n	white-space: nowrap;\n	color: currentColor;\n	font-size: var(--font-size);\n	font-weight: 600;\n}\n\n:host a stellar-asset {\n	margin-right: .25em;\n}\n\n:host(:hover),\n:host(:focus) {\n	color: var(--white);\n	background: var(--theme-base5);\n}\n\n:host([first]) {\n	background: var(--theme-base7);\n	color: var(--white);\n	margin: 0 -0.25rem 0 -0.15em;\n    position: -webkit-sticky;\n    position: sticky;\n    left: -.5rem;\n    z-index: 2;\n}\n\n:host([first]) a {\n    padding-left: 1.25em;\n    padding-right: 1.25em;\n}\n\n:host([first]) a stellar-asset {\n	margin: 0;\n}\n\n:host([last]) {\n	color: var(--gray9);\n	background: var(--white);\n}\n\n:host([last]:hover),\n:host([last]:focus),\n:host([last]) a:hover,\n:host([last]) a:focus {\n	background: white;\n	color: var(--gray9);\n}\n\n:host-context(.dark-mode) {\n	background: var(--black);\n	color: var(--theme-base0)\n}\n\n:host-context(.dark-mode):host(:hover),\n:host-context(.dark-mode):host(:focus),\n:host-context(.dark-mode):host a:hover,\n:host-context(.dark-mode):host a:focus,\n:host-context(.dark-mode):host(:focus-within) {\n	color: var(--white);\n	background: var(--theme-base7);\n}\n\n:host-context(.dark-mode):host([last]) {\n	color: white;\n	background: var(--black);\n}\n\n:host-context(.dark-mode):host([first]) {\n	background: var(--theme-base9);\n}\n\n:host-context(.dark-mode):host([last]:hover),\n:host-context(.dark-mode):host([last]:focus),\n:host-context(.dark-mode):host([last]) a:hover,\n:host-context(.dark-mode):host([last]) a:focus {\n	background: var(--black);\n	color: white;\n}"; }
}

export { Breadcrumb as stellar_breadcrumb };
