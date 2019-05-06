import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';

class Comment {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.content = this.element.querySelector('[slot="content"]').textContent.trim();
    }
    render() {
        return (h("div", { class: `comment ${this.empty ? "empty" : ""}`, "aria-label": `Comment by ${this.name}: ${this.content}`, tabindex: 0 }, h("div", { class: "content" }, h("slot", { name: "avatar" }), h("slot", { name: "content" })), h("div", { class: `thread`, "aria-label": `In reply to  ${this.name} saying ${this.content}` }, h("slot", null))));
    }
    get element() { return getElement(this); }
    static get style() { return ":host, :host *, :host *:before, :host *:after {\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n  }\n\n:host {\n	display: block;\n}\n\n:host stellar-avatar {\n	margin-right: 1rem;\n	float: left;\n}\n\n:host .comment > .content {\n	position: relative;\n	z-index: 1;\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-align: center;\n	align-items: center;\n	padding: 1rem;\n	background: white;\n	border: 1px solid var(--gray2);\n}\n\n:host .comment > .thread {\n	margin: 0 0 0 3rem;\n	position: relative;\n}\n\n:host .comment ::slotted([slot=\"avatar\"]) {\n	margin-right: 1rem;\n}\n\n:host .comment > .thread::after {\n	content: \"\";\n	width: 0.4rem;\n	height: calc(100% - .5rem);\n	position: absolute;\n	left: -1.25rem;\n	top: -1.5rem;\n	z-index: 0;\n	background: var(--theme-complement4);\n	background: linear-gradient(135deg, var(--theme-complement4) 0%, var(--theme-base4) calc(100% - 2rem), var(--theme-base4) 100%);\n}\n\n:host .comment > .thread::before {\n	content: \"\";\n	width: 20rem;\n	height: .4rem;\n	position: absolute;\n	left: -1.25rem;\n    bottom: 2rem;\n	z-index: 0;\n	background: var(--theme-base4);\n}\n\n\n:host .comment.empty > .content {\n	margin: 0;\n}\n\n:host .comment.empty > .thread {\n	display: none !important;\n}\n\n:host ::slotted(stellar-comment) {\n	margin-top: 1rem;\n}\n\n:host-context(.dark-mode):host .comment > .content {\n	background: var(--gray9);\n	border: 1px solid var(--gray8);\n}\n\n:host-context(.dark-mode):host .comment > .thread::after {\n	background: var(--theme-complement9);\n	background: linear-gradient(135deg, var(--theme-complement9) 0%, var(--theme-base9) calc(100% - 2rem), var(--theme-base9) 100%);\n}\n\n:host-context(.dark-mode):host .comment > .thread::before {\n	background: var(--theme-base9);\n}"; }
}

export { Comment as stellar_comment };
