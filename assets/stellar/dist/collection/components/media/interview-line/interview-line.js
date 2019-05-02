export class InterviewLine {
    constructor() {
        this.in = 6000;
        this.out = 8300;
        this.complement = false;
    }
    render() {
        return (h("div", { class: "line", "data-start": this.in - 100, "data-end": this.in, "data-opacity-start": "0", "data-opacity-end": "1", "data-translatey-start": "10", "data-translatey-end": "0" },
            h("div", { class: "line", "data-start": this.out - 100, "data-end": this.out, "data-opacity-start": "1", "data-opacity-end": "0" },
                h("slot", null))));
    }
    static get is() { return "stellar-interview-line"; }
    static get properties() { return {
        "complement": {
            "type": Boolean,
            "attr": "complement"
        },
        "element": {
            "elementRef": true
        },
        "in": {
            "type": Number,
            "attr": "in"
        },
        "out": {
            "type": Number,
            "attr": "out"
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-interview-line:**/"; }
}
