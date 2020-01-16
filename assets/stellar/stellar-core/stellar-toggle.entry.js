import { r as registerInstance, d as createEvent, h, g as getElement } from './index-cc4604b3.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';

const ToggleCss = "stellar-toggle {\n  contain: content;\n  box-sizing: border-box;\n  display: block;\n  font-family: inherit;\n}\n\nstellar-toggle + stellar-toggle {\n  margin-top: 3rem;\n}\n\nstellar-grid stellar-toggle + stellar-toggle {\n  margin-top: 0 !important;\n}\n\nstellar-toggle * {\n  box-sizing: border-box;\n}\n\nstellar-toggle ::selection,\nstellar-toggle *::selection {\n  background: var(--theme-base2) !important;\n}\n\nstellar-toggle .label {\n  margin-bottom: .5rem;\n  line-height: 1.69;\n  color: var(--gray9);\n  font-size: 1rem;\n  font-weight: 600;\n}\n\nstellar-toggle stellar-card .item {\n  padding: 1rem;\n}\n\nstellar-toggle stellar-grid {\n  width: 100%;\n  --width: 18.5rem;\n}\n\nstellar-toggle[stacked] stellar-grid {\n  --width: 100%;\n}\n\nstellar-toggle[stacked] stellar-grid .grid {\n  width: 100%;\n  grid-gap: 0;\n}\n\nstellar-toggle[stacked] stellar-toggle-option label {\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n\nstellar-toggle[stacked] stellar-toggle-option + stellar-toggle-option label {\n  border-top: 1px solid var(--gray2);\n}\n\nstellar-toggle[dark][stacked] stellar-toggle-option + stellar-toggle-option label {\n  border-top: 1px solid var(--black);\n}\n";

const Toggle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = "checkbox";
        this.name = "";
        this.stacked = false;
        this.flip = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        this.card = "div";
        this.valid = true;
        this.update = createEvent(this, "update", 7);
    }
    componentWillLoad() {
        const options = this.element.querySelectorAll('stellar-toggle-option');
        const values = [];
        // @ts-ignore
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
                // @ts-ignore
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
            this.update.emit(this.value);
        }
    }
    updateChecked() {
        const options = this.element.querySelectorAll('stellar-toggle-option');
        // @ts-ignore
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
        return (h("div", null, this.renderValidation(), h(this.card, { padding: "tiny" }, h("stellar-grid", { cols: this.stacked ? "1" : "auto", compact: true }, h("slot", null)))));
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
            h("div", { "data-type": this.type, onClick: e => { e.stopPropagation(); } }, ["radio", "checkbox"].indexOf(this.type) === -1 && this.renderBlock(), ["radio", "checkbox"].indexOf(this.type) !== -1 && this.renderPlain()),
            this.description && h("stellar-label", { size: "small", underneath: true }, this.description)
        ];
    }
    get element() { return getElement(this); }
    static get style() { return ToggleCss; }
};
Tunnel.injectProps(Toggle, ['dark']);

export { Toggle as stellar_toggle };
