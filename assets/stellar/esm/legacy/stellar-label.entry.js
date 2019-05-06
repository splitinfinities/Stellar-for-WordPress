import { c as registerInstance, d as h } from './stellar-core-3af17cd6.js';
var Label = /** @class */ (function () {
    function Label(hostRef) {
        registerInstance(this, hostRef);
    }
    Label.prototype.render = function () {
        // @ts-ignore
        return h("label", { for: this.for }, h("slot", null));
    };
    Object.defineProperty(Label, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{line-height:1.3;color:var(--gray9);font-size:1.4rem;display:block;font-weight:900;letter-spacing:.05em;margin-bottom:.75em;cursor:pointer;text-transform:uppercase}:host([underneath]){margin-top:.75em;margin-bottom:0;color:var(--gray5);font-weight:600;text-transform:none}:host([size=small]){font-size:1.2rem}:host([size=tiny]){font-size:1rem}:host label{all:inherit}:host-context(.dark-mode):host{color:var(--gray0)}:host-context(.dark-mode):host([underneath]){color:var(--gray5)}"; },
        enumerable: true,
        configurable: true
    });
    return Label;
}());
export { Label as stellar_label };
