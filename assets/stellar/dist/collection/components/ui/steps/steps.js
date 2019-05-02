export class Steps {
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
    static get style() { return "/**style-placeholder:stellar-steps:**/"; }
}
