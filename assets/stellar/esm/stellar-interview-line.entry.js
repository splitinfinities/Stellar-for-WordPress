import { r as registerInstance, h, d as getElement } from './index-bcfb4a9f.js';

const InterviewLineCss = "stellar-interview-line{display:block;position:absolute;bottom:2rem;width:100%;left:0;right:0;padding:0 2rem;text-align:center;contain:content}stellar-interview-line[complement]{opacity:0.825;bottom:1rem;-webkit-transform:scale(0.5);transform:scale(0.5)}";

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
