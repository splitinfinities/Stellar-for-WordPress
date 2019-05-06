/*!
 * StencilStateTunnel: Core, es5
 * Built with http://stenciljs.com
 */
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
export { ActiveRouter as a };
