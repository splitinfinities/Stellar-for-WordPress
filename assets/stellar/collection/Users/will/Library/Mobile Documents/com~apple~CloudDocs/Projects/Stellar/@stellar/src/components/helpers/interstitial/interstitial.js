import { Component, Host, h, Prop, Element, Listen, State } from '@stencil/core';
export class Interstitial {
    constructor() {
        this.shown = true;
        this.hash = "";
    }
    componentWillLoad() {
        this.hash = btoa(unescape(encodeURIComponent(this.el.innerText)));
        if (this.remember && localStorage.getItem(this.hash)) {
            this.shown = !(localStorage.getItem(this.hash) === "hidden");
        }
    }
    handleClose() {
        this.shown = false;
        if (this.remember) {
            localStorage.setItem(this.hash, "hidden");
        }
    }
    render() {
        return (h(Host, { class: `${this.shown ? "show" : "hide"}` },
            h("slot", null)));
    }
    static get is() { return "stellar-interstitial"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["interstitial.css"]
    }; }
    static get styleUrls() { return {
        "$": ["interstitial.css"]
    }; }
    static get properties() { return {
        "fullscreen": {
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
            "attribute": "fullscreen",
            "reflect": true
        },
        "shown": {
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
            "attribute": "shown",
            "reflect": true,
            "defaultValue": "true"
        },
        "remember": {
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
            "attribute": "remember",
            "reflect": true
        }
    }; }
    static get states() { return {
        "hash": {}
    }; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "submitted",
            "method": "handleClose",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
