import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';
import './colors-eb996d31.js';
import './_commonjsHelpers-bccf23a2.js';
import { p as properties } from './css-custom-properties.min-d9d14253.js';
import { b as blurringEase } from './index-26976b63.js';
import './main-e9832563.js';
import './moment-5e7e00c2.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';
import './utils-06e0aad6.js';
import './index-88205cad.js';

const AccordionCss = ":host, :host *, :host *:before, :host *:after {\n  box-sizing: border-box;\n}\n\n:host {\n  contain: content;\n  display: block;\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  --accordion-height: 200vh;\n  --padding-underneath: 6rem;\n}\n\n:host .expander {\n  transition: all 0.35s ease-out 0.1s, opacity 0.25s ease-out 0s;\n  opacity: 0;\n  padding: 0;\n  width: 100%;\n  max-height: 50vh;\n  height: 0;\n  overflow: hidden;\n  transform: translateY(-60px);\n}\n\n:host .expander.open {\n  transition: all 0.35s ease-in-out 0s, opacity 0.175s ease-in-out 0.175s, overflow 0s ease-in-out 0.2s;\n  opacity: 1;\n  height: calc(var(--accordion-height) + var(--padding-underneath));\n  overflow: auto;\n  transform: translateY(0px);\n}\n\n:host .expander stellar-item {\n  padding-left: 1rem;\n}\n\n:host .expander stellar-item:last-of-type {\n  margin-bottom: .5rem;\n}\n\n:host([tight]) {\n  --padding-underneath: 1rem;\n}\n\n:host([tight]) .expander ::slotted(stellar-item) {\n  padding: 0 1.5rem;\n}\n\n:host([tight]) .expander ::slotted(stellar-item) {\n  padding: 0 0.75rem;\n}\n\n:host .wrap {\n  transform: translateZ(0);\n}\n\n:host .wrap .button-wrap {\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 9;\n  min-height: 3rem;\n  padding: 1rem 0;\n  color: var(--theme-base9);\n}\n\n:host .wrap .button-wrap stellar-item button.button {\n  padding: 0;\n}\n\n:host .chevron {\n  position: absolute;\n  right: 1rem;\n  color: var(--gray4);\n  margin-left: auto;\n  transition: all 350ms ease-in-out 0s;\n}\n\n:host([open]) .chevron {\n  transform: rotate(180deg);\n}\n\n:host .wrap .button-wrap stellar-button {\n  --color: var(--gray9);\n}\n\n:host ::slotted(stellar-item[slot=\"label\"]) {\n  padding-right: 2rem;\n}\n\n:host([dark]) ::slotted(stellar-item),\n:host([dark]) ::slotted(stellar-item[slot=\"label\"]) {\n  color: var(--theme-base5);\n}\n";

const Accordion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.open = false;
        this.tight = false;
        this.name = "accordion";
        this.label = "More Details";
        this.dark = false;
        this.blur = 0;
        this.ease = blurringEase({
            end: 10,
            start: -1,
            duration: 250,
            tick: (args) => {
                this.blur = args.value;
            },
            complete: () => {
                this.blur = 0;
                this.ease.stop();
            },
        });
        this.els = [];
    }
    componentWillLoad() {
        if (window.MutationObserver) {
            var callback = (mutationsList) => {
                for (var mutation of mutationsList) {
                    if (mutation.type == 'childList') {
                        this.refresh();
                    }
                }
            };
            this.observer = new MutationObserver(callback);
        }
    }
    componentDidLoad() {
        this.expander = this.element.shadowRoot.querySelector(".expander");
        this.refresh();
        this.attachObserver();
        this.els = Array.from(this.element.querySelectorAll("*:not([slot='label'])"));
        this.updateTabIndex();
    }
    async refresh() {
        properties.set({
            "--accordion-height": `${this.expander.scrollHeight}px`
        }, this.element);
    }
    attachObserver() {
        if (this.observer) {
            // Start observing the target node for configured mutations
            this.observer.observe(this.element, { childList: true, subtree: true });
        }
    }
    componentWillUnload() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    currentClasses() {
        return `expander ${this.openClass()}`;
    }
    openClass() {
        return (this.open) ? "open" : "";
    }
    updateTabIndex() {
        this.els.forEach((element) => {
            element.tabIndex = !this.open ? -1 : 0;
        });
    }
    handleClick() {
        this.open = !this.open;
        this.ease.start();
        this.updateTabIndex();
    }
    render() {
        return (h("div", { class: "wrap" }, h("div", { class: "button-wrap", title: "Selecting this opens the content of this accordion", onClick: () => this.handleClick() }, h("slot", { name: "label" }, h("stellar-button", { id: "button", tag: "button", ghost: true, label: this.label }, this.label)), h("ion-icon", { class: "chevron", name: "arrow-down" })), h("stellar-blur", { vertical: this.blur }, h("div", { class: this.currentClasses(), tabIndex: !this.open ? -1 : 0 }, h("slot", null)))));
    }
    get element() { return getElement(this); }
    static get style() { return AccordionCss; }
};
Tunnel.injectProps(Accordion, ['dark']);

export { Accordion as stellar_accordion };
