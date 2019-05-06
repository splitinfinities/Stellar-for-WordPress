import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';

class Breadcrumbs {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icon = 'analytics';
        this.icon_size = 0.85;
        this.home = "/";
        this.label = "Home";
        this.description = "An icon that shows the main page you're on";
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
        last_breadcrumb.last = true;
    }
    render() {
        return (h("div", { id: "breadcumb_wrapper", class: "breadcrumbs" }, h("div", { class: "flush-left" }), h("stellar-breadcrumb", { first: true }, h("stellar-asset", { id: "icon", name: this.icon, src: this.icon_src, color: this.color }), h("stellar-label", null, this.label)), h("slot", null), h("div", { class: "flush" })));
    }
    get el() { return getElement(this); }
    static get style() { return ":host, :host *, :host *:before, :host *:after {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n:host {\n	--background: linear-gradient(45deg, var(--theme-base7) 0%, var(--theme-base0) 100%);\n	display: inline-block;\n	border-bottom: 1px solid var(--background);\n	background: var(--white);\n	height: 3rem;\n	overflow-x: auto;\n	overflow-y: hidden;\n	font-size: var(--font-size, 1rem);\n    -webkit-clip-path: polygon(calc(100% - .5em) 0, 100% 50%, calc(100% - 0.5em) 100%, 0 100%, 0% 50%, 0 0);\n    clip-path: polygon(calc(100% - .5em) 0, 100% 50%, calc(100% - 0.5em) 100%, 0 100%, 0% 50%, 0 0);\n}\n\n:host stellar-asset {\n	font-size: 2rem;\n	line-height: 0;\n}\n\n:host stellar-label {\n  line-height: 1;\n  margin: 0 0 0 0.25rem;\n  color: white;\n}\n\n:host .breadcrumbs {\n	display: -ms-inline-flexbox;\n	display: inline-flex;\n	position: relative;\n	background: var(--background);\n	width: auto;\n	height: 100%;\n}\n\n:host .breadcrumbs .flush {\n	display: block;\n	right: 0;\n	-ms-flex: 0 0 2rem;\n	flex: 0 0 2rem;\n	margin-left: -2rem;\n	background: transparent;\n	width: 2rem;\n	height: inherit;\n}\n\n:host .breadcrumbs .flush-left {\n	display: block;\n	left: 0;\n	-ms-flex: 0 0 2rem;\n	flex: 0 0 2rem;\n	margin-right: -2.5rem;\n	background: transparent;\n	width: 2rem;\n	height: inherit;\n}\n\n:host-context(.dark-mode) {\n	--background: linear-gradient(45deg, var(--theme-base7) 0%, var(--theme-base9) 100%);\n}"; }
}

export { Breadcrumbs as stellar_breadcrumbs };
