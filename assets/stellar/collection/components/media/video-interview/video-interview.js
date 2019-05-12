import ezClipboard from 'ez-clipboard';
import properties from 'css-custom-properties';
import { get_interview_lines, update_interview_lines } from '../interview/helpers';
import { delay } from '../../../utils';
export class VideoInterview {
    constructor() {
        this.randomId = Math.floor(Math.random() * 6) + 1;
        this.color = "white";
        this.width = 800;
        this.height = 800;
        this.aspectRatio = 100;
        this.visualization = "bars2";
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
        this.playing = event.detail.playing;
        this.current = Math.abs(Math.round(event.detail.currentTime * 1000));
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
        this.visualizer = this.element.shadowRoot.querySelector('web-audio-visualizer');
        this.video = this.element.shadowRoot.querySelector('stellar-video');
        this.video.addEventListener('canplaythrough', () => {
            this.seekable = true;
        });
    }
    async attachContext() {
        if (!this.context) {
            this.context = new AudioContext();
            const src = this.context.createMediaElementSource(this.video.video_tag);
            if (!this.visualizer) {
                this.visualizer = this.element.shadowRoot.querySelector('web-audio-visualizer');
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
        return (h("div", { class: "card", onDblClick: () => { this.handleClick(); } },
            !this.visible && h("div", null,
                h("skeleton-img", { width: 1050, height: 600, loading: true })),
            this.visible && h("section", null,
                h("stellar-video", { controls: false, autoplay: true, playsinline: true, trackInView: false, onTimeupdate: (e) => { this.handleTimeUpdate(e); } },
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
                this.seekable && h("stellar-progress", { value: this.current, max: this.duration, noease: true, blurable: false, slender: true, editable: true, onChange: (e) => { this.skipTo(e.detail.value); } }))));
    }
    static get is() { return "stellar-video-interview"; }
    static get encapsulation() { return "shadow"; }
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
        "seekable": {
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
    static get style() { return "/**style-placeholder:stellar-video-interview:**/"; }
}
