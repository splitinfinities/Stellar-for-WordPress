'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-f620c3d3.js');

class Steps {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
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
        return (__chunk_1.h("div", { class: "step-list", role: "tablist" }, __chunk_1.h("slot", null)));
    }
    get element() { return __chunk_1.getElement(this); }
    static get style() { return "stellar-steps{display:block;width:100%;height:4rem}stellar-steps .step-list{position:relative;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}stellar-steps .indicator{background:red}"; }
}

exports.stellar_steps = Steps;
