import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';
import './chunk-452e3210.js';
import { a as properties } from './chunk-aefb00c1.js';
import { k as delay } from './chunk-15cea9da.js';
import './chunk-f26db59a.js';
import { a as ezClipboard } from './chunk-9ca97b6b.js';
import { a as get_interview_lines, b as update_interview_lines } from './chunk-b9ee3ad8.js';

class VideoInterview {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
                // because there will only ever be one instance
                // of the element we are observing
                // we can just use data[0]
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
        return (h("div", { class: "card", onDblClick: () => { this.handleClick(); } }, !this.visible && h("div", null, h("skeleton-img", { width: "1050", height: "600", loading: true })), this.visible && h("section", null, h("stellar-video", { controls: false, autoplay: true, trackInView: false, onPlayed: () => { this.handlePlay(); }, onPaused: () => { this.playing = false; }, onTimeupdate: (e) => { this.handleTimeUpdate(e); } }, h("source", { src: this.src })), h("div", { class: "transcript" }, h("slot", { name: "transcript" })), this.video && h("web-audio-visualizer", { for: `interview-${this.randomId}`, type: this.visualization, width: "1024", height: "1024", color: this.color, tag: this.video.video_tag }), h("button", { class: this.loading ? "loading button" : (this.playing ? "playing button" : "button"), onClick: () => { this.handleClick(); } }, h("stellar-asset", { name: this.loading ? "sync" : (this.playing ? "pause" : "play"), class: this.loading ? "animation-spin" : "" })), h("h3", null, h("stellar-unit", { class: "current", value: this.current, from: "ms", to: "s", onClick: () => { this.handleCurrentClick(); } })), h("h3", null, h("stellar-unit", { class: "duration", value: this.duration, from: "ms", to: "s" })), h("stellar-progress", { value: this.current, max: this.duration, noease: true, blurable: false, slender: true, editable: true, onValueChange: (e) => { this.skipTo(e.detail.value); } }))));
    }
    get element() { return getElement(this); }
    static get style() { return "stellar-video-interview {\n  --width: 800px;\n  --height: 800px;\n  display: block;\n}\n\nstellar-video-interview div.card {\n  position: relative;\n  display: block;\n  width: auto;\n  height: auto;\n  margin: auto;\n  overflow: hidden;\n}\n\nstellar-video-interview div.card section {\n  height: inherit;\n  display: block;\n  position: relative;\n  padding-top: 0 !important;\n}\n\nstellar-video-interview web-audio-visualizer {\n  position: absolute;\n  top: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 60%;\n  pointer-events: none;\n  z-index: 2;\n}\n\nstellar-video-interview web-audio-visualizer[type=\"circle\"] {\n  height: 100%;\n}\n\n\nstellar-video-interview web-audio-visualizer[type=\"bars2\"] {\n  width: 80%;\n  left: 10%;\n  right: 10%;\n}\n\nstellar-video-interview stellar-image,\nstellar-video-interview stellar-360-image,\nstellar-video-interview stellar-video,\nstellar-video-interview stellar-360-video {\n  --gradient: radial-gradient(circle at 30% 107%, var(--theme-base5) 0%, var(--theme-base8) 5%, var(--theme-complement8) 45%, var(--theme-complement5) 60%, var(--theme-base5) 90%);\n  position: relative;\n  z-index: 1;\n  display: block;\n}\n\nstellar-video-interview stellar-progress {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 9;\n  --border-radius: 0;\n}\n\nstellar-video-interview stellar-progress .progress {\n  border: 0;\n}\n\nstellar-video-interview h3 {\n  color: white;\n}\n\nstellar-video-interview stellar-unit {\n  position: absolute;\n  bottom: 1rem;\n  z-index: 2;\n  color: white !important;\n  font-weight: 700;\n}\n\nstellar-video-interview stellar-unit.current {\n  left: 1rem;\n}\n\nstellar-video-interview stellar-unit.duration {\n  right: 1rem;\n}\n\nstellar-video-interview .transcript {\n  position: absolute;\n  bottom: 0;\n  width: 70%;\n  left: 15%;\n  z-index: 5;\n  pointer-events: none;\n}\n\nstellar-video-interview .button {\n  position: absolute;\n  -webkit-transition: all .35s var(--ease) 0s, background .175s var(--ease) 0s;\n  transition: all .35s var(--ease) 0s, background .175s var(--ease) 0s;\n  width: 9rem;\n  height: 9rem;\n  top: 50%;\n  right: 50%;\n  -webkit-transform: translate(50%, -50%);\n  transform: translate(50%, -50%);\n  border-radius: 100%;\n  padding: 0;\n  border: 0;\n  z-index: 3;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: white;\n  text-align: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  z-index: 4;\n  outline: 0;\n  cursor: pointer;\n  padding-left: 1rem;\n  mix-blend-mode: soft-light;\n}\n\nstellar-video-interview .button:hover,\nstellar-video-interview .button:focus {\n  -webkit-transform: translate(50%, -50%) scale(1.1);\n  transform: translate(50%, -50%) scale(1.1);\n  mix-blend-mode: hard-light;\n}\n\nstellar-video-interview .button stellar-asset {\n  font-size: 7rem;\n  margin: auto;\n  display: block;\n}\n\nstellar-video-interview .button.loading {\n  padding: 0;\n}\n\nstellar-video-interview .button.playing {\n  width: 2.8rem;\n  height: 2.8rem;\n  top: 2.2rem;\n  right: 1.8rem;\n  padding: 0;\n  background: transparent;\n  -webkit-transition: all .35s var(--ease) 0s, background .175s var(--ease) 0s;\n  transition: all .35s var(--ease) 0s, background .175s var(--ease) 0s;\n}\n\nstellar-video-interview .button.playing stellar-asset {\n  font-size: 2.8rem;\n}"; }
}

export { VideoInterview as stellar_video_interview };
