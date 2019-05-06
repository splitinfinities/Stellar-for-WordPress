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
import { c as registerInstance, h as createEvent, d as h, f as getElement } from './stellar-core-3af17cd6.js';
import './chunk-c16f1b5d.js';
import { a as properties } from './chunk-80aceae1.js';
import './chunk-a45d5d95.js';
import './chunk-091920a9.js';
var Tab = /** @class */ (function () {
    function Tab(hostRef) {
        registerInstance(this, hostRef);
        this.href = "#";
        this.tag = "button";
        this.disabled = false;
        this.open = false;
        this.notifications = false;
        this.contentChange = createEvent(this, "contentChange", 7);
    }
    Tab.prototype.componentWillLoad = function () {
        this.parent = this.element.closest('stellar-tabs');
    };
    Tab.prototype.handleResize = function () {
        this.handleIndicatorPosition();
    };
    Tab.prototype.componentDidLoad = function () {
        this.handleIndicatorPosition();
    };
    Tab.prototype.handleClick = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var tabs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.parent.tabs()];
                    case 1:
                        tabs = _a.sent();
                        tabs.forEach(function (element) {
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
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab.prototype.handleIndicatorPosition = function () {
        if (this.open && this.parent && this.parent.nodeName === "STELLAR-TABS") {
            // this.parent.blurring()
            if (this.parent.vertical) {
                properties.set({
                    "--tab-top": this.element.offsetTop + "px",
                    "--tab-height": this.element.offsetHeight + "px"
                }, this.parent);
            }
            else {
                properties.set({
                    "--tab-left": this.element.offsetLeft + "px",
                    "--tab-width": this.element.offsetWidth + "px"
                }, this.parent);
            }
        }
    };
    Tab.prototype.renderNotifications = function () {
        return this.notifications && h("stellar-tag", null, this.notifications);
    };
    Tab.prototype.renderTitle = function () {
        return h("span", { class: "title" }, h("slot", null));
    };
    Tab.prototype.render = function () {
        var _this = this;
        var Tag = this.tag;
        // @ts-ignore
        return h("div", { class: "tab-wrap" }, h(Tag, { role: "tab", "aria-selected": this.open ? "true" : "false", "aria-setsize": this.tabCount, "aria-posinset": this.order, href: this.href, tabindex: "0", class: "tab-button", onClick: function (e) { return _this.handleClick(e); } }, this.renderNotifications(), this.renderTitle()));
    };
    Object.defineProperty(Tab.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tab, "style", {
        get: function () { return ":host{display:block;z-index:2}:host,:host .tab-wrap{position:relative;font-size:var(--font-size);height:100%}:host .tab-wrap{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:-1px .25em;padding:0 .25em;color:var(--theme-base8)}:host-context(stellar-tabs[vertical]):host .tab-button,:host-context(stellar-tabs[vertical]):host .tab-wrap{-ms-flex-pack:left!important;justify-content:left!important}:host .tab-wrap stellar-tag{position:absolute;top:1px;right:-10px}:host .tab-wrap>.tab-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;font-size:var(--font-size);display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-pack:center;justify-content:center;-webkit-transition:color .2s;transition:color .2s;outline:none;padding:0 1em;text-decoration:none;line-height:1;color:var(--theme-base8);width:100%;height:100%;cursor:pointer}:host([open]) .tab-wrap>.tab-button,:host .tab-wrap>.tab-button:focus,:host .tab-wrap>.tab-button:hover{color:var(--theme-base9)}:host .tab-wrap>.tab-button span{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;line-height:1;font-size:var(--font-size);font-weight:600}:host .tab-wrap>.tab-button span ::slotted(stellar-asset){line-height:0;margin-right:.25em}:host .tab-wrap>.tab-button span ::slotted(stellar-avatar){line-height:0;margin:-1.175em .5em -1.075em -.5em}:host([disabled=true]) .tab-wrap{cursor:not-allowed;color:var(--theme-color-disabled)}:host([disabled=true]) .tab-wrap *{cursor:not-allowed}:host([disabled=true]) .tab-wrap .notifications{background:var(--theme-color-disabled)}:host-context(.dark-mode):host .tab-wrap>.tab-button{color:var(--theme-base2)}:host-context(.dark-mode):host .tab-wrap>.tab-button:focus,:host-context(.dark-mode):host .tab-wrap>.tab-button:hover{color:var(--theme-base0)}:host-context(.dark-mode):host([open]) .tab-wrap>.tab-button{color:var(--white)}:host-context(.dark-mode):host-context(stellar-tabs[block]):host([open]) .tab-wrap>.tab-button{color:var(--theme-base9)}"; },
        enumerable: true,
        configurable: true
    });
    return Tab;
}());
export { Tab as stellar_tab };
