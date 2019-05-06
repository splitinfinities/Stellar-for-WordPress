export class GroupOverflow {
    constructor() {
        this.size = "medium";
    }
    render() {
        return (h("div", { class: "wrapper" },
            h("div", { class: "content" },
                h("div", { class: "count" },
                    "+",
                    this.count,
                    " more"),
                h("div", { class: "spacer" })),
            h("stellar-tooltip", null,
                h("slot", null))));
    }
    static get is() { return "stellar-group-overflow"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "count": {
            "type": Number,
            "attr": "count"
        },
        "element": {
            "elementRef": true
        },
        "size": {
            "type": String,
            "attr": "size",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-group-overflow:**/"; }
}
