import { r as registerInstance, h, d as getElement } from './index-bcfb4a9f.js';
import './index-c982b830.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-0e374e95.js';

const BreadcrumbsCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;--background:white;--clip-path:polygon(0 100%, 0% 0%, calc(100% - 1em) 0%, 100% 100%, calc(100% - 1em) 100%, 0% 100%);--height:var(--ms5);--font-size:var(--ms0);display:inline-block;border-bottom:1px solid var(--background);background:var(--white);height:var(--height);overflow-x:auto;overflow-y:hidden;font-size:var(--font-size);-webkit-clip-path:var(--clip-path);clip-path:var(--clip-path)}:host([size=\"tiny\"]){--height:var(--ms3);--font-size:var(--ms-2)}:host([size=\"small\"]){--height:var(--ms4);--font-size:var(--ms-1)}:host([size=\"medium\"]){--height:var(--ms6);--font-size:var(--ms1)}:host([size=\"large\"]){--height:var(--ms7);--font-size:var(--ms2)}:host ion-icon{font-size:2em;line-height:0}:host stellar-label{line-height:1;margin:0 0 0 0.25rem;color:white}:host .breadcrumbs{display:-ms-inline-flexbox;display:inline-flex;position:relative;background:var(--background);width:auto;height:100%}:host .breadcrumbs .flush{display:block;right:0;-ms-flex:0 0 2rem;flex:0 0 2rem;margin-left:-2rem;background:transparent;width:2rem;height:inherit}:host .breadcrumbs .flush-left{display:block;left:0;-ms-flex:0 0 2rem;flex:0 0 2rem;margin-right:-2.5rem;background:transparent;width:2rem;height:inherit}:host([dark]){--background:linear-gradient(45deg, var(--theme-base7) 0%, var(--theme-base9) 100%)}";

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
