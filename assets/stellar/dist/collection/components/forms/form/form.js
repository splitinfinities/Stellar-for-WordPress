import { asyncForEach, form2js } from '../../../utils';
export class Form {
    constructor() {
        this.ajax = false;
        this.method = "get";
        this.autocomplete = "on";
        this.enctype = "multipart/form-data";
        this.novalidate = false;
        this.selectors = ['stellar-input', 'stellar-toggle', 'stellar-range', 'stellar-switch', 'stellar-select'];
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
        return (h("form", { action: this.action, method: this.method, "accept-charset": this.acceptCharset, autocomplete: this.autocomplete, enctype: this.enctype, name: this.name, novalidate: this.novalidate, target: this.target, onSubmit: (e) => { e.preventDefault(); this.submit_form(); } },
            h("slot", null)));
    }
    static get is() { return "stellar-form"; }
    static get properties() { return {
        "acceptCharset": {
            "type": String,
            "attr": "accept-charset"
        },
        "action": {
            "type": String,
            "attr": "action"
        },
        "ajax": {
            "type": Boolean,
            "attr": "ajax"
        },
        "autocomplete": {
            "type": String,
            "attr": "autocomplete"
        },
        "element": {
            "elementRef": true
        },
        "enctype": {
            "type": String,
            "attr": "enctype"
        },
        "method": {
            "type": String,
            "attr": "method"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "novalidate": {
            "type": Boolean,
            "attr": "novalidate"
        },
        "refresh": {
            "method": true
        },
        "register": {
            "method": true
        },
        "selectors": {
            "state": true
        },
        "state": {
            "method": true
        },
        "submit_form": {
            "method": true
        },
        "target": {
            "type": String,
            "attr": "target"
        }
    }; }
    static get events() { return [{
            "name": "submit",
            "method": "submit",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "keydown",
            "method": "handleEnter"
        }]; }
    static get style() { return "/**style-placeholder:stellar-form:**/"; }
}
