import { a as createCommonjsModule } from './chunk-40f083d9.js';
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
export { eq_min as a };
