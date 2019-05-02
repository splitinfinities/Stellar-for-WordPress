import { h } from '../stellar-core.core.js';

import './chunk-7646164d.js';
import './chunk-340b8099.js';
import './chunk-9f751763.js';
import { a as blurringEase } from './chunk-a955a305.js';
import './chunk-5ce278cb.js';

class Tabs {
    constructor() {
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
    blurring() {
        this.ease.start();
    }
    async componentWillLoad() {
        await this.tabs();
        await this.contents();
    }
    async componentDidLoad() {
        if (!this.noanimation) {
            setTimeout(() => {
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
        return (h("div", { class: "tab-wrap" },
            h("div", { class: "tab-list", role: "tablist" },
                h("slot", null),
                h("stellar-blur", { horizontal: !this.vertical ? this.blur : 0, vertical: this.vertical ? this.blur : 0 },
                    h("div", { class: "indicator" })))));
    }
    static get is() { return "stellar-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "behavior": {
            "type": String,
            "attr": "behavior",
            "reflectToAttr": true
        },
        "block": {
            "type": Boolean,
            "attr": "block",
            "reflectToAttr": true
        },
        "blur": {
            "state": true
        },
        "blurring": {
            "method": true
        },
        "contents": {
            "method": true
        },
        "contentsList": {
            "state": true
        },
        "ease": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "height": {
            "type": String,
            "attr": "height"
        },
        "name": {
            "type": String,
            "attr": "name",
            "reflectToAttr": true,
            "mutable": true
        },
        "noanimation": {
            "type": Boolean,
            "attr": "noanimation",
            "reflectToAttr": true,
            "mutable": true
        },
        "size": {
            "type": String,
            "attr": "size",
            "reflectToAttr": true
        },
        "tabs": {
            "method": true
        },
        "tabsList": {
            "state": true
        },
        "vertical": {
            "type": Boolean,
            "attr": "vertical",
            "reflectToAttr": true
        }
    }; }
    static get style() { return ".sc-stellar-tabs-h{--font-size:1rem;font-size:var(--font-size);display:block;position:relative;margin:0;width:auto;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;-webkit-scroll-snap-type:mandatory;-ms-scroll-snap-type:mandatory;scroll-snap-type:mandatory;-webkit-scroll-snap-points-x:repeat(10%);-ms-scroll-snap-points-x:repeat(10%);scroll-snap-points-x:repeat(10%);font-family:var(--font-primary);border-bottom:1px solid var(--theme-base1);background:var(--white);height:4em;margin-bottom:4rem}[size=tiny].sc-stellar-tabs-h{--font-size:.75rem}[size=small].sc-stellar-tabs-h{--font-size:.875rem}[size=medium].sc-stellar-tabs-h{--font-size:1.25rem}[size=large].sc-stellar-tabs-h{--font-size:1.5rem}.sc-stellar-tabs-h   stellar-blur.sc-stellar-tabs{position:absolute;width:100%;height:100%;left:0;bottom:0}.sc-stellar-tabs-h   .indicator.sc-stellar-tabs{display:block;position:absolute;bottom:-.1em;left:var(--tab-left,0);background:var(--theme-base5);width:var(--tab-width,0);height:.4em}.sc-stellar-tabs-h   .indicator.ready.sc-stellar-tabs{-webkit-transition:all .35s var(--ease);transition:all .35s var(--ease)}.sc-stellar-tabs-h   .tab-wrap.sc-stellar-tabs{max-width:1200px;margin:auto;height:100%}.sc-stellar-tabs-h   .tab-list.sc-stellar-tabs{display:-ms-inline-flexbox;display:inline-flex;margin:0;padding:0;list-style:none;text-align:center;white-space:nowrap;height:100%;width:100%}.sc-stellar-tabs-h   .tab-wrap[scrollable=false].sc-stellar-tabs{overflow:visible}.sc-stellar-tabs-h   .tab-wrap[height=flex].sc-stellar-tabs, .sc-stellar-tabs-h   .tab-wrap[height=flex].sc-stellar-tabs   .tab-list.sc-stellar-tabs, .sc-stellar-tabs-h .tab-wrap[height=flex] .sc-stellar-tabs-s > stellar-tab{height:100%}.sc-stellar-tabs-h:not([vertical]) .sc-stellar-tabs-s > stellar-tab+stellar-tab{margin-left:1em}[block].sc-stellar-tabs-h{overflow:hidden;border:1px solid var(--theme-base0);width:100%}[block].sc-stellar-tabs-h   .tab-wrap.sc-stellar-tabs{overflow:hidden;height:100%}[block].sc-stellar-tabs-h   .tab-list.sc-stellar-tabs, [block].sc-stellar-tabs-h   .tab-wrap.sc-stellar-tabs{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}[block].sc-stellar-tabs-h   .tab-list.sc-stellar-tabs{width:100%;margin:0 3px}.sc-stellar-tabs-h[block] .tab-list .sc-stellar-tabs-s > stellar-tab{width:100%;-ms-flex:12 12 100%;flex:12 12 100%}.sc-stellar-tabs-h[block] .sc-stellar-tabs-s > stellar-tab[open=true]{color:var(--theme-base5)!important}[block].sc-stellar-tabs-h   .indicator.sc-stellar-tabs{height:calc(100% - 6px);background:var(--theme-base1);top:3px;bottom:3px;-webkit-transition:all .35s var(--ease);transition:all .35s var(--ease)}[vertical].sc-stellar-tabs-h{height:auto;border-right:1px solid var(--theme-base1);border-bottom:none}[vertical].sc-stellar-tabs-h   .indicator.sc-stellar-tabs{width:.4em;top:var(--tab-top);height:var(--tab-height)}[vertical].sc-stellar-tabs-h   .tab-list.sc-stellar-tabs{-ms-flex-direction:column;flex-direction:column}.sc-stellar-tabs-h[vertical] .tab-list .sc-stellar-tabs-s > stellar-tab{height:4rem}[height=auto].sc-stellar-tabs-h{height:100%}.dark-mode.sc-stellar-tabs-h, .dark-mode   .sc-stellar-tabs-h{border-bottom:1px solid var(--theme-base9);background:var(--black)}.dark-mode.sc-stellar-tabs-h   .indicator.sc-stellar-tabs, .dark-mode   .sc-stellar-tabs-h   .indicator.sc-stellar-tabs{background:var(--theme-base5)}.dark-mode.sc-stellar-tabs-h -no-combinator[block].sc-stellar-tabs-h, .dark-mode   .sc-stellar-tabs-h -no-combinator[block].sc-stellar-tabs-h{border:1px solid var(--theme-base9)}"; }
}

export { Tabs as StellarTabs };
