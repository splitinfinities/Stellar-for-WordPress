'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-c90f54d2.js');

class Comments {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    render() {
        return (__chunk_1.h("section", null, __chunk_1.h("slot", null)));
    }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block}:host ::slotted(stellar-comment){margin-top:1rem}"; }
}

exports.stellar_comments = Comments;
