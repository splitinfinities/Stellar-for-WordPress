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
function u(n, t) {
    for (var e, r, i = null, o = !1, u = !1, f = arguments.length; f-- > 2;)
        T.push(arguments[f]);
    for (; T.length > 0;) {
        var c = T.pop();
        if (c && void 0 !== c.pop)
            for (f = c.length; f--;)
                T.push(c[f]);
        else
            "boolean" == typeof c && (c = null), (u = "function" != typeof n) && (null == c ? c = "" : "number" == typeof c ? c = String(c) : "string" != typeof c && (u = !1)), u && o ? i[i.length - 1].vtext += c : null === i ? i = [u ? { vtext: c } : c] : i.push(u ? { vtext: c } : c), o = u;
    }
    if (null != t) {
        if (t.className && (t.class = t.className), "object" == typeof t.class) {
            for (f in t.class)
                t.class[f] && T.push(f);
            t.class = T.join(" "), T.length = 0;
        }
        null != t.key && (e = t.key), null != t.name && (r = t.name);
    }
    return "function" == typeof n ? n(t, i || [], W) : { vtag: n, vchildren: i, vtext: void 0, vattrs: t, vkey: e, vname: r, w: void 0, g: !1 };
}
function f(n) { return { vtag: n.vtag, vchildren: n.vchildren, vtext: n.vtext, vattrs: n.vattrs, vkey: n.vkey, vname: n.vname }; }
var T = [], W = { forEach: function (n, t) { n.forEach(function (n, e, r) { return t(f(n), e, r); }); }, map: function (n, t) { return n.map(function (n, e, r) { return function i(n) { return { vtag: n.vtag, vchildren: n.vchildren, vtext: n.vtext, vattrs: n.vattrs, vkey: n.vkey, vname: n.vname }; }(t(f(n), e, r)); }); } };
/*! Built with http://stenciljs.com */
var __rest = function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
            if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
    return t;
};
function defaultConsumerRender(subscribe, renderer) {
    return u("context-consumer", { subscribe: subscribe, renderer: renderer });
}
function createProviderConsumer(defaultState, consumerRender) {
    if (consumerRender === void 0) {
        consumerRender = defaultConsumerRender;
    }
    var listeners = new Map();
    var currentState = defaultState;
    function notifyConsumers() {
        listeners.forEach(updateListener);
    }
    function updateListener(fields, listener) {
        if (Array.isArray(fields)) {
            fields.slice().forEach(function (fieldName) {
                listener[fieldName] = currentState[fieldName];
            });
        }
        else {
            listener[fields] = Object.assign({}, currentState);
        }
        listener.forceUpdate();
    }
    function attachListener(propList) {
        return function (el) {
            if (listeners.has(el)) {
                return;
            }
            listeners.set(el, propList);
            updateListener(propList, el);
        };
    }
    function subscribe(el, propList) {
        attachListener(propList)(el);
        return function () {
            listeners.delete(el);
        };
    }
    var Provider = function (_b, children) {
        var state = _b.state;
        currentState = state;
        notifyConsumers();
        return children;
    };
    var Consumer = function (props, children) {
        return consumerRender(subscribe, children[0]);
    };
    function wrapConsumer(childComponent, fieldList) {
        var Child = childComponent.is;
        return function (_a) {
            var children = _a.children, props = __rest(_a, ["children"]);
            return (u(Child, Object.assign({ ref: attachListener(fieldList) }, props), children));
        };
    }
    function injectProps(childComponent, fieldList) {
        var unsubscribe = null;
        var elementRefName = Object.keys(childComponent.properties).find(function (propName) {
            return childComponent.properties[propName].elementRef == true;
        });
        if (elementRefName == undefined) {
            throw new Error("Please ensure that your Component " + childComponent.is + " has an attribute with an \"@Element\" decorator. " +
                "This is required to be able to inject properties.");
        }
        var prevComponentWillLoad = childComponent.prototype.componentWillLoad;
        childComponent.prototype.componentWillLoad = function () {
            unsubscribe = subscribe(this[elementRefName], fieldList);
            if (prevComponentWillLoad) {
                return prevComponentWillLoad.bind(this)();
            }
        };
        var prevComponentDidUnload = childComponent.prototype.componentDidUnload;
        childComponent.prototype.componentDidUnload = function () {
            unsubscribe();
            if (prevComponentDidUnload) {
                return prevComponentDidUnload.bind(this)();
            }
        };
    }
    return {
        Provider: Provider,
        Consumer: Consumer,
        wrapConsumer: wrapConsumer,
        injectProps: injectProps
    };
}
// StencilStateTunnel: ES Module
var ActiveRouter = createProviderConsumer({
    historyType: 'browser',
    location: {
        pathname: '',
        query: {},
        key: ''
    },
    titleSuffix: '',
    root: '/',
    routeViewsUpdated: function () { }
});
function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
// stencilrouter: ES Module
var Item = /** @class */ (function () {
    function Item(hostRef) {
        registerInstance(this, hostRef);
        this.type = "button";
        this.href = "#";
        this.wrap = false;
        this.fit = false;
        this.simple = false;
        this.danger = false;
        this.selected = false;
        this.multiple = false;
        this.selectable = false;
        this.focused = false;
        this.route = false;
        this.current = false;
        this.selectionChanged = createEvent(this, "selectionChanged", 7);
        this.mounted = createEvent(this, "mounted", 7);
        this.focusChanged = createEvent(this, "focusChanged", 7);
        this.blurChanged = createEvent(this, "blurChanged", 7);
    }
    Item.prototype.componentWillLoad = function () {
        this.slotted = this.element.innerHTML;
    };
    Item.prototype.componentDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.selected) {
                _this.mounted.emit(_this);
            }
        }, 10);
    };
    Item.prototype.data = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                return [2 /*return*/, {
                        size: this.size,
                        value: this.value,
                        type: this.type,
                        label: this.label,
                        danger: this.danger,
                        slotted: this.slotted
                    }];
            });
        });
    };
    Item.prototype.apply = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_c) {
                this.size = data.size;
                this.value = data.value;
                this.type = data.type;
                this.label = data.label;
                button = this.element.shadowRoot.querySelector('.button');
                button.innerHTML = data.slotted;
                return [2 /*return*/];
            });
        });
    };
    Item.prototype.setFocus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                this.focused = true;
                // @ts-ignore
                this.element.querySelector('.button').focus();
                return [2 /*return*/];
            });
        });
    };
    Item.prototype.handleClick = function (e) {
        if (this.route) {
            e.preventDefault();
            this.history.push(this.href, {});
        }
        if (!this.current) {
            this.selectionChanged.emit(this);
        }
    };
    Item.prototype.handleFocus = function () {
        if (this.current) {
            this.focusChanged.emit(this);
        }
        this.focused = true;
    };
    Item.prototype.handleBlur = function () {
        if (this.current) {
            this.blurChanged.emit(this);
        }
        this.focused = false;
    };
    Item.prototype.classes = function () {
        var classes = "";
        classes += this.selected ? "selected " : "";
        classes += this.multiple ? "multiple " : "";
        return classes;
    };
    Item.prototype.select_item = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            var event, event;
            return __generator(this, function (_c) {
                if (this.selectable) {
                    if (state) {
                        if (this.selected !== state.selected) {
                            event = new CustomEvent('click');
                            this.element.querySelector('.button').dispatchEvent(event);
                        }
                    }
                    else {
                        event = new CustomEvent('click');
                        this.element.querySelector('.button').dispatchEvent(event);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    Item.prototype.render = function () {
        var _this = this;
        return (h(this.type, { class: "button", type: "button", href: this.href, url: this.href, tabindex: "0", value: this.value, title: this.label, onClick: function (e) { return _this.handleClick(e); }, onBlur: function () { return _this.handleBlur(); }, onFocus: function () { return _this.handleFocus(); } }, h("slot", null), (this.selected || this.multiple) && h("stellar-asset", { class: this.classes(), name: "checkmark", block: true })));
    };
    Object.defineProperty(Item.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--item-size:2.356em;--font-size:1.4rem;display:block;width:100%;height:var(--item-size);color:var(--theme-base9);font-family:inherit;visibility:visible!important;font-size:var(--font-size);text-align:left;position:relative}:host([fit]){--item-size:auto}:host([fit]) a.button,:host([fit]) button.button,:host([fit]) stencil-route-link a{padding:1.4rem 0 1.4rem 1.4rem}:host([wrap]) .button{white-space:normal;text-align:left}:host([danger]) .button{color:var(--red5)}:host a.button,:host button.button,:host stencil-route-link a{text-decoration:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;outline:0;border:0;background:transparent;padding:0 0 0 .6rem;width:100%;height:calc(var(--item-size) - 1px);color:currentColor;font-weight:500;font-size:inherit}:host stencil-route-link{padding:0}:host .button a{color:inherit;background:inherit;text-decoration:none}:host .button ::slotted(stellar-avatar){margin-right:.5rem;background:var(--theme-base9);visibility:visible!important;display:block!important;width:2rem;height:2rem}:host .button stellar-tag{margin:auto .5rem auto auto}:host .button stellar-asset{margin-left:1rem}:host .button span{margin:auto auto auto 0;width:100%;text-overflow:ellipsis;white-space:nowrap}:host([size=small]) .button{padding:0 1rem;height:3rem}:host .selected{-webkit-animation:fadeInLeft .2s ease;animation:fadeInLeft .2s ease;font-size:var(--item-size);margin-left:auto!important;background:transparent;color:var(--theme-base5);height:calc(var(--item-size) - 1px)}:host(:focus) .selected,:host(:focus-within) .selected,:host(:hover) .selected{color:#fff}:host([fit]) .selected{position:absolute;top:.625rem;right:.25rem;font-size:3rem}:host([fit][multiple]) .selected{right:auto}:host(:focus-within),:host(:hover),:host .button:focus,:host .button:hover{background:var(--theme-base1)}:host(.current){background:#fff}:host([danger]) .button:focus,:host([danger]) .button:hover{background:var(--red5);color:#fff}:host([simple]) .button{background:#fff!important}:host(.current) stellar-asset{display:none}:host stellar-asset.multiple{border:1px solid var(--border-color);background:var(--background);border-radius:4px;font-size:2.5rem;width:2.5rem;height:2.5rem;margin:0 0 0 auto;left:-1rem;position:relative;color:transparent}:host stellar-asset.multiple.selected{color:var(--theme-base5)}:host(.current) .button:focus,:host(.current) .button:hover,:host(.current:focus-within),:host(.current:hover){background:transparent}:host-context(.dark-mode):host(:focus-within),:host-context(.dark-mode):host(:hover),:host-context(.dark-mode):host .button:focus,:host-context(.dark-mode):host .button:hover{background:var(--theme-base8)}:host-context(.dark-mode):host(.current) .button:focus,:host-context(.dark-mode):host(.current) .button:hover,:host-context(.dark-mode):host(.current:focus-within),:host-context(.dark-mode):host(.current:hover){background:transparent}"; },
        enumerable: true,
        configurable: true
    });
    return Item;
}());
if (injectHistory) {
    injectHistory(Item);
}
export { Item as stellar_item };
