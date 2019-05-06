export class Button {
    constructor() {
        this.tag = "link";
        this.label = 'Submit';
        this.name = '';
        this.value = '';
        this.href = '#';
        this.target = '_self';
        this.size = "medium";
        this.padding = "medium";
        this.icon = false;
        this.active = false;
        this.disabled = false;
        this.danger = false;
        this.pill = false;
        this.block = false;
        this.outline = false;
        this.invert = false;
        this.processable = false;
        this.processing = false;
        this.ghost = false;
    }
    async click() {
        if (this.processable) {
            this.processing = true;
        }
        if (this.for) {
            const target = this.for.split(":");
            if (target[0] === "modal") {
                const modal = document.querySelector(`stellar-modal[name="${target[1]}"]`);
                modal.open();
            }
        }
        if (this.tag === "submit") {
            this.element.closest('stellar-form').submit_form();
        }
        if (this.tag === "link") {
            window.location.href = this.href;
        }
        return true;
    }
    renderSVG() {
        return (h("stellar-asset", { src: "Loading", color: "white" }));
    }
    renderButton() {
        return (h("button", { type: "button", class: "button", title: this.label, disabled: this.disabled, onClick: () => { this.click(); } },
            h("div", { class: "content" },
                h("slot", null, "Submit")),
            this.processing && h("div", { class: "processing" }, this.renderSVG())));
    }
    renderSubmit() {
        return (h("button", { type: "submit", class: "button", title: this.label, disabled: this.disabled, name: this.name, value: this.value, onClick: () => { this.click(); } },
            h("div", { class: "content" },
                h("slot", null, "Submit")),
            this.processing && h("div", { class: "processing" }, this.renderSVG())));
    }
    renderLink() {
        return (h("a", { href: this.href, target: this.target, class: "button", "data-disabled": this.disabled, title: this.label, onClick: () => { this.click(); } },
            h("div", { class: "content" },
                h("slot", null, "Submit")),
            this.processing && h("div", { class: "processing" }, this.renderSVG())));
    }
    renderAppLink() {
        return (h("stencil-route-link", { url: this.href, anchorClass: "button", "data-disabled": this.disabled, title: this.label, onClick: () => { this.click(); } },
            h("div", { class: "content" },
                h("slot", null, "Submit")),
            this.processing && h("div", { class: "processing" }, this.renderSVG())));
    }
    renderSpan() {
        return (h("span", { class: "button", title: this.label, "data-disabled": this.disabled, "aria-label": `Button ${this.label} ${this.element.textContent}`, tabIndex: 0, onClick: () => { this.click(); } },
            h("div", { class: "content" },
                h("slot", null, "Submit")),
            this.processing && h("div", { class: "processing" }, this.renderSVG())));
    }
    render() {
        return [
            this.tag === "button" && this.renderButton(),
            this.tag === "submit" && this.renderSubmit(),
            this.tag === "link" && this.renderLink(),
            this.tag === "route-link" && this.renderAppLink(),
            this.tag === "span" && this.renderSpan()
        ];
    }
    static get is() { return "stellar-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "active": {
            "type": Boolean,
            "attr": "active",
            "reflectToAttr": true
        },
        "block": {
            "type": Boolean,
            "attr": "block",
            "reflectToAttr": true
        },
        "danger": {
            "type": Boolean,
            "attr": "danger",
            "reflectToAttr": true
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "reflectToAttr": true
        },
        "element": {
            "elementRef": true
        },
        "for": {
            "type": String,
            "attr": "for"
        },
        "ghost": {
            "type": Boolean,
            "attr": "ghost",
            "reflectToAttr": true
        },
        "href": {
            "type": String,
            "attr": "href"
        },
        "icon": {
            "type": Boolean,
            "attr": "icon",
            "reflectToAttr": true
        },
        "invert": {
            "type": Boolean,
            "attr": "invert",
            "reflectToAttr": true
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "outline": {
            "type": Boolean,
            "attr": "outline",
            "reflectToAttr": true
        },
        "padding": {
            "type": String,
            "attr": "padding",
            "reflectToAttr": true
        },
        "pill": {
            "type": Boolean,
            "attr": "pill",
            "reflectToAttr": true
        },
        "processable": {
            "type": Boolean,
            "attr": "processable"
        },
        "processing": {
            "state": true
        },
        "size": {
            "type": String,
            "attr": "size",
            "reflectToAttr": true
        },
        "tag": {
            "type": String,
            "attr": "tag"
        },
        "target": {
            "type": String,
            "attr": "target"
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-button:**/"; }
}
