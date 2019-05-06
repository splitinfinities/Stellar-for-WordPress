import { c as registerInstance, d as h } from './stellar-core-d63b686e.js';

class Label {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        // @ts-ignore
        return h("label", { for: this.for }, h("slot", null));
    }
    static get style() { return ":host, :host *, :host *:before, :host *:after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host {\n  line-height: 1.3;\n  color: var(--gray9);\n  font-size: 1.4rem;\n  display: block;\n  font-weight: 900;\n  letter-spacing: 0.05em;\n  margin-bottom: .75em;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n\n:host([underneath]) {\n  margin-top: .75em;\n  margin-bottom: 0;\n  color: var(--gray5);\n  font-weight: 600;\n  text-transform: initial;\n}\n\n:host([size=\"small\"]) {\n  font-size: 1.2rem;\n}\n\n:host([size=\"tiny\"]) {\n  font-size: 1rem;\n}\n\n:host label {\n  all: inherit;\n}\n\n:host-context(.dark-mode):host {\n  color: var(--gray0);\n}\n\n:host-context(.dark-mode):host([underneath]) {\n  color: var(--gray5);\n}"; }
}

export { Label as stellar_label };
