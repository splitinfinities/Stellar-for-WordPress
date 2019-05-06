import { h } from '@stencil/core';
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
    static get originalStyleUrls() { return {
        "$": ["breadcrumbs.css"]
    }; }
    static get styleUrls() { return {
        "$": ["breadcrumbs.css"]
    }; }
    static get properties() { return {
        "icon": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "icon",
            "reflect": false,
            "defaultValue": "'analytics'"
        },
        "icon_src": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "icon_src",
            "reflect": false
        },
        "icon_size": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "icon_size",
            "reflect": false,
            "defaultValue": "0.85"
        },
        "home": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "home",
            "reflect": false,
            "defaultValue": "\"/\""
        },
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "label",
            "reflect": false,
            "defaultValue": "\"Home\""
        },
        "description": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "description",
            "reflect": false,
            "defaultValue": "\"An icon that shows the main page you're on\""
        },
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "color",
            "reflect": false,
            "defaultValue": "\"blue5\""
        }
    }; }
    static get elementRef() { return "el"; }
}
