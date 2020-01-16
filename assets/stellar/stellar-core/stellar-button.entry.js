import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';
import './utils-06e0aad6.js';
import './index-88205cad.js';

const ButtonCss = ":host, :host *, :host *:before, :host *:after {\n    box-sizing: border-box;\n}\n\n:host {\n    contain: content;\n    appearance: none !important;\n    -webkit-appearance: none !important;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    display: var(--wrap-display, inline-block);\n    font-family: var(--font-heading);\n    text-align: center;\n    vertical-align: baseline;\n    align-self: center;\n\n    --width: auto;\n    --height: auto;\n    --padding-vertical: var(--ms0);\n    --padding-horizontal: var(--ms2);\n    --padding: var(--padding-vertical) var(--padding-horizontal);\n    --background: var(--theme-base5);\n    --color: var(--white);\n    --border: none;\n    --active-background: var(--theme-base7);\n    --active-color: var(--white);\n    --active-border: none;\n    --border: none;\n    --border-radius: 0;\n    --font-size: var(--ms0);\n    --text-decoration: none;\n}\n\n:host([outline]) {\n    --background: transparent;\n    --color: var(--theme-base5);\n    --border: 2px solid currentColor;\n    --active-background: var(--theme-base0);\n    --active-color: var(--theme-base7);\n    --active-border: 2px solid currentColor;\n}\n\n:host([ghost]) {\n    --padding-vertical: 0;\n    --padding-horizontal: 0;\n    --background: none;\n    --color: var(--theme-base5);\n    --border: none;\n    --active-background: none;\n    --active-color: var(--theme-base7);\n    --active-border: none;\n}\n\n:host([outline][invert]) {\n    --background: transparent;\n    --border: 2px solid currentColor;\n    --active-background: var(--theme-base0);\n    --active-border: 2px solid currentColor;\n}\n\n:host([ghost][invert]) {\n    --background: none;\n    --color: var(--theme-base2);\n    --border: none;\n    --active-background: none;\n    --active-color: var(--theme-base5);\n    --active-border: none;\n}\n\n:host([invert]) {\n    --background: var(--white);\n    --color: var(--theme-base2);\n    --border: none;\n    --active-background: var(--theme-base0);\n    --active-color: var(--theme-base5);\n    --active-border: none;\n}\n\n:host([contrast]) {\n    --background: var(--theme-base7);\n    --color: var(--white);\n    --border: none;\n    --active-background: var(--theme-base9);\n    --active-color: var(--theme-base0);\n    --active-border: none;\n}\n\n:host([pill]) {\n    --border-radius: 1000px;\n}\n\n:host([size=\"tiny\"]) {\n    --font-size: var(--ms-2);\n}\n\n:host([size=\"small\"]) {\n    --font-size: var(--ms-1);\n}\n\n:host([size=\"medium\"]) {\n    --font-size: var(--ms1);\n}\n\n:host([size=\"large\"]) {\n    --font-size: var(--ms2);\n}\n\n:host([padding=\"tiny\"]) {\n    --padding-vertical: var(--ms-2);\n    --padding-horizontal: var(--ms0);\n}\n\n:host([padding=\"small\"]) {\n    --padding-vertical: var(--ms-1);\n    --padding-horizontal: var(--ms1);\n}\n\n:host([padding=\"medium\"]) {\n    --padding-vertical: var(--ms1);\n    --padding-horizontal: var(--ms3);\n}\n\n:host([padding=\"large\"]) {\n    --padding-vertical: var(--ms2);\n    --padding-horizontal: var(--ms4);\n}\n\n:host(:active) {\n    transform: scale(0.925);\n}\n\n:host(.h-auto) {\n    --height: 100%;\n    --padding-vertical: 0;\n}\n\n:host .button {\n    cursor: pointer;\n    display: inline-flex;\n    position: relative;\n    align-items: center;\n    outline: 0;\n    border: var(--border);\n    background: var(--background);\n    padding: var(--padding);\n    width: var(--width);\n    height: var(--height);\n    vertical-align: bottom;\n    text-decoration: var(--text-decoration);\n    line-height: 1;\n    letter-spacing: var(--letter-spacing, 0.0275em);;\n    white-space: nowrap;\n    color: var(--color);\n    font-family: inherit;\n    font-size: var(--font-size);\n    font-weight: 600;\n    border-radius: var(--border-radius, 0);\n}\n\n:host a.button,\n:host span.button {\n    width: auto;\n}\n\n:host .button:hover,\n:host .button:focus {\n    border: var(--active-border);\n    background-color: var(--active-background);\n    color: var(--active-color);\n}\n\n:host .button .content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n:host([block]),\n:host([block]) .button {\n    display: block;\n    width: 100%;\n}\n\n:host ::slotted(*) {\n    line-height: 1 !important;\n    font-family: inherit;\n}\n\n:host([icon]) .button .content {\n    display: inline-grid;\n    align-items: center;\n    justify-content: center;\n    grid-template-columns: auto auto auto;\n    grid-gap: 0.1em;\n}\n\n:host ::slotted(img),\n:host ::slotted(ion-icon) {\n    display: inline-block;\n    float: none;\n    width: 1em;\n    height: 1em;\n    font-size: 1.75em;\n    margin: calc(var(--padding-vertical) * -0.5) 0 calc(var(--padding-vertical) * -0.5) calc(var(--padding-vertical) * -0.5);\n}\n\n:host([ghost]) ::slotted(img),\n:host([ghost]) ::slotted(ion-icon) {\n    font-size: 1.65em;\n}\n\n:host ::slotted(.align-left) {\n    order: -1;\n    margin-right: var(--ms-7);\n}\n\n:host ::slotted(.align-right) {\n    order: 2;\n    margin-left: var(--ms-7);\n}\n\n:host([dark]) {\n    --background: var(--theme-base7);\n    --color: var(--white);\n    --active-background: var(--theme-base9);\n    --active-color: var(--white);\n    --active-border: none;\n}\n\n:host([dark][outline]) {\n    --background: transparent;\n    --color: var(--white);\n    --border: 2px solid var(--theme-base5);\n    --active-background: var(--theme-base9);\n    --active-color: var(--theme-base0);\n    --active-border: 2px solid var(--theme-base9);\n}\n\n:host([dark][ghost]) {\n    --padding: 0.05em 0 0.125em;\n    --background: none;\n    --color: var(--theme-base5);\n    --border: none;\n    --active-background: none;\n    --active-color: var(--theme-base7);\n    --active-border: none;\n}\n";

const Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Allows the button to render for different tags.
         */
        this.tag = "link";
        /**
         * Sets accessibility options on the buttons
         */
        this.label = 'Submit';
        /**
         * Sets the name on the button if the button is an input. Allows the button to act as an item in a form.
         */
        this.name = '';
        /**
         * Sets the value on the button if the button is an input.
         */
        this.value = '';
        /**
         * Sets the href on the anchor tag if the button is a link.
         */
        this.href = '#';
        /**
         * Sets the target on the anchor tag if the button is a link.
         */
        this.target = '_self';
        /**
         * Sets the button or link as a button with only an icon.
         */
        this.icon = false;
        /**
         * Sets the button or link as an active state.
         */
        this.active = false;
        /**
         * Sets the button or link as disabled and not-interactable.
         */
        this.disabled = false;
        /**
         * Sets the button or link to provide the affordance of a dangerous action.
         */
        this.danger = false;
        /**
         * Sets the button or link to render as a pill.
         */
        this.pill = false;
        /**
         * Sets the button or link to render at full width to the parent.
         */
        this.block = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.outline = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.invert = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.contrast = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.pjax = false;
        /**
         * Sets the button or link as processing when clicked.
         */
        this.processable = false;
        this.processing = false;
        this.ghost = false;
    }
    componentWillLoad() {
        if (!this.element.getAttribute("title")) {
            this.label = this.element.innerText;
        }
        else {
            this.label = this.element.getAttribute("title");
        }
        this.icon = this.element.querySelectorAll('ion-icon').length > 0;
    }
    async click() {
        if (this.processable) {
            this.processing = true;
        }
        if (this.for) {
            const target = this.for.split(":");
            if (target[0] === "modal") {
                // @ts-ignore
                const modal = document.querySelector(`stellar-modal[name="${target[1]}"]`);
                modal.open();
            }
        }
        if (this.tag === "submit") {
            // @ts-ignore
            this.element.closest('stellar-form').submit_form();
        }
        if (this.tag === "link") {
            window.location.href = this.href;
        }
        if (this.tag === "pjax") {
            document.querySelector('stellar-pjax').pjax.loadUrl(this.href);
        }
        return true;
    }
    renderSVG() {
        return (h("ion-icon", { src: "loading", style: { color: "var(--white)" } }));
    }
    renderButton() {
        return (h("button", { type: "button", class: "button", title: this.label, disabled: this.disabled, onClick: () => { this.click(); } }, h("div", { class: "content" }, h("slot", null, "Submit")), this.processing && h("div", { class: "processing" }, this.renderSVG())));
    }
    renderSubmit() {
        return (h("button", { type: "submit", class: "button", title: this.label, disabled: this.disabled, name: this.name, value: this.value, onClick: () => { this.click(); } }, h("div", { class: "content" }, h("slot", null, "Submit")), this.processing && h("div", { class: "processing" }, this.renderSVG())));
    }
    renderLink() {
        return (h("a", { href: this.href, target: this.target, class: "button", "data-disabled": this.disabled, title: this.label, onClick: () => { this.click(); } }, h("div", { class: "content" }, h("slot", null, "Submit")), this.processing && h("div", { class: "processing" }, this.renderSVG())));
    }
    renderAppLink() {
        return (h("stencil-route-link", { url: this.href, anchorClass: "button", "data-disabled": this.disabled, title: this.label, onClick: () => { this.click(); } }, h("div", { class: "content" }, h("slot", null, "Submit")), this.processing && h("div", { class: "processing" }, this.renderSVG())));
    }
    renderSpan() {
        return (h("span", { class: "button", title: this.label, "data-disabled": this.disabled, "aria-label": `Button ${this.label} ${this.element.textContent}`, tabIndex: 0, onClick: () => { this.click(); } }, h("div", { class: "content" }, h("slot", null, "Submit")), this.processing && h("div", { class: "processing" }, this.renderSVG())));
    }
    render() {
        return [
            this.tag === "button" && this.renderButton(),
            this.tag === "submit" && this.renderSubmit(),
            this.tag === "link" && this.renderLink(),
            this.tag === "route-link" && this.renderAppLink(),
            this.tag === "span" && this.renderSpan(),
            this.tag === "pjax" && this.renderSpan()
        ];
    }
    get element() { return getElement(this); }
    static get style() { return ButtonCss; }
};
Tunnel.injectProps(Button, ['dark']);

export { Button as stellar_button };
