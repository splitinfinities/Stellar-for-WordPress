import { r as registerInstance, h } from './index-bcfb4a9f.js';
var CommentsCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;display:block}:host ::slotted(stellar-comment){margin-top:1rem}";
var Comments = /** @class */ (function () {
    function Comments(hostRef) {
        registerInstance(this, hostRef);
    }
    Comments.prototype.render = function () {
        return (h("section", null, h("slot", null)));
    };
    Object.defineProperty(Comments, "style", {
        get: function () { return CommentsCss; },
        enumerable: true,
        configurable: true
    });
    return Comments;
}());
export { Comments as stellar_comments };
