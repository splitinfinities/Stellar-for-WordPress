import { Component, State, Listen, Element, Prop } from '@stencil/core';
export class StellarMouseTrail {
    constructor() {
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
    static get is() { return "stellar-mouse-trail"; }
    static get originalStyleUrls() { return {
        "$": ["mouse-trail.css"]
    }; }
    static get styleUrls() { return {
        "$": ["mouse-trail.css"]
    }; }
    static get properties() { return {
        "count": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "count",
            "reflect": false,
            "defaultValue": "12"
        },
        "speed": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "speed",
            "reflect": false,
            "defaultValue": ".5"
        },
        "threedee": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "threedee",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "dots": {},
        "mouse": {}
    }; }
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "mousemove",
            "method": "handleMouseMove",
            "target": "window",
            "capture": false,
            "passive": true
        }]; }
}
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
