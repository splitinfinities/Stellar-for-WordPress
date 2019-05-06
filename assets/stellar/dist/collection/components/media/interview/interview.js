import ezClipboard from 'ez-clipboard';
import properties from 'css-custom-properties';
import { get_interview_lines, update_interview_lines } from './helpers';
import { delay } from '../../../utils';
export class Interview {
    constructor() {
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
        this.current = Math.round(event.detail.time * 1000);
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
        this.audio = this.element.querySelector('web-audio');
        this.audio_source = await this.audio.source("interview");
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
    async handleOffScreen() {
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
        return (h("div", { class: "card", onDblClick: () => { this.handleClick(); } },
            !this.visible && h("div", null,
                h("skeleton-img", { width: 1050, height: 600, loading: true }),
                h("div", { style: { "display": "none" } },
                    h("slot", null))),
            this.visible && h("section", null,
                h("slot", null),
                h("div", { class: "transcript" },
                    h("slot", { name: "transcript" })),
                h("web-audio", { name: `interview-${this.randomId}` },
                    h("web-audio-source", { src: this.src, name: "interview" })),
                h("web-audio-visualizer", { for: `interview-${this.randomId}`, type: this.visualization, width: 1024, height: 1024, color: this.color }),
                h("button", { class: this.loading ? "loading button" : (this.playing ? "playing button" : "button"), onClick: () => { this.handleClick(); } },
                    h("stellar-asset", { name: this.loading ? "sync" : (this.playing ? "pause" : "play"), class: this.loading ? "animation-spin" : "" })),
                h("h3", null,
                    h("stellar-unit", { class: "current", value: this.current, from: "ms", to: "s", onClick: () => { this.handleCurrentClick(); } })),
                h("h3", null,
                    h("stellar-unit", { class: "duration", value: this.duration, from: "ms", to: "s" })),
                h("stellar-progress", { value: this.current, max: this.duration, noease: true, blurable: false, slender: true, editable: true, onValueChange: (e) => { this.skipTo(e.detail.value); } }))));
    }
    static get is() { return "stellar-interview"; }
    static get properties() { return {
        "aspectRatio": {
            "type": Number,
            "attr": "aspect-ratio",
            "mutable": true
        },
        "audio": {
            "state": true
        },
        "audio_source": {
            "state": true
        },
        "color": {
            "type": String,
            "attr": "color"
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
        "visible": {
            "state": true
        },
        "visualization": {
            "type": String,
            "attr": "visualization",
            "mutable": true
        },
        "width": {
            "type": Number,
            "attr": "width",
            "mutable": true
        }
    }; }
    static get listeners() { return [{
            "name": "timeupdate",
            "method": "handleTimeUpdate"
        }]; }
    static get style() { return "/**style-placeholder:stellar-interview:**/"; }
}
