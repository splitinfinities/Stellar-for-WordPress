import { c as registerInstance, d as h, f as getElement } from './stellar-core-3af17cd6.js';

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
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--background:linear-gradient(45deg,var(--theme-base7),var(--theme-base0));display:inline-block;border-bottom:1px solid var(--background);background:var(--white);height:3rem;overflow-x:auto;overflow-y:hidden;font-size:var(--font-size,1rem);-webkit-clip-path:polygon(calc(100% - .5em) 0,100% 50%,calc(100% - .5em) 100%,0 100%,0 50%,0 0);clip-path:polygon(calc(100% - .5em) 0,100% 50%,calc(100% - .5em) 100%,0 100%,0 50%,0 0)}:host stellar-asset{font-size:2rem;line-height:0}:host stellar-label{line-height:1;margin:0 0 0 .25rem;color:#fff}:host .breadcrumbs{display:-ms-inline-flexbox;display:inline-flex;position:relative;background:var(--background);width:auto;height:100%}:host .breadcrumbs .flush{right:0;margin-left:-2rem}:host .breadcrumbs .flush,:host .breadcrumbs .flush-left{display:block;-ms-flex:0 0 2rem;flex:0 0 2rem;background:transparent;width:2rem;height:inherit}:host .breadcrumbs .flush-left{left:0;margin-right:-2.5rem}:host-context(.dark-mode){--background:linear-gradient(45deg,var(--theme-base7),var(--theme-base9))}"; }
}

export { Breadcrumbs as stellar_breadcrumbs };
