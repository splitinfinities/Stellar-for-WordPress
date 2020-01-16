import { r as registerInstance, d as getElement } from './index-bcfb4a9f.js';
var MouseTrailCss = ".stellar-mouse-trail-element{contain:content;position:fixed;left:0;top:0;pointer-events:none}stellar-mouse-trail{display:none}";
var StellarMouseTrail = /** @class */ (function () {
    function StellarMouseTrail(hostRef) {
        registerInstance(this, hostRef);
        this.count = 12;
        this.speed = .5;
        this.threedee = false;
        this.dots = [];
        this.mouse = { x: 0, y: 0 };
    }
    StellarMouseTrail.prototype.componentWillLoad = function () {
        var el = this.element.querySelector('*:first-of-type');
        for (var i = 0; i < this.count; i++) {
            var d = new Dot(el, this.threedee, this.count, i);
            this.dots.push(d);
        }
    };
    StellarMouseTrail.prototype.componentDidLoad = function () {
        this.animate();
    };
    StellarMouseTrail.prototype.draw = function () {
        var _this = this;
        var x = this.mouse.x;
        var y = this.mouse.y;
        this.dots.forEach(function (dot, index, dots) {
            var nextDot = dots[index + 1] || dots[0];
            dot.x = x;
            dot.y = y;
            dot.draw();
            x += (nextDot.x - dot.x) * _this.speed;
            y += (nextDot.y - dot.y) * _this.speed;
        });
    };
    StellarMouseTrail.prototype.animate = function () {
        this.draw();
        requestAnimationFrame(this.animate.bind(this));
    };
    StellarMouseTrail.prototype.handleMouseMove = function (event) {
        this.mouse.x = event.clientX;
        this.mouse.y = event.clientY;
    };
    Object.defineProperty(StellarMouseTrail.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StellarMouseTrail, "style", {
        get: function () { return MouseTrailCss; },
        enumerable: true,
        configurable: true
    });
    return StellarMouseTrail;
}());
var Dot = /** @class */ (function () {
    function Dot(element, threedee, count, current) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.draw = function () {
            this.node.style.transform = "translate3d(calc(" + this.x + "px - 50%), calc(" + this.y + "px - 50%), " + this.z + "px)";
        };
        var node = element.cloneNode();
        node.className = "stellar-mouse-trail-element";
        if (threedee) {
            this.z = count - current;
        }
        else {
            node.style.zIndex = count - current;
        }
        document.body.appendChild(node);
        this.node = node;
    }
    return Dot;
}());
export { StellarMouseTrail as stellar_mouse_trail };
