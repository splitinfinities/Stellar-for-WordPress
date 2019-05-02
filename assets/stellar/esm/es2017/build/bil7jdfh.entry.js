import { h } from '../stellar-core.core.js';

class CopyWrap {
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
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block}:host([align=left]){text-align:left!important}:host([align=left]) ::slotted(*){margin-right:auto!important}:host([align=center]){text-align:center!important}:host([align=center]) ::slotted(*){margin-right:auto!important;margin-left:auto!important}:host([align=right]){text-align:right!important}:host([align=right]) ::slotted(*){margin-left:auto!important}:host ::slotted(stellar-button){display:inline-block}:host ::slotted(img),:host ::slotted(stellar-code-block){margin-bottom:2rem}:host ::slotted(:last-child){margin-bottom:0}:host([full]) ::slotted(*){max-width:100%}:host ::slotted(ol),:host ::slotted(ul){margin:.25em 0;display:inline-block;text-align:left}:host ::slotted(li){margin-top:.5em}"; }
}

export { CopyWrap };
