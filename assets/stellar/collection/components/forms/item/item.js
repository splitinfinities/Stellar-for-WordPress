import { injectHistory } from '@stencil/router';
export class Item {
    constructor() {
        this.type = "button";
        this.href = "#";
        this.wrap = false;
        this.fit = false;
        this.simple = false;
        this.danger = false;
        this.selected = false;
        this.multiple = false;
        this.selectable = false;
        this.focused = false;
        this.route = false;
        this.current = false;
    }
    componentWillLoad() {
        this.slotted = this.element.innerHTML;
    }
    componentDidLoad() {
        setTimeout(() => {
            if (this.selected) {
                this.mounted.emit(this);
            }
        }, 10);
    }
    async data() {
        return {
            size: this.size,
            value: this.value,
            type: this.type,
            label: this.label,
            danger: this.danger,
            slotted: this.slotted
        };
    }
    async apply(data) {
        this.size = data.size;
        this.value = data.value;
        this.type = data.type;
        this.label = data.label;
        const button = this.element.shadowRoot.querySelector('.button');
        button.innerHTML = data.slotted;
    }
    async setFocus() {
        this.focused = true;
        this.element.querySelector('.button').focus();
    }
    handleClick(e) {
        if (this.route) {
            e.preventDefault();
            this.history.push(this.href, {});
        }
        if (!this.current) {
            this.selectionChanged.emit(this);
        }
    }
    handleFocus() {
        if (this.current) {
            this.focusChanged.emit(this);
        }
        this.focused = true;
    }
    handleBlur() {
        if (this.current) {
            this.blurChanged.emit(this);
        }
        this.focused = false;
    }
    classes() {
        let classes = "";
        classes += this.selected ? "selected " : "";
        classes += this.multiple ? "multiple " : "";
        return classes;
    }
    async select_item(state) {
        if (this.selectable) {
            if (state) {
                if (this.selected !== state.selected) {
                    var event = new CustomEvent('click');
                    this.element.querySelector('.button').dispatchEvent(event);
                }
            }
            else {
                var event = new CustomEvent('click');
                this.element.querySelector('.button').dispatchEvent(event);
            }
        }
    }
    render() {
        return (h(this.type, { class: "button", type: "button", href: this.href, url: this.href, tabindex: "0", value: this.value, title: this.label, onClick: (e) => this.handleClick(e), onBlur: () => this.handleBlur(), onFocus: () => this.handleFocus() },
            h("slot", null),
            (this.selected || this.multiple) && h("stellar-asset", { class: this.classes(), name: "checkmark", block: true })));
    }
    static get is() { return "stellar-item"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "apply": {
            "method": true
        },
        "current": {
            "state": true
        },
        "danger": {
            "type": Boolean,
            "attr": "danger",
            "reflectToAttr": true,
            "mutable": true
        },
        "data": {
            "method": true
        },
        "element": {
            "elementRef": true
        },
        "fit": {
            "type": Boolean,
            "attr": "fit",
            "reflectToAttr": true,
            "mutable": true
        },
        "focused": {
            "type": Boolean,
            "attr": "focused",
            "reflectToAttr": true,
            "mutable": true
        },
        "history": {
            "type": "Any",
            "attr": "history"
        },
        "href": {
            "type": String,
            "attr": "href",
            "reflectToAttr": true,
            "mutable": true
        },
        "label": {
            "type": String,
            "attr": "label",
            "reflectToAttr": true,
            "mutable": true
        },
        "location": {
            "type": "Any",
            "attr": "location"
        },
        "multiple": {
            "type": Boolean,
            "attr": "multiple",
            "reflectToAttr": true,
            "mutable": true
        },
        "route": {
            "type": Boolean,
            "attr": "route"
        },
        "select_item": {
            "method": true
        },
        "selectable": {
            "type": Boolean,
            "attr": "selectable",
            "reflectToAttr": true,
            "mutable": true
        },
        "selected": {
            "type": Boolean,
            "attr": "selected",
            "reflectToAttr": true,
            "mutable": true
        },
        "setFocus": {
            "method": true
        },
        "simple": {
            "type": Boolean,
            "attr": "simple",
            "reflectToAttr": true,
            "mutable": true
        },
        "size": {
            "type": String,
            "attr": "size",
            "mutable": true
        },
        "slotted": {
            "state": true
        },
        "type": {
            "type": String,
            "attr": "type",
            "reflectToAttr": true,
            "mutable": true
        },
        "value": {
            "type": String,
            "attr": "value",
            "reflectToAttr": true,
            "mutable": true
        },
        "valueLabel": {
            "type": String,
            "attr": "value-label",
            "reflectToAttr": true,
            "mutable": true
        },
        "wrap": {
            "type": Boolean,
            "attr": "wrap",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "selectionChanged",
            "method": "selectionChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "mounted",
            "method": "mounted",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "focusChanged",
            "method": "focusChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "blurChanged",
            "method": "blurChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:stellar-item:**/"; }
}
if (injectHistory) {
    injectHistory(Item);
}
