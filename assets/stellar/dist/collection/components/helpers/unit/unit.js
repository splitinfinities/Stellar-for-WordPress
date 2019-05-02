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
    static get properties() { return {
        "decimals": {
            "type": Number,
            "attr": "decimals",
            "reflectToAttr": true
        },
        "from": {
            "type": String,
            "attr": "from",
            "reflectToAttr": true
        },
        "round": {
            "type": Boolean,
            "attr": "round",
            "reflectToAttr": true
        },
        "to": {
            "type": String,
            "attr": "to",
            "reflectToAttr": true
        },
        "value": {
            "type": Number,
            "attr": "value",
            "reflectToAttr": true
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-unit:**/"; }
}
