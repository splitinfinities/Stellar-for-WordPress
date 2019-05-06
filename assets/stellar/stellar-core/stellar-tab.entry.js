import { c as registerInstance, h as createEvent, d as h, f as getElement } from './stellar-core-d63b686e.js';
import './chunk-452e3210.js';
import { a as properties } from './chunk-aefb00c1.js';
import './chunk-15cea9da.js';
import './chunk-f26db59a.js';

class Tab {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.href = "#";
        this.tag = "button";
        this.disabled = false;
        this.open = false;
        this.notifications = false;
        this.contentChange = createEvent(this, "contentChange", 7);
    }
    componentWillLoad() {
        this.parent = this.element.closest('stellar-tabs');
    }
    handleResize() {
        this.handleIndicatorPosition();
    }
    componentDidLoad() {
        this.handleIndicatorPosition();
    }
    async handleClick(e) {
        const tabs = await this.parent.tabs();
        tabs.forEach((element) => {
            element.open = false;
        });
        this.open = true;
        this.handleIndicatorPosition();
        if (!this.disabled && this.tag !== "a") {
            e.preventDefault();
            this.contentChange.emit({
                parent: this.parent,
                name: this.href.replace(/[#]/g, "")
            });
        }
    }
    handleIndicatorPosition() {
        if (this.open && this.parent && this.parent.nodeName === "STELLAR-TABS") {
            // this.parent.blurring()
            if (this.parent.vertical) {
                properties.set({
                    "--tab-top": `${this.element.offsetTop}px`,
                    "--tab-height": `${this.element.offsetHeight}px`
                }, this.parent);
            }
            else {
                properties.set({
                    "--tab-left": `${this.element.offsetLeft}px`,
                    "--tab-width": `${this.element.offsetWidth}px`
                }, this.parent);
            }
        }
    }
    renderNotifications() {
        return this.notifications && h("stellar-tag", null, this.notifications);
    }
    renderTitle() {
        return h("span", { class: "title" }, h("slot", null));
    }
    render() {
        const Tag = this.tag;
        // @ts-ignore
        return h("div", { class: "tab-wrap" }, h(Tag, { role: "tab", "aria-selected": this.open ? "true" : "false", "aria-setsize": this.tabCount, "aria-posinset": this.order, href: this.href, tabindex: "0", class: "tab-button", onClick: (e) => this.handleClick(e) }, this.renderNotifications(), this.renderTitle()));
    }
    get element() { return getElement(this); }
    static get style() { return ":host {\n  display: block;\n  z-index: 2;\n  position: relative;\n  font-size: var(--font-size);\n  height: 100%;\n}\n\n:host .tab-wrap {\n  cursor: pointer;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  margin: -1px 0.25em;\n  padding: 0 0.25em;\n  color: var(--theme-base8);\n  font-size: var(--font-size);\n  height: 100%;\n}\n\n:host-context(stellar-tabs[vertical]):host .tab-wrap,\n:host-context(stellar-tabs[vertical]):host .tab-button {\n  -ms-flex-pack: left !important;\n  justify-content: left !important;\n}\n\n:host .tab-wrap stellar-tag {\n  position: absolute;\n  top: 1px;\n  right: -10px;\n}\n\n:host .tab-wrap > .tab-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: transparent;\n  border: 0;\n  font-size: var(--font-size);\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-transition: color 0.2s;\n  transition: color 0.2s;\n  outline: none;\n  padding: 0 1em;\n  text-decoration: none;\n  line-height: 1;\n  color: var(--theme-base8);\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n\n:host .tab-wrap > .tab-button:hover,\n:host .tab-wrap > .tab-button:focus {\n  color: var(--theme-base9);\n}\n\n:host([open]) .tab-wrap > .tab-button {\n  color: var(--theme-base9);\n}\n\n:host .tab-wrap > .tab-button span {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  line-height: 1;\n  font-size: var(--font-size);\n  font-weight: 600;\n}\n\n:host .tab-wrap > .tab-button span ::slotted(stellar-asset) {\n  line-height: 0;\n  margin-right: 0.25em;\n}\n\n:host .tab-wrap > .tab-button span ::slotted(stellar-asset) {\n  line-height: 0;\n  margin-right: 0.25em;\n}\n\n:host .tab-wrap > .tab-button span ::slotted(stellar-avatar) {\n  line-height: 0;\n  margin: -1.175em 0.5em -1.075em -0.5em;\n}\n\n:host([disabled=\"true\"]) .tab-wrap {\n  cursor: not-allowed;\n  color: var(--theme-color-disabled);\n}\n\n:host([disabled=\"true\"]) .tab-wrap * {\n  cursor: not-allowed;\n}\n\n:host([disabled=\"true\"]) .tab-wrap .notifications {\n  background: var(--theme-color-disabled);\n}\n\n:host-context(.dark-mode):host .tab-wrap > .tab-button,\n:host-context(.dark-mode):host .tab-wrap > .tab-button {\n  color: var(--theme-base2);\n}\n\n:host-context(.dark-mode):host .tab-wrap > .tab-button:hover,\n:host-context(.dark-mode):host .tab-wrap > .tab-button:focus {\n  color: var(--theme-base0);\n}\n\n:host-context(.dark-mode):host([open]) .tab-wrap > .tab-button {\n  color: var(--white);\n}\n\n\n:host-context(.dark-mode):host-context(stellar-tabs[block]):host([open]) .tab-wrap > .tab-button {\n  color: var(--theme-base9);\n}"; }
}

export { Tab as stellar_tab };
