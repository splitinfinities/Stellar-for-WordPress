import { h } from '@stencil/core';
import { default as eqjs } from 'eq.js';
export class Layout {
    constructor() {
        this.size = "medium";
        this.padding = "medium";
        this.align = "top";
    }
    componentWillLoad() {
        eqjs.definePts(this.element, {
            "tiny": 320,
            "small": 480,
            "medium": 640,
            "large": 800,
            "massive": 1024,
        });
        this.refresh();
    }
    componentDidLoad() {
        this.refresh();
    }
    async refresh() {
        var resizeEvent = window.document.createEvent('UIEvents');
        resizeEvent.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(resizeEvent);
    }
    render() {
        return (h("div", { class: "layout" },
            h("slot", null)));
    }
    static get is() { return "stellar-layout"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["layout.css"]
    }; }
    static get styleUrls() { return {
        "$": ["layout.css"]
    }; }
    static get properties() { return {
        "type": {
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
            "attribute": "type",
            "reflect": true
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"tiny\"|\"small\"|\"medium\"|\"large\"|\"full\"|\"flush\"",
                "resolved": "\"flush\" | \"full\" | \"large\" | \"medium\" | \"small\" | \"tiny\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "size",
            "reflect": true,
            "defaultValue": "\"medium\""
        },
        "padding": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"none\"|\"tiny\"|\"small\"|\"medium\"|\"large\"",
                "resolved": "\"large\" | \"medium\" | \"none\" | \"small\" | \"tiny\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "padding",
            "reflect": true,
            "defaultValue": "\"medium\""
        },
        "align": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"baseline\"|\"center\"|\"top\"|\"bottom\"",
                "resolved": "\"baseline\" | \"bottom\" | \"center\" | \"top\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "align",
            "reflect": true,
            "defaultValue": "\"top\""
        }
    }; }
    static get methods() { return {
        "refresh": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
}
