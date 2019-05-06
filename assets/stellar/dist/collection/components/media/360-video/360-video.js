import * as Kaleidoscope from "kaleidoscopejs";
export class Video360 {
    constructor() {
        this.width = 1280;
        this.height = 720;
    }
    componentDidLoad() {
        this.video = this.element.querySelector(".video");
        this.viewer = new Kaleidoscope.Video({
            source: this.src,
            container: this.video,
            width: this.width,
            height: this.height,
            autoplay: true,
            muted: true,
            loop: true
        });
        this.viewer.render();
        this.viewer.play();
    }
    render() {
        return [
            h("div", { class: "video" }),
            h("div", { class: "overlay" })
        ];
    }
    static get is() { return "stellar-360-video"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        },
        "height": {
            "type": Number,
            "attr": "height",
            "reflectToAttr": true
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
        "video": {
            "state": true
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
    static get style() { return "/**style-placeholder:stellar-360-video:**/"; }
}
