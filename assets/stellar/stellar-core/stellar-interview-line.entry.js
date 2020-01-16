import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';

const InterviewLineCss = "stellar-interview-line {\n  display: block;\n  position: absolute;\n  bottom: 2rem;\n  width: 100%;\n  left: 0;\n  right: 0;\n  padding: 0 2rem;\n  text-align: center;\n  contain: content;\n}\n\nstellar-interview-line[complement] {\n  opacity: 0.825;\n  bottom: 1rem;\n  transform: scale(0.5);\n}\n";

const InterviewLine = class {
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
    static get style() { return InterviewLineCss; }
};

export { InterviewLine as stellar_interview_line };
