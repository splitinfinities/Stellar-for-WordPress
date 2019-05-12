import { h } from '../stellar-core.core.js';

class Comments {
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
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block}:host ::slotted(stellar-comment){margin-top:1rem}"; }
}

export { Comments as StellarComments };
