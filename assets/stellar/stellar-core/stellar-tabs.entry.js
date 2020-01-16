import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';
import './colors-eb996d31.js';
import './_commonjsHelpers-bccf23a2.js';
import './css-custom-properties.min-d9d14253.js';
import { b as blurringEase } from './index-26976b63.js';
import './main-e9832563.js';
import './moment-5e7e00c2.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';

const TabsCss = ":host {\n  --font-size: var(--ms0);\n  --padding: calc(var(--ms-1) + 0.4em) var(--ms-1);\n  --indicator-color: var(--theme-base5);\n  --overflow: auto hidden;\n  --justify-content: space-evenly;\n  --max-width: var(--large);\n  contain: content;\n  font-size: var(--font-size);\n  display: block;\n  position: relative;\n  margin: 0;\n  width: auto;\n  overflow: var(--overflow);\n  -webkit-overflow-scrolling: touch;\n  scroll-snap-type: mandatory;\n  scroll-snap-points-x: repeat(10%);\n  font-family: var(--font-primary);\n  border-bottom: 1px solid var(--theme-base1);\n  background: var(--white);\n}\n\n:host([size=\"tiny\"]) {\n  --font-size: var(--ms-2);\n  --padding: calc(var(--ms-3) + 0.45em) var(--ms-3);\n}\n\n:host([size=\"small\"]) {\n  --font-size: var(--ms-1);\n  --padding: calc(var(--ms-2) + 0.5em) var(--ms-2);\n}\n\n:host([size=\"medium\"]) {\n  --font-size: var(--ms1);\n  --padding: calc(var(--ms0) + 0.25em) var(--ms0);\n}\n\n:host([size=\"large\"]) {\n  --font-size: var(--ms2);\n  --padding: calc(var(--ms1) + 0.1em) var(--ms1);\n}\n\n:host stellar-blur {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  bottom: 0;\n}\n\n:host .indicator {\n  display: block;\n  position: absolute;\n  bottom: -.1em;\n  left: var(--tab-left, 0);\n  background: var(--indicator-color);\n  width: var(--tab-width, 0);\n  height: 0.4em;\n}\n\n:host([flip-indicator]) .indicator {\n  top: -.1em;\n  bottom: initial;\n}\n\n:host .indicator.ready {\n  transition: all .35s var(--ease);\n}\n\n:host .tab-wrap {\n  max-width: var(--max-width);\n  margin: auto;\n  height: 100%;\n}\n\n:host .tab-list {\n  display: inline-flex;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  text-align: center;\n  white-space: nowrap;\n  height: 100%;\n  width: 100%;\n}\n\n:host .tab-wrap[height=\"flex\"],\n:host .tab-wrap[height=\"flex\"] .tab-list {\n  height: 100%;\n}\n\n:host .tab-wrap[height=\"flex\"] ::slotted(stellar-tab) {\n  height: 100%;\n}\n\n:host(:not([vertical])) ::slotted(stellar-tab + stellar-tab) {\n  margin-left: 1em;\n}\n\n:host([block]) {\n  overflow: var(--overflow);\n  border: 1px solid var(--theme-base0);\n  width: 100%;\n}\n\n:host([block]) .tab-wrap {\n  overflow: var(--overflow);\n  display: flex;\n  align-items: center;\n  justify-content: var(--justify-content);\n  height: 100%;\n}\n\n:host([block]) .tab-list {\n  display: flex;\n  align-items: center;\n  justify-content: var(--justify-content);\n  width: 100%;\n  margin: 0 3px;\n}\n\n:host([block]) ::slotted(stellar-tab[open=\"true\"]) {\n  color: var(--theme-base5) !important;\n}\n\n:host([block-indicator]) .indicator {\n  height: calc(100% - 6px);\n  background: var(--theme-base1);\n  top: 3px;\n  bottom: 3px;\n  transition: all .35s var(--ease);\n}\n\n:host([vertical]) {\n  height: auto;\n  border-right: 1px solid var(--theme-base1);\n  border-bottom: 0;\n}\n\n:host([vertical]) .indicator {\n  width: 0.4em;\n  top: var(--tab-top);\n  height: var(--tab-height);\n}\n\n:host([vertical]) .tab-list {\n  flex-direction: column;\n}\n\n:host([vertical]) .tab-list ::slotted(stellar-tab) {\n  height: auto;\n}\n\n:host([height=\"auto\"]) {\n  height: 100%;\n}\n\n:host([dark]) {\n  border-color: var(--theme-base9);\n  background: var(--black);\n}\n\n:host([dark]) .indicator {\n  background: var(--theme-base5);\n}\n\n:host([block][dark]) {\n  border: 1px solid var(--theme-base9);\n}\n";

const Tabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.noanimation = false;
        this.block = false;
        this.vertical = false;
        this.dark = false;
        this.ease = blurringEase({
            end: 10,
            start: -1,
            duration: 125,
            tick: (args) => {
                this.blur = args.value;
            },
            complete: () => {
                this.blur = 0;
                this.ease.stop();
            },
        });
        this.blur = 0;
    }
    async tabs() {
        if (!this.tabsList || this.tabsList.length === 0) {
            this.tabsList = Array.from(this.element.querySelectorAll('stellar-tab'));
        }
        return this.tabsList;
    }
    async contents() {
        this.contentsList = Array.from(document.querySelectorAll(`stellar-content[for='${this.name}']`));
        return this.contentsList;
    }
    async blurring() {
        this.ease.start();
    }
    async componentWillLoad() {
        await this.tabs();
        await this.contents();
        this.tabsList.forEach((tab) => {
            if (this.dark) {
                tab.dark = this.dark;
            }
            if (this.vertical) {
                tab.vertical = this.vertical;
            }
        });
    }
    handleDark() {
        if (!this.tabsList || this.tabsList.length === 0) {
            this.tabsList = Array.from(this.element.querySelectorAll('stellar-tab'));
        }
        this.tabsList.forEach((tab) => {
            tab.dark = this.dark;
        });
    }
    async componentDidLoad() {
        if (!this.noanimation) {
            setTimeout(() => {
                // @ts-ignore
                window.dispatchEvent(new Event('resize'));
                this.element.shadowRoot.querySelector('.indicator').classList.add('ready');
            }, 100);
        }
        const tabs = await this.tabs();
        const tabCount = tabs.length;
        tabs.forEach((tab, index) => {
            tab.order = index + 1;
            tab.tabCount = tabCount;
        });
    }
    render() {
        return (h("div", { class: "tab-wrap" }, h("div", { class: "tab-list", role: "tablist" }, h("slot", null), h("stellar-blur", { horizontal: !this.vertical ? this.blur : 0, vertical: this.vertical ? this.blur : 0 }, h("div", { class: "indicator" })))));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "dark": ["handleDark"]
    }; }
    static get style() { return TabsCss; }
};
Tunnel.injectProps(Tabs, ['dark']);

export { Tabs as stellar_tabs };
