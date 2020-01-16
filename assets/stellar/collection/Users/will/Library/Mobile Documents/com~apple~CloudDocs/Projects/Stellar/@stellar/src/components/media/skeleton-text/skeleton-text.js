import { Component, Element, Prop, h, Host } from '@stencil/core';
export class SkeletonText {
    constructor() {
        this.as = 'p';
        this.width = 100;
        this.loading = false;
    }
    in() { this.element.classList.add('visible'); }
    out() { this.element.classList.remove('visible'); }
    render() {
        return h(Host, { style: { '--width': `${this.width}%` } },
            h("span", null,
                "\u00A0",
                h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this) })));
    }
    static get is() { return "skeleton-text"; }
    static get originalStyleUrls() { return {
        "$": ["skeleton-text.css"]
    }; }
    static get styleUrls() { return {
        "$": ["skeleton-text.css"]
    }; }
    static get properties() { return {
        "as": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "as",
            "reflect": true,
            "defaultValue": "'p'"
        },
        "width": {
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
            "attribute": "width",
            "reflect": true,
            "defaultValue": "100"
        },
        "loading": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "loading",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get elementRef() { return "element"; }
}
