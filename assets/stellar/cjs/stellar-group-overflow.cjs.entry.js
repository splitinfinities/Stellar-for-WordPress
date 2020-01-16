'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');

const GroupOverflowCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block;width:calc(var(--group-overflow-size) * 2);max-height:var(--group-overflow-size);font-size:var(--group-overflow-font-size);contain:content;--group-overflow-size:2.2em;--group-overflow-font-size:1.8rem}:host([size=\"large\"]){--group-overflow-font-size:3.6rem}:host([size=\"medium\"]){--group-overflow-font-size:1.8rem}:host([size=\"small\"]){--group-overflow-font-size:1rem}:host([size=\"tiny\"]){--group-overflow-font-size:.8rem}:host .wrapper{display:block;position:relative;z-index:0;width:100%;max-width:calc(var(--group-overflow-size) * 2);font:inherit;font-size:var(--group-overflow-font-size)}:host .content{overflow:hidden;position:relative}:host .spacer{display:block;padding-top:50%;width:100%;height:0}:host .count{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;z-index:1;width:100%;height:100%;text-align:left;line-height:100%;padding:0.2em 0.4em;color:var(--theme-complement9);font-size:calc(var(--group-overflow-font-size) * .825);font-weight:600}";

const GroupOverflow = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.size = "medium";
    }
    render() {
        return (index.h("div", { class: "wrapper" }, index.h("div", { class: "content" }, index.h("div", { class: "count" }, "+", this.count, " more"), index.h("div", { class: "spacer" })), index.h("stellar-tooltip", null, index.h("slot", null))));
    }
    get element() { return index.getElement(this); }
    static get style() { return GroupOverflowCss; }
};

exports.stellar_group_overflow = GroupOverflow;
