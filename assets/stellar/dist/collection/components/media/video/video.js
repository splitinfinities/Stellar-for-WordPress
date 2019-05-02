import properties from 'css-custom-properties';
export class Video {
    constructor() {
        this.preload = "auto";
        this.autoplay = false;
        this.muted = false;
        this.playsinline = false;
        this.controls = true;
    }
    componentDidLoad() {
        this.video = this.element.querySelector('video');
        this.video.onloadedmetadata = () => { this.setDimensions(); };
        this.addIntersectionObserver();
    }
    setDimensions() {
        this.width = (!this.width) ? this.video.videoWidth : this.width;
        this.height = (!this.height) ? this.video.videoHeight : this.height;
        properties.set({
            "--width": `${this.width}`,
            "--height": `${this.height}`,
            "--aspect-ratio": `${this.height / this.width * 100}%`
        }, this.element);
    }
    addIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            this.io = new IntersectionObserver((data) => {
                if (data[0].isIntersecting) {
                    this.handleInScreen();
                }
                else {
                    this.handleOffScreen();
                }
            }, {
                threshold: [0.25]
            });
            this.io.observe(this.element.querySelector('video'));
        }
        else {
            setTimeout(() => {
                this.handleInScreen();
            }, 300);
        }
    }
    handleInScreen() {
        this.video.play();
    }
    handleOffScreen() {
        this.video.currentTime = 0;
        this.video.pause();
    }
    render() {
        return (h("video", { preload: this.preload, width: this.width, height: this.height, autoplay: this.autoplay, muted: this.muted, playsinline: this.playsinline, poster: this.poster, controls: this.controls },
            h("slot", null)));
    }
    static get is() { return "stellar-video"; }
    static get properties() { return {
        "autoplay": {
            "type": Boolean,
            "attr": "autoplay"
        },
        "controls": {
            "type": Boolean,
            "attr": "controls"
        },
        "element": {
            "elementRef": true
        },
        "height": {
            "type": Number,
            "attr": "height",
            "reflectToAttr": true,
            "mutable": true
        },
        "io": {
            "state": true
        },
        "muted": {
            "type": Boolean,
            "attr": "muted"
        },
        "overlay": {
            "type": Boolean,
            "attr": "overlay"
        },
        "playsinline": {
            "type": Boolean,
            "attr": "playsinline"
        },
        "poster": {
            "type": String,
            "attr": "poster"
        },
        "preload": {
            "type": String,
            "attr": "preload"
        },
        "video": {
            "state": true
        },
        "width": {
            "type": Number,
            "attr": "width",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-video:**/"; }
}
