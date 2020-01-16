import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';
import './utils-06e0aad6.js';
import './index-88205cad.js';

const BreadcrumbsCss = ":host, :host *, :host *:before, :host *:after {\n    box-sizing: border-box;\n}\n\n:host {\n\tcontain: content;\n\t--background: white;\n\t--clip-path: polygon(0 100%, 0% 0%, calc(100% - 1em) 0%, 100% 100%, calc(100% - 1em) 100%, 0% 100%);\n\t--height: var(--ms5);\n\t--font-size: var(--ms0);\n\tdisplay: inline-block;\n\tborder-bottom: 1px solid var(--background);\n\tbackground: var(--white);\n\theight: var(--height);\n\toverflow-x: auto;\n\toverflow-y: hidden;\n\tfont-size: var(--font-size);\n\tclip-path: var(--clip-path);\n}\n\n:host([size=\"tiny\"]) {\n\t--height: var(--ms3);\n\t--font-size: var(--ms-2);\n}\n\n:host([size=\"small\"]) {\n\t--height: var(--ms4);\n\t--font-size: var(--ms-1);\n}\n\n:host([size=\"medium\"]) {\n\t--height: var(--ms6);\n\t--font-size: var(--ms1);\n}\n\n:host([size=\"large\"]) {\n\t--height: var(--ms7);\n\t--font-size: var(--ms2);\n}\n\n:host ion-icon {\n\tfont-size: 2em;\n\tline-height: 0;\n}\n\n:host stellar-label {\n  line-height: 1;\n  margin: 0 0 0 0.25rem;\n  color: white;\n}\n\n:host .breadcrumbs {\n\tdisplay: inline-flex;\n\tposition: relative;\n\tbackground: var(--background);\n\twidth: auto;\n\theight: 100%;\n}\n\n:host .breadcrumbs .flush {\n\tdisplay: block;\n\tright: 0;\n\tflex: 0 0 2rem;\n\tmargin-left: -2rem;\n\tbackground: transparent;\n\twidth: 2rem;\n\theight: inherit;\n}\n\n:host .breadcrumbs .flush-left {\n\tdisplay: block;\n\tleft: 0;\n\tflex: 0 0 2rem;\n\tmargin-right: -2.5rem;\n\tbackground: transparent;\n\twidth: 2rem;\n\theight: inherit;\n}\n\n:host([dark]) {\n\t--background: linear-gradient(45deg, var(--theme-base7) 0%, var(--theme-base9) 100%);\n}\n";

const Breadcrumbs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icon = 'analytics';
        this.icon_size = 0.85;
        this.tag = "link";
        this.home = "/";
        this.label = "Home";
        this.description = "An icon that shows the main page you're on";
        this.dark = false;
        this.color = "blue5";
    }
    componentWillLoad() {
        this.updateBreadcrumbs();
    }
    updateBreadcrumbs() {
        const last_breadcrumb = this.el.querySelector('stellar-breadcrumb:last-of-type');
        const breadcrumbs = this.el.querySelectorAll('stellar-breadcrumb');
        Array.from(breadcrumbs).forEach((breadcrumb) => {
            breadcrumb.last = false;
        });
        if (last_breadcrumb) {
            last_breadcrumb.last = true;
        }
    }
    render() {
        return (h("div", { id: "breadcumb_wrapper", class: "breadcrumbs" }, h("div", { class: "flush-left" }), h("stellar-breadcrumb", { first: true, tag: this.tag }, h("ion-icon", { id: "icon", name: this.icon, src: this.icon_src, color: this.color }), h("stellar-label", { size: this.size }, this.label)), h("slot", null), h("div", { class: "flush" })));
    }
    get el() { return getElement(this); }
    static get style() { return BreadcrumbsCss; }
};
Tunnel.injectProps(Breadcrumbs, ['dark']);

export { Breadcrumbs as stellar_breadcrumbs };
