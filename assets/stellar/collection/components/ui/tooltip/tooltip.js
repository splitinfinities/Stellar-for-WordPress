export class Tooltip {
    constructor() {
        this.align = "center";
    }
    render() {
        return (h("div", { class: "wrap" },
            h("div", { class: "after" }),
            h("slot", null)));
    }
    static get is() { return "stellar-tooltip"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "align": {
            "type": String,
            "attr": "align",
            "reflectToAttr": true
        },
        "element": {
            "elementRef": true
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-tooltip:**/"; }
}
