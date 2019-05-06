'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-c90f54d2.js');

class GroupOverflow {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.size = "medium";
    }
    render() {
        return (__chunk_1.h("div", { class: "wrapper" }, __chunk_1.h("div", { class: "content" }, __chunk_1.h("div", { class: "count" }, "+", this.count, " more"), __chunk_1.h("div", { class: "spacer" })), __chunk_1.h("stellar-tooltip", null, __chunk_1.h("slot", null))));
    }
    get element() { return __chunk_1.getElement(this); }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block;width:calc(var(--group-overflow-size) * 2);max-height:var(--group-overflow-size);font-size:var(--group-overflow-font-size);--group-overflow-size:2.2em;--group-overflow-font-size:1.8rem}:host([size=large]){--group-overflow-font-size:3.6rem}:host([size=medium]){--group-overflow-font-size:1.8rem}:host([size=small]){--group-overflow-font-size:1rem}:host([size=tiny]){--group-overflow-font-size:.8rem}:host .wrapper{display:block;position:relative;z-index:0;width:100%;max-width:calc(var(--group-overflow-size) * 2);font:inherit;font-size:var(--group-overflow-font-size)}:host .content{overflow:hidden;position:relative}:host .spacer{display:block;padding-top:50%;width:100%;height:0}:host .count{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;z-index:1;width:100%;height:100%;text-align:left;line-height:100%;padding:.2em .4em;color:var(--theme-complement9);font-size:calc(var(--group-overflow-font-size) * .825);font-weight:600}"; }
}

exports.stellar_group_overflow = GroupOverflow;
