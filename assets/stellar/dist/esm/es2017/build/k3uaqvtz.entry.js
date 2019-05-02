import { h } from '../stellar-core.core.js';

class Label {
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
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{line-height:1.3;color:var(--gray9);font-size:1.4rem;display:block;font-weight:900;letter-spacing:.05em;margin-bottom:.75em;cursor:pointer;text-transform:uppercase}:host([underneath]){margin-top:.75em;margin-bottom:0;color:var(--gray5);font-weight:600;text-transform:none}:host([size=small]){font-size:1.2rem}:host([size=tiny]){font-size:1rem}:host label{all:inherit}:host-context(.dark-mode):host{color:var(--gray0)}:host-context(.dark-mode):host([underneath]){color:var(--gray5)}"; }
}

export { Label as StellarLabel };
