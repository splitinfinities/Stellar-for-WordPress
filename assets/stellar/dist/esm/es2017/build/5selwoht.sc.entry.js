import { h } from '../stellar-core.core.js';

import './chunk-7646164d.js';
import { a as properties } from './chunk-340b8099.js';
import { k as delay } from './chunk-43ad3764.js';
import './chunk-5ce278cb.js';
import { a as ezClipboard } from './chunk-f527ab08.js';
import { a as get_interview_lines, b as update_interview_lines } from './chunk-435d24f9.js';

class Video {
    constructor() {
        this.trackInView = true;
        this.preload = "auto";
        this.autoplay = false;
        this.muted = false;
        this.playsinline = false;
        this.controls = true;
        this.duration = 0.0;
        this.startTime = 0.0;
        this.pausedTime = 0.0;
        this.currentTime = 0.0;
        this.playing = false;
    }
    componentDidLoad() {
        this.video_tag = this.element.querySelector('video');
        this.video_tag.onplay = () => {
            this.playing = true;
            this.played.emit(this.eventData);
        };
        this.video_tag.onpause = () => {
            this.playing = false;
            this.pausedTime = this.video_tag.currentTime;
            this.paused.emit(this.eventData);
        };
        this.video_tag.onloadedmetadata = () => {
            this.setDimensions();
            this.duration = this.video_tag.duration;
            this.loaded.emit(this.eventData);
        };
        this.trackInView && this.addIntersectionObserver();
    }
    get eventData() {
        return {
            playing: this.playing,
            currentTime: this.currentTime,
            pausedTime: this.pausedTime,
            startTime: this.startTime,
            duration: this.duration,
        };
    }
    startInterval() {
        if (this.playing) {
            this.interval = setInterval(() => {
                this.currentTime = this.video_tag.currentTime;
                this.timeupdate.emit(this.eventData);
            }, 30);
        }
        else {
            clearInterval(this.interval);
        }
    }
    setDimensions() {
        this.width = (!this.width) ? this.video_tag.videoWidth : this.width;
        this.height = (!this.height) ? this.video_tag.videoHeight : this.height;
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
                rootMargin: '50%',
                threshold: [0]
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
        this.video_tag.play();
    }
    handleOffScreen() {
        this.video_tag.currentTime = 0;
        this.video_tag.pause();
    }
    async getDuration() {
        return this.video_tag.duration;
    }
    async play() {
        this.video_tag.play();
    }
    async pause() {
        this.video_tag.pause();
    }
    async toggle() {
        if (this.video_tag.paused) {
            this.play();
        }
        else {
            this.pause();
        }
    }
    async stop() {
        this.skipTo(0);
        this.video_tag.pause();
    }
    async skipTo(time) {
        await this.pause();
        this.video_tag.currentTime = (time * 1000);
        await this.play();
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
        "currentTime": {
            "state": true
        },
        "duration": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "getDuration": {
            "method": true
        },
        "height": {
            "type": Number,
            "attr": "height",
            "reflectToAttr": true,
            "mutable": true
        },
        "interval": {
            "state": true
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
        "pause": {
            "method": true
        },
        "pausedTime": {
            "state": true
        },
        "play": {
            "method": true
        },
        "playing": {
            "type": Boolean,
            "attr": "playing",
            "mutable": true,
            "watchCallbacks": ["startInterval"]
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
        "skipTo": {
            "method": true
        },
        "startTime": {
            "state": true
        },
        "stop": {
            "method": true
        },
        "toggle": {
            "method": true
        },
        "trackInView": {
            "type": Boolean,
            "attr": "track-in-view"
        },
        "video_tag": {
            "type": "Any",
            "attr": "video_tag",
            "mutable": true
        },
        "width": {
            "type": Number,
            "attr": "width",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "timeupdate",
            "method": "timeupdate",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "played",
            "method": "played",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "paused",
            "method": "paused",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "loaded",
            "method": "loaded",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "stellar-video{display:block;width:100%;height:0;position:relative;overflow:hidden;padding-bottom:var(--aspect-ratio)}stellar-video:after,stellar-video video{width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0}stellar-video:after{content:\"\";display:block;pointer-events:none;z-index:2;mix-blend-mode:color}stellar-video[overlay]:after{background:linear-gradient(35deg,var(--theme-complement5),var(--theme-base5) 40%,var(--theme-complement5));mix-blend-mode:color}\@media not all and (min-resolution:.001dpcm){\@media{stellar-video[overlay]:after{mix-blend-mode:hard-light;opacity:.5}}}"; }
}

class VideoInterview {
    constructor() {
        this.randomId = Math.floor(Math.random() * 6) + 1;
        this.color = "white";
        this.width = 800;
        this.height = 800;
        this.aspectRatio = 100;
        this.visualization = "bars2";
        this.loaded = false;
        this.loading = false;
        this.duration = 0;
        this.current = 0;
        this.visible = false;
        this.cache = new WeakMap();
    }
    componentWillLoad() {
        properties.set({
            "--width": `${this.width}px`,
            "--height": `${this.height}px`,
            "--aspectRatio": `${this.aspectRatio}%`
        }, this.element);
    }
    async componentDidLoad() {
        if (!this.interviewLines) {
            this.interviewLines = get_interview_lines(this.element);
        }
        update_interview_lines(this.interviewLines, this.cache, this.time);
        this.visualizer = this.element.querySelector('web-audio-visualizer');
        this.video = this.element.querySelector('stellar-video');
        this.addIntersectionObserver();
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
                rootMargin: '50%',
                threshold: [0]
            });
            this.io.observe(this.element);
        }
    }
    handleTimeUpdate(event) {
        this.current = Math.round(event.detail.currentTime * 1000);
        this.duration = Math.round(event.detail.duration * 1000);
        update_interview_lines(this.interviewLines, this.cache, this.time);
    }
    get time() {
        return this.current;
    }
    async handleInScreen() {
        await delay(1000);
        this.visible = true;
        await delay(100);
        this.visualizer = this.element.querySelector('web-audio-visualizer');
        this.video = this.element.querySelector('stellar-video');
    }
    async attachContext() {
        if (!this.context) {
            this.context = new AudioContext();
            const src = this.context.createMediaElementSource(this.video.video_tag);
            if (!this.visualizer) {
                this.visualizer = this.element.querySelector('web-audio-visualizer');
            }
            const waanalyser = await this.visualizer.connect(this.context);
            await src.connect(waanalyser.analyser);
            waanalyser.analyser.connect(this.context.destination);
        }
    }
    async handleOffScreen() {
        this.pause();
    }
    async play() {
        if (this.video) {
            await this.video.play();
        }
    }
    async skipTo(time) {
        if (this.video) {
            await this.video.skipTo(time);
        }
    }
    async pause() {
        if (this.video) {
            await this.video.pause();
        }
    }
    async toggle() {
        if (this.video) {
            await this.video.toggle();
        }
    }
    async handlePlay() {
        await this.handleInScreen();
        await this.attachContext();
        this.playing = true;
    }
    handleClick() {
        this.toggle();
        if (this.current === this.duration) {
            this.skipTo(0);
        }
    }
    handleCurrentClick() {
        ezClipboard.copyPlain(this.current);
    }
    render() {
        return (h("div", { class: "card", onDblClick: () => { this.handleClick(); } },
            !this.visible && h("div", null,
                h("skeleton-img", { width: 1050, height: 600, loading: true })),
            this.visible && h("section", null,
                h("stellar-video", { controls: false, autoplay: true, trackInView: false, onPlayed: () => { this.handlePlay(); }, onPaused: () => { this.playing = false; }, onTimeupdate: (e) => { this.handleTimeUpdate(e); } },
                    h("source", { src: this.src })),
                h("div", { class: "transcript" },
                    h("slot", { name: "transcript" })),
                this.video && h("web-audio-visualizer", { for: `interview-${this.randomId}`, type: this.visualization, width: 1024, height: 1024, color: this.color }),
                h("button", { class: this.loading ? "loading button" : (this.playing ? "playing button" : "button"), onClick: () => { this.handleClick(); } },
                    h("stellar-asset", { name: this.loading ? "sync" : (this.playing ? "pause" : "play"), class: this.loading ? "animation-spin" : "" })),
                h("h3", null,
                    h("stellar-unit", { class: "current", value: this.current, from: "ms", to: "s", onClick: () => { this.handleCurrentClick(); } })),
                h("h3", null,
                    h("stellar-unit", { class: "duration", value: this.duration, from: "ms", to: "s" })),
                h("stellar-progress", { value: this.current, max: this.duration, noease: true, blurable: false, slender: true, editable: true, onValueChange: (e) => { this.skipTo(e.detail.value); } }))));
    }
    static get is() { return "stellar-video-interview"; }
    static get properties() { return {
        "aspectRatio": {
            "type": Number,
            "attr": "aspect-ratio",
            "mutable": true
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "context": {
            "state": true
        },
        "current": {
            "state": true
        },
        "duration": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "height": {
            "type": Number,
            "attr": "height",
            "mutable": true
        },
        "interviewLines": {
            "state": true
        },
        "io": {
            "state": true
        },
        "loaded": {
            "state": true
        },
        "loading": {
            "state": true
        },
        "pause": {
            "method": true
        },
        "play": {
            "method": true
        },
        "playing": {
            "type": Boolean,
            "attr": "playing",
            "mutable": true
        },
        "randomId": {
            "state": true
        },
        "skipTo": {
            "method": true
        },
        "src": {
            "type": String,
            "attr": "src"
        },
        "toggle": {
            "method": true
        },
        "updateFunc": {
            "state": true
        },
        "video": {
            "state": true
        },
        "visible": {
            "state": true
        },
        "visualization": {
            "type": String,
            "attr": "visualization",
            "mutable": true
        },
        "visualizer": {
            "state": true
        },
        "width": {
            "type": Number,
            "attr": "width",
            "mutable": true
        }
    }; }
    static get style() { return "stellar-video-interview{--width:800px;--height:800px;display:block}stellar-video-interview div.card{position:relative;display:block;width:auto;height:auto;margin:auto;overflow:hidden}stellar-video-interview div.card section{height:inherit;display:block;position:relative;padding-top:0!important}stellar-video-interview web-audio-visualizer{position:absolute;top:auto;left:0;right:0;bottom:0;width:100%;height:60%;pointer-events:none;z-index:2}stellar-video-interview web-audio-visualizer[type=circle]{height:100%}stellar-video-interview web-audio-visualizer[type=bars2]{width:80%;left:10%;right:10%}stellar-video-interview stellar-360-image,stellar-video-interview stellar-360-video,stellar-video-interview stellar-image,stellar-video-interview stellar-video{--gradient:radial-gradient(circle at 30% 107%,var(--theme-base5) 0%,var(--theme-base8) 5%,var(--theme-complement8) 45%,var(--theme-complement5) 60%,var(--theme-base5) 90%);position:relative;z-index:1;display:block}stellar-video-interview stellar-progress{position:absolute;top:0;left:0;width:100%;z-index:9;--border-radius:0}stellar-video-interview stellar-progress .progress{border:0}stellar-video-interview h3{color:#fff}stellar-video-interview stellar-unit{position:absolute;bottom:1rem;z-index:2;color:#fff!important;font-weight:700}stellar-video-interview stellar-unit.current{left:1rem}stellar-video-interview stellar-unit.duration{right:1rem}stellar-video-interview .transcript{position:absolute;bottom:0;width:70%;left:15%;z-index:5;pointer-events:none}stellar-video-interview .button{position:absolute;-webkit-transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;width:9rem;height:9rem;top:50%;right:50%;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);border-radius:100%;padding:0;border:0;z-index:3;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#fff;text-align:center;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;z-index:4;outline:0;cursor:pointer;padding-left:1rem;mix-blend-mode:soft-light}stellar-video-interview .button:focus,stellar-video-interview .button:hover{-webkit-transform:translate(50%,-50%) scale(1.1);transform:translate(50%,-50%) scale(1.1);mix-blend-mode:hard-light}stellar-video-interview .button stellar-asset{font-size:7rem;margin:auto;display:block}stellar-video-interview .button.loading{padding:0}stellar-video-interview .button.playing{width:2.8rem;height:2.8rem;top:2.2rem;right:1.8rem;padding:0;background:transparent;-webkit-transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s}stellar-video-interview .button.playing stellar-asset{font-size:2.8rem}"; }
}

export { Video as StellarVideo, VideoInterview as StellarVideoInterview };
