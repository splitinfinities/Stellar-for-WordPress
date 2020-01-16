import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';

const BreadcrumbCss = ":host, :host *, :host *:before, :host *:after {\n    box-sizing: border-box;\n}\n\n:host {\n\tcontain: content;\n\t--clip-path: polygon(1em 100%, 0% 0%, calc(100% - 1em) 0%, 100% 100%, calc(100% - 1em) 100%, 0% 100%);\n\t--clip-path-first: polygon(0 100%, 0% 0%, calc(100% - 1em) 0%, 100% 100%, calc(100% - 1em) 100%, 0% 100%);\n\tdisplay: flex;\n\tposition: relative;\n\talign-items: center;\n\tjustify-content: center;\n\tclip-path: var(--clip-path);\n\tmargin: 0 0 0 -0.35em;\n\tbackground: var(--white);\n\ttext-align: center;\n\ttext-decoration: none;\n\tcolor: var(--theme-base8);\n}\n\n:host a:hover,\n:host a:focus,\n:host(:focus-within) {\n\tbackground: var(--theme-base0);\n\tcolor: var(--theme-base9);\n}\n\n:host([first]) a:hover,\n:host([first]) a:focus,\n:host([first]:focus-within) {\n\tbackground: var(--theme-base9);\n\tcolor: white;\n}\n\n:host ::slotted(*) {\n\t--margin: 0;\n}\n\n:host a {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 1em 1.75em;\n\theight: auto;\n\ttext-decoration: none;\n\twhite-space: nowrap;\n\tcolor: currentColor;\n\tfont-size: var(--font-size);\n\tfont-weight: 600;\n}\n\n:host a ion-icon {\n\tmargin-right: .25em;\n}\n\n:host(:hover),\n:host(:focus) {\n\tcolor: var(--white);\n\tbackground: var(--theme-base5);\n}\n\n:host([first]) {\n\tbackground: var(--theme-base7);\n\tcolor: var(--white);\n\tmargin: 0 -0.25rem 0 -0.15em;\n    position: sticky;\n    left: -.5rem;\n\tz-index: 2;\n\tclip-path: var(--clip-path-first);\n}\n\n:host([first]) a {\n    padding-left: 1.5em;\n    padding-right: 1.75em;\n}\n\n:host([first]) a ion-icon {\n\tmargin: 0;\n}\n\n:host([last]) {\n\tcolor: var(--gray9);\n\tbackground: var(--white);\n}\n\n:host([last]:hover),\n:host([last]:focus),\n:host([last]) a:hover,\n:host([last]) a:focus {\n\tbackground: white;\n\tcolor: var(--gray9);\n}\n\n:host([dark]) {\n\tbackground: var(--black);\n\tcolor: var(--theme-base0)\n}\n\n:host([dark]:hover),\n:host([dark]:focus),\n:host([dark]) a:hover,\n:host([dark]) a:focus,\n:host([dark]:focus-within) {\n\tcolor: var(--white);\n\tbackground: var(--theme-base7);\n}\n\n:host([dark][last]) {\n\tcolor: white;\n\tbackground: var(--black);\n}\n\n:host([dark][first]) {\n\tbackground: var(--theme-base9);\n}\n\n:host([dark][last]:hover),\n:host([dark][last]:focus),\n:host([dark][last]) a:hover,\n:host([dark][last]) a:focus {\n\tbackground: var(--black);\n\tcolor: white;\n}\n";

const Breadcrumb = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.href = "/";
        this.tag = "link";
        this.target = "_self";
        this.label = "Breadcrumb link";
        this.disabled = false;
        this.dark = false;
    }
    componentDidLoad() {
        this.label += ` for ${this.element.textContent}`;
    }
    getTag() {
        if (this.tag === "link") {
            return "a";
        }
        if (this.tag === "route") {
            return "stencil-route-link";
        }
    }
    render() {
        const Tag = this.getTag();
        // @ts-ignore
        return h(Tag, { class: "button", href: this.href, url: this.href, target: this.target, "aria-label": this.label, title: this.label, "data-disabled": this.disabled }, h("slot", null));
    }
    get element() { return getElement(this); }
    static get style() { return BreadcrumbCss; }
};
Tunnel.injectProps(Breadcrumb, ['dark']);

export { Breadcrumb as stellar_breadcrumb };
