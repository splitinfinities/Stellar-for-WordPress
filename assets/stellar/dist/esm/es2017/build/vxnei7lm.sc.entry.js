import { h } from '../stellar-core.core.js';

class Steps {
    steps() {
        if (!this.stepsList || this.stepsList.length === 0) {
            this.stepsList = Array.from(this.element.querySelectorAll('stellar-step'));
        }
        return this.stepsList;
    }
    contents() {
        this.contentsList = Array.from(document.querySelectorAll(`stellar-content[for='${this.name}']`));
        return this.contentsList;
    }
    componentWillLoad() {
        this.steps();
        const stepCount = this.steps().length;
        this.steps().forEach((step, index) => {
            step.order = index + 1;
            step.tabCount = stepCount;
        });
    }
    render() {
        return (h("div", { class: "step-list", role: "tablist" },
            h("slot", null)));
    }
    static get is() { return "stellar-steps"; }
    static get properties() { return {
        "contents": {
            "method": true
        },
        "contentsList": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "name": {
            "type": String,
            "attr": "name",
            "reflectToAttr": true,
            "mutable": true
        },
        "steps": {
            "method": true
        },
        "stepsList": {
            "state": true
        }
    }; }
    static get style() { return "stellar-steps{display:block;width:100%;height:4rem}stellar-steps .step-list{position:relative;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}stellar-steps .indicator{background:red}"; }
}

export { Steps as StellarSteps };
