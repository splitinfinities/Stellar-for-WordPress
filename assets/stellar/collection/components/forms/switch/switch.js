import { h } from '@stencil/core';
export class Switch {
    constructor() {
        this.checked = false;
        this.checkedDefault = false;
    }
    componentDidLoad() {
        if (this.checkedDefault) {
            this.checked = this.checkedDefault;
        }
    }
    async activate() {
        this.checked = !this.checked;
    }
    handleChecked() {
        this.change.emit({
            checked: this.checked
        });
    }
    render() {
        return (h("label", { class: "label" },
            h("input", { type: "checkbox", checked: this.checked, tabindex: "-1", onClick: () => { this.activate(); } }),
            h("button", { onClick: () => { this.activate(); } },
                h("span", null,
                    this.checked && h("stellar-asset", { name: "checkmark" }),
                    !this.checked && h("stellar-asset", { name: "close" }))),
            h("slot", null)));
    }
    static get is() { return "stellar-switch"; }
    static get originalStyleUrls() { return {
        "$": ["switch.css"]
    }; }
    static get styleUrls() { return {
        "$": ["switch.css"]
    }; }
    static get properties() { return {
        "checked": {
            "type": "boolean",
            "mutable": true,
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
            "attribute": "checked",
            "reflect": true,
            "defaultValue": "false"
        },
        "checkedDefault": {
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
            "attribute": "checked-default",
            "reflect": false,
            "defaultValue": "false"
        }
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
    static get methods() { return {
        "activate": {
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
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "checked",
            "methodName": "handleChecked"
        }]; }
}
