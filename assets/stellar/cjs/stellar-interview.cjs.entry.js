'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-f620c3d3.js');
require('./chunk-ee96ca86.js');
const __chunk_3 = require('./chunk-61a48f92.js');
const __chunk_10 = require('./chunk-73f3d344.js');
require('./chunk-73f7b312.js');
require('./chunk-e87c7d7e.js');
const __chunk_13 = require('./chunk-bd36b48f.js');
const __chunk_14 = require('./chunk-43be6af3.js');

class Interview {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
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
        __chunk_3.properties.set({
            "--width": `${this.width}px`,
            "--height": `${this.height}px`,
            "--aspectRatio": `${this.aspectRatio}%`
        }, this.element);
    }
    async componentDidLoad() {
        if (!this.interviewLines) {
            this.interviewLines = __chunk_14.get_interview_lines(this.element);
        }
        __chunk_14.update_interview_lines(this.interviewLines, this.cache, this.time);
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
        this.current = Math.abs(Math.round(event.detail.time * 1000));
        this.duration = Math.round(event.detail.duration * 1000);
        __chunk_14.update_interview_lines(this.interviewLines, this.cache, this.time);
    }
    get time() {
        return this.current;
    }
    async handleInScreen() {
        await __chunk_10.delay(1000);
        this.visible = true;
        await __chunk_10.delay(100);
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
        __chunk_13.ezClipboard.copyPlain(this.current);
    }
    render() {
        return (__chunk_1.h("div", { class: "card", onDblClick: () => { this.handleClick(); } }, !this.visible && __chunk_1.h("div", null, __chunk_1.h("skeleton-img", { width: this.width, height: this.height, loading: true }), __chunk_1.h("div", { style: { "display": "none" } }, __chunk_1.h("slot", null))), this.visible && __chunk_1.h("section", null, __chunk_1.h("slot", null), __chunk_1.h("div", { class: "transcript" }, __chunk_1.h("slot", { name: "transcript" })), __chunk_1.h("web-audio", { name: `interview-${this.randomId}` }, __chunk_1.h("web-audio-source", { src: this.src, name: "interview" })), __chunk_1.h("web-audio-visualizer", { for: `interview-${this.randomId}`, type: this.visualization, width: this.width, height: this.height, color: this.color }), __chunk_1.h("button", { class: this.loading ? "loading button" : (this.playing ? "playing button" : "button"), onClick: () => { this.handleClick(); } }, __chunk_1.h("stellar-asset", { name: this.loading ? "sync" : (this.playing ? "pause" : "play"), class: this.loading ? "animation-spin" : "" })), __chunk_1.h("h3", null, __chunk_1.h("stellar-unit", { class: "current", value: this.current, from: "ms", to: "s", onClick: () => { this.handleCurrentClick(); } })), __chunk_1.h("h3", null, __chunk_1.h("stellar-unit", { class: "duration", value: this.duration, from: "ms", to: "s" })), __chunk_1.h("stellar-progress", { value: this.current, max: this.duration, noease: true, blurable: false, slender: true, editable: true, onChange: (e) => { this.skipTo(e.detail.value); } }))));
    }
    get element() { return __chunk_1.getElement(this); }
    static get style() { return "stellar-interview{--width:800px;--height:800px;display:block}stellar-interview div.card{position:relative;display:block;width:auto;height:auto;margin:auto;overflow:hidden}stellar-interview div.card section{height:inherit;display:block;position:relative;padding-top:0!important}stellar-interview web-audio-visualizer{position:absolute;top:auto;left:0;right:0;bottom:0;width:100%;height:60%;pointer-events:none;z-index:2}stellar-interview web-audio-visualizer[type=circle]{height:100%}stellar-interview web-audio-visualizer[type=bars2]{width:80%;left:10%;right:10%}stellar-interview stellar-360-image,stellar-interview stellar-360-video,stellar-interview stellar-image,stellar-interview stellar-video{--gradient:radial-gradient(circle at 30% 107%,var(--theme-base5) 0%,var(--theme-base8) 5%,var(--theme-complement8) 45%,var(--theme-complement5) 60%,var(--theme-base5) 90%);position:relative;z-index:1;display:block}stellar-interview stellar-progress{position:absolute;top:0;left:0;width:100%;z-index:9}stellar-interview stellar-progress .progress{border:0}stellar-interview h3{color:#fff}stellar-interview stellar-unit{position:absolute;bottom:1rem;z-index:2;color:#fff!important;font-weight:700}stellar-interview stellar-unit.current{left:1rem}stellar-interview stellar-unit.duration{right:1rem}stellar-interview .transcript{position:absolute;bottom:0;width:70%;left:15%;z-index:5;pointer-events:none}stellar-interview .button{position:absolute;-webkit-transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;width:9rem;height:9rem;top:50%;right:50%;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);border-radius:100%;padding:0;border:0;z-index:3;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#fff;text-align:center;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;z-index:4;outline:0;cursor:pointer;padding-left:1rem;mix-blend-mode:soft-light}stellar-interview .button:focus,stellar-interview .button:hover{-webkit-transform:translate(50%,-50%) scale(1.1);transform:translate(50%,-50%) scale(1.1);mix-blend-mode:hard-light}stellar-interview .button stellar-asset{font-size:7rem;margin:auto;display:block}stellar-interview .button.loading{padding:0}stellar-interview .button.playing{width:2.8rem;height:2.8rem;top:2.2rem;right:1.8rem;padding:0;background:transparent;-webkit-transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s}stellar-interview .button.playing stellar-asset{font-size:2.8rem}"; }
}

exports.stellar_interview = Interview;
