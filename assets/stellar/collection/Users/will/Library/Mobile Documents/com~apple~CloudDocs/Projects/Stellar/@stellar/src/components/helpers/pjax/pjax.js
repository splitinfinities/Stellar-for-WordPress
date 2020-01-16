import { Component, Host, h, Prop } from '@stencil/core';
import Pjax from 'pjax';
export class StellarPjax {
    constructor() {
        this.pjax = new Pjax({
            cacheBust: false,
            scrollTo: false,
            selectors: [
                "title",
                "meta[name=description]",
                "main",
            ]
        });
    }
    render() {
        return h(Host, null,
            h("slot", null));
    }
    static get is() { return "stellar-pjax"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "pjax": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "pjax",
            "reflect": false,
            "defaultValue": "new Pjax({\n    cacheBust: false,\n    scrollTo: false,\n    selectors: [\n      \"title\",\n      \"meta[name=description]\",\n      \"main\",\n    ]\n  })"
        }
    }; }
}
