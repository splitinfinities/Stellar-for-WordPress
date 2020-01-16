import { r as registerInstance, g as getElement } from './index-cc4604b3.js';

const MouseTrailCss = ".stellar-mouse-trail-element {\n  contain: content;\n  position: fixed;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n}\n\nstellar-mouse-trail {\n  display: none;\n}\n";

const StellarMouseTrail = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.count = 12;
        this.speed = .5;
        this.threedee = false;
        this.dots = [];
        this.mouse = { x: 0, y: 0 };
    }
    componentWillLoad() {
        const el = this.element.querySelector('*:first-of-type');
        for (var i = 0; i < this.count; i++) {
            var d = new Dot(el, this.threedee, this.count, i);
            this.dots.push(d);
        }
    }
    componentDidLoad() {
        this.animate();
    }
    draw() {
        let x = this.mouse.x;
        let y = this.mouse.y;
        this.dots.forEach((dot, index, dots) => {
            var nextDot = dots[index + 1] || dots[0];
            dot.x = x;
            dot.y = y;
            dot.draw();
            x += (nextDot.x - dot.x) * this.speed;
            y += (nextDot.y - dot.y) * this.speed;
        });
    }
    animate() {
        this.draw();
        requestAnimationFrame(this.animate.bind(this));
    }
    handleMouseMove(event) {
        this.mouse.x = event.clientX;
        this.mouse.y = event.clientY;
    }
    get element() { return getElement(this); }
    static get style() { return MouseTrailCss; }
};
class Dot {
    constructor(element, threedee, count, current) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.draw = function () {
            this.node.style.transform = `translate3d(calc(${this.x}px - 50%), calc(${this.y}px - 50%), ${this.z}px)`;
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
}
;

export { StellarMouseTrail as stellar_mouse_trail };
