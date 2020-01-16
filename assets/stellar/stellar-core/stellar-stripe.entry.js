import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';

const style = {
    iconStyle: 'solid',
    base: {
        iconColor: '#484849',
        color: '#484849',
        fontWeight: 500,
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '15px',
        fontSmoothing: 'antialiased',
        "::placeholder": {
            color: "#a3a3a4"
        },
        ":-webkit-autofill": {
            color: "#a3a3a4"
        }
    },
    invalid: {
        iconColor: '#f85e5a',
        color: '#f85e5a',
        '::placeholder': {
            color: '#fa8e8b',
        },
    },
};
const classes = {
    focus: 'focused',
    empty: 'empty',
    invalid: 'invalid',
};

const StripeCss = "stellar-stripe {\n  contain: content;\n  display: block;\n}\n\nstellar-stripe .field {\n  position: relative;\n  margin-bottom: 30px;\n  width: 100%;\n}\n\nstellar-stripe label {\n  display: block;\n  margin-bottom: 10px;\n  line-height: 1.69;\n  color: #484849;\n  color: var(--gray5);\n  font-size: 13px;\n  font-weight: 600;\n}\n\nstellar-stripe .input {\n  border: 1px solid var(--gray2);\n  border-radius: 4px;\n}\n\nstellar-stripe .input::-webkit-input-placeholder {\n  transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);\n  color: transparent;\n}\n\nstellar-stripe .input::-moz-placeholder {\n  transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);\n  color: transparent;\n}\n\nstellar-stripe .input:-ms-input-placeholder {\n  transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);\n  color: transparent;\n}\n\nstellar-stripe .input.StripeElement {\n  display: flex;\n  top: 0;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  height: 100%;\n}\n\nstellar-stripe .input.StripeElement > div {\n  width: 100%;\n}\n\nstellar-stripe .input.focused::-webkit-input-placeholder,\nstellar-stripe .input:not(.empty)::-webkit-input-placeholder {\n  color: var(--gray2);\n}\n\nstellar-stripe .input.focused::-moz-placeholder,\nstellar-stripe .input:not(.empty)::-moz-placeholder {\n  color: var(--gray2);\n}\n\nstellar-stripe .input.focused:-ms-input-placeholder,\nstellar-stripe .input:not(.empty):-ms-input-placeholder {\n  color: var(--gray2);\n}\n\nstellar-stripe .input.focused + label,\nstellar-stripe .input:not(.empty) + label {\n  cursor: default;\n  transform: scale(0.85) translateY(-25px);\n  color: #aab7c4;\n}\n\nstellar-stripe .input.focused + label {\n  color: #24b47e;\n}\n\nstellar-stripe .input.invalid + label {\n  color: #ffa27b;\n}\n\nstellar-stripe .input.focused + label + .baseline {\n  background-color: #24b47e;\n}\n\nstellar-stripe .input.focused.invalid + label + .baseline {\n  background-color: #e25950;\n}\n\nstellar-stripe .input input {\n  appearance: none;\n  -webkit-appearance: none;\n  outline: none;\n  border-style: none;\n  -moz-appearance: none;\n}\n\nstellar-stripe .validation {\n  margin-top: 10px;\n  margin-bottom: 0;\n  color: var(--red5);\n  font-size: 14px;\n  font-weight: 500;\n}\n\nstellar-stripe .validation span {\n  display: block;\n  padding: 10px 0;\n  line-height: 1.4;\n}\n\nstellar-stripe .validation span + span {\n  border-top: 1px solid var(--gray1);\n}\n";

const Stripe = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.token = 'pk_test_6pRNASCoBOKtIshFeQd4XMUh';
        this.name = 'stripe';
        this.value = undefined;
        this.cardData = {};
        this.state = "preparing";
    }
    componentWillLoad() {
        if (window["Stripe"]) {
            this.stripe = window["Stripe"](this.token);
        }
    }
    componentDidLoad() {
        this.connect();
    }
    async connect() {
        this.stripe = window["Stripe"](this.token);
        this.input = this.element.querySelector('.token');
        this.attachToForm();
        this.prepareStripe();
    }
    async getToken() {
        await this.stripe.createToken(this.card, this.cardData)
            .then(this.handleResponse.bind(this))
            .catch(this.handleError.bind(this));
        return this.value !== undefined;
    }
    attachToForm() {
        const form = this.element.closest("form");
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.getToken().then((result) => {
                    if (result) {
                        form.submit();
                    }
                });
            });
        }
        else {
            console.error("The stellar-stripe tag must be added to a form.");
        }
    }
    handleResponse({ error, token }) {
        if (error) {
            this.setError(error.message);
            // this.dispatchEvent(new ErrorEvent('stripe-error', {error, bubbles, composed}));
        }
        else {
            this.error = undefined;
            this.value = token.id;
            // this.dispatchEvent(new CustomEvent('stripe-token', {token, bubbles, composed}));
        }
    }
    handleError(error) {
        // this.dispatchEvent(new ErrorEvent('stripe-error', {error, bubbles, composed}));
        // Show error in UI
        this.setError(error.message);
    }
    async setError(error) {
        this.error = error;
    }
    prepareStripe() {
        var elements = this.stripe.elements({
            fonts: [
                {
                    cssSrc: 'https://fonts.googleapis.com/css?family=Open+Sans',
                },
            ],
            locale: 'auto'
        });
        this.card = elements.create('card', {
            style: style,
            classes: classes,
            hidePostalCode: true,
        });
        this.card.mount(this.element.querySelector('#card'));
    }
    renderPhone() {
        return (h("stellar-input", { id: "phone", "data-tid": "stellar_stripe.form.phone", type: "tel", placeholder: "(941) 555-0123", required: true, label: "Phone number" }));
    }
    renderZip() {
        return (h("stellar-input", { id: "zip", "data-tid": "stellar_stripe.form.postal_code", type: "text", placeholder: "94107", required: true, label: "ZIP" }));
    }
    render() {
        return (h("div", null, h("input", { type: "hidden", class: "token", name: this.name, value: this.value }), h("div", { class: "field" }, h("label", { "data-for": "stellar_stripe.form.card" }, h("p", { class: "label" }, "Card details")), h("div", { "data-tid": "stellar_stripe.form.card", id: "card", class: "input" }), this.error && h("p", { class: "validation" }, h("span", null, this.error))), h("stellar-grid", null, this.renderPhone(), this.renderZip())));
    }
    get element() { return getElement(this); }
    static get style() { return StripeCss; }
};

export { Stripe as stellar_stripe };
