import { d as registerInstance, i as createEvent, f as h, g as getElement } from './stellar-core-1e602ba1.js';
import './chunk-40f083d9.js';
import './chunk-d0cf38d8.js';
import { d as asyncForEach, e as form2js } from './chunk-27460e3f.js';
import './chunk-f26db59a.js';
import './chunk-cf2c1f95.js';

class Form {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ajax = false;
        this.method = "get";
        this.autocomplete = "on";
        this.enctype = "multipart/form-data";
        this.novalidate = false;
        this.selectors = ['stellar-input', 'stellar-toggle', 'stellar-range', 'stellar-switch', 'stellar-select'];
        this.submit = createEvent(this, "submit", 7);
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
        resizeEvent.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(resizeEvent);
    }
    async state() {
        var formData = new FormData();
        var results = [];
        var valid = true;
        const els = Array.from(this.element.querySelectorAll(this.selectors.join(",")));
        await asyncForEach(els, async (element) => {
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
        const json = form2js(results.filter(i => i && i.name));
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
                this.submit.emit(state);
            }
            else {
                this.element.querySelector('form').submit();
            }
        }
    }
    render() {
        return (h("form", { action: this.action, method: this.method, "accept-charset": this.acceptCharset, autocomplete: this.autocomplete, enctype: this.enctype, name: this.name, novalidate: this.novalidate, target: this.target, onSubmit: (e) => { e.preventDefault(); this.submit_form(); } }, h("slot", null)));
    }
    get element() { return getElement(this); }
    static get style() { return "stellar-form{display:block}"; }
}

export { Form as stellar_form };
