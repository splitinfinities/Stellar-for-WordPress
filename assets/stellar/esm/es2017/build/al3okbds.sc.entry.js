import { h } from '../stellar-core.core.js';

class Comment {
    constructor() {
        this.empty = false;
    }
    componentWillLoad() {
        this.empty = this.element.querySelectorAll('stellar-comment').length === 0;
    }
    componentDidLoad() {
        if (this.element.querySelector('stellar-avatar')) {
            this.element.querySelector('stellar-avatar').tabIndex = -1;
            this.name = this.element.querySelector('stellar-avatar').name;
        }
        this.content = this.element.querySelector('[slot="content"]').textContent.trim();
    }
    render() {
        return (h("div", { class: `comment ${this.empty ? "empty" : ""}`, "aria-label": `Comment by ${this.name}: ${this.content}`, tabindex: 0 },
            h("div", { class: "content" },
                h("slot", { name: "avatar" }),
                h("slot", { name: "content" })),
            h("div", { class: `thread`, "aria-label": `In reply to  ${this.name} saying ${this.content}` },
                h("slot", null))));
    }
    static get is() { return "stellar-comment"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "content": {
            "type": "Any",
            "attr": "content",
            "mutable": true
        },
        "element": {
            "elementRef": true
        },
        "empty": {
            "state": true
        },
        "name": {
            "type": "Any",
            "attr": "name",
            "mutable": true
        }
    }; }
    static get style() { return ".sc-stellar-comment-h, .sc-stellar-comment-h   *.sc-stellar-comment, .sc-stellar-comment-h   .sc-stellar-comment:after, .sc-stellar-comment-h   .sc-stellar-comment:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-comment-h{display:block}.sc-stellar-comment-h   stellar-avatar.sc-stellar-comment{margin-right:1rem;float:left}.sc-stellar-comment-h   .comment.sc-stellar-comment > .content.sc-stellar-comment{position:relative;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:1rem;background:#fff;border:1px solid var(--gray2)}.sc-stellar-comment-h   .comment.sc-stellar-comment > .thread.sc-stellar-comment{margin:0 0 0 3rem;position:relative}.sc-stellar-comment-h .comment .sc-stellar-comment-s > [slot=avatar]{margin-right:1rem}.sc-stellar-comment-h   .comment.sc-stellar-comment > .thread.sc-stellar-comment:after{content:\"\";width:.4rem;height:calc(100% - .5rem);position:absolute;left:-1.25rem;top:-1.5rem;z-index:0;background:var(--theme-complement4);background:linear-gradient(135deg,var(--theme-complement4),var(--theme-base4) calc(100% - 2rem),var(--theme-base4))}.sc-stellar-comment-h   .comment.sc-stellar-comment > .thread.sc-stellar-comment:before{content:\"\";width:20rem;height:.4rem;position:absolute;left:-1.25rem;bottom:2rem;z-index:0;background:var(--theme-base4)}.sc-stellar-comment-h   .comment.empty.sc-stellar-comment > .content.sc-stellar-comment{margin:0}.sc-stellar-comment-h   .comment.empty.sc-stellar-comment > .thread.sc-stellar-comment{display:none!important}.sc-stellar-comment-h .sc-stellar-comment-s > stellar-comment{margin-top:1rem}.dark-mode.sc-stellar-comment-h -no-combinator.sc-stellar-comment-h   .comment.sc-stellar-comment > .content.sc-stellar-comment, .dark-mode   .sc-stellar-comment-h -no-combinator.sc-stellar-comment-h   .comment.sc-stellar-comment > .content.sc-stellar-comment{background:var(--gray9);border:1px solid var(--gray8)}.dark-mode.sc-stellar-comment-h -no-combinator.sc-stellar-comment-h   .comment.sc-stellar-comment > .thread.sc-stellar-comment:after, .dark-mode   .sc-stellar-comment-h -no-combinator.sc-stellar-comment-h   .comment.sc-stellar-comment > .thread.sc-stellar-comment:after{background:var(--theme-complement9);background:linear-gradient(135deg,var(--theme-complement9),var(--theme-base9) calc(100% - 2rem),var(--theme-base9))}.dark-mode.sc-stellar-comment-h -no-combinator.sc-stellar-comment-h   .comment.sc-stellar-comment > .thread.sc-stellar-comment:before, .dark-mode   .sc-stellar-comment-h -no-combinator.sc-stellar-comment-h   .comment.sc-stellar-comment > .thread.sc-stellar-comment:before{background:var(--theme-base9)}"; }
}

export { Comment as StellarComment };