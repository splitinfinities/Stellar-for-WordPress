var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
import { r as registerInstance, h, H as Host, d as getElement, e as createEvent } from './index-bcfb4a9f.js';
import './index-c982b830.js';
import { d as delay } from './index-320c6878.js';
import { c as createCommonjsModule, u as unwrapExports, b as commonjsRequire, a as commonjsGlobal } from './_commonjsHelpers-ae1b5db5.js';
import './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-0e374e95.js';
import { d as delay$1 } from './index-94a07eae.js';
import { A as ActiveRouter } from './active-router-e331149e.js';
import './match-path-fd602b4d.js';
var eq_min = createCommonjsModule(function (module) {
    /*! eq.js v1.9.0 (c) 2013-2016 Sam Richard, MIT license */
    !function (e) { function t() { this.nodes = [], this.eqsLength = 0, this.widths = [], this.points = [], this.callback = void 0; } function n(e, t, n) { e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, function () { return n.call(e, window.event); }); } function o(e) { return window.getComputedStyle(e, ":before").getPropertyValue("content").slice(1, -1); } var r = function (e, t) { return [].slice.call(e).concat([].slice.call(t)); }; t.prototype.query = function (t, n) { var r, i = Object.getPrototypeOf(e); n && "function" == typeof n && (i.callback = n), t && "number" != typeof t ? r = t.length : (t = i.nodes, r = i.nodesLength); var s, u = [], a = []; for (s = 0; r > s; s++) {
        var l = t[s].getBoundingClientRect(), d = l.width;
        void 0 === d && (d = l.right - l.left), u.push(d);
        try {
            a.push(i.sortObj(t[s].getAttribute("data-eq-pts")));
        }
        catch (c) {
            try {
                a.push(i.sortObj(o(t[s])));
            }
            catch (f) {
                a.push([{ key: "", value: 0 }]);
            }
        }
    } i.widths = u, i.points = a, t && "number" != typeof t ? i.nodeWrites(t, u, a) : n && "function" != typeof n ? i.nodeWrites() : window.requestAnimationFrame(i.nodeWrites); }, t.prototype.nodeWrites = function (t) { var n, o, r, i, s, u, a, l = Object.getPrototypeOf(e), d = l.widths, c = l.points; for (t && "number" != typeof t ? i = t.length : (t = l.nodes, i = l.nodesLength), n = 0; i > n; n++) {
        var f = d[n], p = t[n], h = c[n], v = [], y = h.length;
        if (f < h[0].value)
            a = null;
        else if (f >= h[y - 1].value) {
            for (r = 0; y > r; r++)
                v.push(h[r].key);
            a = v.join(" ");
        }
        else
            for (o = 0; y > o; o++) {
                var b = h[o], g = h[o + 1];
                if (v.push(b.key), 0 === o && f < b.value) {
                    a = null;
                    break;
                }
                if (void 0 !== g && void 0 === g.value) {
                    v.push(g.key), a = v.join(" ");
                    break;
                }
                if (f >= b.value && f < g.value) {
                    a = v.join(" ");
                    break;
                }
            }
        null === a ? p.removeAttribute("data-eq-state") : p.setAttribute("data-eq-state", a), u = new CustomEvent("eqResize", { detail: a, bubbles: !0 }), p.dispatchEvent(u);
    } l.callback && (s = l.callback, l.callback = void 0, s(t)); }, t.prototype.refreshNodes = function () { var t = Object.getPrototypeOf(e), n = []; t.nodes = document.querySelectorAll("[data-eq-pts]"), n = o(document.querySelector("html")).split(", "), n.forEach(function (e) { "" !== e && (t.nodes = r(t.nodes, document.querySelectorAll(e))); }), t.nodesLength = t.nodes.length; }, t.prototype.sortObj = function (e) { for (var t = [], n = e.split(","), o = 0; o < n.length; o++) {
        var r = n[o].split(":");
        t.push({ key: r[0].replace(/^\s+|\s+$/g, ""), value: parseFloat(r[1]) });
    } return t.sort(function (e, t) { return e.value - t.value; }); }, t.prototype.definePts = function (e, t) { return t = t ? t : {}, t = JSON.stringify(t), t = t.substring(1, t.length - 1), t = t.replace(/:/g, ": "), t = t.replace(/,/g, ", "), t = t.replace(/"/g, ""), e.setAttribute("data-eq-pts", t), t; }, t.prototype.all = function (t) { var n = Object.getPrototypeOf(e), o = t ? !0 : !1; n.refreshNodes(), o ? n.query(void 0, t) : window.requestAnimationFrame(n.query); }, e = e || new t, n(window, "DOMContentLoaded", function () { e.all(!1); }), n(window, "load", function () { e.all(!0); }), n(window, "resize", function () { e.all(!0); }), module.exports ? module.exports = e : window.eqjs = e; }(window.eqjs);
});
var GridCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--grid-width:200px;--grid-gap:2rem;contain:content;position:relative;display:-ms-flexbox;display:flex;display:grid;-ms-flex-wrap:wrap;flex-wrap:wrap;grid-gap:var(--grid-gap);grid-template-columns:repeat(auto-fit, minmax(var(--grid-width), 1fr))}:host([padding]){padding:var(--grid-gap)}:host([noresponsive]){grid-template-columns:repeat(auto-fit, minmax(var(--grid-width), 1fr))}:host([noresponsive][cols=\"1\"]){grid-template-columns:1fr}:host([noresponsive][cols=\"2\"]){grid-template-columns:repeat(2, 1fr)}:host([noresponsive][cols=\"3\"]){grid-template-columns:repeat(3, 1fr)}:host([noresponsive][cols=\"4\"]){grid-template-columns:repeat(4, 1fr)}:host([noresponsive][cols=\"5\"]){grid-template-columns:repeat(5, 1fr)}:host([noresponsive][cols=\"6\"]){grid-template-columns:repeat(6, 1fr)}:host ::slotted(.width-all){grid-column:1 / -1}:host ::slotted(.width-2){grid-column:auto / span 2}:host ::slotted(.width-3){grid-column:auto / span 3}:host ::slotted(.width-4){grid-column:auto / span 4}:host ::slotted(.width-5){grid-column:auto / span 5}:host ::slotted(.width-6){grid-column:auto / span 6}:host ::slotted(.height-all){grid-row:1 / -1}:host ::slotted(.height-2){grid-row:auto / span 2}:host ::slotted(.height-3){grid-row:auto / span 3}:host ::slotted(.height-4){grid-row:auto / span 4}:host ::slotted(.height-5){grid-row:auto / span 5}:host ::slotted(.height-6){grid-row:auto / span 6}";
var Grid = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.cols = "auto";
        this.compact = false;
        this.padding = false;
        this.align = "items-start";
        this.noresponsive = false;
    }
    class_1.prototype.makeResponsive = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.noresponsive) {
                    eq_min.definePts(this.element, {
                        "tiny": 320,
                        "small": 480,
                        "medium": 640,
                        "large": 800,
                        "massive": 1024
                    });
                    this.refresh();
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.componentWillLoad = function () {
        this.makeResponsive();
    };
    class_1.prototype.componentDidLoad = function () {
        this.makeResponsive();
    };
    class_1.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resizeEvent;
            return __generator(this, function (_a) {
                resizeEvent = window.document.createEvent('UIEvents');
                resizeEvent.initEvent('resize', true, false);
                window.dispatchEvent(resizeEvent);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        return h(Host, { class: "" + this.align }, h("slot", null));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return GridCss; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
var ItemCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;--item-size:2.356em;--font-size:1.4rem;display:block;width:100%;height:var(--item-size);color:var(--theme-base9);font-family:inherit;visibility:visible !important;font-size:var(--font-size);line-height:1.4;text-align:left;position:relative}:host([fit]){--item-size:auto}:host .button .content{display:grid;grid-template-columns:auto 1fr;grid-gap:1rem;width:100%;text-align:left}:host([wrap]) .button .content{white-space:normal;text-align:left;width:calc(100% - var(--ms5))}:host([danger]) .button{color:var(--red5)}:host a.button,:host button.button,:host stencil-route-link a{text-decoration:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;outline:0;border:0;background:transparent;padding:0 1em;width:100%;height:calc(var(--item-size) - 1px);color:currentColor;font-weight:500;font-size:inherit}:host stencil-route-link{padding:0}:host .button a{color:inherit;background:inherit;text-decoration:none}:host .button ::slotted(*[block]){grid-column:1/3}:host .button ::slotted(stellar-avatar){width:var(--avatar-size);visibility:visible !important;display:block !important;-ms-flex-item-align:center;align-self:center}:host .button ::slotted(stellar-tag){margin:auto 0.5rem auto auto}:host .button ion-icon{margin-left:1rem;background:radial-gradient(ellipse at center, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 80%,rgba(255,255,255,0) 100%)}:host .button span{margin:auto auto auto 0;width:100%;text-overflow:ellipsis;white-space:nowrap}:host([size=\"small\"]) .button{padding:0 1rem;height:3rem}:host ion-icon.selected{-webkit-animation:fadeInScale 200ms var(--ease);animation:fadeInScale 200ms var(--ease);font-size:var(--item-size);margin-left:auto !important;background:transparent;color:var(--theme-base5);height:calc(var(--item-size) - 1px)}:host([fit]) ion-icon.selected{height:75%;font-size:3em;margin-right:0.125em}:host(:hover) .selected,:host(:focus) .selected,:host(:focus-within) .selected{color:var(--theme-base7)}:host([fit]) ion-icon{right:1em}:host .button:focus,:host .button:hover,:host(:hover),:host(:focus-within){background:var(--theme-base0)}:host(.current){background:white}:host([danger]) .button:focus,:host([danger]) .button:hover{background:var(--red5);color:white}:host([simple]) .button{background:white !important}:host(.current) ion-icon{display:none}:host ion-icon.multiple{border:1px solid var(--border-color);background:var(--background);border-radius:4px;font-size:calc(var(--item-size) * .55);width:calc(var(--item-size) * .55);height:calc(var(--item-size) * .55);margin:0 0 0 auto;left:-1rem;position:relative;color:transparent}:host ion-icon.multiple.selected{color:var(--white);background:var(--theme-base5)}:host(.current) .button:focus,:host(.current) .button:hover,:host(.current:hover),:host(.current:focus-within){background:transparent}:host([dark]) .button:focus,:host([dark]) .button:hover,:host([dark]:hover),:host([dark]:focus-within){background:var(--theme-base8)}:host([dark].current) .button:focus,:host([dark].current) .button:hover,:host([dark].current:hover),:host([dark].current:focus-within){background:transparent}@-webkit-keyframes fadeInScale{from{-webkit-transform:scale(0);transform:scale(0);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes fadeInScale{from{-webkit-transform:scale(0);transform:scale(0);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}";
var Item = /** @class */ (function () {
    function class_2(hostRef) {
        registerInstance(this, hostRef);
        this.type = "button";
        this.href = "#";
        this.wrap = false;
        this.fit = false;
        this.simple = false;
        this.danger = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        this.selected = false;
        this.multiple = false;
        this.selectable = false;
        this.focused = false;
        this.selectTitle = false;
        this.route = false;
        this.current = false;
        this.selectionChanged = createEvent(this, "selectionChanged", 7);
        this.mounted = createEvent(this, "mounted", 7);
        this.focusChanged = createEvent(this, "focusChanged", 7);
        this.blurChanged = createEvent(this, "blurChanged", 7);
    }
    class_2.prototype.componentWillLoad = function () {
        this.select = this.element.closest('stellar-select');
    };
    class_2.prototype.componentDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.selected) {
                _this.mounted.emit(_this);
            }
        }, 10);
    };
    class_2.prototype.componentDidUnload = function () {
        this.selectionChanged.emit(this);
    };
    class_2.prototype.componentDidUpdate = function () {
        if (this.select) {
            this.select.update_values();
        }
    };
    class_2.prototype.data = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {
                        size: this.size,
                        value: this.value,
                        type: this.type,
                        label: this.label,
                        danger: this.danger,
                        slotted: this.element.innerHTML
                    }];
            });
        });
    };
    class_2.prototype.apply = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.size = data.size;
                        this.value = data.value;
                        this.type = data.type;
                        this.label = data.label;
                        this.element.innerHTML = data.slotted;
                        if (!this.selectTitle) return [3 /*break*/, 2];
                        return [4 /*yield*/, delay(25)];
                    case 1:
                        _a.sent();
                        this.element.innerHTML = data.slotted;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.setFocus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.focused = true;
                // @ts-ignore
                this.element.querySelector('.button').focus();
                return [2 /*return*/];
            });
        });
    };
    class_2.prototype.handleClick = function (e) {
        if (this.route) {
            e.preventDefault();
            this.history.push(this.href, {});
        }
        if (!this.current) {
            this.selectionChanged.emit(this);
        }
    };
    class_2.prototype.handleFocus = function () {
        if (this.current) {
            this.focusChanged.emit(this);
        }
        this.focused = true;
    };
    class_2.prototype.handleBlur = function () {
        if (this.current) {
            this.blurChanged.emit(this);
        }
        this.focused = false;
    };
    class_2.prototype.classes = function () {
        var classes = "";
        classes += this.selected ? "selected " : "";
        classes += this.multiple ? "multiple " : "";
        return classes;
    };
    class_2.prototype.select_item = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            var event, event;
            return __generator(this, function (_a) {
                if (this.selectable) {
                    if (state) {
                        if (this.selected !== state.selected) {
                            event = new CustomEvent('click');
                            this.element.shadowRoot.querySelector('.button').dispatchEvent(event);
                        }
                    }
                    else {
                        event = new CustomEvent('click');
                        this.element.shadowRoot.querySelector('.button').dispatchEvent(event);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    class_2.prototype.render = function () {
        var _this = this;
        return (h(this.type, { class: "button", type: "button", href: this.href, url: this.href, tabindex: "0", value: this.value, title: this.label, onClick: function (e) { return _this.handleClick(e); }, onBlur: function () { return _this.handleBlur(); }, onFocus: function () { return _this.handleFocus(); } }, h("div", { class: "content" }, h("slot", null)), (this.selected || this.multiple) && h("ion-icon", { class: this.classes(), name: "checkmark" })));
    };
    Object.defineProperty(class_2.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "style", {
        get: function () { return ItemCss; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
Tunnel.injectProps(Item, ['dark']);
if (injectHistory) {
    injectHistory(Item);
}
var LayoutCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;position:relative;font-family:inherit;contain:content;--grid-gap:3rem;--padding:4rem;--layout:1fr;--tiny:420px;--small:700px;--medium:1024px;--large:1200px;--width:95%}:host .layout{display:grid;grid-gap:var(--grid-gap, 3rem);margin:0 auto;padding:var(--padding) 0;width:var(--width);max-width:var(--medium);min-height:0;min-width:0;grid-template-columns:var(--layout)}:host .layout>*{min-width:0}:host([size=\"tiny\"]) .layout{max-width:var(--tiny)}:host([size=\"small\"]) .layout{max-width:var(--small)}:host([size=\"medium\"]) .layout{max-width:var(--medium)}:host([size=\"large\"]) .layout{max-width:var(--large)}:host([size=\"full\"]) .layout{max-width:100%}:host([size=\"flush\"]) .layout{max-width:100%;width:100%}:host([padding=\"none\"]){--padding:0}:host([padding=\"tiny\"]){--padding:0.5rem}:host([padding=\"small\"]){--padding:1rem}:host([padding=\"medium\"]){--padding:2rem}:host([padding=\"large\"]){--padding:4rem}:host([align=\"top\"]) .layout{-ms-flex-align:start;align-items:flex-start}:host([align=\"center\"]) .layout{-ms-flex-align:center;align-items:center}:host([align=\"baseline\"]) .layout{-ms-flex-align:baseline;align-items:baseline}:host([type=\"supporting-content-right\"]) ::slotted(aside){-ms-flex-order:1;order:1}:host ::slotted(*){min-width:0}:host([has-nav]) .layout{padding-bottom:0}:host ::slotted(*[slot=\"nav\"]){margin-top:var(--padding)}@media (min-width: 700px){:host([type=\"one-third\"]){--layout:2fr 1fr}:host([type=\"one-third-right\"]){--layout:1fr 2fr}:host([type=\"sidebar-right\"]){--layout:3fr 1fr}:host([type=\"sidebar\"]){--layout:1fr 3fr}:host([type=\"half\"]){--layout:1fr 1fr}:host([type=\"supporting-content\"]){--layout:6fr 4fr}:host([type=\"supporting-content-right\"]){--layout:4fr 6fr}:host([type=\"split-screen\"]){--layout:1fr 1fr}:host([type=\"supporting-content-right\"]) ::slotted(aside){-ms-flex-order:-1;order:-1}}";
var Layout = /** @class */ (function () {
    function class_3(hostRef) {
        registerInstance(this, hostRef);
        this.size = "medium";
        this.padding = "medium";
        this.align = "baseline";
        this.content = "baseline";
    }
    class_3.prototype.componentWillLoad = function () {
        var navs = Array.from(this.element.querySelectorAll('*[slot="nav"]'));
        this.hasNav = navs.length > 0;
        eq_min.definePts(this.element, {
            "tiny": 320,
            "small": 480,
            "medium": 640,
            "large": 800,
            "massive": 1024,
        });
        this.refresh();
    };
    class_3.prototype.componentDidLoad = function () {
        this.refresh();
    };
    class_3.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resizeEvent;
            return __generator(this, function (_a) {
                resizeEvent = window.document.createEvent('UIEvents');
                resizeEvent.initEvent('resize', true, false);
                window.dispatchEvent(resizeEvent);
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.render = function () {
        return (h("div", { class: "layout" }, h("slot", null), h("slot", { name: "nav" })));
    };
    Object.defineProperty(class_3.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_3, "style", {
        get: function () { return LayoutCss; },
        enumerable: true,
        configurable: true
    });
    return class_3;
}());
var basicScroll_min = createCommonjsModule(function (module, exports) {
    !function (t) { module.exports = t(); }(function () { return function u(i, c, f) { function a(n, t) { if (!c[n]) {
        if (!i[n]) {
            var o = "function" == typeof commonjsRequire && commonjsRequire;
            if (!t && o)
                return o(n, !0);
            if (s)
                return s(n, !0);
            var e = new Error("Cannot find module '" + n + "'");
            throw e.code = "MODULE_NOT_FOUND", e;
        }
        var r = c[n] = { exports: {} };
        i[n][0].call(r.exports, function (t) { return a(i[n][1][t] || t); }, r, r.exports, u, i, c, f);
    } return c[n].exports; } for (var s = "function" == typeof commonjsRequire && commonjsRequire, t = 0; t < f.length; t++)
        a(f[t]); return a; }({ 1: [function (t, n, o) { n.exports = function (t) { var n = 2.5949095; return (t *= 2) < 1 ? t * t * ((n + 1) * t - n) * .5 : .5 * ((t -= 2) * t * ((n + 1) * t + n) + 2); }; }, {}], 2: [function (t, n, o) { n.exports = function (t) { var n = 1.70158; return t * t * ((n + 1) * t - n); }; }, {}], 3: [function (t, n, o) { n.exports = function (t) { var n = 1.70158; return --t * t * ((n + 1) * t + n) + 1; }; }, {}], 4: [function (t, n, o) { var e = t("./bounce-out"); n.exports = function (t) { return t < .5 ? .5 * (1 - e(1 - 2 * t)) : .5 * e(2 * t - 1) + .5; }; }, { "./bounce-out": 6 }], 5: [function (t, n, o) { var e = t("./bounce-out"); n.exports = function (t) { return 1 - e(1 - t); }; }, { "./bounce-out": 6 }], 6: [function (t, n, o) { n.exports = function (t) { var n = t * t; return t < 4 / 11 ? 7.5625 * n : t < 8 / 11 ? 9.075 * n - 9.9 * t + 3.4 : t < .9 ? 4356 / 361 * n - 35442 / 1805 * t + 16061 / 1805 : 10.8 * t * t - 20.52 * t + 10.72; }; }, {}], 7: [function (t, n, o) { n.exports = function (t) { return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1); }; }, {}], 8: [function (t, n, o) { n.exports = function (t) { return 1 - Math.sqrt(1 - t * t); }; }, {}], 9: [function (t, n, o) { n.exports = function (t) { return Math.sqrt(1 - --t * t); }; }, {}], 10: [function (t, n, o) { n.exports = function (t) { return t < .5 ? 4 * t * t * t : .5 * Math.pow(2 * t - 2, 3) + 1; }; }, {}], 11: [function (t, n, o) { n.exports = function (t) { return t * t * t; }; }, {}], 12: [function (t, n, o) { n.exports = function (t) { var n = t - 1; return n * n * n + 1; }; }, {}], 13: [function (t, n, o) { n.exports = function (t) { return t < .5 ? .5 * Math.sin(13 * Math.PI / 2 * 2 * t) * Math.pow(2, 10 * (2 * t - 1)) : .5 * Math.sin(-13 * Math.PI / 2 * (2 * t - 1 + 1)) * Math.pow(2, -10 * (2 * t - 1)) + 1; }; }, {}], 14: [function (t, n, o) { n.exports = function (t) { return Math.sin(13 * t * Math.PI / 2) * Math.pow(2, 10 * (t - 1)); }; }, {}], 15: [function (t, n, o) { n.exports = function (t) { return Math.sin(-13 * (t + 1) * Math.PI / 2) * Math.pow(2, -10 * t) + 1; }; }, {}], 16: [function (t, n, o) { n.exports = function (t) { return 0 === t || 1 === t ? t : t < .5 ? .5 * Math.pow(2, 20 * t - 10) : -.5 * Math.pow(2, 10 - 20 * t) + 1; }; }, {}], 17: [function (t, n, o) { n.exports = function (t) { return 0 === t ? t : Math.pow(2, 10 * (t - 1)); }; }, {}], 18: [function (t, n, o) { n.exports = function (t) { return 1 === t ? t : 1 - Math.pow(2, -10 * t); }; }, {}], 19: [function (t, n, o) { n.exports = { backInOut: t("./back-in-out"), backIn: t("./back-in"), backOut: t("./back-out"), bounceInOut: t("./bounce-in-out"), bounceIn: t("./bounce-in"), bounceOut: t("./bounce-out"), circInOut: t("./circ-in-out"), circIn: t("./circ-in"), circOut: t("./circ-out"), cubicInOut: t("./cubic-in-out"), cubicIn: t("./cubic-in"), cubicOut: t("./cubic-out"), elasticInOut: t("./elastic-in-out"), elasticIn: t("./elastic-in"), elasticOut: t("./elastic-out"), expoInOut: t("./expo-in-out"), expoIn: t("./expo-in"), expoOut: t("./expo-out"), linear: t("./linear"), quadInOut: t("./quad-in-out"), quadIn: t("./quad-in"), quadOut: t("./quad-out"), quartInOut: t("./quart-in-out"), quartIn: t("./quart-in"), quartOut: t("./quart-out"), quintInOut: t("./quint-in-out"), quintIn: t("./quint-in"), quintOut: t("./quint-out"), sineInOut: t("./sine-in-out"), sineIn: t("./sine-in"), sineOut: t("./sine-out") }; }, { "./back-in": 2, "./back-in-out": 1, "./back-out": 3, "./bounce-in": 5, "./bounce-in-out": 4, "./bounce-out": 6, "./circ-in": 8, "./circ-in-out": 7, "./circ-out": 9, "./cubic-in": 11, "./cubic-in-out": 10, "./cubic-out": 12, "./elastic-in": 14, "./elastic-in-out": 13, "./elastic-out": 15, "./expo-in": 17, "./expo-in-out": 16, "./expo-out": 18, "./linear": 20, "./quad-in": 22, "./quad-in-out": 21, "./quad-out": 23, "./quart-in": 25, "./quart-in-out": 24, "./quart-out": 26, "./quint-in": 28, "./quint-in-out": 27, "./quint-out": 29, "./sine-in": 31, "./sine-in-out": 30, "./sine-out": 32 }], 20: [function (t, n, o) { n.exports = function (t) { return t; }; }, {}], 21: [function (t, n, o) { n.exports = function (t) { return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1); }; }, {}], 22: [function (t, n, o) { n.exports = function (t) { return t * t; }; }, {}], 23: [function (t, n, o) { n.exports = function (t) { return -t * (t - 2); }; }, {}], 24: [function (t, n, o) { n.exports = function (t) { return t < .5 ? 8 * Math.pow(t, 4) : -8 * Math.pow(t - 1, 4) + 1; }; }, {}], 25: [function (t, n, o) { n.exports = function (t) { return Math.pow(t, 4); }; }, {}], 26: [function (t, n, o) { n.exports = function (t) { return Math.pow(t - 1, 3) * (1 - t) + 1; }; }, {}], 27: [function (t, n, o) { n.exports = function (t) { return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2); }; }, {}], 28: [function (t, n, o) { n.exports = function (t) { return t * t * t * t * t; }; }, {}], 29: [function (t, n, o) { n.exports = function (t) { return --t * t * t * t * t + 1; }; }, {}], 30: [function (t, n, o) { n.exports = function (t) { return -.5 * (Math.cos(Math.PI * t) - 1); }; }, {}], 31: [function (t, n, o) { n.exports = function (t) { var n = Math.cos(t * Math.PI * .5); return Math.abs(n) < 1e-14 ? 1 : 1 - n; }; }, {}], 32: [function (t, n, o) { n.exports = function (t) { return Math.sin(t * Math.PI / 2); }; }, {}], 33: [function (t, n, o) { n.exports = function (t, n) { n || (n = [0, ""]), t = String(t); var o = parseFloat(t, 10); return n[0] = o, n[1] = t.match(/[\d.\-\+]*\s*(.*)/)[1] || "", n; }; }, {}], 34: [function (t, n, o) { Object.defineProperty(o, "__esModule", { value: !0 }), o.create = void 0; var e = r(t("parse-unit")), u = r(t("eases")); function r(t) { return t && t.__esModule ? t : { default: t }; } function i(t) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t; } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t; })(t); } var c, f, a, s = [], p = "undefined" != typeof window, l = function () { return (document.scrollingElement || document.documentElement).scrollTop; }, d = function (t) { return !1 === isNaN((0, e.default)(t)[0]); }, m = function (t) { var n = (0, e.default)(t); return { value: n[0], unit: n[1] }; }, b = function (t) { return null !== String(t).match(/^[a-z]+-[a-z]+$/); }, h = function (t, n) { var o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : l(), e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : window.innerHeight || window.outerHeight, r = n.getBoundingClientRect(), u = t.match(/^[a-z]+/)[0], i = t.match(/[a-z]+$/)[0], c = 0; return "top" === i && (c -= 0), "middle" === i && (c -= e / 2), "bottom" === i && (c -= e), "top" === u && (c += r.top + o), "middle" === u && (c += r.top + o + r.height / 2), "bottom" === u && (c += r.top + o + r.height), "".concat(c, "px"); }, w = function (t) { var n, o, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : l(), f = t.getData(), r = f.to.value - f.from.value, u = (e - f.from.value) / (r / 100), a = Math.min(Math.max(u, 0), 100), i = (n = f.direct, o = { global: document.documentElement, elem: f.elem, direct: f.direct }, !0 === n ? o.elem : n instanceof HTMLElement == 1 ? o.direct : o.global), c = Object.keys(f.props).reduce(function (t, n) { var o = f.props[n], e = o.from.unit || o.to.unit, r = o.from.value - o.to.value, u = o.timing(a / 100), i = o.from.value - r * u, c = Math.round(1e4 * i) / 1e4; return t[n] = c + e, t; }, {}), s = u < 0 || 100 < u; return !0 === (0 <= u && u <= 100) && f.inside(t, u, c), !0 === s && f.outside(t, u, c), { elem: i, props: c }; }, v = function (e, r) { Object.keys(r).forEach(function (t) { return n = e, o = { key: t, value: r[t] }, void n.style.setProperty(o.key, o.value); var n, o; }); }; o.create = function (t) { var n = null, o = !1, e = { isActive: function () { return o; }, getData: function () { return n; }, calculate: function () { n = function () { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}; if (null == (e = Object.assign({}, e)).inside && (e.inside = function () { }), null == e.outside && (e.outside = function () { }), null == e.direct && (e.direct = !1), null == e.track && (e.track = !0), null == e.props && (e.props = {}), null == e.from)
                    throw new Error("Missing property `from`"); if (null == e.to)
                    throw new Error("Missing property `to`"); if ("function" != typeof e.inside)
                    throw new Error("Property `inside` must be undefined or a function"); if ("function" != typeof e.outside)
                    throw new Error("Property `outside` must be undefined or a function"); if ("boolean" != typeof e.direct && e.direct instanceof HTMLElement == 0)
                    throw new Error("Property `direct` must be undefined, a boolean or a DOM element/node"); if (!0 === e.direct && null == e.elem)
                    throw new Error("Property `elem` is required when `direct` is true"); if ("boolean" != typeof e.track)
                    throw new Error("Property `track` must be undefined or a boolean"); if ("object" !== i(e.props))
                    throw new Error("Property `props` must be undefined or an object"); if (null == e.elem) {
                    if (!1 === d(e.from))
                        throw new Error("Property `from` must be a absolute value when no `elem` has been provided");
                    if (!1 === d(e.to))
                        throw new Error("Property `to` must be a absolute value when no `elem` has been provided");
                }
                else
                    !0 === b(e.from) && (e.from = h(e.from, e.elem)), !0 === b(e.to) && (e.to = h(e.to, e.elem)); return e.from = m(e.from), e.to = m(e.to), e.props = Object.keys(e.props).reduce(function (t, n) { var o = Object.assign({}, e.props[n]); if (!1 === d(o.from))
                    throw new Error("Property `from` of prop must be a absolute value"); if (!1 === d(o.to))
                    throw new Error("Property `from` of prop must be a absolute value"); if (o.from = m(o.from), o.to = m(o.to), null == o.timing && (o.timing = u.default.linear), "string" != typeof o.timing && "function" != typeof o.timing)
                    throw new Error("Property `timing` of prop must be undefined, a string or a function"); if ("string" == typeof o.timing && null == u.default[o.timing])
                    throw new Error("Unknown timing for property `timing` of prop"); return "string" == typeof o.timing && (o.timing = u.default[o.timing]), t[n] = o, t; }, {}), e; }(t); }, update: function () { var t = w(e), n = t.elem, o = t.props; return v(n, o), o; }, start: function () { o = !0; }, stop: function () { o = !1; }, destroy: function () { s[r] = void 0; } }, r = s.push(e) - 1; return e.calculate(), e; }, !0 === p ? (!function t(n, o) { var e = function () { requestAnimationFrame(function () { return t(n, o); }); }, r = s.filter(function (t) { return null != t && t.isActive(); }); if (0 === r.length)
                return e(); var u = l(); if (o === u)
                return e(); o = u, r.map(function (t) { return w(t, u); }).forEach(function (t) { var n = t.elem, o = t.props; return v(n, o); }), e(); }(), window.addEventListener("resize", (c = function () { s.filter(function (t) { return null != t && t.getData().track; }).forEach(function (t) { t.calculate(), t.update(); }); }, f = 50, a = null, function () { for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
                n[o] = arguments[o]; clearTimeout(a), a = setTimeout(function () { return c.apply(void 0, n); }, f); }))) : console.warn("basicScroll is not executing because you are using it in an environment without a `window` object"); }, { eases: 19, "parse-unit": 33 }] }, {}, [34])(34); });
});
var basicScroll = unwrapExports(basicScroll_min);
var ParallaxCss = "stellar-parallax{display:grid;overflow:hidden;position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;contain:content}";
var Parallax = /** @class */ (function () {
    function Parallax(hostRef) {
        registerInstance(this, hostRef);
        this.center = false;
        this.horizontal = false;
        this.easeBoxes = [];
    }
    Parallax.prototype.componentWillLoad = function () {
        var _this = this;
        document.querySelectorAll('stellar-parallax-section').forEach(function (elem) {
            if (basicScroll) {
                _this.easeBoxes.push(basicScroll.create({
                    elem: elem,
                    from: 'top-bottom',
                    to: 'bottom-top',
                    direct: true,
                    props: {
                        '--ty': {
                            from: -2 * elem.speed + "%",
                            to: 2 * elem.speed + "%"
                        }
                    }
                }));
            }
        });
        this.easeBoxes.forEach(function (instance) {
            instance.start();
        });
        window.onresize = function () {
            _this.easeBoxes.forEach(function (instance) {
                instance.calculate();
                instance.update();
            });
        };
    };
    Parallax.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(Parallax.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parallax, "style", {
        get: function () { return ParallaxCss; },
        enumerable: true,
        configurable: true
    });
    return Parallax;
}());
var ParallaxSectionCss = "stellar-parallax-section{grid-area:1/1;-webkit-transform:translateY(var(--ty));transform:translateY(var(--ty));will-change:transform;contain:content}stellar-parallax-section.double{-webkit-transform:translateY(var(--ty)) scale(1.125);transform:translateY(var(--ty)) scale(1.125)}";
var ParallaxSection = /** @class */ (function () {
    function ParallaxSection(hostRef) {
        registerInstance(this, hostRef);
        this.speed = 1;
    }
    Object.defineProperty(ParallaxSection, "style", {
        get: function () { return ParallaxSectionCss; },
        enumerable: true,
        configurable: true
    });
    return ParallaxSection;
}());
var pluralize = createCommonjsModule(function (module, exports) {
    /* global define */
    (function (root, pluralize) {
        /* istanbul ignore else */
        if (typeof commonjsRequire === 'function' && 'object' === 'object' && 'object' === 'object') {
            // Node.
            module.exports = pluralize();
        }
        else {
            // Browser global.
            root.pluralize = pluralize();
        }
    })(commonjsGlobal, function () {
        // Rule storage - pluralize and singularize need to be run sequentially,
        // while other rules can be optimized using an object for instant lookups.
        var pluralRules = [];
        var singularRules = [];
        var uncountables = {};
        var irregularPlurals = {};
        var irregularSingles = {};
        /**
         * Sanitize a pluralization rule to a usable regular expression.
         *
         * @param  {(RegExp|string)} rule
         * @return {RegExp}
         */
        function sanitizeRule(rule) {
            if (typeof rule === 'string') {
                return new RegExp('^' + rule + '$', 'i');
            }
            return rule;
        }
        /**
         * Pass in a word token to produce a function that can replicate the case on
         * another word.
         *
         * @param  {string}   word
         * @param  {string}   token
         * @return {Function}
         */
        function restoreCase(word, token) {
            // Tokens are an exact match.
            if (word === token)
                return token;
            // Lower cased words. E.g. "hello".
            if (word === word.toLowerCase())
                return token.toLowerCase();
            // Upper cased words. E.g. "WHISKY".
            if (word === word.toUpperCase())
                return token.toUpperCase();
            // Title cased words. E.g. "Title".
            if (word[0] === word[0].toUpperCase()) {
                return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
            }
            // Lower cased words. E.g. "test".
            return token.toLowerCase();
        }
        /**
         * Interpolate a regexp string.
         *
         * @param  {string} str
         * @param  {Array}  args
         * @return {string}
         */
        function interpolate(str, args) {
            return str.replace(/\$(\d{1,2})/g, function (match, index) {
                return args[index] || '';
            });
        }
        /**
         * Replace a word using a rule.
         *
         * @param  {string} word
         * @param  {Array}  rule
         * @return {string}
         */
        function replace(word, rule) {
            return word.replace(rule[0], function (match, index) {
                var result = interpolate(rule[1], arguments);
                if (match === '') {
                    return restoreCase(word[index - 1], result);
                }
                return restoreCase(match, result);
            });
        }
        /**
         * Sanitize a word by passing in the word and sanitization rules.
         *
         * @param  {string}   token
         * @param  {string}   word
         * @param  {Array}    rules
         * @return {string}
         */
        function sanitizeWord(token, word, rules) {
            // Empty string or doesn't need fixing.
            if (!token.length || uncountables.hasOwnProperty(token)) {
                return word;
            }
            var len = rules.length;
            // Iterate over the sanitization rules and use the first one to match.
            while (len--) {
                var rule = rules[len];
                if (rule[0].test(word))
                    return replace(word, rule);
            }
            return word;
        }
        /**
         * Replace a word with the updated word.
         *
         * @param  {Object}   replaceMap
         * @param  {Object}   keepMap
         * @param  {Array}    rules
         * @return {Function}
         */
        function replaceWord(replaceMap, keepMap, rules) {
            return function (word) {
                // Get the correct token and case restoration functions.
                var token = word.toLowerCase();
                // Check against the keep object map.
                if (keepMap.hasOwnProperty(token)) {
                    return restoreCase(word, token);
                }
                // Check against the replacement map for a direct word replacement.
                if (replaceMap.hasOwnProperty(token)) {
                    return restoreCase(word, replaceMap[token]);
                }
                // Run all the rules against the word.
                return sanitizeWord(token, word, rules);
            };
        }
        /**
         * Check if a word is part of the map.
         */
        function checkWord(replaceMap, keepMap, rules, bool) {
            return function (word) {
                var token = word.toLowerCase();
                if (keepMap.hasOwnProperty(token))
                    return true;
                if (replaceMap.hasOwnProperty(token))
                    return false;
                return sanitizeWord(token, token, rules) === token;
            };
        }
        /**
         * Pluralize or singularize a word based on the passed in count.
         *
         * @param  {string}  word      The word to pluralize
         * @param  {number}  count     How many of the word exist
         * @param  {boolean} inclusive Whether to prefix with the number (e.g. 3 ducks)
         * @return {string}
         */
        function pluralize(word, count, inclusive) {
            var pluralized = count === 1
                ? pluralize.singular(word) : pluralize.plural(word);
            return (inclusive ? count + ' ' : '') + pluralized;
        }
        /**
         * Pluralize a word.
         *
         * @type {Function}
         */
        pluralize.plural = replaceWord(irregularSingles, irregularPlurals, pluralRules);
        /**
         * Check if a word is plural.
         *
         * @type {Function}
         */
        pluralize.isPlural = checkWord(irregularSingles, irregularPlurals, pluralRules);
        /**
         * Singularize a word.
         *
         * @type {Function}
         */
        pluralize.singular = replaceWord(irregularPlurals, irregularSingles, singularRules);
        /**
         * Check if a word is singular.
         *
         * @type {Function}
         */
        pluralize.isSingular = checkWord(irregularPlurals, irregularSingles, singularRules);
        /**
         * Add a pluralization rule to the collection.
         *
         * @param {(string|RegExp)} rule
         * @param {string}          replacement
         */
        pluralize.addPluralRule = function (rule, replacement) {
            pluralRules.push([sanitizeRule(rule), replacement]);
        };
        /**
         * Add a singularization rule to the collection.
         *
         * @param {(string|RegExp)} rule
         * @param {string}          replacement
         */
        pluralize.addSingularRule = function (rule, replacement) {
            singularRules.push([sanitizeRule(rule), replacement]);
        };
        /**
         * Add an uncountable word rule.
         *
         * @param {(string|RegExp)} word
         */
        pluralize.addUncountableRule = function (word) {
            if (typeof word === 'string') {
                uncountables[word.toLowerCase()] = true;
                return;
            }
            // Set singular and plural references for the word.
            pluralize.addPluralRule(word, '$0');
            pluralize.addSingularRule(word, '$0');
        };
        /**
         * Add an irregular word definition.
         *
         * @param {string} single
         * @param {string} plural
         */
        pluralize.addIrregularRule = function (single, plural) {
            plural = plural.toLowerCase();
            single = single.toLowerCase();
            irregularSingles[single] = plural;
            irregularPlurals[plural] = single;
        };
        /**
         * Irregular rules.
         */
        [
            // Pronouns.
            ['I', 'we'],
            ['me', 'us'],
            ['he', 'they'],
            ['she', 'they'],
            ['them', 'them'],
            ['myself', 'ourselves'],
            ['yourself', 'yourselves'],
            ['itself', 'themselves'],
            ['herself', 'themselves'],
            ['himself', 'themselves'],
            ['themself', 'themselves'],
            ['is', 'are'],
            ['was', 'were'],
            ['has', 'have'],
            ['this', 'these'],
            ['that', 'those'],
            // Words ending in with a consonant and `o`.
            ['echo', 'echoes'],
            ['dingo', 'dingoes'],
            ['volcano', 'volcanoes'],
            ['tornado', 'tornadoes'],
            ['torpedo', 'torpedoes'],
            // Ends with `us`.
            ['genus', 'genera'],
            ['viscus', 'viscera'],
            // Ends with `ma`.
            ['stigma', 'stigmata'],
            ['stoma', 'stomata'],
            ['dogma', 'dogmata'],
            ['lemma', 'lemmata'],
            ['schema', 'schemata'],
            ['anathema', 'anathemata'],
            // Other irregular rules.
            ['ox', 'oxen'],
            ['axe', 'axes'],
            ['die', 'dice'],
            ['yes', 'yeses'],
            ['foot', 'feet'],
            ['eave', 'eaves'],
            ['goose', 'geese'],
            ['tooth', 'teeth'],
            ['quiz', 'quizzes'],
            ['human', 'humans'],
            ['proof', 'proofs'],
            ['carve', 'carves'],
            ['valve', 'valves'],
            ['looey', 'looies'],
            ['thief', 'thieves'],
            ['groove', 'grooves'],
            ['pickaxe', 'pickaxes'],
            ['passerby', 'passersby']
        ].forEach(function (rule) {
            return pluralize.addIrregularRule(rule[0], rule[1]);
        });
        /**
         * Pluralization rules.
         */
        [
            [/s?$/i, 's'],
            [/[^\u0000-\u007F]$/i, '$0'],
            [/([^aeiou]ese)$/i, '$1'],
            [/(ax|test)is$/i, '$1es'],
            [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, '$1es'],
            [/(e[mn]u)s?$/i, '$1s'],
            [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, '$1'],
            [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'],
            [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
            [/(seraph|cherub)(?:im)?$/i, '$1im'],
            [/(her|at|gr)o$/i, '$1oes'],
            [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'],
            [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'],
            [/sis$/i, 'ses'],
            [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
            [/([^aeiouy]|qu)y$/i, '$1ies'],
            [/([^ch][ieo][ln])ey$/i, '$1ies'],
            [/(x|ch|ss|sh|zz)$/i, '$1es'],
            [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
            [/\b((?:tit)?m|l)(?:ice|ouse)$/i, '$1ice'],
            [/(pe)(?:rson|ople)$/i, '$1ople'],
            [/(child)(?:ren)?$/i, '$1ren'],
            [/eaux$/i, '$0'],
            [/m[ae]n$/i, 'men'],
            ['thou', 'you']
        ].forEach(function (rule) {
            return pluralize.addPluralRule(rule[0], rule[1]);
        });
        /**
         * Singularization rules.
         */
        [
            [/s$/i, ''],
            [/(ss)$/i, '$1'],
            [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
            [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
            [/ies$/i, 'y'],
            [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, '$1ie'],
            [/\b(mon|smil)ies$/i, '$1ey'],
            [/\b((?:tit)?m|l)ice$/i, '$1ouse'],
            [/(seraph|cherub)im$/i, '$1'],
            [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, '$1'],
            [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, '$1sis'],
            [/(movie|twelve|abuse|e[mn]u)s$/i, '$1'],
            [/(test)(?:is|es)$/i, '$1is'],
            [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'],
            [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'],
            [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'],
            [/(alumn|alg|vertebr)ae$/i, '$1a'],
            [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
            [/(matr|append)ices$/i, '$1ix'],
            [/(pe)(rson|ople)$/i, '$1rson'],
            [/(child)ren$/i, '$1'],
            [/(eau)x?$/i, '$1'],
            [/men$/i, 'man']
        ].forEach(function (rule) {
            return pluralize.addSingularRule(rule[0], rule[1]);
        });
        /**
         * Uncountable rules.
         */
        [
            // Singular words with no plurals.
            'adulthood',
            'advice',
            'agenda',
            'aid',
            'aircraft',
            'alcohol',
            'ammo',
            'analytics',
            'anime',
            'athletics',
            'audio',
            'bison',
            'blood',
            'bream',
            'buffalo',
            'butter',
            'carp',
            'cash',
            'chassis',
            'chess',
            'clothing',
            'cod',
            'commerce',
            'cooperation',
            'corps',
            'debris',
            'diabetes',
            'digestion',
            'elk',
            'energy',
            'equipment',
            'excretion',
            'expertise',
            'firmware',
            'flounder',
            'fun',
            'gallows',
            'garbage',
            'graffiti',
            'hardware',
            'headquarters',
            'health',
            'herpes',
            'highjinks',
            'homework',
            'housework',
            'information',
            'jeans',
            'justice',
            'kudos',
            'labour',
            'literature',
            'machinery',
            'mackerel',
            'mail',
            'media',
            'mews',
            'moose',
            'music',
            'mud',
            'manga',
            'news',
            'only',
            'personnel',
            'pike',
            'plankton',
            'pliers',
            'police',
            'pollution',
            'premises',
            'rain',
            'research',
            'rice',
            'salmon',
            'scissors',
            'series',
            'sewage',
            'shambles',
            'shrimp',
            'software',
            'species',
            'staff',
            'swine',
            'tennis',
            'traffic',
            'transportation',
            'trout',
            'tuna',
            'wealth',
            'welfare',
            'whiting',
            'wildebeest',
            'wildlife',
            'you',
            /pok[eé]mon$/i,
            // Regexes.
            /[^aeiou]ese$/i,
            /deer$/i,
            /fish$/i,
            /measles$/i,
            /o[iu]s$/i,
            /pox$/i,
            /sheep$/i
        ].forEach(pluralize.addUncountableRule);
        return pluralize;
    });
});
var SelectCss = ":host{contain:content;--color:var(--black);--border-radius:0.3rem;--item-size:5rem;--background:var(--white);--border-color:var(--gray2);--initial-height:calc(var(--item-size) * 6);-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;font-family:inherit;position:relative}:host(:not(.hydrated)){display:none}:host stellar-item,:host ::slotted(stellar-item){--item-size:5rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}:host ::-moz-selection,:host *::-moz-selection{background:var(--theme-base2) !important}:host ::selection,:host *::selection{background:var(--theme-base2) !important}:host *,:host *::after,:host *::before{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:inherit}:host .select{display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column}:host .select-title{cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;border:1px solid var(--border-color);border-radius:var(--border-radius);padding:0;width:100%;height:var(--item-size);overflow:hidden;line-height:1.4;color:var(--color);font-weight:500;background:var(--background)}:host([focused]) .select-title,:host .select-title:focus,:host .wrapper:hover .select-title{border-color:var(--theme-base5);-webkit-box-shadow:0 0 0 1px var(--theme-base5);box-shadow:0 0 0 1px var(--theme-base5)}:host .select-title stellar-item{background:var(--background) !important;color:var(--color) !important}:host .select-title input{display:none}:host .select .loading{position:absolute;top:1px;left:1px;right:1px;bottom:1px;border-radius:var(--border-radius);height:calc(100% - 2px);width:calc(100% - 2px);z-index:3;display:grid;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;grid-template-columns:auto auto;grid-gap:1rem;color:var(--theme-base7);background:rgba(255, 255, 255, 1);-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.0625s;animation-duration:.0625s;-webkit-animation-fill-mode:both;animation-fill-mode:both}:host([dark]) .select .loading{background:var(--theme-base9);color:var(--theme-base5)}:host .select .loading ion-icon{font-size:1.6rem}:host .select-title ion-icon{position:absolute;right:2rem;-webkit-transition:-webkit-transform 100ms var(--ease) 0s;transition:-webkit-transform 100ms var(--ease) 0s;transition:transform 100ms var(--ease) 0s;transition:transform 100ms var(--ease) 0s, -webkit-transform 100ms var(--ease) 0s;font-size:1.6rem;color:var(--theme-base5);background:transparent;border:0}:host .select-title .button ion-icon{display:none}:host([open]) .select-title ion-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host .select-list{display:-ms-flexbox;display:flex;position:relative;top:0;left:0;-ms-flex-direction:column;flex-direction:column;-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transition:opacity 250ms var(--ease) 350ms, max-height 200ms var(--ease) 350ms, -webkit-transform 200ms var(--ease) 350ms;transition:opacity 250ms var(--ease) 350ms, max-height 200ms var(--ease) 350ms, -webkit-transform 200ms var(--ease) 350ms;transition:transform 200ms var(--ease) 350ms, opacity 250ms var(--ease) 350ms, max-height 200ms var(--ease) 350ms;transition:transform 200ms var(--ease) 350ms, opacity 250ms var(--ease) 350ms, max-height 200ms var(--ease) 350ms, -webkit-transform 200ms var(--ease) 350ms;opacity:0;z-index:3;background:var(--background);width:100%;max-height:0rem;overflow-x:hidden;overflow-y:hidden;color:var(--theme-base5);border:1px solid var(--border-color);pointer-events:none;-webkit-box-shadow:0 1px 2px rgba(0,0,0,0.15);box-shadow:0 1px 2px rgba(0,0,0,0.15);border-radius:var(--border-radius);-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}:host .select-list ::slotted(*){scroll-snap-align:start}:host([resize]) .select-list{resize:both}:host([resize=\"full\"]) .select-list{max-width:200vw !important;height:var(--initial-height);max-height:200vh !important}:host([resize]) .select-list::after{content:\"\";display:block;height:1rem !important;max-height:1rem !important;min-height:1rem !important;width:1rem;bottom:0;right:0;margin-left:calc(100% - 1rem);cursor:se-resize;position:-webkit-sticky;position:sticky;background:-moz-linear-gradient(-45deg,  rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);background:-webkit-linear-gradient(-45deg,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);background:linear-gradient(135deg,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=1 )}:host .select-list ::slotted(stellar-item){color:var(--color);border-bottom:1px solid var(--border-color)}:host .select-list ::slotted(stellar-item:last-child){border-bottom:none}:host .label-wrapper{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}:host .label-wrapper stellar-label{margin-bottom:calc(var(--ms-1) + 1px);height:var(--ms0);line-height:1.3}:host .select-list-footer{-ms-flex-order:3;order:3;height:4rem;border-top:1px solid var(--theme-base5)}stellar-input .validation{margin-bottom:0;color:var(--red5);font-size:var(--complementing-font-size);font-weight:500}stellar-input .validation span{display:block;padding:1.4rem 0;line-height:1.4}stellar-input .validation span+span{border-top:1px solid var(--border-color)}:host([open]) .select-list,:host .select-list:focus-within{-webkit-transition:opacity 250ms var(--ease) 0ms, max-height 200ms var(--ease) 0ms, -webkit-transform 200ms var(--ease) 0ms;transition:opacity 250ms var(--ease) 0ms, max-height 200ms var(--ease) 0ms, -webkit-transform 200ms var(--ease) 0ms;transition:transform 200ms var(--ease) 0ms, opacity 250ms var(--ease) 0ms, max-height 200ms var(--ease) 0ms;transition:transform 200ms var(--ease) 0ms, opacity 250ms var(--ease) 0ms, max-height 200ms var(--ease) 0ms, -webkit-transform 200ms var(--ease) 0ms;opacity:1;pointer-events:initial;max-height:calc(var(--item-size) * 6.2);overflow-y:auto;border:1px solid var(--border-color)}:host([size=\"tiny\"]) .label-wrapper stellar-label{margin-bottom:var(--ms-2);height:var(--ms-1)}:host([size=\"tiny\"]) .select-title ion-icon{right:1rem}:host([size=\"tiny\"]),:host([size=\"tiny\"]) stellar-item,:host([size=\"tiny\"]) ::slotted(stellar-item){--font-size:var(--ms-2)}:host([size=\"small\"]) .label-wrapper stellar-label{margin-bottom:var(--ms-2);height:var(--ms0)}:host([size=\"small\"]) .select-title ion-icon{right:1rem}:host([size=\"small\"]) .label{font-size:0.75rem}:host([size=\"small\"]),:host([size=\"small\"]) stellar-item,:host([size=\"small\"]) ::slotted(stellar-item){--font-size:var(--ms-1)}:host .select-title{height:var(--item-size)}:host .select-title ion-icon{right:1rem}:host,:host stellar-item,:host ::slotted(stellar-item){--font-size:var(--ms0);--item-size:calc(var(--font-size) * 3.75)}:host([size=\"medium\"]) .label-wrapper stellar-label{margin-bottom:var(--ms0);height:var(--ms1)}:host([size=\"medium\"]) .select-title ion-icon{right:1rem}:host([size=\"medium\"]) .label{font-size:0.75rem}:host([size=\"medium\"]),:host([size=\"medium\"]) stellar-item,:host([size=\"medium\"]) ::slotted(stellar-item){--font-size:var(--ms1)}:host([size=\"large\"]) .label-wrapper stellar-label{margin-bottom:var(--ms-2);height:var(--ms3)}:host([size=\"large\"]) .select-title ion-icon{right:1rem}:host([size=\"large\"]) .label{font-size:0.75rem}:host([size=\"large\"]),:host([size=\"large\"]) stellar-item,:host([size=\"large\"]) ::slotted(stellar-item){--font-size:var(--ms2)}:host([overlay]) .select-list{position:absolute;top:calc(var(--item-size) - 1px)}:host stellar-tooltip{cursor:pointer}:host stellar-item stellar-tooltip{display:none}:host .clear-button{--color:var(--red5);--active-color:var(--red7);-ms-flex-item-align:baseline;align-self:baseline}:host([dark]){--background:var(--black-alt);--color:var(--white);--border-color:var(--gray9)}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}";
var Select = /** @class */ (function () {
    function class_4(hostRef) {
        registerInstance(this, hostRef);
        this.name = "select";
        this.placeholder = "Choose something...";
        this.required = false;
        this.open = false;
        this.verbiage = "selection";
        this.valueLabel = undefined;
        this.loading = false;
        this.fit = false;
        this.wrap = false;
        this.resize = false;
        this.autoSelectFirst = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        this.blur = 0;
        this.clear_confirm = false;
        this.update = createEvent(this, "update", 7);
    }
    class_4.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.multiple) {
                            this.value = [];
                        }
                        return [4 /*yield*/, this.option_elements()];
                    case 1:
                        options = _a.sent();
                        // @ts-ignore
                        options.forEach(function (element) {
                            element.selectable = true;
                            element.fit = _this.fit;
                            element.wrap = _this.wrap;
                            if (_this.multiple) {
                                element.multiple = true;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    class_4.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.listen_to_values();
                this.titleItem = this.element.shadowRoot.querySelector('stellar-item[select-title]');
                if (this.default) {
                    if (typeof this.default === "object" && this.default.constructor.name === "Array") {
                        this.default.forEach(function (value) {
                            // @ts-ignore
                            _this.element.querySelector("stellar-item[value=\"" + value + "\"]").select_item({ selected: true });
                        });
                    }
                    else {
                        // @ts-ignore
                        this.element.querySelector("stellar-item[value=\"" + this.default + "\"]").select_item({ selected: true });
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    class_4.prototype.clearValue = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.clear_confirm) return [3 /*break*/, 3];
                        return [4 /*yield*/, delay$1(100)];
                    case 1:
                        _a.sent();
                        this.clear_confirm = false;
                        this.value = [];
                        return [4 /*yield*/, this.option_elements()];
                    case 2:
                        options = _a.sent();
                        Array.from(options).forEach(function (element) {
                            element.selected = false;
                        });
                        this.update.emit(this.value);
                        return [3 /*break*/, 4];
                    case 3:
                        this.clear_confirm = true;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    class_4.prototype.update_values = function () {
        return __awaiter(this, void 0, void 0, function () {
            var option_elements, values_1, options;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.multiple) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.option_elements()];
                    case 1:
                        option_elements = _a.sent();
                        values_1 = [];
                        // @ts-ignore
                        option_elements.forEach(function (option) {
                            if (!option.multiple) {
                                option.multiple = true;
                            }
                            if (option.selected) {
                                values_1.push(option.value);
                            }
                        });
                        this.value = values_1;
                        this.update.emit(this.value);
                        this.updateLanguage();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.option_elements()];
                    case 3:
                        options = _a.sent();
                        if (this.value.length === 0 && this.autoSelectFirst) {
                            this.element.querySelector('stellar-item').select_item({ selected: true });
                        }
                        Array.from(options).forEach(function (el) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        if (!el.selected) return [3 /*break*/, 2];
                                        _b = (_a = this.titleItem).apply;
                                        return [4 /*yield*/, el.data()];
                                    case 1:
                                        _b.apply(_a, [_c.sent()]);
                                        this.value = el.value;
                                        this.update.emit(this.value);
                                        this.updateLanguage();
                                        _c.label = 2;
                                    case 2:
                                        if (el.selectTitle) {
                                            this.value = el.value;
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    class_4.prototype.handleOpenChange = function () {
        // @ts-ignore
        this.element.shadowRoot.querySelector('button.select-title').focus();
    };
    class_4.prototype.handleMultipleChange = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.option_elements()];
                    case 1:
                        options = _a.sent();
                        // @ts-ignore
                        options.forEach(function (element) {
                            element.multiple = value;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    class_4.prototype.mountedHandler = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var data, option_elements, values_2, options;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = event.detail;
                        if (!this.multiple) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.option_elements()];
                    case 1:
                        option_elements = _a.sent();
                        values_2 = [];
                        // @ts-ignore
                        option_elements.forEach(function (option) {
                            option.selectable = true;
                            if (_this.value && _this.value.includes(option.value) && !data.element.selected) {
                                option.selected = true;
                            }
                            if (option.selected) {
                                values_2.push(option.value);
                            }
                        });
                        this.value = values_2;
                        return [3 /*break*/, 4];
                    case 2:
                        this.value = data.element.selected ? data.element.value : this.value;
                        if (!this.value) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.option_elements()];
                    case 3:
                        options = _a.sent();
                        // @ts-ignore
                        options.forEach(function (element) {
                            element.selectable = true;
                            if (_this.value === element.value) {
                                element.selected = true;
                            }
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    class_4.prototype.selectionChangedHandler = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var data, option_elements, values_3, options, _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        data = event.detail;
                        if (!this.multiple) return [3 /*break*/, 2];
                        data.selected = !data.selected;
                        return [4 /*yield*/, this.option_elements()];
                    case 1:
                        option_elements = _c.sent();
                        values_3 = [];
                        // @ts-ignore
                        option_elements.forEach(function (option) {
                            if (_this.value && _this.value.includes(option.value) && data.value !== option.value) {
                                option.selected = true;
                            }
                            if (option.selected) {
                                values_3.push(option.value);
                            }
                        });
                        this.value = values_3;
                        this.update.emit(this.value);
                        return [3 /*break*/, 5];
                    case 2:
                        if (!!data.element.selectTitle) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.option_elements()];
                    case 3:
                        options = _c.sent();
                        // @ts-ignore
                        options.forEach(function (element) {
                            element.selected = false;
                        });
                        data.selected = true;
                        this.value = data.value;
                        this.update.emit(this.value);
                        _b = (_a = this.titleItem).apply;
                        return [4 /*yield*/, data.data()];
                    case 4:
                        _b.apply(_a, [_c.sent()]);
                        setTimeout(function () {
                            _this.open = false;
                        }, 200);
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    class_4.prototype.selectedFocusChangedHandler = function () {
        this.focused = true;
    };
    class_4.prototype.selectedBlurChangedHandler = function () {
        this.focused = false;
    };
    class_4.prototype.handleTitleFocus = function () {
        this.focused = true;
    };
    class_4.prototype.handleTitleBlur = function () {
        this.focused = false;
    };
    class_4.prototype.handleNotClick = function (e) {
        if (e.target !== this.element && !this.element.contains(e.target)) {
            if (this.open) {
                this.open = false;
            }
        }
    };
    class_4.prototype.handleEscapeKey = function (event) {
        if (event.key === "space" && this.open) {
            this.open = false;
        }
    };
    class_4.prototype.handleArrowKeys = function (ev) {
        if (ev.keyCode === 40 || ev.keyCode === 38) {
            if (this.open) {
                ev.preventDefault();
                ev.stopPropagation();
                if (ev.keyCode === 40) {
                    this.focusNextOption();
                }
                else {
                    this.focusPreviousOption();
                }
            }
        }
    };
    class_4.prototype.updateLanguage = function () {
        var language;
        var details;
        if (typeof this.value === "object") {
            if (this.value.length === 0) {
                details = pluralize(this.verbiage, this.value.length);
                if (this.placeholderInverted) {
                    language = "All " + details + " selected";
                }
                else {
                    language = "No " + details + " selected";
                }
            }
            else {
                details = pluralize(this.verbiage, this.value.length, true);
                language = details + " selected";
            }
        }
        else if (typeof this.value === "string") {
            language = this.valueLabel || this.value.toString() || "Select " + (this.verbiageAn ? "an" : "a") + " " + this.verbiage;
        }
        else {
            language = this.valueLabel || this.value;
        }
        this.language = language;
    };
    class_4.prototype.validate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        status = {
                            name: "" + this.name,
                            value: this.value,
                            valid: true,
                            errors: [],
                        };
                        this.updateLanguage();
                        if (!!this.novalidate) return [3 /*break*/, 2];
                        // @ts-ignore
                        if (!this.value) {
                            status.valid = false;
                            status.errors.push({ message: 'This field is required.' });
                        }
                        return [4 /*yield*/, this.options()];
                    case 1:
                        options = _a.sent();
                        // @ts-ignore
                        if (!options.includes(this.value)) {
                            status.valid = false;
                            status.errors.push({ message: "\"" + this.value + "\" isn't a valid option." });
                        }
                        _a.label = 2;
                    case 2:
                        this.status = status;
                        return [2 /*return*/, this.status];
                }
            });
        });
    };
    class_4.prototype.listen_to_values = function () {
        var _this = this;
        var targetNode = this.element;
        var config = {
            attributes: true,
            childList: true,
            characterData: true,
            type: true
        };
        var callback = function () {
            _this.update_values();
        };
        this.observer = new MutationObserver(callback);
        this.observer.observe(targetNode, config);
    };
    class_4.prototype.option_elements = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.element.querySelectorAll('stellar-item:not([select-title])')];
            });
        });
    };
    class_4.prototype.options = function () {
        return __awaiter(this, void 0, void 0, function () {
            var elements, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.option_elements()];
                    case 1:
                        elements = _a.sent();
                        options = [];
                        // @ts-ignore
                        elements.forEach(function (option) {
                            options.push(option.value);
                        });
                        return [2 /*return*/, options];
                }
            });
        });
    };
    class_4.prototype.focusPaths = function () {
        return __awaiter(this, void 0, void 0, function () {
            var current, next, previous, elements, first;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        current = undefined;
                        next = undefined;
                        previous = undefined;
                        return [4 /*yield*/, this.options()];
                    case 1:
                        elements = _a.sent();
                        // @ts-ignore
                        elements.forEach(function (element, index) {
                            // @ts-ignore
                            if (element.hasFocus()) {
                                previous = elements[index - 1];
                                current = element;
                                next = elements[index + 1];
                            }
                        });
                        if (!current) {
                            first = elements[0];
                            this.focusElement(first);
                            current = first;
                        }
                        return [2 /*return*/, { previous: previous, current: current, next: next }];
                }
            });
        });
    };
    class_4.prototype.focusFirstItem = function () {
        //@ts-ignore
        this.element.querySelector('.select-list stellar-item:first-of-type').focus();
    };
    class_4.prototype.focusElement = function (element) {
        element.focus();
    };
    class_4.prototype.focusNextOption = function () {
        return __awaiter(this, void 0, void 0, function () {
            var elements;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.focusPaths()];
                    case 1:
                        elements = _a.sent();
                        if (elements.next) {
                            this.focusElement(elements.next);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    class_4.prototype.focusPreviousOption = function () {
        return __awaiter(this, void 0, void 0, function () {
            var elements;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.focusPaths()];
                    case 1:
                        elements = _a.sent();
                        if (elements.previous) {
                            this.focusElement(elements.previous);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    class_4.prototype.closeOthers = function () {
        var _this = this;
        var selects = document.querySelectorAll('stellar-select[open]');
        Array.from(selects).forEach(function (s) {
            if (s !== _this.element) {
                s.open = false;
            }
        });
    };
    class_4.prototype.handleTitleClick = function () {
        this.closeOthers();
        this.open = !this.open;
    };
    class_4.prototype.renderLabel = function () {
        var _this = this;
        if (this.label) {
            return h("div", { class: "label-wrapper" }, h("stellar-label", { size: this.size, onClick: function () { _this.focusFirstItem(); } }, this.label), this.renderEmptyButton());
        }
    };
    class_4.prototype.renderErrors = function () {
        if (this.status && this.status.errors && this.status.errors.length !== 0) {
            return (h("p", { class: "validation" }, this.status.errors.map(function (error) { return h("span", null, error.message); })));
        }
    };
    class_4.prototype.renderEmptyButton = function () {
        var _this = this;
        return this.multiple && this.value && this.value.length > 0 && h("stellar-button", { class: "clear-button", tag: "button", size: this.size, ghost: true, onClick: function (e) { e.stopPropagation(); _this.clearValue(); } }, h("ion-icon", { name: "close" }), this.clear_confirm ? "Clear " + this.value.length + " selections?" : "Clear");
    };
    class_4.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "wrapper" }, this.renderLabel(), h("div", { class: "select" }, this.loading && h("div", { class: "loading" }, h("ion-icon", { name: "loading-spin" }), " ", h("p", null, "One sec...")), h("button", { type: "button", class: "select-title", onClick: function () { return _this.handleTitleClick(); }, onFocus: function () { return _this.handleTitleFocus(); }, onBlur: function () { return _this.handleTitleBlur(); } }, h("stellar-item", { fit: true, wrap: true, "select-title": true, type: "button", value: this.value ? this.value.toString() : "", tabindex: "-1", selectable: false, label: this.language, innerHTML: this.language }), h("ion-icon", { name: "arrow-down" }), this.name && h("input", { type: "text", tabindex: "-1", name: this.name.toString(), required: this.required, value: this.value })), this.tooltip && h("stellar-tooltip", { align: "bottom-left", onClick: function () { return _this.handleTitleClick(); } }, this.tooltip), h("stellar-blur", { vertical: this.blur, class: "select-list" }, h("div", { class: "select-list-header" }, h("slot", { name: "header" })), h("div", { class: "select-list-body" }, h("slot", null)), this.footer && h("div", { class: "select-list-footer" }, h("slot", { name: "footer" })))), h("stellar-label", { size: "small", underneath: true }, this.description), !this.novalidate && this.renderErrors()));
    };
    Object.defineProperty(class_4.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_4, "watchers", {
        get: function () {
            return {
                "open": ["handleOpenChange"],
                "multiple": ["handleMultipleChange"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_4, "style", {
        get: function () { return SelectCss; },
        enumerable: true,
        configurable: true
    });
    return class_4;
}());
Tunnel.injectProps(Select, ['dark']);
export { Grid as stellar_grid, Item as stellar_item, Layout as stellar_layout, Parallax as stellar_parallax, ParallaxSection as stellar_parallax_section, Select as stellar_select };
