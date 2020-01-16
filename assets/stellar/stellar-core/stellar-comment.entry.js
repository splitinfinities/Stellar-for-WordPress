import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';

const CommentCss = ":host, :host *, :host *:before, :host *:after {\n\tbox-sizing: border-box;\n  }\n\n:host {\n\tcontain: content;\n\tdisplay: block;\n}\n\n:host stellar-avatar {\n\tmargin-right: 1rem;\n\tfloat: left;\n}\n\n:host .comment > .content {\n\tposition: relative;\n\tz-index: 1;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 1rem;\n\tbackground: white;\n\tborder: 1px solid var(--gray2);\n}\n\n:host .comment > .thread {\n\tmargin: 0 0 0 3rem;\n\tposition: relative;\n}\n\n:host .comment ::slotted([slot=\"avatar\"]) {\n\tmargin-right: 1rem;\n}\n\n:host .comment > .thread::after {\n\tcontent: \"\";\n\twidth: 0.4rem;\n\theight: calc(100% - .5rem);\n\tposition: absolute;\n\tleft: -1.25rem;\n\ttop: -1.5rem;\n\tz-index: 0;\n\tbackground: var(--theme-complement4);\n\tbackground: linear-gradient(135deg, var(--theme-complement4) 0%, var(--theme-base4) calc(100% - 2rem), var(--theme-base4) 100%);\n}\n\n:host .comment > .thread::before {\n\tcontent: \"\";\n\twidth: 20rem;\n\theight: .4rem;\n\tposition: absolute;\n\tleft: -1.25rem;\n    bottom: 2rem;\n\tz-index: 0;\n\tbackground: var(--theme-base4);\n}\n\n\n:host .comment.empty > .content {\n\tmargin: 0;\n}\n\n:host .comment.empty > .thread {\n\tdisplay: none !important;\n}\n\n:host ::slotted(stellar-comment) {\n\tmargin-top: 1rem;\n}\n\n:host([dark]) .comment > .content {\n\tbackground: var(--gray9);\n\tborder: 1px solid var(--gray8);\n}\n\n:host([dark]) .comment > .thread::after {\n\tbackground: var(--theme-complement9);\n\tbackground: linear-gradient(135deg, var(--theme-complement9) 0%, var(--theme-base9) calc(100% - 2rem), var(--theme-base9) 100%);\n}\n\n:host([dark]) .comment > .thread::before {\n\tbackground: var(--theme-base9);\n}\n";

const Comment = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.content = "Loading...";
        this.name = "Loading...";
        this.dark = false;
        this.empty = false;
    }
    componentWillLoad() {
        this.empty = this.element.querySelectorAll('stellar-comment').length === 0;
    }
    componentDidLoad() {
        if (this.element.querySelector('stellar-avatar')) {
            // @ts-ignore
            this.element.querySelector('stellar-avatar').tabIndex = -1;
            this.name = this.element.querySelector('stellar-avatar').name;
        }
        if (this.element.querySelector('[slot="content"]')) {
            this.content = this.element.querySelector('[slot="content"]').textContent.trim();
        }
    }
    render() {
        return (h("div", { class: `comment ${this.empty ? "empty" : ""}`, "aria-label": `Comment by ${this.name}: ${this.content}`, tabindex: 0 }, h("div", { class: "content" }, h("slot", { name: "avatar" }), h("slot", { name: "content" })), h("div", { class: `thread`, "aria-label": `In reply to  ${this.name} saying ${this.content}` }, h("slot", null))));
    }
    get element() { return getElement(this); }
    static get style() { return CommentCss; }
};
Tunnel.injectProps(Comment, ['dark']);

export { Comment as stellar_comment };
