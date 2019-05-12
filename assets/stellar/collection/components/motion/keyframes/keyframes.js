import { properties } from '../../../utils';
export class Follow {
    constructor() {
        this.width = 400;
        this.height = 400;
        this.frame = 1;
    }
    componentWillLoad() {
        this.update();
    }
    update() {
        properties.set({
            '--width': `${this.width}px`,
            '--height': `${this.height}px`,
            '--aspect-ratio': `${this.width / this.height * 100}%`,
            '--position': `0 ${this.height * -(this.frame - 1)}px`
        }, this.element);
    }
    render() {
        return h("div", { class: "background", style: { "background-image": `url(${this.src})` } });
    }
    static get is() { return "stellar-keyframes"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        },
        "frame": {
            "type": Number,
            "attr": "frame",
            "reflectToAttr": true,
            "watchCallbacks": ["update"]
        },
        "height": {
            "type": Number,
            "attr": "height"
        },
        "src": {
            "type": String,
            "attr": "src"
        },
        "width": {
            "type": Number,
            "attr": "width"
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-keyframes:**/"; }
}
