import { h } from '../stellar-core.core.js';

import { a as zxcvbn } from './chunk-5ce278cb.js';

class PasswordRequirements {
    constructor() {
        this.length = false;
        this.uppercase = false;
        this.number = false;
        this.symbol = false;
        this.commonPasswords = true;
        this.commonNames = true;
        this.repeated = true;
    }
    componentDidLoad() {
        setTimeout(() => {
            this.input = document.querySelector(`stellar-input[name="${this.for}"]`);
            this.input.addEventListener('change', (e) => {
                this.value = e.detail;
            });
        }, 1000);
    }
    get fs() {
        if (this.size === "tiny") {
            return "fs7";
        }
        else if (this.size === "small") {
            return "fs6";
        }
        else if (this.size === "large") {
            return "fs4";
        }
        else {
            return "fs5";
        }
    }
    get icon() {
        if (this.size === "tiny") {
            return "fs6";
        }
        else if (this.size === "small") {
            return "fs5";
        }
        else if (this.size === "large") {
            return "fs1";
        }
        else {
            return "fs4";
        }
    }
    handleValueChange() {
        const result = zxcvbn(this.value);
        this.length = this.value.length >= 10;
        this.uppercase = (/[A-Z]/.test(this.value));
        this.number = (/[0-9]/.test(this.value));
        this.symbol = (/[^A-Za-z0-9]/.test(this.value));
        this.commonPasswords = result.feedback.warning !== "This is a very common password";
        this.commonNames = result.feedback.warning !== "Names and surnames by themselves are easy to guess";
        this.repeated = result.feedback.warning !== 'Repeats like "abcabcabc" are only slightly harder to guess than "abc"';
    }
    renderLength() {
        return h("p", { class: `${this.fs} flex items-center mb3 ${this.length ? 'theme-green' : 'theme-red'}` },
            h("stellar-asset", { class: `${this.icon} fs4 dib mr2 theme-base7`, name: this.length ? "checkmark-circle-outline" : "close-circle-outline" }),
            h("small", null, "10 characters or longer"));
    }
    renderUppercase() {
        return h("p", { class: `${this.fs} flex items-center mb3 ${this.uppercase ? 'theme-green' : 'theme-red'}` },
            h("stellar-asset", { class: `${this.icon} fs4 dib mr2 theme-base7`, name: this.uppercase ? "checkmark-circle-outline" : "close-circle-outline" }),
            h("small", null, "At least 1 uppercase character"));
    }
    renderNumber() {
        return h("p", { class: `${this.fs} flex items-center mb3 ${this.number ? 'theme-green' : 'theme-red'}` },
            h("stellar-asset", { class: `${this.icon} fs4 dib mr2 theme-base7`, name: this.number ? "checkmark-circle-outline" : "close-circle-outline" }),
            h("small", null, "At least 1 number"));
    }
    renderSymbol() {
        return h("p", { class: `${this.fs} flex items-center mb3 ${this.symbol ? 'theme-green' : 'theme-red'}` },
            h("stellar-asset", { class: `${this.icon} fs4 dib mr2 theme-base7`, name: this.symbol ? "checkmark-circle-outline" : "close-circle-outline" }),
            h("small", null, "At least 1 symbol"));
    }
    renderCommonPasswords() {
        return h("p", { class: `${this.fs} flex items-center mb3 ${this.commonPasswords ? 'theme-green' : 'theme-red'}` },
            h("stellar-asset", { class: `${this.icon} fs4 dib mr2 theme-base7`, name: this.commonPasswords ? "checkmark-circle-outline" : "close-circle-outline" }),
            h("small", null, "Cannot be common passwords ('password123 is bad')"));
    }
    renderCommonNames() {
        return h("p", { class: `${this.fs} flex items-center mb3 ${this.commonNames ? 'theme-green' : 'theme-red'}` },
            h("stellar-asset", { class: `${this.icon} fs4 dib mr2 theme-base7`, name: this.commonNames ? "checkmark-circle-outline" : "close-circle-outline" }),
            h("small", null, "Cannot be a name ('andrew')"));
    }
    renderRepeatedKeys() {
        return h("p", { class: `${this.fs} flex items-center mb3 ${this.repeated ? 'theme-green' : 'theme-red'}` },
            h("stellar-asset", { class: `${this.icon} fs4 dib mr2 theme-base7`, name: this.repeated ? "checkmark-circle-outline" : "close-circle-outline" }),
            h("small", null, "Cannot be repeated keys ('asdfasdfasdf')"));
    }
    render() {
        return [
            this.renderLength(),
            this.renderUppercase(),
            this.renderNumber(),
            this.renderSymbol(),
            this.renderCommonPasswords(),
            this.renderCommonNames(),
            this.renderRepeatedKeys(),
        ];
    }
    static get is() { return "stellar-password-requirements"; }
    static get properties() { return {
        "commonNames": {
            "state": true
        },
        "commonPasswords": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "for": {
            "type": String,
            "attr": "for",
            "reflectToAttr": true
        },
        "input": {
            "state": true
        },
        "length": {
            "state": true
        },
        "number": {
            "state": true
        },
        "repeated": {
            "state": true
        },
        "size": {
            "type": String,
            "attr": "size"
        },
        "symbol": {
            "state": true
        },
        "uppercase": {
            "state": true
        },
        "value": {
            "state": true,
            "watchCallbacks": ["handleValueChange"]
        }
    }; }
}

export { PasswordRequirements as StellarPasswordRequirements };
