export class Comments {
    render() {
        return (h("section", null,
            h("slot", null)));
    }
    static get is() { return "stellar-comments"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "comments": {
            "state": true
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-comments:**/"; }
}
