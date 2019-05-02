export class Comment {
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
    static get style() { return "/**style-placeholder:stellar-comment:**/"; }
}
