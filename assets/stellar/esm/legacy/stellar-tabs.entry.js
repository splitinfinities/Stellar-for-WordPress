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
import './chunk-d0cf38d8.js';
import { a as blurringEase } from './chunk-27460e3f.js';
import './chunk-f26db59a.js';
import './chunk-cf2c1f95.js';
var Tabs = /** @class */ (function () {
    function Tabs(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.noanimation = false;
        this.size = "medium";
        this.block = false;
        this.vertical = false;
        this.ease = blurringEase({
            end: 10,
            start: -1,
            duration: 125,
            tick: function (args) {
                _this.blur = args.value;
            },
            complete: function () {
                _this.blur = 0;
                _this.ease.stop();
            },
        });
        this.blur = 0;
    }
    Tabs.prototype.tabs = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.tabsList || this.tabsList.length === 0) {
                    this.tabsList = Array.from(this.element.querySelectorAll('stellar-tab'));
                }
                return [2 /*return*/, this.tabsList];
            });
        });
    };
    Tabs.prototype.contents = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.contentsList = Array.from(document.querySelectorAll("stellar-content[for='" + this.name + "']"));
                return [2 /*return*/, this.contentsList];
            });
        });
    };
    Tabs.prototype.blurring = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.ease.start();
                return [2 /*return*/];
            });
        });
    };
    Tabs.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tabs()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.contents()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tabs.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tabs, tabCount;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.noanimation) {
                            setTimeout(function () {
                                // @ts-ignore
                                window.dispatchEvent(new Event('resize'));
                                _this.element.shadowRoot.querySelector('.indicator').classList.add('ready');
                            }, 100);
                        }
                        return [4 /*yield*/, this.tabs()];
                    case 1:
                        tabs = _a.sent();
                        tabCount = tabs.length;
                        tabs.forEach(function (tab, index) {
                            tab.order = index + 1;
                            tab.tabCount = tabCount;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Tabs.prototype.render = function () {
        return (h("div", { class: "tab-wrap" }, h("div", { class: "tab-list", role: "tablist" }, h("slot", null), h("stellar-blur", { horizontal: !this.vertical ? this.blur : 0, vertical: this.vertical ? this.blur : 0 }, h("div", { class: "indicator" })))));
    };
    Object.defineProperty(Tabs.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabs, "style", {
        get: function () { return ":host{--font-size:1rem;font-size:var(--font-size);display:block;position:relative;margin:0;width:auto;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;-webkit-scroll-snap-type:mandatory;-ms-scroll-snap-type:mandatory;scroll-snap-type:mandatory;-webkit-scroll-snap-points-x:repeat(10%);-ms-scroll-snap-points-x:repeat(10%);scroll-snap-points-x:repeat(10%);font-family:var(--font-primary);border-bottom:1px solid var(--theme-base1);background:var(--white)}:host([size=tiny]){--font-size:.75rem}:host([size=small]){--font-size:.875rem}:host([size=medium]){--font-size:1.25rem}:host([size=large]){--font-size:1.5rem}:host stellar-blur{position:absolute;width:100%;height:100%;left:0;bottom:0}:host .indicator{display:block;position:absolute;bottom:-.1em;left:var(--tab-left,0);background:var(--theme-base5);width:var(--tab-width,0);height:.4em}:host .indicator.ready{-webkit-transition:all .35s var(--ease);transition:all .35s var(--ease)}:host .tab-wrap{max-width:1200px;margin:auto;height:100%}:host .tab-list{display:-ms-inline-flexbox;display:inline-flex;margin:0;padding:0;list-style:none;text-align:center;white-space:nowrap;height:100%;width:100%}:host .tab-wrap[scrollable=false]{overflow:visible}:host .tab-wrap[height=flex],:host .tab-wrap[height=flex] .tab-list,:host .tab-wrap[height=flex] ::slotted(stellar-tab){height:100%}:host(:not([vertical])) ::slotted(stellar-tab+stellar-tab){margin-left:1em}:host([block]){overflow:hidden;border:1px solid var(--theme-base0);width:100%}:host([block]) .tab-wrap{overflow:hidden;height:100%}:host([block]) .tab-list,:host([block]) .tab-wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}:host([block]) .tab-list{width:100%;margin:0 3px}:host([block]) .tab-list ::slotted(stellar-tab){width:100%;-ms-flex:12 12 100%;flex:12 12 100%}:host([block]) ::slotted(stellar-tab[open=true]){color:var(--theme-base5)!important}:host([block]) .indicator{height:calc(100% - 6px);background:var(--theme-base1);top:3px;bottom:3px;-webkit-transition:all .35s var(--ease);transition:all .35s var(--ease)}:host([vertical]){height:auto;border-right:1px solid var(--theme-base1);border-bottom:none}:host([vertical]) .indicator{width:.4em;top:var(--tab-top);height:var(--tab-height)}:host([vertical]) .tab-list{-ms-flex-direction:column;flex-direction:column}:host([vertical]) .tab-list ::slotted(stellar-tab){height:4rem}:host([height=auto]){height:100%}:host-context(.dark-mode){border-bottom:1px solid var(--theme-base9);background:var(--black)}:host-context(.dark-mode) .indicator{background:var(--theme-base5)}:host-context(.dark-mode):host([block]){border:1px solid var(--theme-base9)}"; },
        enumerable: true,
        configurable: true
    });
    return Tabs;
}());
export { Tabs as stellar_tabs };
