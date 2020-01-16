import { r as registerInstance, d as createEvent, h, g as getElement } from './index-cc4604b3.js';
import './colors-eb996d31.js';
import './_commonjsHelpers-bccf23a2.js';
import { p as properties } from './css-custom-properties.min-d9d14253.js';
import { d as delay } from './index-26976b63.js';
import './main-e9832563.js';
import './moment-5e7e00c2.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';

const TabCss = ":host, :host *, :host *:before, :host *:after {\n  box-sizing: border-box;\n}\n\n:host {\n  contain: content;\n  color: var(--theme-base7);\n  --focus-color: var(--theme-base8);\n  --active-color: var(--theme-base9);\n  --font-size: 1rem;\n  --height: 100%;\n  --button-padding: 0 0.25em;\n  --text-transform: initial;\n  --margin: -1px 0.25em;\n  display: block;\n  z-index: 2;\n  position: relative;\n  font-size: var(--font-size);\n  height: var(--height);\n  font-family: inherit;\n}\n\n:host .tab-wrap {\n  cursor: pointer;\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  margin: var(--margin);\n  padding: var(--padding);\n  color: inherit;\n  font-size: inherit;\n  height: var(--height);\n}\n\n:host .tab-wrap stellar-tag {\n  position: absolute;\n  top: 1px;\n  right: -10px;\n}\n\n:host .tab-wrap .tab-button {\n  appearance: none;\n  background: transparent;\n  border: 0;\n  font-size: inherit;\n  display: inline-flex;\n  position: relative;\n  justify-content: center;\n  transition: color 0.2s;\n  outline: none;\n  padding: var(--button-padding);\n  text-decoration: none;\n  line-height: var(--ms1);\n  color: inherit;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  font-family: inherit;\n  text-transform: inherit;\n  letter-spacing: inherit;\n  font-weight: inherit;\n}\n\n:host .tab-wrap stencil-route-link {\n  display: inline-flex;\n}\n\n:host .tab-wrap .tab-button:hover,\n:host .tab-wrap .tab-button:focus {\n  color: var(--focus-color);\n}\n\n:host([open]) .tab-wrap .tab-button {\n  color: var(--active-color);\n}\n\n:host .tab-wrap .tab-button span {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n:host([vertical]) .tab-wrap .tab-button span {\n  width: 100%;\n  height: 100%;\n  text-align: left;\n  justify-content: flex-start;\n}\n\n:host .tab-wrap .tab-button span ::slotted(ion-icon) {\n  line-height: 0;\n  margin-right: 0.25em;\n}\n\n:host .tab-wrap .tab-button span ::slotted(ion-icon) {\n  line-height: 0;\n  margin-right: 0.25em;\n}\n\n:host .tab-wrap .tab-button span ::slotted(stellar-avatar) {\n  line-height: 0;\n  margin: -1.175em 0.5em -1.075em -0.5em;\n}\n\n:host([disabled=\"true\"]) .tab-wrap {\n  cursor: not-allowed;\n  color: var(--theme-color-disabled);\n}\n\n:host([disabled=\"true\"]) .tab-wrap * {\n  cursor: not-allowed;\n}\n\n:host([disabled=\"true\"]) .tab-wrap .notifications {\n  background: var(--theme-color-disabled);\n}\n\n:host([dark]) .tab-wrap .tab-button,\n:host([dark]) .tab-wrap .tab-button {\n  color: var(--theme-base2);\n}\n\n:host([dark]) .tab-wrap .tab-button:hover,\n:host([dark]) .tab-wrap .tab-button:focus {\n  color: var(--theme-base0);\n}\n\n:host([open][dark]) .tab-wrap .tab-button {\n  color: var(--white);\n}\n";

const Tab = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.disabled = false;
        this.open = false;
        this.dark = false;
        this.notifications = false;
        this.tag = "button";
        /**
        * Sets the href on the anchor tag if the button is a link.
        */
        this.href = '#';
        /**
         * Sets the target on the anchor tag if the button is a link.
         */
        this.target = '_self';
        this.vertical = false;
        this.contentChange = createEvent(this, "contentChange", 7);
    }
    componentWillLoad() {
        this.parent = this.element.closest('stellar-tabs');
        if (window.location.hash && this.href.includes(window.location.hash)) {
            this.handleClick();
        }
    }
    handleResize() {
        this.handleIndicatorPosition();
    }
    componentDidLoad() {
        this.handleIndicatorPosition();
        document.addEventListener('pjax:send', () => {
            if (this.open && window.location.href.includes(this.href)) {
                this.open = false;
                this.removeIndicator();
            }
        });
        document.addEventListener('pjax:complete', () => {
            if (window.location.href.includes(this.href)) {
                this.open = true;
                this.handleIndicatorPosition();
            }
        });
    }
    async activate() {
        await this.handleClick();
    }
    async handleClick(e) {
        const tabs = await this.parent.tabs();
        tabs.forEach((element) => {
            element.open = false;
        });
        this.open = true;
        this.handleIndicatorPosition();
        if (!this.disabled) {
            e && e.preventDefault();
            if (this.tag === "button") {
                this.contentChange.emit({
                    parent: this.parent,
                    name: this.name.replace(/[#]/g, "")
                });
            }
            else if (this.tag === "link") {
                await delay(350);
                window.location.href = this.href;
            }
            else if (this.tag === "pjax") {
                document.querySelector('stellar-pjax').pjax.loadUrl(this.href);
            }
        }
    }
    handleIndicatorPosition() {
        if (this.open && this.parent && this.parent.nodeName === "STELLAR-TABS") {
            // this.parent.blurring()
            if (this.parent.vertical) {
                properties.set({
                    "--tab-top": `${this.element.offsetTop}px`,
                    "--tab-height": `${this.element.offsetHeight}px`,
                    "--indicator-opacity": `1`
                }, this.parent);
            }
            else {
                properties.set({
                    "--tab-left": `${this.element.offsetLeft}px`,
                    "--tab-width": `${this.element.offsetWidth}px`,
                    "--indicator-opacity": `1`
                }, this.parent);
            }
        }
    }
    removeIndicator() {
        if (this.parent && this.parent.nodeName === "STELLAR-TABS") {
            // this.parent.blurring()
            if (this.parent.vertical) {
                properties.set({
                    "--tab-height": `0px`,
                    "--indicator-opacity": `0`
                }, this.parent);
            }
            else {
                properties.set({
                    "--tab-width": `0px`,
                    "--indicator-opacity": `0`
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
    renderButton() {
        return (h("button", { role: "tab", type: "button", disabled: this.disabled, "aria-selected": this.open ? "true" : "false", "aria-setsize": this.tabCount, "aria-posinset": this.order, tabindex: "0", class: "tab-button", onClick: (e) => this.handleClick(e) }, this.renderNotifications(), this.renderTitle()));
    }
    renderLink() {
        return (h("a", { role: "tab", href: this.href, target: this.target, class: "tab-button", "data-disabled": this.disabled, onClick: (e) => { this.handleClick(e); } }, this.renderNotifications(), this.renderTitle()));
    }
    renderAppLink() {
        return (h("stencil-route-link", { role: "tab", url: this.href, anchorClass: "tab-button", "data-disabled": this.disabled, onClick: (e) => { this.handleClick(e); } }, this.renderNotifications(), this.renderTitle()));
    }
    render() {
        return h("div", { class: "tab-wrap" }, this.tag === "button" && this.renderButton(), this.tag === "link" && this.renderLink(), this.tag === "route-link" && this.renderAppLink(), this.tag === "pjax" && this.renderButton());
    }
    get element() { return getElement(this); }
    static get style() { return TabCss; }
};
Tunnel.injectProps(Tab, ['dark']);

export { Tab as stellar_tab };
