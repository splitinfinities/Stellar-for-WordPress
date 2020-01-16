'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');

const CommentsCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;display:block}:host ::slotted(stellar-comment){margin-top:1rem}";

const Comments = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("section", null, index.h("slot", null)));
    }
    static get style() { return CommentsCss; }
};

exports.stellar_comments = Comments;
