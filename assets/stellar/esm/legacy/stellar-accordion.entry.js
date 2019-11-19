var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { d as registerInstance, f as h, g as getElement } from './stellar-core-1e602ba1.js';
import './chunk-40f083d9.js';
import { a as properties } from './chunk-d0cf38d8.js';
import { a as blurringEase } from './chunk-27460e3f.js';
import './chunk-f26db59a.js';
import './chunk-cf2c1f95.js';
var Accordion = /** @class */ (function () {
    function Accordion(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.open = false;
        this.tight = false;
        this.name = "accordion";
        this.label = "More Details";
        this.blur = 0;
        this.ease = blurringEase({
            end: 10,
            start: -1,
            duration: 250,
            tick: function (args) {
                _this.blur = args.value;
            },
            complete: function () {
                _this.blur = 0;
                _this.ease.stop();
            },
        });
        this.els = [];
    }
    Accordion.prototype.componentWillLoad = function () {
        var _this = this;
        var callback = function (mutationsList) {
            for (var _i = 0, mutationsList_1 = mutationsList; _i < mutationsList_1.length; _i++) {
                var mutation = mutationsList_1[_i];
                if (mutation.type == 'childList') {
                    _this.refresh();
                }
            }
        };
        this.observer = new MutationObserver(callback);
    };
    Accordion.prototype.componentDidLoad = function () {
        this.expander = this.element.shadowRoot.querySelector(".expander");
        this.refresh();
        this.attachObserver();
        this.els = Array.from(this.element.querySelectorAll("*:not([slot='label'])"));
        this.updateTabIndex();
    };
    Accordion.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                properties.set({
                    "--accordion-height": this.expander.scrollHeight + "px"
                }, this.element);
                return [2 /*return*/];
            });
        });
    };
    Accordion.prototype.attachObserver = function () {
        // Start observing the target node for configured mutations
        this.observer.observe(this.element, { childList: true, subtree: true });
    };
    Accordion.prototype.componentWillUnload = function () {
        this.observer.disconnect();
    };
    Accordion.prototype.currentClasses = function () {
        return "expander " + this.openClass();
    };
    Accordion.prototype.openClass = function () {
        return (this.open) ? "open" : "";
    };
    Accordion.prototype.updateTabIndex = function () {
        var _this = this;
        this.els.forEach(function (element) {
            element.tabIndex = !_this.open ? -1 : 0;
        });
    };
    Accordion.prototype.handleClick = function () {
        this.open = !this.open;
        this.ease.start();
        this.updateTabIndex();
    };
    Accordion.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "wrap" }, h("div", { class: "button-wrap", title: "Selecting this opens the content of this accordion", onClick: function () { return _this.handleClick(); } }, h("slot", { name: "label" }, h("stellar-button", { id: "button", tag: "button", ghost: true, label: this.label }, this.label)), h("stellar-asset", { class: "chevron", name: "arrow-down" })), h("stellar-blur", { vertical: this.blur }, h("div", { class: this.currentClasses(), tabIndex: !this.open ? -1 : 0 }, h("slot", null)))));
    };
    Object.defineProperty(Accordion.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Accordion, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;position:relative;--accordion-height:200vh}:host,:host .expander{width:100%;overflow:hidden}:host .expander{-webkit-transition:all .35s ease-out .1s,opacity .25s ease-out 0s;transition:all .35s ease-out .1s,opacity .25s ease-out 0s;opacity:0;padding:0;max-height:50vh;height:0;-webkit-transform:translateY(-60px);transform:translateY(-60px)}:host .expander.open{-webkit-transition:all .35s ease-in-out 0s,opacity .175s ease-in-out .175s,overflow 0s ease-in-out .2s;transition:all .35s ease-in-out 0s,opacity .175s ease-in-out .175s,overflow 0s ease-in-out .2s;opacity:1;height:calc(var(--accordion-height) + 6rem);overflow:auto;-webkit-transform:translateY(0);transform:translateY(0)}:host .expander stellar-item{padding-left:1rem}:host .expander stellar-item:last-of-type{margin-bottom:.5rem}:host([tight]) .expander ::slotted(stellar-item){padding:0 1.5rem;padding:0 .75rem}:host .wrap{-webkit-transform:translateZ(0);transform:translateZ(0)}:host .wrap .button-wrap{position:relative;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;z-index:9;min-height:3rem;padding:1rem 0;color:var(--theme-base9);background:-webkit-gradient(linear,left top,left bottom,from(var(--white)),to(transparent));background:linear-gradient(var(--white),transparent)}:host .wrap .button-wrap stellar-item button.button{padding:0}:host .chevron{position:absolute;right:1rem;color:var(--gray4);margin-left:auto;-webkit-transition:all .35s ease-in-out 0s;transition:all .35s ease-in-out 0s}:host([open]) .chevron{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host .wrap .button-wrap stellar-button{--color:var(--gray9)}:host ::slotted(stellar-item[slot=label]){padding-right:2rem}:host-context(.dark-mode):host .wrap .button-wrap{background:-webkit-gradient(linear,left top,left bottom,from(var(--black)),to(transparent));background:linear-gradient(var(--black),transparent);color:var(--theme-base5)}"; },
        enumerable: true,
        configurable: true
    });
    return Accordion;
}());
export { Accordion as stellar_accordion };
