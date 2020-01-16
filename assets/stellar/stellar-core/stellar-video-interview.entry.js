import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';
import './colors-eb996d31.js';
import './_commonjsHelpers-bccf23a2.js';
import { p as properties } from './css-custom-properties.min-d9d14253.js';
import { d as delay } from './index-26976b63.js';
import './main-e9832563.js';
import './moment-5e7e00c2.js';
import './utils-06e0aad6.js';
import './index-88205cad.js';
import { e as ezClipboard } from './index-306bff69.js';
import { g as get_interview_lines, u as update_interview_lines } from './helpers-e7cb5f84.js';

const VideoInterviewCss = ":host {\n  --width: 800px;\n  --height: 800px;\n  display: block;\n  position: relative;\n  contain: content;\n}\n\n:host skeleton-img {\n  margin: 0;\n  max-width: initial;\n  max-height: initial;\n}\n\n:host div.card {\n  position: relative;\n  display: block;\n  width: auto;\n  height: auto;\n  margin: auto;\n  overflow: hidden;\n}\n\n:host div.card section {\n  height: inherit;\n  display: block;\n  position: absolute;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  left: 0;\n  padding-top: 0 !important;\n}\n\n:host web-audio-visualizer {\n  position: absolute;\n  top: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 60%;\n  pointer-events: none;\n  z-index: 2;\n}\n\n:host web-audio-visualizer[type=\"circle\"] {\n  height: 100%;\n}\n\n\n:host web-audio-visualizer[type=\"bars2\"] {\n  width: 80%;\n  left: 10%;\n  right: 10%;\n}\n\n:host stellar-image,\n:host stellar-360-image,\n:host stellar-video,\n:host stellar-360-video {\n  --gradient: radial-gradient(circle at 30% 107%, var(--theme-base5) 0%, var(--theme-base8) 5%, var(--theme-complement8) 45%, var(--theme-complement5) 60%, var(--theme-base5) 90%);\n  position: relative;\n  z-index: 1;\n  display: block;\n}\n\n:host stellar-progress {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 9;\n  --border-radius: 0;\n}\n\n:host stellar-progress .progress {\n  border: 0;\n}\n\n:host h3 {\n  color: white;\n  margin: 0;\n}\n\n:host stellar-unit {\n  position: absolute;\n  bottom: 1rem;\n  z-index: 4;\n  color: white !important;\n  font-weight: 700;\n}\n\n:host stellar-unit.current {\n  left: 1rem;\n}\n\n:host stellar-unit.duration {\n  right: 1rem;\n}\n\n:host .transcript {\n  position: absolute;\n  bottom: 0;\n  width: 70%;\n  left: 15%;\n  z-index: 5;\n  pointer-events: none;\n}\n\n:host .button {\n  position: absolute;\n  transition: all .35s var(--ease) 0s, background .175s var(--ease) 0s;\n  width: 9rem;\n  height: 9rem;\n  top: 50%;\n  right: 50%;\n  transform: translate(50%, -50%);\n  border-radius: 100%;\n  padding: 0;\n  border: 0;\n  appearance: none;\n  background: white;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 4;\n  outline: 0;\n  cursor: pointer;\n  padding-left: 1rem;\n  mix-blend-mode: soft-light;\n}\n\n:host .button:hover,\n:host .button:focus {\n  transform: translate(50%, -50%) scale(1.1);\n  mix-blend-mode: hard-light;\n}\n\n:host .button ion-icon {\n  font-size: 7rem;\n  margin: auto;\n  display: block;\n}\n\n:host .button.loading {\n  padding: 0;\n}\n\n:host .button.playing {\n  width: 2.8rem;\n  height: 2.8rem;\n  top: 2.2rem;\n  right: 1.8rem;\n  padding: 0;\n  background: transparent;\n  transition: all .35s var(--ease) 0s, background .175s var(--ease) 0s;\n}\n\n:host .button.playing ion-icon {\n  font-size: 2.8rem;\n}\n\n:host::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 8rem;\n  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );\n  position: absolute;\n  z-index: 2;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n}\n";

const VideoInterview = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.color = "white";
        this.width = 800;
        this.height = 800;
        this.aspectRatio = 100;
        this.visualization = "bars2";
        this.randomId = Math.floor(Math.random() * 6) + 1;
        this.loaded = false;
        this.loading = false;
        this.seekable = false;
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
        this.visualizer = this.element.shadowRoot.querySelector('web-audio-visualizer');
        this.video = this.element.shadowRoot.querySelector('stellar-video');
    }
    handleUpdate(event) {
        this.playing = event.detail.playing;
        this.current = Math.abs(Math.round(event.detail.currentTime * 1000));
        this.duration = Math.round(event.detail.duration * 1000);
        update_interview_lines(this.interviewLines, this.cache, this.time);
    }
    get time() {
        return this.current;
    }
    async attachContext() {
        if (!this.context) {
            // @ts-ignore
            this.context = new (window.AudioContext || window.webkitAudioContext)();
            const src = this.context.createMediaElementSource(await this.video.videoElement());
            if (!this.visualizer) {
                this.visualizer = this.element.shadowRoot.querySelector('web-audio-visualizer');
            }
            const waanalyser = await this.visualizer.connect(this.context);
            await src.connect(waanalyser.analyser);
            waanalyser.analyser.connect(this.context.destination);
        }
    }
    async in() {
        await delay(1000);
        this.visible = true;
        await delay(100);
        this.visualizer = this.element.shadowRoot.querySelector('web-audio-visualizer');
        this.video = this.element.shadowRoot.querySelector('stellar-video');
        this.video.addEventListener('canplaythrough', () => {
            this.seekable = true;
        });
    }
    async out() {
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
        this.attachContext();
        if (this.video) {
            await this.video.toggle();
        }
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
        return (h("div", { class: "card", onDblClick: () => { this.handleClick(); } }, h("skeleton-img", { width: this.width, height: this.height, loading: true }), this.visible && h("section", null, h("stellar-video", { controls: false, playsinline: true, trackInView: false, onUpdate: (e) => { this.handleUpdate(e); } }, h("source", { src: this.src })), h("div", { class: "transcript" }, h("slot", null)), this.video && h("web-audio-visualizer", { for: `interview-${this.randomId}`, type: this.visualization, width: 2048, height: 1024, color: this.color }), h("button", { class: this.loading ? "loading button" : (this.playing ? "playing button" : "button"), onClick: () => { this.handleClick(); } }, h("ion-icon", { name: this.loading ? "sync" : (this.playing ? "pause" : "play"), class: this.loading ? "animation-spin" : "" })), h("h3", null, h("stellar-unit", { class: "current", value: this.current, from: "ms", to: "s", onClick: () => { this.handleCurrentClick(); } })), h("h3", null, h("stellar-unit", { class: "duration", value: this.duration, from: "ms", to: "s" })), this.seekable && h("stellar-progress", { value: this.current, max: this.duration, noease: true, blurable: false, slender: true, editable: true, onUpdate: (e) => { this.skipTo(e.detail.value); } })), h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this) })));
    }
    get element() { return getElement(this); }
    static get style() { return VideoInterviewCss; }
};

export { VideoInterview as stellar_video_interview };
