import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import ezClipboard from 'ez-clipboard';
export class Code {
    constructor() {
        this.language = "html";
        this.simple = false;
        this.copy = true;
        this.copied = false;
        this.expanded = false;
        this.expandable = false;
        this.randomName = Math.round((Math.random() * 10000));
        this.preview = true;
        this.feature = false;
    }
    componentWillLoad() {
        this.getCode();
    }
    componentDidLoad() {
        this.highlight();
        var observer = new MutationObserver((mutations) => {
            mutations.forEach(() => {
                this.getCode();
            });
        });
        observer.observe(this.element, { characterData: true, subtree: true });
    }
    componentWillUpdate() {
        this.getCode();
    }
    componentDidUpdate() {
        this.highlight();
    }
    replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }
    async highlight() {
        var block = this.element.shadowRoot.querySelector('code');
        Prism.highlightElement(block, false);
    }
    async result() {
        function htmlDecode(input) {
            var doc = new DOMParser().parseFromString(input, "text/html");
            return doc.documentElement.textContent;
        }
        return htmlDecode(this.code);
    }
    async clipboard() {
        const copyText = await this.result();
        ezClipboard.copyPlain(copyText);
    }
    async setCode(code) {
        this.code = code;
    }
    getCode() {
        if (this.codeString) {
            this.code = this.codeString.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
        }
        else {
            let code = this.element.querySelector('template');
            if (code) {
                const language = Array.from(code.classList).filter((s) => s.includes('language-'));
                if (language.length === 1) {
                    this.language = language[0].substr(9);
                }
                if (!code.innerHTML) {
                    code = Array.from(code.children).map((node) => {
                        return node.outerHTML;
                    }).join();
                }
                else {
                    code = code.innerHTML;
                }
                this.raw = code;
                this.code = code.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
            }
        }
    }
    renderPreview() {
        return h("section", { class: "preview flush" },
            h("div", { class: "result", innerHTML: this.raw }));
    }
    renderCode() {
        return h("pre", { "aria-label": `The ${this.language} code`, tabindex: 0 },
            h("code", { class: `language-${this.language}`, innerHTML: this.code }),
            h("div", { class: "hidden" },
                h("slot", null,
                    h("template", null,
                        h("p", null, "There's no code here!")))));
    }
    render() {
        if (this.simple) {
            return this.renderCode();
        }
        else {
            return h("stellar-card", { shadow: "light", padding: "small" },
                this.feature && h("header", null,
                    h("slot", { name: "feature" }),
                    h("slot", { name: "property" })),
                this.preview && this.renderPreview(),
                h("footer", { class: "code" }, this.renderCode()));
        }
    }
    static get is() { return "stellar-code"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "clipboard": {
            "method": true
        },
        "code": {
            "state": true
        },
        "codeString": {
            "type": String,
            "attr": "code-string"
        },
        "copied": {
            "state": true
        },
        "copy": {
            "type": Boolean,
            "attr": "copy"
        },
        "element": {
            "elementRef": true
        },
        "expandable": {
            "type": Boolean,
            "attr": "expandable"
        },
        "expanded": {
            "type": Boolean,
            "attr": "expanded",
            "mutable": true
        },
        "feature": {
            "type": Boolean,
            "attr": "feature"
        },
        "highlight": {
            "method": true
        },
        "language": {
            "type": String,
            "attr": "language",
            "reflectToAttr": true,
            "mutable": true
        },
        "observer": {
            "state": true
        },
        "preview": {
            "type": Boolean,
            "attr": "preview"
        },
        "randomName": {
            "state": true
        },
        "raw": {
            "state": true
        },
        "result": {
            "method": true
        },
        "setCode": {
            "method": true
        },
        "simple": {
            "type": Boolean,
            "attr": "simple"
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-code:**/"; }
}
