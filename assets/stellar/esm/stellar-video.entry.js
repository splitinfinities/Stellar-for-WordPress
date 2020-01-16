import { r as registerInstance, e as createEvent, h, H as Host, d as getElement } from './index-bcfb4a9f.js';
import './_commonjsHelpers-ae1b5db5.js';
import { p as properties } from './css-custom-properties.min-dfcc36c1.js';

const VideoCss = "stellar-video{display:block;width:100%;height:0;position:relative;overflow:hidden;padding-bottom:var(--aspect-ratio);contain:content;--object-fit:initial}stellar-video video{width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0;-o-object-fit:var(--object-fit);object-fit:var(--object-fit)}stellar-video::after{content:\"\";display:block;position:absolute;pointer-events:none;z-index:2;width:100%;height:100%;top:0;left:0;right:0;bottom:0;mix-blend-mode:color}stellar-video[overlay]::after{background:linear-gradient(35deg, var(--theme-complement5) 0%, var(--theme-base5) 40%, var(--theme-complement5) 100%);mix-blend-mode:color}@media not all and(min-resolution:.001dpcm){@media {stellar-video[overlay]::after{mix-blend-mode:hard-light;opacity:0.5}}}";

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
