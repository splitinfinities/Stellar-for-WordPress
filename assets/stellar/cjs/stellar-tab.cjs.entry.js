'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-c90f54d2.js');
require('./chunk-ee96ca86.js');
const __chunk_3 = require('./chunk-61a48f92.js');
require('./chunk-3ed86bb7.js');
require('./chunk-e7b3928a.js');

class Tab {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.href = "#";
        this.tag = "button";
        this.disabled = false;
        this.open = false;
        this.notifications = false;
        this.contentChange = __chunk_1.createEvent(this, "contentChange", 7);
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
                __chunk_3.properties.set({
                    "--tab-top": `${this.element.offsetTop}px`,
                    "--tab-height": `${this.element.offsetHeight}px`
                }, this.parent);
            }
            else {
                __chunk_3.properties.set({
                    "--tab-left": `${this.element.offsetLeft}px`,
                    "--tab-width": `${this.element.offsetWidth}px`
                }, this.parent);
            }
        }
    }
    renderNotifications() {
        return this.notifications && __chunk_1.h("stellar-tag", null, this.notifications);
    }
    renderTitle() {
        return __chunk_1.h("span", { class: "title" }, __chunk_1.h("slot", null));
    }
    render() {
        const Tag = this.tag;
        // @ts-ignore
        return __chunk_1.h("div", { class: "tab-wrap" }, __chunk_1.h(Tag, { role: "tab", "aria-selected": this.open ? "true" : "false", "aria-setsize": this.tabCount, "aria-posinset": this.order, href: this.href, tabindex: "0", class: "tab-button", onClick: (e) => this.handleClick(e) }, this.renderNotifications(), this.renderTitle()));
    }
    get element() { return __chunk_1.getElement(this); }
    static get style() { return ":host{display:block;z-index:2}:host,:host .tab-wrap{position:relative;font-size:var(--font-size);height:100%}:host .tab-wrap{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:-1px .25em;padding:0 .25em;color:var(--theme-base8)}:host-context(stellar-tabs[vertical]):host .tab-button,:host-context(stellar-tabs[vertical]):host .tab-wrap{-ms-flex-pack:left!important;justify-content:left!important}:host .tab-wrap stellar-tag{position:absolute;top:1px;right:-10px}:host .tab-wrap>.tab-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;font-size:var(--font-size);display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-pack:center;justify-content:center;-webkit-transition:color .2s;transition:color .2s;outline:none;padding:0 1em;text-decoration:none;line-height:1;color:var(--theme-base8);width:100%;height:100%;cursor:pointer}:host([open]) .tab-wrap>.tab-button,:host .tab-wrap>.tab-button:focus,:host .tab-wrap>.tab-button:hover{color:var(--theme-base9)}:host .tab-wrap>.tab-button span{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;line-height:1;font-size:var(--font-size);font-weight:600}:host .tab-wrap>.tab-button span ::slotted(stellar-asset){line-height:0;margin-right:.25em}:host .tab-wrap>.tab-button span ::slotted(stellar-avatar){line-height:0;margin:-1.175em .5em -1.075em -.5em}:host([disabled=true]) .tab-wrap{cursor:not-allowed;color:var(--theme-color-disabled)}:host([disabled=true]) .tab-wrap *{cursor:not-allowed}:host([disabled=true]) .tab-wrap .notifications{background:var(--theme-color-disabled)}:host-context(.dark-mode):host .tab-wrap>.tab-button{color:var(--theme-base2)}:host-context(.dark-mode):host .tab-wrap>.tab-button:focus,:host-context(.dark-mode):host .tab-wrap>.tab-button:hover{color:var(--theme-base0)}:host-context(.dark-mode):host([open]) .tab-wrap>.tab-button{color:var(--white)}:host-context(.dark-mode):host-context(stellar-tabs[block]):host([open]) .tab-wrap>.tab-button{color:var(--theme-base9)}"; }
}

exports.stellar_tab = Tab;
