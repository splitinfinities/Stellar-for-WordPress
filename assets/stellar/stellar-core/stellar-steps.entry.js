import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';

class Steps {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async steps() {
        if (!this.stepsList || this.stepsList.length === 0) {
            this.stepsList = Array.from(this.element.querySelectorAll('stellar-step'));
        }
        return this.stepsList;
    }
    async contents() {
        this.contentsList = Array.from(document.querySelectorAll(`stellar-content[for='${this.name}']`));
        return this.contentsList;
    }
    async componentWillLoad() {
        const steps = await this.steps();
        const stepCount = steps.length;
        steps.forEach((step, index) => {
            step.order = index + 1;
            step.tabCount = stepCount;
        });
    }
    render() {
        return (h("div", { class: "step-list", role: "tablist" }, h("slot", null)));
    }
    get element() { return getElement(this); }
    static get style() { return "stellar-steps {\n	display: block;\n	width: 100%;\n	height: 4rem;\n}\n\nstellar-steps .step-list {\n	position: relative;\n	width: 100%;\n	height: 100%;\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-align: center;\n	align-items: center;\n	-ms-flex-pack: justify;\n	justify-content: space-between;\n}\n\nstellar-steps .indicator {\n	background: red;\n}"; }
}

export { Steps as stellar_steps };
