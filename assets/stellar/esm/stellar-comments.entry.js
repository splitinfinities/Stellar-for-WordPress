import { r as registerInstance, h } from './index-bcfb4a9f.js';

const CommentsCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;display:block}:host ::slotted(stellar-comment){margin-top:1rem}";

const Comments = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("section", null, h("slot", null)));
    }
    static get style() { return CommentsCss; }
};

export { Comments as stellar_comments };
