import convert from 'convert-units';
import roundTo from 'round-to';
export class Unit {
    constructor() {
        this.value = 1000;
        this.from = "B";
        this.to = "KB";
        this.round = false;
        this.decimals = 2;
    }
    render() {
        return roundTo(convert(this.value).from(this.from).to(this.to), this.decimals) + " " + this.to;
    }
    static get is() { return "stellar-unit"; }
    static get originalStyleUrls() { return {
        "$": ["unit.css"]
    }; }
    static get styleUrls() { return {
        "$": ["unit.css"]
    }; }
    static get properties() { return {
        "value": {
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
            "attribute": "value",
            "reflect": true,
            "defaultValue": "1000"
        },
        "from": {
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
            "attribute": "from",
            "reflect": true,
            "defaultValue": "\"B\""
        },
        "to": {
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
            "attribute": "to",
            "reflect": true,
            "defaultValue": "\"KB\""
        },
        "round": {
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
            "attribute": "round",
            "reflect": true,
            "defaultValue": "false"
        },
        "decimals": {
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
            "attribute": "decimals",
            "reflect": true,
            "defaultValue": "2"
        }
    }; }
}
