import { r as registerInstance, h } from './index-cc4604b3.js';

const CopyWrapCss = ":host, :host *, :host *:before, :host *:after {\n  box-sizing: border-box;\n}\n\n:host {\n  contain: content;\n  display: block;\n}\n\n:host([align=\"left\"]) {\n  text-align: left !important;\n}\n\n:host([align=\"left\"]) ::slotted(*) {\n  margin-right: auto !important;\n}\n\n:host([align=\"center\"]) {\n  text-align: center !important;\n}\n\n:host([align=\"center\"]) ::slotted(*) {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n:host([align=\"right\"]) {\n  text-align: right !important;\n}\n\n:host([align=\"right\"]) ::slotted(*) {\n  margin-left: auto !important;\n}\n\n:host ::slotted(stellar-button) {\n  display: inline-block;\n}\n\n:host ::slotted(img),\n:host ::slotted(stellar-code-block) {\n  margin-bottom: 2rem ;\n}\n\n:host ::slotted(*:last-child) {\n  margin-bottom: 0 ;\n}\n\n:host([full]) ::slotted(*) {\n  max-width: 100% ;\n}\n\n:host ::slotted(ul),\n:host ::slotted(ol) {\n  margin: .25em 0 ;\n  display: inline-block ;\n  text-align: left ;\n}\n\n:host ::slotted(li) {\n  margin-top: 0.5em ;\n}\n";

const CopyWrap = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.align = "left";
        this.full = false;
    }
    render() {
        return h("slot", null);
    }
    static get style() { return CopyWrapCss; }
};

export { CopyWrap as copy_wrap };
