import { h } from '@stencil/core';
import { colors } from '../../../utils';
import properties from 'css-custom-properties';
export class ColorPicker {
    constructor() {
        this.val = "none";
        this.notransparent = false;
    }
    componentWillLoad() {
        this.options = Object.keys(colors).filter((color) => {
            // @ts-ignore
            return !["base", "white", "black", "black-alt"].includes(color);
        });
        properties.set({
            "--selected-color": `var(--${this.val}5)`
        }, this.element);
    }
    valueChangedHandler(val) {
        this.change.emit(val);
        properties.set({
            "--selected-color": `var(--${this.val}5)`
        }, this.element);
    }
    updateValue(color) {
        this.val = color;
    }
    render() {
        return h("div", { class: "wrap" },
            this.options.map(option => h("button", { type: "button", value: option, class: option, style: { "background": `var(--${option}5)` }, onClick: () => { this.updateValue(option); } })),
            !this.notransparent && h("button", { type: "button", value: "none", class: "none", style: { "background": `var(--white)` }, onClick: () => { this.updateValue("none"); } }),
            h("div", { class: "placeholder" }));
    }
    static get is() { return "stellar-color-picker"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["color-picker.css"]
    }; }
    static get styleUrls() { return {
        "$": ["color-picker.css"]
    }; }
    static get properties() { return {
        "val": {
            "type": "string",
            "mutable": true,
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
            "attribute": "val",
            "reflect": true,
            "defaultValue": "\"none\""
        },
        "notransparent": {
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
            "attribute": "notransparent",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "options": {}
    }; }
    static get events() { return [{
            "method": "change",
            "name": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "val",
            "methodName": "valueChangedHandler"
        }]; }
}
