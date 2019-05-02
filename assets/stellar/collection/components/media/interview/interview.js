import ezClipboard from 'ez-clipboard';
import properties from 'css-custom-properties';
export class Interview {
    constructor() {
        this.randomId = Math.floor(Math.random() * 6) + 1;
        this.debug = false;
        this.color = "gray";
        this.playing = false;
        this.width = 800;
        this.height = 800;
        this.aspectRatio = 100;
        this.loaded = false;
        this.loading = false;
        this.duration = 1;
        this.current = 0;
        this.cache = new WeakMap();
        this.difference = (a, b) => Math.abs(a - b);
        this.limit = (min, max, value) => Math.max(Math.min(value, max), min);
        this.interval = (start, end, current) => this.difference(start, current) / this.difference(start, end);
        this.interpolate = (start, end, progress) => {
            const p = this.difference(start, end) * progress;
            return start > end ? start - p : start + p;
        };
    }
    componentWillLoad() {
        properties.set({
            "--width": `${this.width}px`,
            "--height": `${this.height}px`,
            "--aspectRatio": `${this.aspectRatio}%`
        }, this.element);
    }
    componentDidLoad() {
        this.update_interview_lines();
        this.audio = this.element.querySelector('web-audio');
        this.addIntersectionObserver();
    }
    addIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            this.io = new IntersectionObserver((data) => {
                if (data[0].isIntersecting) {
                }
                else {
                    this.handleOffScreen();
                }
            }, {
                threshold: [0]
            });
            this.io.observe(this.element);
        }
    }
    handleTimeUpdate(event) {
        this.current = Math.round(event.detail.time * 1000);
        this.duration = Math.round(event.detail.duration * 1000);
        this.update_interview_lines();
    }
    get_interview_lines() {
        const els = Array.from(this.element.querySelectorAll('.line'));
        this.interviewLines = els.map(el => {
            const offset = 0;
            const end = parseInt(el.dataset.end, 10);
            const start = parseInt(el.dataset.start, 10);
            const opacityStart = parseFloat(el.dataset.opacityStart);
            const opacityEnd = parseFloat(el.dataset.opacityEnd);
            const translateXStart = parseInt(el.dataset.translatexStart, 10);
            const translateXEnd = parseInt(el.dataset.translatexEnd, 10);
            const translateYStart = parseInt(el.dataset.translateyStart, 10);
            const translateYEnd = parseInt(el.dataset.translateyEnd, 10);
            const scaleStart = parseFloat(el.dataset.scaleStart);
            const scaleEnd = parseFloat(el.dataset.scaleEnd);
            const updates = {};
            if (!isNaN(opacityStart) && !isNaN(opacityEnd)) {
                updates["opacity"] = {
                    end: opacityEnd,
                    start: opacityStart
                };
            }
            if (!isNaN(translateXStart) && !isNaN(translateXEnd)) {
                updates["translateX"] = {
                    end: translateXEnd,
                    start: translateXStart
                };
            }
            if (!isNaN(translateYStart) && !isNaN(translateYEnd)) {
                updates["translateY"] = {
                    end: translateYEnd,
                    start: translateYStart
                };
            }
            if (!isNaN(scaleStart) && !isNaN(scaleEnd)) {
                updates["scale"] = {
                    end: scaleEnd,
                    start: scaleStart
                };
            }
            if (typeof end === 'undefined' ||
                typeof start === 'undefined' ||
                Object.keys(updates).length === 0) {
                return null;
            }
            return { el, end, offset, start, updates };
        }).filter(x => x);
        return this.interviewLines;
    }
    update_interview_lines() {
        const transformProp = this.prefixedTransformProp();
        const y = this.time();
        this.get_interview_lines().map(({ el, end, offset, start, updates }) => {
            const s = offset + start;
            const e = offset + end;
            const state = this.cache.get(el);
            if ((y >= s && y <= e) ||
                (state !== 'before' && y < s) ||
                (state !== 'after' && y > e)) {
                let translateX = 0;
                let translateY = 0;
                let scale = 1;
                const current = this.limit(s, e, y);
                const i = this.interval(s, e, current);
                if (updates.opacity) {
                    const { end, start } = updates.opacity;
                    const opacity = this.interpolate(start, end, i).toFixed(2);
                    el.style.opacity = opacity;
                }
                if (updates.translateX) {
                    const { end, start } = updates.translateX;
                    translateX = parseInt(this.interpolate(start, end, i), 10);
                }
                if (updates.translateY) {
                    const { end, start } = updates.translateY;
                    translateY = parseInt(this.interpolate(start, end, i), 10);
                }
                if (updates.scale) {
                    const { end, start } = updates.scale;
                    scale = this.interpolate(start, end, i).toFixed(2);
                }
                el.style[transformProp] =
                    `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
                if (y < s) {
                    this.cache.set(el, 'before');
                }
                else if (y > e) {
                    this.cache.set(el, 'after');
                }
                else {
                    this.cache.set(el, 'during');
                }
            }
        });
    }
    prefixedTransformProp() {
        const el = document.createElement('div');
        const vendors = ['Webkit', 'webkit', 'Moz', 'moz', 'ms', 'o'];
        if (el.style.transform != null) {
            return 'transform';
        }
        for (let v in vendors) {
            const prop = `${vendors[v]}Transform`;
            if (typeof el.style[prop] !== 'undefined') {
                return prop;
            }
        }
    }
    time() {
        return this.current;
    }
    handleInScreen(cb = () => { }) {
        this.loading = true;
        if (!this.loaded && !this.audio.is_prepared()) {
            this.audio.connect_the_world().then(() => {
                this.loaded = true;
                setTimeout(() => {
                    this.loading = false;
                    this.audio.source("interview").prepare();
                    this.duration = Math.round(this.audio.source("interview").getDuration() * 1000);
                    cb();
                }, 1000);
            });
        }
    }
    async handleOffScreen() {
        this.pause();
    }
    play() {
        if (this.audio) {
            if (this.audio.source("interview")) {
                this.audio.source("interview").play();
            }
            this.playing = this.audio.source("interview").playing;
        }
    }
    skipTo(time) {
        if (this.audio) {
            if (this.audio.source("interview")) {
                this.audio.source("interview").skipTo(time);
            }
            this.playing = this.audio.source("interview").playing;
        }
    }
    pause() {
        if (this.audio) {
            if (this.audio.source("interview")) {
                this.audio.source("interview").pause();
            }
            this.playing = this.audio.source("interview").playing;
        }
    }
    toggle() {
        if (this.audio) {
            if (this.audio.source("interview")) {
                this.audio.source("interview").toggle();
            }
            this.playing = this.audio.source("interview").playing;
        }
    }
    handleClick() {
        if (!this.audio.is_prepared()) {
            this.handleInScreen(() => {
                this.handleClick();
            });
        }
        else {
            this.toggle();
        }
        if (this.current === this.duration) {
            this.skipTo(0);
        }
    }
    handleCurrentClick() {
        ezClipboard.copyPlain(this.current);
    }
    render() {
        return (h("div", { class: "card", onDblClick: () => { this.handleClick(); } },
            h("section", null,
                h("slot", null),
                h("div", { class: "transcript" },
                    h("slot", { name: "transcript" })),
                h("web-audio", { name: `interview-${this.randomId}` },
                    h("web-audio-source", { src: this.src, name: "interview" })),
                this.debug && h("web-audio-debugger", null),
                h("web-audio-visualizer", { for: `interview-${this.randomId}`, type: "bars", color: this.color }),
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
        "color": {
            "type": String,
            "attr": "color"
        },
        "current": {
            "state": true
        },
        "debug": {
            "type": Boolean,
            "attr": "debug"
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
