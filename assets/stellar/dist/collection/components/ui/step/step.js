import { parentNodeSelector } from '../../../utils';
export class Step {
    constructor() {
        this.href = "#";
        this.disabled = false;
        this.open = false;
    }
    componentWillLoad() {
        this.parent = parentNodeSelector(this.element, 'stellar-steps');
    }
    handleClick() {
        this.parent.steps().forEach((element) => {
            element.open = false;
        });
        this.open = true;
        this.contentChange.emit({
            parent: this.parent,
            name: this.href.replace(/[#]/g, "")
        });
    }
    renderTitle() {
        return (h("span", { class: "title" },
            h("slot", null)));
    }
    render() {
        return (h("button", { role: "tab", "aria-selected": this.open ? "true" : "false", "aria-setsize": this.tabCount, "aria-posinset": this.order, tabindex: "0", class: "step-button", onClick: () => this.handleClick() },
            h("stellar-label", null, this.renderTitle())));
    }
    static get is() { return "stellar-step"; }
    static get properties() { return {
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "element": {
            "elementRef": true
        },
        "href": {
            "type": String,
            "attr": "href",
            "reflectToAttr": true,
            "mutable": true
        },
        "open": {
            "type": Boolean,
            "attr": "open",
            "reflectToAttr": true,
            "mutable": true
        },
        "order": {
            "type": Number,
            "attr": "order",
            "reflectToAttr": true
        },
        "parent": {
            "state": true
        },
        "tabCount": {
            "type": Number,
            "attr": "tab-count",
            "reflectToAttr": true
        }
    }; }
    static get events() { return [{
            "name": "contentChange",
            "method": "contentChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:stellar-step:**/"; }
}
