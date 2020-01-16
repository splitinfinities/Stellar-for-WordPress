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

const InterviewCss = "stellar-interview {\n  --width: 800px;\n  --height: 800px;\n  display: block;\n  contain: content;\n}\n\nstellar-interview div.card {\n  position: relative;\n  display: block;\n  width: auto;\n  height: auto;\n  margin: auto;\n  overflow: hidden;\n}\n\nstellar-interview div.card section {\n  height: inherit;\n  display: block;\n  position: relative;\n  padding-top: 0 !important;\n}\n\nstellar-interview web-audio-visualizer {\n  position: absolute;\n  top: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 60%;\n  pointer-events: none;\n  z-index: 2;\n}\n\nstellar-interview web-audio-visualizer[type=\"circle\"] {\n  height: 100%;\n}\n\n\nstellar-interview web-audio-visualizer[type=\"bars2\"] {\n  width: 80%;\n  left: 10%;\n  right: 10%;\n}\n\nstellar-interview stellar-image,\nstellar-interview stellar-360-image,\nstellar-interview stellar-video,\nstellar-interview stellar-360-video {\n  --gradient: radial-gradient(circle at 30% 107%, var(--theme-base5) 0%, var(--theme-base8) 5%, var(--theme-complement8) 45%, var(--theme-complement5) 60%, var(--theme-base5) 90%);\n  position: relative;\n  z-index: 1;\n  display: block;\n}\n\nstellar-interview stellar-progress {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 9;\n}\n\nstellar-interview stellar-progress .progress {\n  border: 0;\n}\n\nstellar-interview h3 {\n  color: white;\n}\n\nstellar-interview stellar-unit {\n  position: absolute;\n  bottom: 1rem;\n  z-index: 2;\n  color: white !important;\n  font-weight: 700;\n}\n\nstellar-interview stellar-unit.current {\n  left: 1rem;\n}\n\nstellar-interview stellar-unit.duration {\n  right: 1rem;\n}\n\nstellar-interview .transcript {\n  position: absolute;\n  bottom: 0;\n  width: 70%;\n  left: 15%;\n  z-index: 5;\n  pointer-events: none;\n}\n\nstellar-interview .button {\n  position: absolute;\n  transition: all .35s var(--ease) 0s, background .175s var(--ease) 0s;\n  width: 9rem;\n  height: 9rem;\n  top: 50%;\n  right: 50%;\n  transform: translate(50%, -50%);\n  border-radius: 100%;\n  padding: 0;\n  border: 0;\n  z-index: 3;\n  appearance: none;\n  background: white;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 4;\n  outline: 0;\n  cursor: pointer;\n  padding-left: 1rem;\n  mix-blend-mode: soft-light;\n}\n\nstellar-interview .button:hover,\nstellar-interview .button:focus {\n  transform: translate(50%, -50%) scale(1.1);\n  mix-blend-mode: hard-light;\n}\n\nstellar-interview .button ion-icon {\n  font-size: 7rem;\n  margin: auto;\n  display: block;\n}\n\nstellar-interview .button.loading {\n  padding: 0;\n}\n\nstellar-interview .button.playing {\n  width: 2.8rem;\n  height: 2.8rem;\n  top: 2.2rem;\n  right: 1.8rem;\n  padding: 0;\n  background: transparent;\n  transition: all .35s var(--ease) 0s, background .175s var(--ease) 0s;\n}\n\nstellar-interview .button.playing ion-icon {\n  font-size: 2.8rem;\n}\n";

const Interview = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.randomId = Math.floor(Math.random() * 6) + 1;
        this.color = "white";
        this.playing = false;
        this.width = 800;
        this.height = 800;
        this.aspectRatio = 100;
        this.visualization = "bars2";
        this.loaded = false;
        this.loading = false;
        this.visible = false;
        this.duration = 0;
        this.current = 0;
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
    }
    handleUpdate(event) {
        this.current = Math.abs(Math.round(event.detail.time * 1000));
        this.duration = Math.round(event.detail.duration * 1000);
        update_interview_lines(this.interviewLines, this.cache, this.time);
    }
    get time() {
        return this.current;
    }
    async attachContext() {
        if (!this.loaded) {
            this.loading = true;
            await this.audio.connect_the_world();
            if (!this.audio_source) {
                this.audio_source = await this.audio.source("interview");
                await this.audio_source.prepare();
            }
            const duration = await this.audio_source.getDuration();
            this.duration = Math.round(duration * 1000);
            this.loaded = true;
            this.loading = false;
        }
    }
    async in() {
        await delay(1000);
        this.visible = true;
        await delay(100);
        this.audio = this.element.querySelector('web-audio');
        this.audio_source = await this.audio.source("interview");
    }
    async out() {
        this.pause();
    }
    async play() {
        if (this.audio) {
            if (this.audio_source) {
                await this.audio_source.play();
                this.playing = this.audio_source.playing;
            }
        }
    }
    async skipTo(time) {
        if (this.audio) {
            if (this.audio_source) {
                await this.audio_source.skipTo(time);
                this.playing = this.audio_source.playing;
            }
        }
    }
    async pause() {
        if (this.audio) {
            if (this.audio_source) {
                await this.audio_source.pause();
                this.playing = this.audio_source.playing;
            }
        }
    }
    async toggle() {
        if (this.audio) {
            if (this.audio_source) {
                await this.audio_source.toggle();
                this.playing = this.audio_source.playing;
            }
        }
    }
    async handleClick() {
        await this.attachContext();
        await this.toggle();
        if (this.current === this.duration) {
            await this.skipTo(0);
        }
    }
    handleCurrentClick() {
        ezClipboard.copyPlain(this.current);
    }
    render() {
        return (h("div", { class: "card", onDblClick: () => { this.handleClick(); } }, !this.visible && h("div", null, h("skeleton-img", { width: this.width, height: this.height, loading: true }), h("div", { style: { "display": "none" } }, h("slot", null))), this.visible && h("section", null, h("slot", null), h("div", { class: "transcript" }, h("slot", { name: "transcript" })), h("web-audio", { name: `interview-${this.randomId}` }, h("web-audio-source", { src: this.src, name: "interview" })), h("web-audio-visualizer", { for: `interview-${this.randomId}`, type: this.visualization, width: this.width, height: this.height, color: this.color }), h("button", { class: this.loading ? "loading button" : (this.playing ? "playing button" : "button"), onClick: () => { this.handleClick(); } }, h("ion-icon", { name: this.loading ? "sync" : (this.playing ? "pause" : "play"), class: this.loading ? "animation-spin" : "" })), h("h3", null, h("stellar-unit", { class: "current", value: this.current, from: "ms", to: "s", onClick: () => { this.handleCurrentClick(); } })), h("h3", null, h("stellar-unit", { class: "duration", value: this.duration, from: "ms", to: "s" })), h("stellar-progress", { value: this.current, max: this.duration, noease: true, blurable: false, slender: true, editable: true, onUpdate: (e) => { this.skipTo(e.detail.value); } })), h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this) })));
    }
    get element() { return getElement(this); }
    static get style() { return InterviewCss; }
};

export { Interview as stellar_interview };
