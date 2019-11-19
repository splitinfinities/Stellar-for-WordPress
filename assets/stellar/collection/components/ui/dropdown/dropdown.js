import { h } from '@stencil/core';
import { blurringEase, focusWithin } from '../../../utils';
focusWithin(document);
export class Dropdown {
    constructor() {
        this.position = "center";
        this.icon = false;
        this.label = "Dropdown";
        this.open = false;
        this.ease = blurringEase({
            end: 10,
            start: -1,
            duration: 250,
            tick: (args) => {
                this.blur = args.value;
            },
            complete: () => {
                this.blur = 0;
                this.ease.stop();
            },
        });
        this.blur = 0;
    }
    componentDidLoad() {
        focusWithin(document);
    }
    observeOpen() {
        this.ease.start();
    }
    onToggle() {
        this.open = !this.open;
    }
    render() {
        return (h("div", { "aria-label": this.label, class: "dropdown", title: this.label },
            h("div", { class: "toggle" },
                h("slot", { name: "handle" }),
                !this.icon && h("stellar-asset", { name: "arrow-down", class: "caret" })),
            h("stellar-blur", { vertical: this.blur },
                h("div", { class: "list-wrap" },
                    h("ul", { class: "list" },
                        h("slot", null),
                        h("div", { class: "footer" },
                            h("slot", { name: "footer" })))))));
    }
    static get is() { return "stellar-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["dropdown.css"]
    }; }
    static get styleUrls() { return {
        "$": ["dropdown.css"]
    }; }
    static get properties() { return {
        "position": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "\"left\"|\"center\"|\"right\"",
                "resolved": "\"center\" | \"left\" | \"right\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "position",
            "reflect": true,
            "defaultValue": "\"center\""
        },
        "icon": {
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
            "attribute": "icon",
            "reflect": false,
            "defaultValue": "false"
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
            "defaultValue": "\"Dropdown\""
        },
        "open": {
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
            "attribute": "open",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "ease": {},
        "blur": {},
        "timeout": {}
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "open",
            "methodName": "observeOpen"
        }]; }
}
