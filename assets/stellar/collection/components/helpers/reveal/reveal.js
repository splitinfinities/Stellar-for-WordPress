import { h } from '@stencil/core';
import properties from 'css-custom-properties';
import delay from 'await-delay';
export class Scatter {
    constructor() {
        this.animation = "fadeInUp";
        this.outAnimation = "fadeOut";
        this.delay = 100;
        this.timing = 50;
        this.active = false;
    }
    componentWillLoad() {
        this.children = Array.from(this.element.children);
    }
    componentDidLoad() {
        this.addIntersectionObserver();
    }
    addIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            this.io = new IntersectionObserver((data) => {
                // because there will only ever be one instance
                // of the element we are observing
                // we can just use data[0]
                if (data[0].isIntersecting) {
                    setTimeout(() => {
                        this.active = true;
                        this.in();
                    }, 350);
                    this.removeIntersectionObserver();
                }
            }, {
                rootMargin: '50%',
                threshold: [0]
            });
            this.io.observe(this.element);
        }
        else {
            // fall back to setTimeout for Safari and IE
            setTimeout(() => {
                this.in();
            }, 300);
        }
    }
    removeIntersectionObserver() {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    }
    async calculateTiming() {
        const time = 1000 + (this.children.length * this.delay);
        await delay(time);
    }
    async out() {
        properties.set({
            "--animation": this.outAnimation
        }, this.element);
        this.children.forEach((element, index) => {
            // @ts-ignore
            element.style.setProperty('animation-delay', `${this.delay * index}ms`);
            element.style.setProperty('animation-timing', `${this.timing}ms`);
        });
        return await this.calculateTiming();
    }
    async in() {
        properties.set({
            "--animation": this.animation
        }, this.element);
        this.children.forEach((element, index) => {
            // @ts-ignore
            element.style.setProperty('animation-delay', `${this.delay * index}ms`);
            element.style.setProperty('animation-timing', `${this.timing}ms`);
        });
        return await this.calculateTiming();
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "stellar-reveal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["reveal.css"]
    }; }
    static get styleUrls() { return {
        "$": ["reveal.css"]
    }; }
    static get properties() { return {
        "animation": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"fadeIn\"|\"fadeInUp\"|\"fadeInDown\"",
                "resolved": "\"fadeIn\" | \"fadeInDown\" | \"fadeInUp\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "animation",
            "reflect": true,
            "defaultValue": "\"fadeInUp\""
        },
        "outAnimation": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"fadeOut\"|\"fadeOutUp\"|\"fadeOutDown\"",
                "resolved": "\"fadeOut\" | \"fadeOutDown\" | \"fadeOutUp\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "out-animation",
            "reflect": true,
            "defaultValue": "\"fadeOut\""
        },
        "delay": {
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
            "attribute": "delay",
            "reflect": true,
            "defaultValue": "100"
        },
        "timing": {
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
            "attribute": "timing",
            "reflect": true,
            "defaultValue": "50"
        },
        "active": {
            "type": "boolean",
            "mutable": true,
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
            "attribute": "active",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "io": {},
        "children": {}
    }; }
    static get methods() { return {
        "out": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "in": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
}
