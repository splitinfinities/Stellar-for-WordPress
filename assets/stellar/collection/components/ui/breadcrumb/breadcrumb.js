export class Breadcrumb {
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
    static get style() { return "/**style-placeholder:stellar-breadcrumb:**/"; }
}
