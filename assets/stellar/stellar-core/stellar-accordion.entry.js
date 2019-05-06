import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';
import './chunk-452e3210.js';
import { a as properties } from './chunk-aefb00c1.js';
import { a as blurringEase } from './chunk-15cea9da.js';
import './chunk-f26db59a.js';

class Accordion {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.open = false;
        this.tight = false;
        this.name = "accordion";
        this.label = "More Details";
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
        var callback = (mutationsList) => {
            for (var mutation of mutationsList) {
                if (mutation.type == 'childList') {
                    this.refresh();
                }
            }
        };
        this.observer = new MutationObserver(callback);
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
        // Start observing the target node for configured mutations
        this.observer.observe(this.element, { childList: true, subtree: true });
    }
    componentWillUnload() {
        this.observer.disconnect();
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
        return (h("div", { class: "wrap" }, h("div", { class: "button-wrap", title: "Selecting this opens the content of this accordion", onClick: () => this.handleClick() }, h("slot", { name: "label" }, h("stellar-button", { id: "button", tag: "button", ghost: true, label: this.label }, this.label)), h("stellar-asset", { class: "chevron", name: "arrow-down" })), h("stellar-blur", { vertical: this.blur }, h("div", { class: this.currentClasses(), tabIndex: !this.open ? -1 : 0 }, h("slot", null)))));
    }
    get element() { return getElement(this); }
    static get style() { return ":host, :host *, :host *:before, :host *:after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host {\n  display: block;\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  --accordion-height: 200vh;\n}\n\n:host .expander {\n  -webkit-transition: all 0.35s ease-out 0.1s, opacity 0.25s ease-out 0s;\n  transition: all 0.35s ease-out 0.1s, opacity 0.25s ease-out 0s;\n  opacity: 0;\n  padding: 0;\n  width: 100%;\n  max-height: 50vh;\n  height: 0;\n  overflow: hidden;\n  -webkit-transform: translateY(-60px);\n  transform: translateY(-60px);\n}\n\n:host .expander.open {\n  -webkit-transition: all 0.35s ease-in-out 0s, opacity 0.175s ease-in-out 0.175s, overflow 0s ease-in-out 0.2s;\n  transition: all 0.35s ease-in-out 0s, opacity 0.175s ease-in-out 0.175s, overflow 0s ease-in-out 0.2s;\n  opacity: 1;\n  height: calc(var(--accordion-height) + 6rem);\n  overflow: auto;\n  -webkit-transform: translateY(0px);\n  transform: translateY(0px);\n}\n\n:host .expander stellar-item {\n  padding-left: 1rem;\n}\n\n:host .expander stellar-item:last-of-type {\n  margin-bottom: .5rem;\n}\n\n\n:host([tight]) .expander ::slotted(stellar-item) {\n  padding: 0 1.5rem;\n}\n\n:host([tight]) .expander ::slotted(stellar-item) {\n  padding: 0 0.75rem;\n}\n\n:host .wrap {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n\n:host .wrap .button-wrap {\n  position: relative;\n  cursor: pointer;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  z-index: 9;\n  min-height: 3rem;\n  padding: 1rem 0;\n  color: var(--theme-base9);\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--white)), to(transparent));\n  background: linear-gradient(var(--white), transparent);\n}\n\n:host .wrap .button-wrap stellar-item button.button {\n  padding: 0;\n}\n\n:host .chevron {\n  position: absolute;\n  right: 1rem;\n  color: var(--gray4);\n  margin-left: auto;\n  -webkit-transition: all 350ms ease-in-out 0s;\n  transition: all 350ms ease-in-out 0s;\n}\n\n:host([open]) .chevron {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n\n:host .wrap .button-wrap stellar-button {\n  --color: var(--gray9);\n}\n\n:host ::slotted(stellar-item[slot=\"label\"]) {\n  padding-right: 2rem;\n}\n\n\n:host-context(.dark-mode):host .wrap .button-wrap {\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--black)), to(transparent));\n  background: linear-gradient(var(--black), transparent);\n  color: var(--theme-base5);\n}"; }
}

export { Accordion as stellar_accordion };
