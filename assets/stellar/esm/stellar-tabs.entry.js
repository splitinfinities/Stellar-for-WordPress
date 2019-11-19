import { d as registerInstance, f as h, g as getElement } from './stellar-core-1e602ba1.js';
import './chunk-40f083d9.js';
import './chunk-d0cf38d8.js';
import { a as blurringEase } from './chunk-27460e3f.js';
import './chunk-f26db59a.js';
import './chunk-cf2c1f95.js';

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
    static get style() { return ":host{--font-size:1rem;font-size:var(--font-size);display:block;position:relative;margin:0;width:auto;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;-webkit-scroll-snap-type:mandatory;-ms-scroll-snap-type:mandatory;scroll-snap-type:mandatory;-webkit-scroll-snap-points-x:repeat(10%);-ms-scroll-snap-points-x:repeat(10%);scroll-snap-points-x:repeat(10%);font-family:var(--font-primary);border-bottom:1px solid var(--theme-base1);background:var(--white)}:host([size=tiny]){--font-size:.75rem}:host([size=small]){--font-size:.875rem}:host([size=medium]){--font-size:1.25rem}:host([size=large]){--font-size:1.5rem}:host stellar-blur{position:absolute;width:100%;height:100%;left:0;bottom:0}:host .indicator{display:block;position:absolute;bottom:-.1em;left:var(--tab-left,0);background:var(--theme-base5);width:var(--tab-width,0);height:.4em}:host .indicator.ready{-webkit-transition:all .35s var(--ease);transition:all .35s var(--ease)}:host .tab-wrap{max-width:1200px;margin:auto;height:100%}:host .tab-list{display:-ms-inline-flexbox;display:inline-flex;margin:0;padding:0;list-style:none;text-align:center;white-space:nowrap;height:100%;width:100%}:host .tab-wrap[scrollable=false]{overflow:visible}:host .tab-wrap[height=flex],:host .tab-wrap[height=flex] .tab-list,:host .tab-wrap[height=flex] ::slotted(stellar-tab){height:100%}:host(:not([vertical])) ::slotted(stellar-tab+stellar-tab){margin-left:1em}:host([block]){overflow:hidden;border:1px solid var(--theme-base0);width:100%}:host([block]) .tab-wrap{overflow:hidden;height:100%}:host([block]) .tab-list,:host([block]) .tab-wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}:host([block]) .tab-list{width:100%;margin:0 3px}:host([block]) .tab-list ::slotted(stellar-tab){width:100%;-ms-flex:12 12 100%;flex:12 12 100%}:host([block]) ::slotted(stellar-tab[open=true]){color:var(--theme-base5)!important}:host([block]) .indicator{height:calc(100% - 6px);background:var(--theme-base1);top:3px;bottom:3px;-webkit-transition:all .35s var(--ease);transition:all .35s var(--ease)}:host([vertical]){height:auto;border-right:1px solid var(--theme-base1);border-bottom:none}:host([vertical]) .indicator{width:.4em;top:var(--tab-top);height:var(--tab-height)}:host([vertical]) .tab-list{-ms-flex-direction:column;flex-direction:column}:host([vertical]) .tab-list ::slotted(stellar-tab){height:4rem}:host([height=auto]){height:100%}:host-context(.dark-mode){border-bottom:1px solid var(--theme-base9);background:var(--black)}:host-context(.dark-mode) .indicator{background:var(--theme-base5)}:host-context(.dark-mode):host([block]){border:1px solid var(--theme-base9)}"; }
}

export { Tabs as stellar_tabs };
