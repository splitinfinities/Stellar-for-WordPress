import { h } from '../stellar-core.core.js';

class Scatter {
    constructor() {
        this.float = false;
        this.min = 0;
        this.max = 100;
        this.sizes = false;
        this.colors = false;
    }
    componentWillLoad() {
        const particles = this.element.querySelectorAll('*');
        Array.from(particles).forEach((element) => {
            const top = this.randomFloat();
            const left = this.randomFloat();
            element.setAttribute('style', `top: ${top}%; left: ${left}%`);
            if (this.colors) {
                element.classList.add(`fs${this.fontScale()}`);
            }
            if (this.sizes) {
                element.classList.add(`theme-${this.colorSwatch()}${this.colorScale()}`);
            }
        });
    }
    randomFloat() {
        return this.min + Math.random() * (this.max + 1 - this.min);
    }
    randomNumber(max = 2) {
        return Math.floor(Math.random() * max) + 1;
    }
    fontScale() {
        return this.randomNumber(6);
    }
    colorScale() {
        return this.randomNumber(10);
    }
    colorSwatch() {
        return this.randomNumber() === 1 ? "base" : "complement";
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "stellar-scatter"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "colors": {
            "type": Boolean,
            "attr": "colors"
        },
        "element": {
            "elementRef": true
        },
        "float": {
            "type": Boolean,
            "attr": "float",
            "reflectToAttr": true
        },
        "max": {
            "type": Number,
            "attr": "max"
        },
        "min": {
            "type": Number,
            "attr": "min"
        },
        "sizes": {
            "type": Boolean,
            "attr": "sizes"
        }
    }; }
    static get style() { return ".sc-stellar-scatter-h{position:relative;display:contents;width:100%;height:100%}.sc-stellar-scatter-h .sc-stellar-scatter-s > *{position:absolute}.sc-stellar-scatter-h[float] .sc-stellar-scatter-s > :nth-of-type(3n+1){-webkit-animation-direction:alternate;animation-direction:alternate}.sc-stellar-scatter-h[float] .sc-stellar-scatter-s > :nth-of-type(3n+2){animation-direction:reverse}.sc-stellar-scatter-h[float] .sc-stellar-scatter-s > :nth-of-type(3n+3){animation-direction:alternate-reverse}.sc-stellar-scatter-h[float] .sc-stellar-scatter-s > :nth-of-type(5n+1){-webkit-animation:floating-x 10s infinite;animation:floating-x 10s infinite}.sc-stellar-scatter-h[float] .sc-stellar-scatter-s > :nth-of-type(5n+2){-webkit-animation:floating-x-spin 15s infinite;animation:floating-x-spin 15s infinite}.sc-stellar-scatter-h[float] .sc-stellar-scatter-s > :nth-of-type(5n+3){-webkit-animation:floating-x-full-spin 35s infinite;animation:floating-x-full-spin 35s infinite}.sc-stellar-scatter-h[float] .sc-stellar-scatter-s > :nth-of-type(5n+4){-webkit-animation:floating-x-full-spin-rel 20s infinite;animation:floating-x-full-spin-rel 20s infinite}.sc-stellar-scatter-h[float] .sc-stellar-scatter-s > :nth-of-type(5n+5){-webkit-animation:floating-x-full-spin 25s infinite;animation:floating-x-full-spin 25s infinite}"; }
}

export { Scatter as StellarScatter };
