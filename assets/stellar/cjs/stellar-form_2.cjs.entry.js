'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');
const index$1$1 = require('./index-d326a972.js');
require('./_commonjsHelpers-3fc1f64e.js');
require('./css-custom-properties.min-d46e7f9d.js');
require('./main-6214461c.js');
require('./moment-fd045425.js');
require('./index-9d31ce96.js');
const theme = require('./theme-1038bd3c.js');

const FormCss = "stellar-form{display:block;contain:content}";

const Form = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ajax = false;
        this.method = "get";
        this.autocomplete = "on";
        this.enctype = "multipart/form-data";
        this.novalidate = false;
        this.selectors = ['stellar-input', 'stellar-toggle', 'stellar-range', 'stellar-switch', 'stellar-select'];
        this.submitted = index.createEvent(this, "submitted", 7);
    }
    handleEnter(event) {
        if (event.key === 'enter') {
            this.submit_form();
        }
    }
    async register(selectors) {
        this.selectors = [
            ...this.selectors,
            ...selectors
        ];
    }
    async refresh() {
        var resizeEvent = window.document.createEvent('UIEvents');
        resizeEvent.initEvent('resize', true, false);
        window.dispatchEvent(resizeEvent);
    }
    async state() {
        var formData = new FormData();
        var results = [];
        var valid = true;
        const els = Array.from(this.element.querySelectorAll(this.selectors.join(",")));
        await index$1$1.asyncForEach(els, async (element) => {
            try {
                let result = await element.validate();
                results.push(result);
            }
            catch (e) {
                results.push({
                    name: `${element.name}`,
                    value: undefined,
                    valid: false,
                    errors: [e.message],
                });
            }
        });
        results.forEach((result) => {
            if (result) {
                if (result.name) {
                    formData.append(result.name.toString(), result.value);
                }
                if (!result.valid) {
                    valid = false;
                }
            }
        });
        const json = index$1$1.form2js(results.filter(i => i && i.name));
        return {
            els,
            json,
            results: results,
            formData: formData,
            valid: valid,
        };
    }
    async submit_form() {
        const state = await this.state();
        if (state.valid) {
            if (this.ajax) {
                this.submitted.emit(state);
            }
            else {
                this.element.querySelector('form').submit();
            }
        }
    }
    render() {
        return index.h("form", { action: this.action, method: this.method, "accept-charset": this.acceptCharset, autocomplete: this.autocomplete, enctype: this.enctype, name: this.name, novalidate: this.novalidate, target: this.target, onSubmit: (e) => { e.preventDefault(); this.submit_form(); } }, index.h("slot", null));
    }
    get element() { return index.getElement(this); }
    static get style() { return FormCss; }
};

const Theme = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dark = false;
        this.light = false;
        this.body = false;
        this.system = false;
        this.base = "indigo";
        this.complement = "red";
        this.htmlEl = document.querySelector('html');
        this.bodyEl = document.querySelector('body');
    }
    componentWillLoad() {
        if (this.system) {
            this.dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.light = window.matchMedia('(prefers-color-scheme: light)').matches;
        }
        this.observeDark();
        this.observeColors();
    }
    observeColors() {
        const options = Object.keys(index$1$1.colors);
        if (this.body) {
            options.forEach((color) => {
                this.htmlEl.classList.remove(`theme-${color}`);
                this.htmlEl.classList.remove(`complement-${color}`);
                this.bodyEl.classList.remove(`theme-${color}`);
                this.bodyEl.classList.remove(`complement-${color}`);
            });
            this.bodyEl.classList.add(`theme-${this.base}`);
            this.bodyEl.classList.add(`complement-${this.complement}`);
        }
    }
    observeDark() {
        if (this.body && this.dark) {
            this.htmlEl.classList.add('dark-mode');
            this.bodyEl.classList.add('dark-mode');
        }
        else {
            this.htmlEl.classList.remove('dark-mode');
            this.bodyEl.classList.remove('dark-mode');
        }
        if (this.body && this.light) {
            this.htmlEl.classList.add('light-mode');
            this.bodyEl.classList.add('light-mode');
        }
        else {
            this.htmlEl.classList.remove('light-mode');
            this.bodyEl.classList.remove('light-mode');
        }
    }
    render() {
        return index.h(index.Host, { class: `${this.dark ? "dark-mode" : ""} ${this.light ? "light-mode" : ""} theme-${this.base} complement-${this.complement}` }, index.h(theme.Tunnel.Provider, { state: { dark: this.dark, light: this.light } }));
    }
    static get watchers() { return {
        "base": ["observeColors"],
        "complement": ["observeColors"],
        "dark": ["observeDark"]
    }; }
};

exports.stellar_form = Form;
exports.stellar_theme = Theme;
