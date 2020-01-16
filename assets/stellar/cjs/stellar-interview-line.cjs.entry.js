'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');

const InterviewLineCss = "stellar-interview-line{display:block;position:absolute;bottom:2rem;width:100%;left:0;right:0;padding:0 2rem;text-align:center;contain:content}stellar-interview-line[complement]{opacity:0.825;bottom:1rem;-webkit-transform:scale(0.5);transform:scale(0.5)}";

const InterviewLine = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.in = 6000;
        this.out = 8300;
        this.complement = false;
    }
    render() {
        return (index.h("div", { class: "line", "data-start": this.in - 100, "data-end": this.in, "data-opacity-start": "0", "data-opacity-end": "1", "data-translatey-start": "10", "data-translatey-end": "0" }, index.h("div", { class: "line", "data-start": this.out - 100, "data-end": this.out, "data-opacity-start": "1", "data-opacity-end": "0" }, index.h("slot", null))));
    }
    get element() { return index.getElement(this); }
    static get style() { return InterviewLineCss; }
};

exports.stellar_interview_line = InterviewLine;
