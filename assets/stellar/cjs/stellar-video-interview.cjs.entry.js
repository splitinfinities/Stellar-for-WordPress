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

class VideoInterview {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
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
        this.visualizer = this.element.shadowRoot.querySelector('web-audio-visualizer');
        this.video = this.element.shadowRoot.querySelector('stellar-video');
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
        this.playing = event.detail.playing;
        this.current = Math.abs(Math.round(event.detail.currentTime * 1000));
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
        this.visualizer = this.element.shadowRoot.querySelector('web-audio-visualizer');
        this.video = this.element.shadowRoot.querySelector('stellar-video');
        this.video.addEventListener('canplaythrough', () => {
            this.seekable = true;
        });
    }
    async attachContext() {
        if (!this.context) {
            // @ts-ignore
            this.context = new (window.AudioContext || window.webkitAudioContext)();
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
        __chunk_13.ezClipboard.copyPlain(this.current);
    }
    render() {
        return (__chunk_1.h("div", { class: "card", onDblClick: () => { this.handleClick(); } }, __chunk_1.h("skeleton-img", { width: this.width, height: this.height, loading: true }), this.visible && __chunk_1.h("section", null, __chunk_1.h("stellar-video", { controls: false, playsinline: true, trackInView: false, onTimeupdate: (e) => { this.handleTimeUpdate(e); } }, __chunk_1.h("source", { src: this.src })), __chunk_1.h("div", { class: "transcript" }, __chunk_1.h("slot", { name: "transcript" })), this.video && __chunk_1.h("web-audio-visualizer", { for: `interview-${this.randomId}`, type: this.visualization, width: 1024, height: 1024, color: this.color }), __chunk_1.h("button", { class: this.loading ? "loading button" : (this.playing ? "playing button" : "button"), onClick: () => { this.handleClick(); } }, __chunk_1.h("stellar-asset", { name: this.loading ? "sync" : (this.playing ? "pause" : "play"), class: this.loading ? "animation-spin" : "" })), __chunk_1.h("h3", null, __chunk_1.h("stellar-unit", { class: "current", value: this.current, from: "ms", to: "s", onClick: () => { this.handleCurrentClick(); } })), __chunk_1.h("h3", null, __chunk_1.h("stellar-unit", { class: "duration", value: this.duration, from: "ms", to: "s" })), this.seekable && __chunk_1.h("stellar-progress", { value: this.current, max: this.duration, noease: true, blurable: false, slender: true, editable: true, onChange: (e) => { this.skipTo(e.detail.value); } }))));
    }
    get element() { return __chunk_1.getElement(this); }
    static get style() { return ":host{--width:800px;--height:800px;display:block;position:relative}:host skeleton-img{margin:0}:host div.card{position:relative;display:block;width:auto;height:auto;margin:auto;overflow:hidden}:host div.card section{height:inherit;display:block;position:absolute;height:100%;top:0;right:0;left:0;padding-top:0!important}:host web-audio-visualizer{position:absolute;top:auto;left:0;right:0;bottom:0;width:100%;height:60%;pointer-events:none;z-index:2}:host web-audio-visualizer[type=circle]{height:100%}:host web-audio-visualizer[type=bars2]{width:80%;left:10%;right:10%}:host stellar-360-image,:host stellar-360-video,:host stellar-image,:host stellar-video{--gradient:radial-gradient(circle at 30% 107%,var(--theme-base5) 0%,var(--theme-base8) 5%,var(--theme-complement8) 45%,var(--theme-complement5) 60%,var(--theme-base5) 90%);position:relative;z-index:1;display:block}:host stellar-progress{position:absolute;top:0;left:0;width:100%;z-index:9;--border-radius:0}:host stellar-progress .progress{border:0}:host h3{color:#fff;margin:0}:host stellar-unit{position:absolute;bottom:1rem;z-index:4;color:#fff!important;font-weight:700}:host stellar-unit.current{left:1rem}:host stellar-unit.duration{right:1rem}:host .transcript{position:absolute;bottom:0;width:70%;left:15%;z-index:5;pointer-events:none}:host .button{position:absolute;-webkit-transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;width:9rem;height:9rem;top:50%;right:50%;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);border-radius:100%;padding:0;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#fff;text-align:center;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;z-index:4;outline:0;cursor:pointer;padding-left:1rem;mix-blend-mode:soft-light}:host .button:focus,:host .button:hover{-webkit-transform:translate(50%,-50%) scale(1.1);transform:translate(50%,-50%) scale(1.1);mix-blend-mode:hard-light}:host .button stellar-asset{font-size:7rem;margin:auto;display:block}:host .button.loading{padding:0}:host .button.playing{width:2.8rem;height:2.8rem;top:2.2rem;right:1.8rem;padding:0;background:transparent;-webkit-transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s}:host .button.playing stellar-asset{font-size:2.8rem}:host:after{content:\"\";display:block;width:100%;height:8rem;background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.65)));background:linear-gradient(180deg,transparent 0,rgba(0,0,0,.65));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#00000000\",endColorstr=\"#a6000000\",GradientType=0);position:absolute;z-index:2;bottom:0;left:0;right:0}"; }
}

exports.stellar_video_interview = VideoInterview;
