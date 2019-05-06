import { c as registerInstance, d as h } from './stellar-core-d63b686e.js';

class Comments {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("section", null, h("slot", null)));
    }
    static get style() { return ":host, :host *, :host *:before, :host *:after {\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n}\n\n:host {\n	display: block;\n}\n\n:host ::slotted(stellar-comment) {\n	margin-top: 1rem;\n}"; }
}

export { Comments as stellar_comments };
