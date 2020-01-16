import { r as registerInstance, h } from './index-cc4604b3.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';

const LabelCss = ":host, :host *, :host *:before, :host *:after {\n  box-sizing: border-box;\n}\n\n:host {\n  contain: content;\n  --margin: var(--ms-2);\n  line-height: 1.3;\n  color: var(--gray9);\n  font-size: var(--ms0);\n  display: block;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  margin-bottom: var(--margin);\n  cursor: pointer;\n}\n\n:host([underneath]) {\n  margin-top: var(--margin);\n  margin-bottom: 0;\n  color: var(--gray5);\n  font-weight: 600;\n  text-transform: initial;\n}\n\n:host([size=\"tiny\"]) {\n  font-size: var(--ms-2);\n}\n\n:host([size=\"small\"]) {\n  font-size: var(--ms-1);\n}\n\n:host([size=\"medium\"]) {\n  font-size: var(--ms1);\n}\n\n:host([size=\"large\"]) {\n  font-size: var(--ms2);\n}\n\n:host label {\n  all: inherit;\n}\n\n:host([dark]) {\n  color: var(--gray0);\n}\n\n:host([underneath][dark]) {\n  color: var(--gray5);\n}\n";

const Label = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
    }
    render() {
        // @ts-ignore
        return h("label", { for: this.for }, h("slot", null));
    }
    static get style() { return LabelCss; }
};
Tunnel.injectProps(Label, ['dark']);

export { Label as stellar_label };
