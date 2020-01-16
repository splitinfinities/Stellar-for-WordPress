import { r as registerInstance, d as createEvent, h, H as Host, g as getElement } from './index-cc4604b3.js';
import './_commonjsHelpers-bccf23a2.js';
import { p as properties } from './css-custom-properties.min-d9d14253.js';

const VideoCss = "stellar-video {\n  display: block;\n  width: 100%;\n  height: 0;\n  position: relative;\n  overflow: hidden;\n  padding-bottom: var(--aspect-ratio);\n  contain: content;\n  --object-fit: initial;\n}\n\nstellar-video video {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0; left: 0; right: 0; bottom: 0;\n  object-fit: var(--object-fit);\n}\n\nstellar-video::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  pointer-events: none;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  top: 0; left: 0; right: 0; bottom: 0;\n  mix-blend-mode: color;\n}\n\nstellar-video[overlay]::after {\n  background: linear-gradient(35deg, var(--theme-complement5) 0%, var(--theme-base5) 40%, var(--theme-complement5) 100%);\n  mix-blend-mode: color;\n}\n\n@media not all and (min-resolution:.001dpcm) { @media {\n  stellar-video[overlay]::after {\n    mix-blend-mode: hard-light;\n    opacity: 0.5;\n  }\n}}\n";

const Video = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.trackInView = true;
        this.preload = "auto";
        this.autoplay = false;
        this.muted = false;
        this.playsinline = false;
        this.controls = true;
        this.playing = false;
        this.duration = 0.0;
        this.startTime = 0.0;
        this.pausedTime = 0.0;
        this.currentTime = 0.0;
        this.update = createEvent(this, "update", 7);
        this.played = createEvent(this, "played", 7);
        this.paused = createEvent(this, "paused", 7);
        this.loaded = createEvent(this, "loaded", 7);
    }
    componentWillLoad() {
        this.video_tag = this.element.querySelector('video');
        this.setDimensions();
    }
    componentDidLoad() {
        this.video_tag = this.element.querySelector('video');
        this.video_tag.onplay = () => {
            this.playing = true;
            this.played.emit(this.eventData);
            this.update.emit(this.eventData);
        };
        this.video_tag.onpause = () => {
            this.playing = false;
            this.pausedTime = this.video_tag.currentTime;
            this.paused.emit(this.eventData);
            this.update.emit(this.eventData);
        };
        this.video_tag.onloadedmetadata = () => {
            this.setDimensions();
            this.duration = this.video_tag.duration;
            this.loaded.emit(this.eventData);
        };
    }
    async videoElement() {
        return this.video_tag;
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
                this.update.emit(this.eventData);
            }, 30);
        }
        else {
            clearInterval(this.interval);
        }
    }
    setDimensions() {
        this.width = (!this.width) ? this.video_tag ? this.video_tag.videoWidth : this.width : this.width;
        this.height = (!this.height) ? this.video_tag ? this.video_tag.videoHeight : this.height : this.height;
        properties.set({
            "--width": `${this.width}`,
            "--height": `${this.height}`,
            "--aspect-ratio": `${this.height / this.width * 100}%`
        }, this.element);
    }
    in() {
        if (this.autoplay) {
            this.video_tag.play();
        }
    }
    out() {
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
        return h(Host, null, h("video", { preload: this.preload, width: this.width, height: this.height, autoplay: this.autoplay, muted: this.muted, playsinline: this.playsinline, poster: this.poster, controls: this.controls }, h("slot", null)), h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this) }));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "playing": ["startInterval"]
    }; }
    static get style() { return VideoCss; }
};

export { Video as stellar_video };
