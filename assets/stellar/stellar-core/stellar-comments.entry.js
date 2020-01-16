import { r as registerInstance, h } from './index-cc4604b3.js';

const CommentsCss = ":host, :host *, :host *:before, :host *:after {\n\tbox-sizing: border-box;\n}\n\n:host {\n\tcontain: content;\n\tdisplay: block;\n}\n\n:host ::slotted(stellar-comment) {\n\tmargin-top: 1rem;\n}\n";

const Comments = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("section", null, h("slot", null)));
    }
    static get style() { return CommentsCss; }
};

export { Comments as stellar_comments };
