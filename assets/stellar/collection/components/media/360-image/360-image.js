import * as Kaleidoscope from "kaleidoscopejs";
export class Image360 {
    constructor() {
        this.width = 1280;
        this.height = 720;
    }
    componentDidLoad() {
        this.image = this.element.querySelector(".image");
        this.viewer = new Kaleidoscope.Image({
            source: this.src,
            container: this.image,
            width: this.width,
            height: this.height,
        });
        this.viewer.render();
    }
    render() {
        return [
            h("div", { class: "image" }),
            h("div", { class: "overlay" })
        ];
    }
    static get is() { return "stellar-360-image"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        },
        "height": {
            "type": Number,
            "attr": "height",
            "reflectToAttr": true
        },
        "image": {
            "state": true
        },
        "poster": {
            "type": String,
            "attr": "poster",
            "reflectToAttr": true
        },
        "src": {
            "type": String,
            "attr": "src",
            "reflectToAttr": true
        },
        "viewer": {
            "state": true
        },
        "width": {
            "type": Number,
            "attr": "width",
            "reflectToAttr": true
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-360-image:**/"; }
}
