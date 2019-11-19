import { h } from '@stencil/core';
export class Label {
    render() {
        // @ts-ignore
        return h("label", { for: this.for },
            h("slot", null));
    }
    static get is() { return "stellar-label"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["label.css"]
    }; }
    static get styleUrls() { return {
        "$": ["label.css"]
    }; }
    static get properties() { return {
        "for": {
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
            "attribute": "for",
            "reflect": false
        },
        "underneath": {
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
            "attribute": "underneath",
            "reflect": true
        },
        "size": {
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
            "attribute": "size",
            "reflect": true
        }
    }; }
}
