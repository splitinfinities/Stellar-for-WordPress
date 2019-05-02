export class ParallaxSection {
    constructor() {
        this.speed = 1;
        this.layer = 1;
    }
    componentWillLoad() {
        this.element.setAttribute("data-rellax-speed", this.speed.toString());
        if (this.percentage) {
            this.element.setAttribute("data-rellax-percentage", this.percentage.toString());
        }
        this.element.setAttribute("data-rellax-zindex", this.layer.toString());
    }
    hostData() {
        return {};
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "stellar-parallax-section"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        },
        "layer": {
            "type": Number,
            "attr": "layer"
        },
        "percentage": {
            "type": Number,
            "attr": "percentage"
        },
        "speed": {
            "type": Number,
            "attr": "speed"
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-parallax-section:**/"; }
}
