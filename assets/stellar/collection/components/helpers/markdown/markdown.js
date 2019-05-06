import { h } from '@stencil/core';
import showdown from 'showdown';
export class Markdown {
    constructor() {
        this.showdown = new showdown.Converter();
    }
    componentWillLoad() {
        this.convert();
    }
    onCodeStringChange() {
        this.convert();
    }
    onSrcChange() {
        this.convert();
    }
    convert() {
        if (this.src) {
            this.fetchMarkdown();
        }
        else if (this.codeString) {
            this.raw = this.codeString;
            this.convertMarkdown();
        }
        else {
            this.getMarkdown();
            this.convertMarkdown();
        }
    }
    getMarkdown() {
        const raw = this.element.querySelector('template').innerHTML;
        this.raw = raw.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
    }
    convertMarkdown() {
        let converted = this.showdown.makeHtml(this.raw);
        converted = this.replaceAll(converted, "<pre", "<stellar-code-block");
        converted = this.replaceAll(converted, "</pre", "</stellar-code-block");
        converted = this.replaceAll(converted, "<code", "<template");
        converted = this.replaceAll(converted, "</code", "</template");
        this.converted = converted;
    }
    replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }
    async fetchMarkdown() {
        const response = await fetch(this.src);
        const text = await response.text();
        this.raw = text;
        this.convertMarkdown();
    }
    render() {
        return [
            h("slot", null),
            h("copy-wrap", { full: true, class: "wrap" },
                h("div", { innerHTML: this.converted }))
        ];
    }
    static get is() { return "stellar-markdown"; }
    static get properties() { return {
        "src": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "src",
            "reflect": false
        },
        "codeString": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "code-string",
            "reflect": false
        }
    }; }
    static get states() { return {
        "converted": {},
        "raw": {},
        "showdown": {}
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "codeString",
            "methodName": "onCodeStringChange"
        }, {
            "propName": "src",
            "methodName": "onSrcChange"
        }]; }
}
