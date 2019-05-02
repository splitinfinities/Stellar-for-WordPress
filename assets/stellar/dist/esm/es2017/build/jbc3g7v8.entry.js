import { h } from '../stellar-core.core.js';

import './chunk-7646164d.js';
import { a as properties } from './chunk-340b8099.js';

class Video {
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
    static get style() { return "stellar-video{display:block;width:100%;height:0;position:relative;overflow:hidden;padding-bottom:var(--aspect-ratio)}stellar-video:after,stellar-video video{width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0}stellar-video:after{content:\"\";display:block;pointer-events:none;z-index:2;mix-blend-mode:color}stellar-video[overlay]:after{background:linear-gradient(35deg,var(--theme-complement5),var(--theme-base5) 40%,var(--theme-complement5));mix-blend-mode:color}\@media not all and (min-resolution:.001dpcm){\@media{stellar-video[overlay]:after{mix-blend-mode:hard-light;opacity:.5}}}"; }
}

export { Video as StellarVideo };
