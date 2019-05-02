export class CopyWrap {
    constructor() {
        this.align = "left";
        this.full = false;
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "copy-wrap"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "align": {
            "type": String,
            "attr": "align",
            "reflectToAttr": true
        },
        "full": {
            "type": Boolean,
            "attr": "full",
            "reflectToAttr": true
        }
    }; }
    static get style() { return "/**style-placeholder:copy-wrap:**/"; }
}
