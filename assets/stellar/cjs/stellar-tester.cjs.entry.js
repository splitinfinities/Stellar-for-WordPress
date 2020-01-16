'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');

const Testington = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentDidLoad() {
        this.form = this.element.querySelector('stellar-form');
        this.select = this.form.querySelector('stellar-select');
    }
    submitLogin(_) {
        this.select.multiple = !this.select.multiple;
    }
    render() {
        return index.h("stellar-layout", { size: "tiny", padding: "large", align: "center", class: "mv6 dib w-100" }, index.h("stellar-theme", { body: true, system: true, base: "orange", complement: "violet" }), index.h("copy-wrap", { align: "center" }, index.h("h1", { class: "mb4" }, "Sign in to Your Account"), index.h("stellar-form", { ajax: true, onSubmitted: (e) => { this.submitLogin(e); } }, index.h("stellar-grid", { cols: "1", noresponsive: true }, index.h("stellar-select", { name: "config[query][metric_category]", overlay: true, fit: true, wrap: true, autoSelectFirst: true, label: "Metric Category", placeholder: "Select a metric category", novalidate: true, tooltip: "Select a metric category to view the related card type and metric options." }, index.h("stellar-item", { fit: true, wrap: true, selected: true, value: "Nice" }, "Nice"), index.h("stellar-item", { fit: true, wrap: true, value: "Awesome" }, "Awesome"), index.h("stellar-item", { fit: true, wrap: true, value: "Sick" }, "Sick"), index.h("stellar-item", { fit: true, wrap: true, value: "Cool" }, "Cool")), index.h("stellar-button", { tag: "submit" }, "submit")))));
    }
    get element() { return index.getElement(this); }
};

exports.stellar_tester = Testington;
