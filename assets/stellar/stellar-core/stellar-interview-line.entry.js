import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';

class InterviewLine {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.in = 6000;
        this.out = 8300;
        this.complement = false;
    }
    render() {
        return (h("div", { class: "line", "data-start": this.in - 100, "data-end": this.in, "data-opacity-start": "0", "data-opacity-end": "1", "data-translatey-start": "10", "data-translatey-end": "0" }, h("div", { class: "line", "data-start": this.out - 100, "data-end": this.out, "data-opacity-start": "1", "data-opacity-end": "0" }, h("slot", null))));
    }
    get element() { return getElement(this); }
    static get style() { return "stellar-interview-line {\n  display: block;\n  position: absolute;\n  bottom: 2rem;\n  width: 100%;\n  left: 0;\n  right: 0;\n  padding: 0 2rem;\n  text-align: center;\n}\n\nstellar-interview-line[complement] {\n  opacity: 0.825;\n  bottom: 1rem;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n}"; }
}

export { InterviewLine as stellar_interview_line };
