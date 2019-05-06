import { c as registerInstance, d as h } from './stellar-core-3af17cd6.js';
var Comments = /** @class */ (function () {
    function Comments(hostRef) {
        registerInstance(this, hostRef);
    }
    Comments.prototype.render = function () {
        return (h("section", null, h("slot", null)));
    };
    Object.defineProperty(Comments, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block}:host ::slotted(stellar-comment){margin-top:1rem}"; },
        enumerable: true,
        configurable: true
    });
    return Comments;
}());
export { Comments as stellar_comments };
