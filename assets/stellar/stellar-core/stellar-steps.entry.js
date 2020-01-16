import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';

const StepsCss = "stellar-steps {\n\tdisplay: block;\n\tcontain: content;\n\twidth: 100%;\n\theight: 4rem;\n}\n\nstellar-steps .step-list {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n}\n\nstellar-steps .indicator {\n\tbackground: red;\n}\n";

const Steps = class {
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
    static get style() { return StepsCss; }
};

export { Steps as stellar_steps };
