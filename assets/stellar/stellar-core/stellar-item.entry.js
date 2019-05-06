import { c as registerInstance, h as createEvent, d as h, f as getElement } from './stellar-core-d63b686e.js';

var global$1 = (typeof global !== "undefined" ? global :
    typeof self !== "undefined" ? self :
        typeof window !== "undefined" ? window : {});
function u(n, t) { for (var e, r, i = null, o = !1, u = !1, f = arguments.length; f-- > 2;)
    T.push(arguments[f]); for (; T.length > 0;) {
    var c = T.pop();
    if (c && void 0 !== c.pop)
        for (f = c.length; f--;)
            T.push(c[f]);
    else
        "boolean" == typeof c && (c = null), (u = "function" != typeof n) && (null == c ? c = "" : "number" == typeof c ? c = String(c) : "string" != typeof c && (u = !1)), u && o ? i[i.length - 1].vtext += c : null === i ? i = [u ? { vtext: c } : c] : i.push(u ? { vtext: c } : c), o = u;
} if (null != t) {
    if (t.className && (t.class = t.className), "object" == typeof t.class) {
        for (f in t.class)
            t.class[f] && T.push(f);
        t.class = T.join(" "), T.length = 0;
    }
    null != t.key && (e = t.key), null != t.name && (r = t.name);
} return "function" == typeof n ? n(t, i || [], W) : { vtag: n, vchildren: i, vtext: void 0, vattrs: t, vkey: e, vname: r, w: void 0, g: !1 }; }
function f(n) { return { vtag: n.vtag, vchildren: n.vchildren, vtext: n.vtext, vattrs: n.vattrs, vkey: n.vkey, vname: n.vname }; }
undefined && undefined.Dn || (Object.setPrototypeOf || Array);
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

class Item {
    constructor(hostRef) {
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
    componentWillLoad() {
        this.slotted = this.element.innerHTML;
    }
    componentDidLoad() {
        setTimeout(() => {
            if (this.selected) {
                this.mounted.emit(this);
            }
        }, 10);
    }
    async data() {
        return {
            size: this.size,
            value: this.value,
            type: this.type,
            label: this.label,
            danger: this.danger,
            slotted: this.slotted
        };
    }
    async apply(data) {
        this.size = data.size;
        this.value = data.value;
        this.type = data.type;
        this.label = data.label;
        const button = this.element.shadowRoot.querySelector('.button');
        button.innerHTML = data.slotted;
    }
    async setFocus() {
        this.focused = true;
        // @ts-ignore
        this.element.querySelector('.button').focus();
    }
    handleClick(e) {
        if (this.route) {
            e.preventDefault();
            this.history.push(this.href, {});
        }
        if (!this.current) {
            this.selectionChanged.emit(this);
        }
    }
    handleFocus() {
        if (this.current) {
            this.focusChanged.emit(this);
        }
        this.focused = true;
    }
    handleBlur() {
        if (this.current) {
            this.blurChanged.emit(this);
        }
        this.focused = false;
    }
    classes() {
        let classes = "";
        classes += this.selected ? "selected " : "";
        classes += this.multiple ? "multiple " : "";
        return classes;
    }
    async select_item(state) {
        if (this.selectable) {
            if (state) {
                if (this.selected !== state.selected) {
                    var event = new CustomEvent('click');
                    this.element.querySelector('.button').dispatchEvent(event);
                }
            }
            else {
                var event = new CustomEvent('click');
                this.element.querySelector('.button').dispatchEvent(event);
            }
        }
    }
    render() {
        return (h(this.type, { class: "button", type: "button", href: this.href, url: this.href, tabindex: "0", value: this.value, title: this.label, onClick: (e) => this.handleClick(e), onBlur: () => this.handleBlur(), onFocus: () => this.handleFocus() }, h("slot", null), (this.selected || this.multiple) && h("stellar-asset", { class: this.classes(), name: "checkmark", block: true })));
    }
    get element() { return getElement(this); }
    static get style() { return ":host, :host *, :host *:before, :host *:after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host {\n  --item-size: 2.356em;\n  --font-size: 1.4rem;\n  display: block;\n  width: 100%;\n  height: var(--item-size);\n  color: var(--theme-base9);\n  font-family: inherit;\n  visibility: visible !important;\n  font-size: var(--font-size);\n  text-align: left;\n  position: relative;\n}\n\n:host([fit]) {\n  --item-size: auto;\n}\n\n:host([fit]) a.button,\n:host([fit]) button.button,\n:host([fit]) stencil-route-link a {\n  padding: 1.4rem 0 1.4rem 1.4rem;\n}\n\n:host([wrap]) .button {\n  white-space: normal;\n  text-align: left;\n}\n\n:host([danger]) .button {\n  color: var(--red5);\n}\n\n:host a.button,\n:host button.button,\n:host stencil-route-link a {\n  text-decoration: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  cursor: pointer;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  outline: 0;\n  border: 0;\n  background: transparent;\n  padding: 0 0 0 .6rem;\n  width: 100%;\n  height: calc(var(--item-size) - 1px);\n  color: currentColor;\n  font-weight: 500;\n  font-size: inherit;\n}\n\n:host stencil-route-link {\n  padding: 0;\n}\n\n:host .button a {\n  color: inherit;\n  background: inherit;\n  text-decoration: none;\n}\n\n:host .button ::slotted(stellar-avatar) {\n  /* flex: 0 0 var(--avatar-size); */\n  margin-right: .5rem;\n}\n\n:host .button ::slotted(stellar-avatar) {\n  background: var(--theme-base9);\n  visibility: visible !important;\n  display: block !important;\n  width: 2rem;\n  height: 2rem;\n}\n\n:host .button stellar-tag {\n  margin: auto 0.5rem auto auto;\n}\n\n:host .button stellar-asset {\n  margin-left: 1rem;\n}\n\n:host .button span {\n  margin: auto auto auto 0;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n:host([size=\"small\"]) .button {\n  padding: 0 1rem;\n  height: 3rem;\n}\n\n:host .selected {\n  -webkit-animation: fadeInLeft 200ms ease;\n  animation: fadeInLeft 200ms ease;\n  font-size: var(--item-size);\n  margin-left: auto !important;\n  background: transparent;\n  color: var(--theme-base5);\n  height: calc(var(--item-size) - 1px);\n}\n\n:host(:hover) .selected,\n:host(:focus) .selected,\n:host(:focus-within) .selected {\n  color: white;\n}\n\n:host([fit]) .selected {\n  position: absolute;\n  top: .625rem;\n  right: .25rem;\n  font-size: 3rem;\n}\n\n:host([fit][multiple]) .selected {\n  right: initial;\n}\n\n:host .button:focus,\n:host .button:hover,\n:host(:hover),\n:host(:focus-within) {\n  background: var(--theme-base1);\n}\n\n:host(.current) {\n  background: white\n}\n\n:host([danger]) .button:focus,\n:host([danger]) .button:hover  {\n  background: var(--red5);\n  color: white;\n}\n\n:host([simple]) .button {\n  background: white !important;\n}\n\n:host(.current) stellar-asset {\n  display: none;\n}\n\n:host stellar-asset.multiple {\n  border: 1px solid var(--border-color);\n  background: var(--background);\n  border-radius: 4px;\n  font-size: 2.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  margin: 0 0 0 auto;\n  left: -1rem;\n  position: relative;\n  color: transparent;\n}\n\n:host stellar-asset.multiple.selected {\n  color: var(--theme-base5);\n}\n\n\n:host(.current) .button:focus,\n:host(.current) .button:hover,\n:host(.current:hover),\n:host(.current:focus-within) {\n  background: transparent;\n}\n\n:host-context(.dark-mode):host .button:focus,\n:host-context(.dark-mode):host .button:hover,\n:host-context(.dark-mode):host(:hover),\n:host-context(.dark-mode):host(:focus-within) {\n  background: var(--theme-base8);\n}\n\n:host-context(.dark-mode):host(.current) .button:focus,\n:host-context(.dark-mode):host(.current) .button:hover,\n:host-context(.dark-mode):host(.current:hover),\n:host-context(.dark-mode):host(.current:focus-within) {\n  background: transparent;\n}"; }
}
if (injectHistory) {
    injectHistory(Item);
}

export { Item as stellar_item };
