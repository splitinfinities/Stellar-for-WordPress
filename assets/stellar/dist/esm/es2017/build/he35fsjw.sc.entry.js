import { h } from '../stellar-core.core.js';

class Breadcrumb {
    constructor() {
        this.href = "/";
        this.target = "_self";
        this.label = "Breadcrumb link";
        this.disabled = false;
    }
    componentDidLoad() {
        this.label += ` for ${this.element.textContent}`;
    }
    render() {
        return (h("a", { class: "button", href: this.href, target: this.target, "aria-label": this.label, title: this.label, "data-disabled": this.disabled },
            h("slot", null)));
    }
    static get is() { return "stellar-breadcrumb"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "element": {
            "elementRef": true
        },
        "first": {
            "type": Boolean,
            "attr": "first",
            "reflectToAttr": true
        },
        "href": {
            "type": String,
            "attr": "href"
        },
        "label": {
            "type": String,
            "attr": "label",
            "mutable": true
        },
        "last": {
            "type": Boolean,
            "attr": "last",
            "reflectToAttr": true
        },
        "target": {
            "type": String,
            "attr": "target"
        }
    }; }
    static get style() { return ".sc-stellar-breadcrumb-h, .sc-stellar-breadcrumb-h   *.sc-stellar-breadcrumb, .sc-stellar-breadcrumb-h   .sc-stellar-breadcrumb:after, .sc-stellar-breadcrumb-h   .sc-stellar-breadcrumb:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-breadcrumb-h{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-clip-path:polygon(1em 100%,0 0,calc(100% - 1em) 0,100% 100%,calc(100% - 1em) 100%,0 100%);clip-path:polygon(1em 100%,0 0,calc(100% - 1em) 0,100% 100%,calc(100% - 1em) 100%,0 100%);-webkit-clip-path:polygon(calc(100% - .5em) 0,100% 50%,calc(100% - .5em) 100%,0 100%,calc(0% + .5em) 50%,0 0);clip-path:polygon(calc(100% - .5em) 0,100% 50%,calc(100% - .5em) 100%,0 100%,calc(0% + .5em) 50%,0 0);margin:0 0 0 -.35em;background:var(--white);text-align:center;text-decoration:none;color:var(--theme-base8)}.sc-stellar-breadcrumb-h:focus-within, .sc-stellar-breadcrumb-h   a.sc-stellar-breadcrumb:focus, .sc-stellar-breadcrumb-h   a.sc-stellar-breadcrumb:hover{background:var(--theme-base5);color:#fff}.sc-stellar-breadcrumb-h   a.sc-stellar-breadcrumb{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:1em 1.75em;height:auto;text-decoration:none;white-space:nowrap;color:currentColor;font-size:var(--font-size);font-weight:600}.sc-stellar-breadcrumb-h   a.sc-stellar-breadcrumb   stellar-asset.sc-stellar-breadcrumb{margin-right:.25em}.sc-stellar-breadcrumb-h:focus, .sc-stellar-breadcrumb-h:hover{color:var(--white);background:var(--theme-base5)}[first].sc-stellar-breadcrumb-h{background:var(--theme-base7);color:var(--white);margin:0 -.25rem 0 -.15em;position:-webkit-sticky;position:sticky;left:-.5rem;z-index:2}[first].sc-stellar-breadcrumb-h   a.sc-stellar-breadcrumb{padding-left:1.25em;padding-right:1.25em}[first].sc-stellar-breadcrumb-h   a.sc-stellar-breadcrumb   stellar-asset.sc-stellar-breadcrumb{margin:0}[last].sc-stellar-breadcrumb-h{color:var(--gray9);background:var(--white)}[last].sc-stellar-breadcrumb-h   a.sc-stellar-breadcrumb:focus, [last].sc-stellar-breadcrumb-h   a.sc-stellar-breadcrumb:hover, [last].sc-stellar-breadcrumb-h:focus, [last].sc-stellar-breadcrumb-h:hover{background:#fff;color:var(--gray9)}.dark-mode.sc-stellar-breadcrumb-h, .dark-mode   .sc-stellar-breadcrumb-h{background:var(--black);color:var(--theme-base0)}.dark-mode.sc-stellar-breadcrumb-h -no-combinator.sc-stellar-breadcrumb-h:focus, .dark-mode   .sc-stellar-breadcrumb-h -no-combinator.sc-stellar-breadcrumb-h:focus, .dark-mode.sc-stellar-breadcrumb-h -no-combinator.sc-stellar-breadcrumb-h:focus-within, .dark-mode   .sc-stellar-breadcrumb-h -no-combinator.sc-stellar-breadcrumb-h:focus-within, .dark-mode.sc-stellar-breadcrumb-h -no-combinator.sc-stellar-breadcrumb-h:hover, .dark-mode   .sc-stellar-breadcrumb-h -no-combinator.sc-stellar-breadcrumb-h:hover, .dark-mode.sc-stellar-breadcrumb-h -no-combinator.sc-stellar-breadcrumb-h   a.sc-stellar-breadcrumb:focus, .dark-mode   .sc-stellar-breadcrumb-h -no-combinator.sc-stellar-breadcrumb-h   a.sc-stellar-breadcrumb:focus, .dark-mode.sc-stellar-breadcrumb-h -no-combinator.sc-stellar-breadcrumb-h   a.sc-stellar-breadcrumb:hover, .dark-mode   .sc-stellar-breadcrumb-h -no-combinator.sc-stellar-breadcrumb-h   a.sc-stellar-breadcrumb:hover{color:var(--white);background:var(--theme-base7)}.dark-mode.sc-stellar-breadcrumb-h -no-combinator[last].sc-stellar-breadcrumb-h, .dark-mode   .sc-stellar-breadcrumb-h -no-combinator[last].sc-stellar-breadcrumb-h{color:#fff;background:var(--black)}.dark-mode.sc-stellar-breadcrumb-h -no-combinator[first].sc-stellar-breadcrumb-h, .dark-mode   .sc-stellar-breadcrumb-h -no-combinator[first].sc-stellar-breadcrumb-h{background:var(--theme-base9)}.dark-mode.sc-stellar-breadcrumb-h -no-combinator[last].sc-stellar-breadcrumb-h   a.sc-stellar-breadcrumb:focus, .dark-mode   .sc-stellar-breadcrumb-h -no-combinator[last].sc-stellar-breadcrumb-h   a.sc-stellar-breadcrumb:focus, .dark-mode.sc-stellar-breadcrumb-h -no-combinator[last].sc-stellar-breadcrumb-h   a.sc-stellar-breadcrumb:hover, .dark-mode   .sc-stellar-breadcrumb-h -no-combinator[last].sc-stellar-breadcrumb-h   a.sc-stellar-breadcrumb:hover, .dark-mode.sc-stellar-breadcrumb-h -no-combinator[last].sc-stellar-breadcrumb-h:focus, .dark-mode   .sc-stellar-breadcrumb-h -no-combinator[last].sc-stellar-breadcrumb-h:focus, .dark-mode.sc-stellar-breadcrumb-h -no-combinator[last].sc-stellar-breadcrumb-h:hover, .dark-mode   .sc-stellar-breadcrumb-h -no-combinator[last].sc-stellar-breadcrumb-h:hover{background:var(--black);color:#fff}"; }
}

class Breadcrumbs {
    constructor() {
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
        return (h("div", { id: "breadcumb_wrapper", class: "breadcrumbs" },
            h("div", { class: "flush-left" }),
            h("stellar-breadcrumb", { first: true },
                h("stellar-asset", { id: "icon", name: this.icon, src: this.icon_src, color: this.color }),
                h("stellar-label", null, this.label)),
            h("slot", null),
            h("div", { class: "flush" })));
    }
    static get is() { return "stellar-breadcrumbs"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "description": {
            "type": String,
            "attr": "description"
        },
        "el": {
            "elementRef": true
        },
        "home": {
            "type": String,
            "attr": "home"
        },
        "icon": {
            "type": String,
            "attr": "icon"
        },
        "icon_size": {
            "type": Number,
            "attr": "icon_size"
        },
        "icon_src": {
            "type": String,
            "attr": "icon_src"
        },
        "label": {
            "type": String,
            "attr": "label"
        }
    }; }
    static get style() { return ".sc-stellar-breadcrumbs-h, .sc-stellar-breadcrumbs-h   *.sc-stellar-breadcrumbs, .sc-stellar-breadcrumbs-h   .sc-stellar-breadcrumbs:after, .sc-stellar-breadcrumbs-h   .sc-stellar-breadcrumbs:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-breadcrumbs-h{--background:linear-gradient(45deg,var(--theme-base7),var(--theme-base0));display:inline-block;border-bottom:1px solid var(--background);background:var(--white);height:3rem;overflow-x:auto;overflow-y:hidden;font-size:var(--font-size,1rem);-webkit-clip-path:polygon(calc(100% - .5em) 0,100% 50%,calc(100% - .5em) 100%,0 100%,0 50%,0 0);clip-path:polygon(calc(100% - .5em) 0,100% 50%,calc(100% - .5em) 100%,0 100%,0 50%,0 0)}.sc-stellar-breadcrumbs-h   stellar-asset.sc-stellar-breadcrumbs{font-size:2rem;line-height:0}.sc-stellar-breadcrumbs-h   stellar-label.sc-stellar-breadcrumbs{line-height:1;margin:0 0 0 .25rem;color:#fff}.sc-stellar-breadcrumbs-h   .breadcrumbs.sc-stellar-breadcrumbs{display:-ms-inline-flexbox;display:inline-flex;position:relative;background:var(--background);width:auto;height:100%}.sc-stellar-breadcrumbs-h   .breadcrumbs.sc-stellar-breadcrumbs   .flush.sc-stellar-breadcrumbs{right:0;margin-left:-2rem}.sc-stellar-breadcrumbs-h   .breadcrumbs.sc-stellar-breadcrumbs   .flush.sc-stellar-breadcrumbs, .sc-stellar-breadcrumbs-h   .breadcrumbs.sc-stellar-breadcrumbs   .flush-left.sc-stellar-breadcrumbs{display:block;-ms-flex:0 0 2rem;flex:0 0 2rem;background:transparent;width:2rem;height:inherit}.sc-stellar-breadcrumbs-h   .breadcrumbs.sc-stellar-breadcrumbs   .flush-left.sc-stellar-breadcrumbs{left:0;margin-right:-2.5rem}.dark-mode.sc-stellar-breadcrumbs-h, .dark-mode   .sc-stellar-breadcrumbs-h{--background:linear-gradient(45deg,var(--theme-base7),var(--theme-base9))}"; }
}

export { Breadcrumb as StellarBreadcrumb, Breadcrumbs as StellarBreadcrumbs };
