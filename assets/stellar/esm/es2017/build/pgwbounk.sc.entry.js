import { h } from '../stellar-core.core.js';

class Toggle {
    constructor() {
        this.type = "checkbox";
        this.name = "";
        this.stacked = false;
        this.flip = false;
        this.card = "div";
        this.valid = true;
    }
    componentWillLoad() {
        const options = this.element.querySelectorAll('stellar-toggle-option');
        const values = [];
        options.forEach((option) => {
            option.type = this.type;
            option.for = this.name;
            if (option.checked) {
                values.push(option.value);
            }
        });
        this.value = values;
    }
    async validate() {
        this.status = {
            name: this.name,
            value: this.value,
            valid: this.valid,
            errors: [],
        };
        return this.status;
    }
    toggleChangedHandler(event) {
        if (event.detail && event.detail.element) {
            const options = Array.from(this.element.querySelectorAll('stellar-toggle-option'));
            options.filter(el => el !== event.detail.element).forEach((option) => {
                option.confirm();
            });
            const values = [];
            this.value = [];
            if (this.type === "checkbox" || this.type === "checkbox-block") {
                options.forEach((option) => {
                    if (option === event.detail.element && event.detail.element.checked) {
                        values.push(event.detail.value);
                    }
                });
            }
            else if (this.type === "radio" || this.type === "radio-block") {
                if (event.detail.element.checked) {
                    values.push(event.detail.value);
                }
            }
            this.value = values;
            this.change.emit(this.value);
        }
    }
    updateChecked() {
        const options = this.element.querySelectorAll('stellar-toggle-option');
        options.forEach((option) => {
            option.type = this.type;
            option.for = this.name;
        });
    }
    renderValidation() {
        if (this.error) {
            return (h("p", { class: "validation" }, this.error));
        }
    }
    renderBlock() {
        return (h("div", null,
            this.renderValidation(),
            h(this.card, { padding: "tiny" },
                h("stellar-grid", { cols: this.stacked ? "1" : "auto", compact: true },
                    h("slot", null)))));
    }
    renderPlain() {
        return [
            h("slot", null),
            this.renderValidation()
        ];
    }
    render() {
        return [
            this.label && h("stellar-label", null, this.label),
            h("div", { "data-type": this.type, onClick: e => { e.stopPropagation(); } },
                ["radio", "checkbox"].indexOf(this.type) === -1 && this.renderBlock(),
                ["radio", "checkbox"].indexOf(this.type) !== -1 && this.renderPlain()),
            this.description && h("stellar-label", { size: "small", underneath: true }, this.description)
        ];
    }
    static get is() { return "stellar-toggle"; }
    static get properties() { return {
        "card": {
            "type": "Any",
            "attr": "card"
        },
        "description": {
            "type": String,
            "attr": "description",
            "mutable": true
        },
        "element": {
            "elementRef": true
        },
        "error": {
            "state": true
        },
        "flip": {
            "type": Boolean,
            "attr": "flip"
        },
        "form": {
            "state": true
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "name": {
            "type": String,
            "attr": "name",
            "reflectToAttr": true,
            "mutable": true
        },
        "novalidate": {
            "type": Boolean,
            "attr": "novalidate",
            "reflectToAttr": true
        },
        "required": {
            "type": Boolean,
            "attr": "required"
        },
        "single": {
            "type": Boolean,
            "attr": "single"
        },
        "size": {
            "type": String,
            "attr": "size"
        },
        "stacked": {
            "type": Boolean,
            "attr": "stacked",
            "reflectToAttr": true
        },
        "status": {
            "state": true
        },
        "type": {
            "type": String,
            "attr": "type",
            "mutable": true
        },
        "valid": {
            "state": true
        },
        "validate": {
            "method": true
        },
        "value": {
            "type": String,
            "attr": "value",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "change",
            "method": "toggleChangedHandler"
        }]; }
    static get style() { return "stellar-toggle{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;font-family:inherit}stellar-toggle+stellar-toggle{margin-top:3rem}stellar-grid stellar-toggle+stellar-toggle{margin-top:0!important}stellar-toggle *{-webkit-box-sizing:border-box;box-sizing:border-box}stellar-toggle ::selection{background:var(--theme-base2)!important}stellar-toggle .label{margin-bottom:.5rem;line-height:1.69;color:var(--gray9);font-size:1rem;font-weight:600}stellar-toggle stellar-card .item{padding:1rem}stellar-toggle stellar-grid{width:100%;--width:18.5rem}stellar-toggle[stacked] stellar-grid{--width:100%}stellar-toggle[stacked] stellar-grid .grid{width:100%;grid-gap:0}stellar-toggle[stacked] stellar-toggle-option label{border:0;border-radius:0;-webkit-box-shadow:none;box-shadow:none}stellar-toggle[stacked] stellar-toggle-option+stellar-toggle-option label{border-top:1px solid var(--gray2)}.dark-mode stellar-toggle[stacked] stellar-toggle-option+stellar-toggle-option label{border-top:1px solid var(--black)}"; }
}

export { Toggle as StellarToggle };