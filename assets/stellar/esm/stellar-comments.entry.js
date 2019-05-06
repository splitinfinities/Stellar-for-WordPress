import { c as registerInstance, d as h } from './stellar-core-3af17cd6.js';

class Comments {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("section", null, h("slot", null)));
    }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block}:host ::slotted(stellar-comment){margin-top:1rem}"; }
}

export { Comments as stellar_comments };
