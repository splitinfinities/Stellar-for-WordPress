'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');

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

const StripeCss = "stellar-stripe{contain:content;display:block}stellar-stripe .field{position:relative;margin-bottom:30px;width:100%}stellar-stripe label{display:block;margin-bottom:10px;line-height:1.69;color:#484849;color:var(--gray5);font-size:13px;font-weight:600}stellar-stripe .input{border:1px solid var(--gray2);border-radius:4px}stellar-stripe .input::-webkit-input-placeholder{-webkit-transition:color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);transition:color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);color:transparent}stellar-stripe .input::-moz-placeholder{-moz-transition:color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);transition:color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);color:transparent}stellar-stripe .input:-ms-input-placeholder{-ms-transition:color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);transition:color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);color:transparent}stellar-stripe .input.StripeElement{display:-ms-flexbox;display:flex;top:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:20px;height:100%}stellar-stripe .input.StripeElement>div{width:100%}stellar-stripe .input.focused::-webkit-input-placeholder,stellar-stripe .input:not(.empty)::-webkit-input-placeholder{color:var(--gray2)}stellar-stripe .input.focused::-moz-placeholder,stellar-stripe .input:not(.empty)::-moz-placeholder{color:var(--gray2)}stellar-stripe .input.focused:-ms-input-placeholder,stellar-stripe .input:not(.empty):-ms-input-placeholder{color:var(--gray2)}stellar-stripe .input.focused+label,stellar-stripe .input:not(.empty)+label{cursor:default;-webkit-transform:scale(0.85) translateY(-25px);transform:scale(0.85) translateY(-25px);color:#aab7c4}stellar-stripe .input.focused+label{color:#24b47e}stellar-stripe .input.invalid+label{color:#ffa27b}stellar-stripe .input.focused+label+.baseline{background-color:#24b47e}stellar-stripe .input.focused.invalid+label+.baseline{background-color:#e25950}stellar-stripe .input input{appearance:none;-webkit-appearance:none;outline:none;border-style:none;-moz-appearance:none}stellar-stripe .validation{margin-top:10px;margin-bottom:0;color:var(--red5);font-size:14px;font-weight:500}stellar-stripe .validation span{display:block;padding:10px 0;line-height:1.4}stellar-stripe .validation span+span{border-top:1px solid var(--gray1)}";

const Stripe = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("stellar-input", { id: "phone", "data-tid": "stellar_stripe.form.phone", type: "tel", placeholder: "(941) 555-0123", required: true, label: "Phone number" }));
    }
    renderZip() {
        return (index.h("stellar-input", { id: "zip", "data-tid": "stellar_stripe.form.postal_code", type: "text", placeholder: "94107", required: true, label: "ZIP" }));
    }
    render() {
        return (index.h("div", null, index.h("input", { type: "hidden", class: "token", name: this.name, value: this.value }), index.h("div", { class: "field" }, index.h("label", { "data-for": "stellar_stripe.form.card" }, index.h("p", { class: "label" }, "Card details")), index.h("div", { "data-tid": "stellar_stripe.form.card", id: "card", class: "input" }), this.error && index.h("p", { class: "validation" }, index.h("span", null, this.error))), index.h("stellar-grid", null, this.renderPhone(), this.renderZip())));
    }
    get element() { return index.getElement(this); }
    static get style() { return StripeCss; }
};

exports.stellar_stripe = Stripe;
