import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';
import './chunk-452e3210.js';
import './chunk-aefb00c1.js';
import { a as blurringEase } from './chunk-15cea9da.js';
import './chunk-f26db59a.js';

class Tabs {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.noanimation = false;
        this.size = "medium";
        this.block = false;
        this.vertical = false;
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
    static get style() { return ":host {\n  --font-size: 1rem;\n  font-size: var(--font-size);\n  display: block;\n  position: relative;\n  margin: 0;\n  width: auto;\n  overflow-x: auto;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n  -webkit-scroll-snap-type: mandatory;\n  -ms-scroll-snap-type: mandatory;\n  scroll-snap-type: mandatory;\n  -webkit-scroll-snap-points-x: repeat(10%);\n  -ms-scroll-snap-points-x: repeat(10%);\n  scroll-snap-points-x: repeat(10%);\n  font-family: var(--font-primary);\n  border-bottom: 1px solid var(--theme-base1);\n  background: var(--white);\n  height: 4em;\n  margin-bottom: 4rem;\n}\n\n:host([size=\"tiny\"]) {\n  --font-size: .75rem;\n}\n\n:host([size=\"small\"]) {\n  --font-size: .875rem;\n}\n\n:host([size=\"medium\"]) {\n  --font-size: 1.25rem;\n}\n\n:host([size=\"large\"]) {\n  --font-size: 1.5rem;\n}\n\n:host stellar-blur {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  bottom: 0;\n}\n\n:host .indicator {\n  display: block;\n  position: absolute;\n  bottom: -.1em;\n  left: var(--tab-left, 0);\n  background: var(--theme-base5);\n  width: var(--tab-width, 0);\n  height: 0.4em;\n}\n\n:host .indicator.ready {\n  -webkit-transition: all .35s var(--ease);\n  transition: all .35s var(--ease);\n}\n\n:host .tab-wrap {\n  max-width: 1200px;\n  margin: auto;\n  height: 100%;\n}\n\n:host .tab-list {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  text-align: center;\n  white-space: nowrap;\n  height: 100%;\n  width: 100%;\n}\n\n:host .tab-wrap[scrollable=\"false\"] {\n  overflow: visible;\n}\n\n:host .tab-wrap[height=\"flex\"],\n:host .tab-wrap[height=\"flex\"] .tab-list {\n  height: 100%;\n}\n\n:host .tab-wrap[height=\"flex\"] ::slotted(stellar-tab) {\n  height: 100%;\n}\n\n:host(:not([vertical])) ::slotted(stellar-tab + stellar-tab) {\n  margin-left: 1em;\n}\n\n:host([block]) {\n  overflow: hidden;\n  border: 1px solid var(--theme-base0);\n  width: 100%;\n}\n\n:host([block]) .tab-wrap {\n  overflow: hidden;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  height: 100%;\n}\n\n:host([block]) .tab-list {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  margin: 0 3px;\n}\n\n:host([block]) .tab-list ::slotted(stellar-tab) {\n  width: 100%;\n  -ms-flex: 12 12 100%;\n  flex: 12 12 100%;\n}\n\n:host([block]) ::slotted(stellar-tab[open=\"true\"]) {\n  color: var(--theme-base5) !important;\n}\n\n:host([block]) .indicator {\n  height: calc(100% - 6px);\n  background: var(--theme-base1);\n  top: 3px;\n  bottom: 3px;\n  -webkit-transition: all .35s var(--ease);\n  transition: all .35s var(--ease);\n}\n\n:host([vertical]) {\n  height: auto;\n  border-right: 1px solid var(--theme-base1);\n  border-bottom: none;\n}\n\n:host([vertical]) .indicator {\n  width: 0.4em;\n  top: var(--tab-top);\n  height: var(--tab-height);\n}\n\n:host([vertical]) .tab-list {\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\n:host([vertical]) .tab-list ::slotted(stellar-tab) {\n  height: 4rem;\n}\n\n:host([height=\"auto\"]) {\n  height: 100%;\n}\n\n\n:host-context(.dark-mode) {\n  border-bottom: 1px solid var(--theme-base9);\n  background: var(--black);\n}\n\n:host-context(.dark-mode) .indicator {\n  background: var(--theme-base5);\n}\n\n:host-context(.dark-mode):host([block]) {\n  border: 1px solid var(--theme-base9);\n}"; }
}

export { Tabs as stellar_tabs };
