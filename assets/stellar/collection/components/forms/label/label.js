export class Label {
    render() {
        return h("label", { for: this.for },
            h("slot", null));
    }
    static get is() { return "stellar-label"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "for": {
            "type": String,
            "attr": "for"
        },
        "size": {
            "type": String,
            "attr": "size",
            "reflectToAttr": true
        },
        "underneath": {
            "type": Boolean,
            "attr": "underneath",
            "reflectToAttr": true
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-label:**/"; }
}
