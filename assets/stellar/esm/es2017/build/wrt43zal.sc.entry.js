import { h } from '../stellar-core.core.js';

import './chunk-7646164d.js';
import { a as properties } from './chunk-340b8099.js';
import './chunk-43ad3764.js';
import './chunk-5ce278cb.js';

class Tab {
    constructor() {
        this.href = "#";
        this.tag = "button";
        this.disabled = false;
        this.open = false;
        this.notifications = false;
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
        return h("span", { class: "title" },
            h("slot", null));
    }
    render() {
        const Tag = this.tag;
        return h("div", { class: "tab-wrap" },
            h(Tag, { role: "tab", "aria-selected": this.open ? "true" : "false", "aria-setsize": this.tabCount, "aria-posinset": this.order, href: this.href, tabindex: "0", class: "tab-button", onClick: (e) => this.handleClick(e) },
                this.renderNotifications(),
                this.renderTitle()));
    }
    static get is() { return "stellar-tab"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "element": {
            "elementRef": true
        },
        "href": {
            "type": String,
            "attr": "href",
            "reflectToAttr": true,
            "mutable": true
        },
        "notifications": {
            "type": "Any",
            "attr": "notifications"
        },
        "open": {
            "type": Boolean,
            "attr": "open",
            "reflectToAttr": true,
            "mutable": true
        },
        "order": {
            "type": Number,
            "attr": "order",
            "reflectToAttr": true
        },
        "parent": {
            "state": true
        },
        "tabCount": {
            "type": Number,
            "attr": "tab-count",
            "reflectToAttr": true
        },
        "tag": {
            "type": String,
            "attr": "tag",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "contentChange",
            "method": "contentChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "window:resize",
            "method": "handleResize",
            "passive": true
        }]; }
    static get style() { return ".sc-stellar-tab-h{display:block;z-index:2}.sc-stellar-tab-h, .sc-stellar-tab-h   .tab-wrap.sc-stellar-tab{position:relative;font-size:var(--font-size);height:100%}.sc-stellar-tab-h   .tab-wrap.sc-stellar-tab{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:-1px .25em;padding:0 .25em;color:var(--theme-base8)}stellar-tabs[vertical].sc-stellar-tab-h -no-combinator.sc-stellar-tab-h   .tab-button.sc-stellar-tab, stellar-tabs[vertical]   .sc-stellar-tab-h -no-combinator.sc-stellar-tab-h   .tab-button.sc-stellar-tab, stellar-tabs[vertical].sc-stellar-tab-h -no-combinator.sc-stellar-tab-h   .tab-wrap.sc-stellar-tab, stellar-tabs[vertical]   .sc-stellar-tab-h -no-combinator.sc-stellar-tab-h   .tab-wrap.sc-stellar-tab{-ms-flex-pack:left!important;justify-content:left!important}.sc-stellar-tab-h   .tab-wrap.sc-stellar-tab   stellar-tag.sc-stellar-tab{position:absolute;top:1px;right:-10px}.sc-stellar-tab-h   .tab-wrap.sc-stellar-tab > .tab-button.sc-stellar-tab{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;font-size:var(--font-size);display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-pack:center;justify-content:center;-webkit-transition:color .2s;transition:color .2s;outline:none;padding:0 1em;text-decoration:none;line-height:1;color:var(--theme-base8);width:100%;height:100%;cursor:pointer}[open].sc-stellar-tab-h   .tab-wrap.sc-stellar-tab > .tab-button.sc-stellar-tab, .sc-stellar-tab-h   .tab-wrap.sc-stellar-tab > .tab-button.sc-stellar-tab:focus, .sc-stellar-tab-h   .tab-wrap.sc-stellar-tab > .tab-button.sc-stellar-tab:hover{color:var(--theme-base9)}.sc-stellar-tab-h   .tab-wrap.sc-stellar-tab > .tab-button.sc-stellar-tab   span.sc-stellar-tab{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;line-height:1;font-size:var(--font-size);font-weight:600}.sc-stellar-tab-h .tab-wrap>.tab-button span .sc-stellar-tab-s > stellar-asset{line-height:0;margin-right:.25em}.sc-stellar-tab-h .tab-wrap>.tab-button span .sc-stellar-tab-s > stellar-avatar{line-height:0;margin:-1.175em .5em -1.075em -.5em}[disabled=true].sc-stellar-tab-h   .tab-wrap.sc-stellar-tab{cursor:not-allowed;color:var(--theme-color-disabled)}[disabled=true].sc-stellar-tab-h   .tab-wrap.sc-stellar-tab   *.sc-stellar-tab{cursor:not-allowed}[disabled=true].sc-stellar-tab-h   .tab-wrap.sc-stellar-tab   .notifications.sc-stellar-tab{background:var(--theme-color-disabled)}.dark-mode.sc-stellar-tab-h -no-combinator.sc-stellar-tab-h   .tab-wrap.sc-stellar-tab > .tab-button.sc-stellar-tab, .dark-mode   .sc-stellar-tab-h -no-combinator.sc-stellar-tab-h   .tab-wrap.sc-stellar-tab > .tab-button.sc-stellar-tab{color:var(--theme-base2)}.dark-mode.sc-stellar-tab-h -no-combinator.sc-stellar-tab-h   .tab-wrap.sc-stellar-tab > .tab-button.sc-stellar-tab:focus, .dark-mode   .sc-stellar-tab-h -no-combinator.sc-stellar-tab-h   .tab-wrap.sc-stellar-tab > .tab-button.sc-stellar-tab:focus, .dark-mode.sc-stellar-tab-h -no-combinator.sc-stellar-tab-h   .tab-wrap.sc-stellar-tab > .tab-button.sc-stellar-tab:hover, .dark-mode   .sc-stellar-tab-h -no-combinator.sc-stellar-tab-h   .tab-wrap.sc-stellar-tab > .tab-button.sc-stellar-tab:hover{color:var(--theme-base0)}.dark-mode.sc-stellar-tab-h -no-combinator[open].sc-stellar-tab-h   .tab-wrap.sc-stellar-tab > .tab-button.sc-stellar-tab, .dark-mode   .sc-stellar-tab-h -no-combinator[open].sc-stellar-tab-h   .tab-wrap.sc-stellar-tab > .tab-button.sc-stellar-tab{color:var(--white)}.dark-mode-shadowcsscontext(stellar-tabs[block]).sc-stellar-tab-h -no-combinator[open].sc-stellar-tab-h   .tab-wrap.sc-stellar-tab > .tab-button.sc-stellar-tab, .dark-mode   -shadowcsscontext(stellar-tabs[block]).sc-stellar-tab-h -no-combinator[open].sc-stellar-tab-h   .tab-wrap.sc-stellar-tab > .tab-button.sc-stellar-tab{color:var(--theme-base9)}"; }
}

export { Tab as StellarTab };
