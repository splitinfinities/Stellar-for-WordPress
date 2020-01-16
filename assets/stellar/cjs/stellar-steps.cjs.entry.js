'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');

const StepsCss = "stellar-steps{display:block;contain:content;width:100%;height:4rem}stellar-steps .step-list{position:relative;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}stellar-steps .indicator{background:red}";

const Steps = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("div", { class: "step-list", role: "tablist" }, index.h("slot", null)));
    }
    get element() { return index.getElement(this); }
    static get style() { return StepsCss; }
};

exports.stellar_steps = Steps;
