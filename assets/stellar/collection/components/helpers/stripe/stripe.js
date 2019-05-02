import * as config from './config';
export class Card {
    constructor() {
        this.token = 'pk_test_6pRNASCoBOKtIshFeQd4XMUh';
        this.name = 'stripe';
        this.value = undefined;
        this.cardData = {};
        this.state = "preparing";
    }
    componentWillLoad() {
        this.stripe = window["Stripe"](this.token);
    }
    componentDidLoad() {
        this.connect();
    }
    connect() {
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
        }
        else {
            this.error = undefined;
            this.value = token.id;
        }
    }
    handleError(error) {
        this.setError(error.message);
    }
    setError(error) {
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
            style: config.style,
            classes: config.classes,
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
        return (h("div", null,
            h("input", { type: "hidden", class: "token", name: this.name, value: this.value }),
            h("div", { class: "field" },
                h("label", { "data-for": "stellar_stripe.form.card" },
                    h("p", { class: "label" }, "Card details")),
                h("div", { "data-tid": "stellar_stripe.form.card", id: "card", class: "input" }),
                this.error && h("p", { class: "validation" },
                    h("span", null, this.error))),
            h("stellar-grid", null,
                this.renderPhone(),
                this.renderZip())));
    }
    static get is() { return "stellar-stripe"; }
    static get properties() { return {
        "card": {
            "state": true
        },
        "cardData": {
            "state": true
        },
        "connect": {
            "method": true
        },
        "element": {
            "elementRef": true
        },
        "error": {
            "state": true
        },
        "getToken": {
            "method": true
        },
        "input": {
            "state": true
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "setError": {
            "method": true
        },
        "state": {
            "state": true
        },
        "stripe": {
            "state": true
        },
        "token": {
            "type": String,
            "attr": "token"
        },
        "value": {
            "state": true
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-stripe:**/"; }
}
