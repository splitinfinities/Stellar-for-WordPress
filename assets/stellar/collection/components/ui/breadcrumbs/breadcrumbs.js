export class Breadcrumbs {
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
    static get style() { return "/**style-placeholder:stellar-breadcrumbs:**/"; }
}
