import { h } from '../stellar-core.core.js';

import { a as createCommonjsModule, b as commonjsGlobal } from './chunk-7646164d.js';
import { a as properties } from './chunk-340b8099.js';
import './chunk-9f751763.js';
import { a as blurringEase } from './chunk-a955a305.js';
import './chunk-5ce278cb.js';
import { a as ezClipboard } from './chunk-f527ab08.js';
import { b as raf } from './chunk-13dbd937.js';
import { a as delay } from './chunk-ee695030.js';

class Interview {
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
                if (data[0].isIntersecting) ;
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
    static get style() { return "stellar-interview{--width:800px;--height:800px;display:block}stellar-interview div.card{position:relative;display:block;width:auto;height:auto;margin:auto;overflow:hidden}stellar-interview div.card section{height:inherit;display:block;position:relative;padding-top:0!important}stellar-interview web-audio-visualizer[type=bars]{position:absolute;top:auto;left:0;right:0;bottom:0;width:100%;height:60%;pointer-events:none;z-index:2}stellar-interview stellar-360-image,stellar-interview stellar-360-video,stellar-interview stellar-image,stellar-interview stellar-video{--gradient:radial-gradient(circle at 30% 107%,var(--theme-base5) 0%,var(--theme-base8) 5%,var(--theme-complement8) 45%,var(--theme-complement5) 60%,var(--theme-base5) 90%);position:relative;z-index:1;display:block}stellar-interview stellar-progress{position:absolute;top:0;left:0;width:100%;z-index:9}stellar-interview stellar-progress .progress{border:0}stellar-interview stellar-unit{position:absolute;bottom:1rem;z-index:2;color:#fff!important;font-weight:700}stellar-interview stellar-unit.current{left:1rem}stellar-interview stellar-unit.duration{right:1rem}stellar-interview .transcript{position:absolute;bottom:0;width:70%;left:15%;z-index:5;pointer-events:none}stellar-interview .button{position:absolute;-webkit-transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;width:9rem;height:9rem;top:50%;right:50%;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);border-radius:100%;padding:0;border:0;z-index:3;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#fff;text-align:center;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;z-index:4;outline:0;cursor:pointer;padding-left:1rem;mix-blend-mode:soft-light}stellar-interview .button:focus,stellar-interview .button:hover{-webkit-transform:translate(50%,-50%) scale(1.1);transform:translate(50%,-50%) scale(1.1);mix-blend-mode:hard-light}stellar-interview .button stellar-asset{font-size:7rem;margin:auto;display:block}stellar-interview .button.loading{padding:0}stellar-interview .button.playing{width:2.8rem;height:2.8rem;top:2.2rem;right:1.8rem;padding:0;background:transparent;-webkit-transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s}stellar-interview .button.playing stellar-asset{font-size:2.8rem}"; }
}

class Progress {
    constructor() {
        this.slender = false;
        this.max = 100;
        this.editable = false;
        this.noease = false;
        this.rounded = false;
        this.value = 0;
        this.blurable = true;
        this.wrapper = "stellar-blur";
        this.blur = 0;
        this.ease = blurringEase({
            end: 20,
            start: -1,
            duration: 200,
            tick: (args) => {
                this.blur = args.value;
            },
            complete: () => {
                this.blur = 0;
                this.ease.stop();
            },
        });
    }
    componentWillLoad() {
        if (!this.blurable) {
            this.wrapper = "div";
        }
    }
    observeValue() {
        if (this.blurable) {
            this.ease.start();
        }
    }
    handleClick(e) {
        if (this.editable) {
            var bounding = this.element.getBoundingClientRect();
            var widthClicked = e.pageX - bounding.left;
            var totalWidth = bounding.width;
            var calc = (widthClicked / totalWidth * this.max);
            var rounded = Math.round(calc * 1e2) / 1e2;
            console.log(`bounding: ${bounding}`);
            console.log(`widthClicked: ${widthClicked}`);
            console.log(`totalWidth: ${totalWidth}`);
            console.log(`max: ${this.max}`);
            console.log(`calc: ${calc}`);
            console.log(`rounded: ${rounded}`);
            if (this.rounded) {
                rounded = Math.ceil(rounded);
            }
            this.value = rounded;
            this.valueChange.emit({
                value: this.value
            });
        }
    }
    progress() {
        let progress = (this.value / this.max) * 100;
        progress = progress < 100 ? progress : 100;
        progress = progress > 0 ? progress : 0;
        return progress;
    }
    render() {
        return (h(this.wrapper, { class: "progress", horizontal: this.blur, onClick: (e) => { this.handleClick(e); } },
            h("div", { class: "status", style: { transform: `translate(${this.progress()}%, 0)` } })));
    }
    static get is() { return "stellar-progress"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "blur": {
            "state": true
        },
        "blurable": {
            "type": Boolean,
            "attr": "blurable"
        },
        "ease": {
            "state": true
        },
        "editable": {
            "type": Boolean,
            "attr": "editable",
            "reflectToAttr": true
        },
        "element": {
            "elementRef": true
        },
        "max": {
            "type": Number,
            "attr": "max",
            "reflectToAttr": true
        },
        "noease": {
            "type": Boolean,
            "attr": "noease",
            "reflectToAttr": true
        },
        "rounded": {
            "type": Boolean,
            "attr": "rounded",
            "reflectToAttr": true
        },
        "slender": {
            "type": Boolean,
            "attr": "slender",
            "reflectToAttr": true
        },
        "value": {
            "type": Number,
            "attr": "value",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["observeValue"]
        },
        "wrapper": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "valueChange",
            "method": "valueChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-stellar-progress-h, .sc-stellar-progress-h   *.sc-stellar-progress, .sc-stellar-progress-h   .sc-stellar-progress:after, .sc-stellar-progress-h   .sc-stellar-progress:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-progress-h{display:block;position:relative;overflow:hidden;--border-radius:0.3rem}.sc-stellar-progress-h   .blur-content.sc-stellar-progress{display:block;height:100%}[editable].sc-stellar-progress-h{cursor:pointer}.sc-stellar-progress-h   .progress.sc-stellar-progress{display:block;position:relative;-webkit-transition:all .25s var(--ease) 0ms;transition:all .25s var(--ease) 0ms;background:var(--gray1);width:100%;height:.6rem;border-radius:var(--border-radius);overflow:hidden}[editable].sc-stellar-progress-h:hover   .progress.sc-stellar-progress{height:2.4rem}.sc-stellar-progress-h   .status.sc-stellar-progress{position:absolute;top:0;right:0;bottom:0;left:-100%;-webkit-transition:all .35s var(--ease,ease-in-out) 0ms;transition:all .35s var(--ease,ease-in-out) 0ms;background:var(--theme-base5,var(--gray5));width:100%}[slender].sc-stellar-progress-h   .progress.sc-stellar-progress{border:0;height:.2rem}[slender][editable].sc-stellar-progress-h:hover   .progress.sc-stellar-progress{height:.4rem}[noease].sc-stellar-progress-h   .progress.sc-stellar-progress, [noease].sc-stellar-progress-h   .status.sc-stellar-progress{-webkit-transition:none!important;transition:none!important}.dark-mode.sc-stellar-progress-h -no-combinator.sc-stellar-progress-h   .progress.sc-stellar-progress, .dark-mode   .sc-stellar-progress-h -no-combinator.sc-stellar-progress-h   .progress.sc-stellar-progress{background:var(--theme-base9)}"; }
}

class WebAudioDebugger {
    constructor() {
        this.history = [];
        this.count = 50;
    }
    addHistory(string) {
        let our_history = [
            string,
            ...this.history
        ];
        if (our_history.length > this.count) {
            this.history = our_history.slice(1, this.count);
        }
        else {
            this.history = our_history;
        }
    }
    render() {
        return (h("div", null, this.history.map((log) => h("div", null,
            h("p", null, log)))));
    }
    static get is() { return "web-audio-debugger"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "addHistory": {
            "method": true
        },
        "count": {
            "type": Number,
            "attr": "count"
        },
        "history": {
            "state": true
        }
    }; }
    static get style() { return "web-audio-debugger.sc-web-audio-debugger{display:block;position:fixed;top:0;right:0;width:160px;height:300px;overflow:auto;text-align:right;padding:1rem;border:2px solid #000}web-audio-debugger.sc-web-audio-debugger   p.sc-web-audio-debugger{font-size:12px;margin:0 0 1em 0}"; }
}

class BufferLoader {
    constructor(context, urlList, callback) {
        this.loadBuffer = function (url, index) {
            var request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.responseType = "arraybuffer";
            var loader = this;
            request.onload = function () {
                loader.context.decodeAudioData(request.response, function (buffer) {
                    if (!buffer) {
                        alert('error decoding file data: ' + url);
                        return;
                    }
                    loader.bufferList[index] = buffer;
                    if (++loader.loadCount == loader.urlList.length)
                        loader.onload(loader.bufferList);
                }, function (error) {
                    console.error('decodeAudioData error', error);
                });
            };
            request.onerror = function () {
                alert('BufferLoader: XHR error');
            };
            request.send();
        };
        this.load = function () {
            for (var i = 0; i < this.urlList.length; ++i) {
                this.loadBuffer(this.urlList[i], i);
            }
        };
        this.context = context;
        this.urlList = urlList;
        this.onload = callback;
        this.bufferList = new Array();
        this.loadCount = 0;
    }
}

var webmidi_min = createCommonjsModule(function (module) {
/*

WebMidi v2.3.3

WebMidi.js helps you tame the Web MIDI API. Send and receive MIDI messages with ease. Control instruments with user-friendly functions (playNote, sendPitchBend, etc.). React to MIDI input with simple event listeners (noteon, pitchbend, controlchange, etc.).
https://github.com/djipco/webmidi


The MIT License (MIT)

Copyright (c) 2015-2018, Jean-Philippe Côté

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

!function(scope){function WebMidi(){if(WebMidi.prototype._singleton)throw new Error("WebMidi is a singleton, it cannot be instantiated directly.");WebMidi.prototype._singleton=this,this._inputs=[],this._outputs=[],this._userHandlers={},this._stateChangeQueue=[],this._processingStateChange=!1,this._midiInterfaceEvents=["connected","disconnected"],this._notes=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],this._semitones={C:0,D:2,E:4,F:5,G:7,A:9,B:11},Object.defineProperties(this,{MIDI_SYSTEM_MESSAGES:{value:{sysex:240,timecode:241,songposition:242,songselect:243,tuningrequest:246,sysexend:247,clock:248,start:250,"continue":251,stop:252,activesensing:254,reset:255,midimessage:0,unknownsystemmessage:-1},writable:!1,enumerable:!0,configurable:!1},MIDI_CHANNEL_MESSAGES:{value:{noteoff:8,noteon:9,keyaftertouch:10,controlchange:11,channelmode:11,programchange:12,channelaftertouch:13,pitchbend:14},writable:!1,enumerable:!0,configurable:!1},MIDI_REGISTERED_PARAMETER:{value:{pitchbendrange:[0,0],channelfinetuning:[0,1],channelcoarsetuning:[0,2],tuningprogram:[0,3],tuningbank:[0,4],modulationrange:[0,5],azimuthangle:[61,0],elevationangle:[61,1],gain:[61,2],distanceratio:[61,3],maximumdistance:[61,4],maximumdistancegain:[61,5],referencedistanceratio:[61,6],panspreadangle:[61,7],rollangle:[61,8]},writable:!1,enumerable:!0,configurable:!1},MIDI_CONTROL_CHANGE_MESSAGES:{value:{bankselectcoarse:0,modulationwheelcoarse:1,breathcontrollercoarse:2,footcontrollercoarse:4,portamentotimecoarse:5,dataentrycoarse:6,volumecoarse:7,balancecoarse:8,pancoarse:10,expressioncoarse:11,effectcontrol1coarse:12,effectcontrol2coarse:13,generalpurposeslider1:16,generalpurposeslider2:17,generalpurposeslider3:18,generalpurposeslider4:19,bankselectfine:32,modulationwheelfine:33,breathcontrollerfine:34,footcontrollerfine:36,portamentotimefine:37,dataentryfine:38,volumefine:39,balancefine:40,panfine:42,expressionfine:43,effectcontrol1fine:44,effectcontrol2fine:45,holdpedal:64,portamento:65,sustenutopedal:66,softpedal:67,legatopedal:68,hold2pedal:69,soundvariation:70,resonance:71,soundreleasetime:72,soundattacktime:73,brightness:74,soundcontrol6:75,soundcontrol7:76,soundcontrol8:77,soundcontrol9:78,soundcontrol10:79,generalpurposebutton1:80,generalpurposebutton2:81,generalpurposebutton3:82,generalpurposebutton4:83,reverblevel:91,tremololevel:92,choruslevel:93,celestelevel:94,phaserlevel:95,databuttonincrement:96,databuttondecrement:97,nonregisteredparametercoarse:98,nonregisteredparameterfine:99,registeredparametercoarse:100,registeredparameterfine:101},writable:!1,enumerable:!0,configurable:!1},MIDI_CHANNEL_MODE_MESSAGES:{value:{allsoundoff:120,resetallcontrollers:121,localcontrol:122,allnotesoff:123,omnimodeoff:124,omnimodeon:125,monomodeon:126,polymodeon:127},writable:!1,enumerable:!0,configurable:!1},octaveOffset:{value:0,writable:!0,enumerable:!0,configurable:!1}}),Object.defineProperties(this,{supported:{enumerable:!0,get:function(){return "requestMIDIAccess"in navigator}},enabled:{enumerable:!0,get:function(){return void 0!==this["interface"]}.bind(this)},inputs:{enumerable:!0,get:function(){return this._inputs}.bind(this)},outputs:{enumerable:!0,get:function(){return this._outputs}.bind(this)},sysexEnabled:{enumerable:!0,get:function(){return !(!this["interface"]||!this["interface"].sysexEnabled)}.bind(this)},time:{enumerable:!0,get:function(){return performance.now()}}});}function Input(midiInput){var that=this;this._userHandlers={channel:{},system:{}},this._midiInput=midiInput,Object.defineProperties(this,{connection:{enumerable:!0,get:function(){return that._midiInput.connection}},id:{enumerable:!0,get:function(){return that._midiInput.id}},manufacturer:{enumerable:!0,get:function(){return that._midiInput.manufacturer}},name:{enumerable:!0,get:function(){return that._midiInput.name}},state:{enumerable:!0,get:function(){return that._midiInput.state}},type:{enumerable:!0,get:function(){return that._midiInput.type}}}),this._initializeUserHandlers(),this._midiInput.onmidimessage=this._onMidiMessage.bind(this);}function Output(midiOutput){var that=this;this._midiOutput=midiOutput,Object.defineProperties(this,{connection:{enumerable:!0,get:function(){return that._midiOutput.connection}},id:{enumerable:!0,get:function(){return that._midiOutput.id}},manufacturer:{enumerable:!0,get:function(){return that._midiOutput.manufacturer}},name:{enumerable:!0,get:function(){return that._midiOutput.name}},state:{enumerable:!0,get:function(){return that._midiOutput.state}},type:{enumerable:!0,get:function(){return that._midiOutput.type}}});}var wm=new WebMidi;WebMidi.prototype.enable=function(callback,sysex){return this.enabled?void 0:this.supported?void navigator.requestMIDIAccess({sysex:sysex}).then(function(midiAccess){function onPortsOpen(){clearTimeout(promiseTimeout),this._updateInputsAndOutputs(),this["interface"].onstatechange=this._onInterfaceStateChange.bind(this),"function"==typeof callback&&callback.call(this),events.forEach(function(event){this._onInterfaceStateChange(event);}.bind(this));}var promiseTimeout,events=[],promises=[];this["interface"]=midiAccess,this._resetInterfaceUserHandlers(),this["interface"].onstatechange=function(e){events.push(e);};for(var inputs=midiAccess.inputs.values(),input=inputs.next();input&&!input.done;input=inputs.next())promises.push(input.value.open());for(var outputs=midiAccess.outputs.values(),output=outputs.next();output&&!output.done;output=outputs.next())promises.push(output.value.open());promiseTimeout=setTimeout(onPortsOpen.bind(this),200),Promise&&Promise.all(promises)["catch"](function(err){}).then(onPortsOpen.bind(this));}.bind(this),function(err){"function"==typeof callback&&callback.call(this,err);}.bind(this)):void("function"==typeof callback&&callback(new Error("The Web MIDI API is not supported by your browser.")))},WebMidi.prototype.disable=function(){if(!this.supported)throw new Error("The Web MIDI API is not supported by your browser.");this["interface"]&&(this["interface"].onstatechange=void 0),this["interface"]=void 0,this._inputs=[],this._outputs=[],this._resetInterfaceUserHandlers();},WebMidi.prototype.addListener=function(type,listener){if(!this.enabled)throw new Error("WebMidi must be enabled before adding event listeners.");if("function"!=typeof listener)throw new TypeError("The 'listener' parameter must be a function.");if(!(this._midiInterfaceEvents.indexOf(type)>=0))throw new TypeError("The specified event type is not supported.");return this._userHandlers[type].push(listener),this},WebMidi.prototype.hasListener=function(type,listener){if(!this.enabled)throw new Error("WebMidi must be enabled before checking event listeners.");if("function"!=typeof listener)throw new TypeError("The 'listener' parameter must be a function.");if(!(this._midiInterfaceEvents.indexOf(type)>=0))throw new TypeError("The specified event type is not supported.");for(var o=0;o<this._userHandlers[type].length;o++)if(this._userHandlers[type][o]===listener)return !0;return !1},WebMidi.prototype.removeListener=function(type,listener){if(!this.enabled)throw new Error("WebMidi must be enabled before removing event listeners.");if(void 0!==listener&&"function"!=typeof listener)throw new TypeError("The 'listener' parameter must be a function.");if(this._midiInterfaceEvents.indexOf(type)>=0)if(listener)for(var o=0;o<this._userHandlers[type].length;o++)this._userHandlers[type][o]===listener&&this._userHandlers[type].splice(o,1);else this._userHandlers[type]=[];else{if(void 0!==type)throw new TypeError("The specified event type is not supported.");this._resetInterfaceUserHandlers();}return this},WebMidi.prototype.toMIDIChannels=function(channel){var channels;return channels="all"===channel||void 0===channel?["all"]:Array.isArray(channel)?channel:[channel],channels.indexOf("all")>-1&&(channels=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),channels.map(function(ch){return parseInt(ch)}).filter(function(ch){return ch>=1&&16>=ch})},WebMidi.prototype.getInputById=function(id){if(!this.enabled)throw new Error("WebMidi is not enabled.");id=String(id);for(var i=0;i<this.inputs.length;i++)if(this.inputs[i].id===id)return this.inputs[i];return !1},WebMidi.prototype.getOutputById=function(id){if(!this.enabled)throw new Error("WebMidi is not enabled.");id=String(id);for(var i=0;i<this.outputs.length;i++)if(this.outputs[i].id===id)return this.outputs[i];return !1},WebMidi.prototype.getInputByName=function(name){if(!this.enabled)throw new Error("WebMidi is not enabled.");for(var i=0;i<this.inputs.length;i++)if(~this.inputs[i].name.indexOf(name))return this.inputs[i];return !1},WebMidi.prototype.getOctave=function(number){return null!=number&&number>=0&&127>=number?Math.floor(Math.floor(number)/12-1)+Math.floor(wm.octaveOffset):void 0},WebMidi.prototype.getOutputByName=function(name){if(!this.enabled)throw new Error("WebMidi is not enabled.");for(var i=0;i<this.outputs.length;i++)if(~this.outputs[i].name.indexOf(name))return this.outputs[i];return !1},WebMidi.prototype.guessNoteNumber=function(input){var output=!1;if(input&&input.toFixed&&input>=0&&127>=input?output=Math.round(input):parseInt(input)>=0&&parseInt(input)<=127?output=parseInt(input):("string"==typeof input||input instanceof String)&&(output=this.noteNameToNumber(input)),output===!1)throw new Error("Invalid input value ("+input+").");return output},WebMidi.prototype.noteNameToNumber=function(name){"string"!=typeof name&&(name="");var matches=name.match(/([CDEFGAB])(#{0,2}|b{0,2})(-?\d+)/i);if(!matches)throw new RangeError("Invalid note name.");var semitones=wm._semitones[matches[1].toUpperCase()],octave=parseInt(matches[3]),result=12*(octave+1-Math.floor(wm.octaveOffset))+semitones;if(matches[2].toLowerCase().indexOf("b")>-1?result-=matches[2].length:matches[2].toLowerCase().indexOf("#")>-1&&(result+=matches[2].length),0>result||result>127)throw new RangeError("Invalid note name or note outside valid range.");return result},WebMidi.prototype._updateInputsAndOutputs=function(){this._updateInputs(),this._updateOutputs();},WebMidi.prototype._updateInputs=function(){for(var i=0;i<this._inputs.length;i++){for(var remove=!0,updated=this["interface"].inputs.values(),input=updated.next();input&&!input.done;input=updated.next())if(this._inputs[i]._midiInput===input.value){remove=!1;break}remove&&this._inputs.splice(i,1);}this["interface"]&&this["interface"].inputs.forEach(function(nInput){for(var add=!0,j=0;j<this._inputs.length;j++)this._inputs[j]._midiInput===nInput&&(add=!1);add&&this._inputs.push(new Input(nInput));}.bind(this));},WebMidi.prototype._updateOutputs=function(){for(var i=0;i<this._outputs.length;i++){for(var remove=!0,updated=this["interface"].outputs.values(),output=updated.next();output&&!output.done;output=updated.next())if(this._outputs[i]._midiOutput===output.value){remove=!1;break}remove&&this._outputs.splice(i,1);}this["interface"]&&this["interface"].outputs.forEach(function(nOutput){for(var add=!0,j=0;j<this._outputs.length;j++)this._outputs[j]._midiOutput===nOutput&&(add=!1);add&&this._outputs.push(new Output(nOutput));}.bind(this));},WebMidi.prototype._onInterfaceStateChange=function(e){this._updateInputsAndOutputs();var event={timestamp:e.timeStamp,type:e.port.state};this["interface"]&&"connected"===e.port.state?"output"===e.port.type?event.port=this.getOutputById(e.port.id):"input"===e.port.type&&(event.port=this.getInputById(e.port.id)):event.port={connection:"closed",id:e.port.id,manufacturer:e.port.manufacturer,name:e.port.name,state:e.port.state,type:e.port.type},this._userHandlers[e.port.state].forEach(function(handler){handler(event);});},WebMidi.prototype._resetInterfaceUserHandlers=function(){for(var i=0;i<this._midiInterfaceEvents.length;i++)this._userHandlers[this._midiInterfaceEvents[i]]=[];},Input.prototype.addListener=function(type,channel,listener){var that=this;if(void 0===channel&&(channel="all"),Array.isArray(channel)||(channel=[channel]),channel.forEach(function(item){if("all"!==item&&!(item>=1&&16>=item))throw new RangeError("The 'channel' parameter is invalid.")}),"function"!=typeof listener)throw new TypeError("The 'listener' parameter must be a function.");if(void 0!==wm.MIDI_SYSTEM_MESSAGES[type])this._userHandlers.system[type]||(this._userHandlers.system[type]=[]),this._userHandlers.system[type].push(listener);else{if(void 0===wm.MIDI_CHANNEL_MESSAGES[type])throw new TypeError("The specified event type is not supported.");if(channel.indexOf("all")>-1){channel=[];for(var j=1;16>=j;j++)channel.push(j);}this._userHandlers.channel[type]||(this._userHandlers.channel[type]=[]),channel.forEach(function(ch){that._userHandlers.channel[type][ch]||(that._userHandlers.channel[type][ch]=[]),that._userHandlers.channel[type][ch].push(listener);});}return this},Input.prototype.on=Input.prototype.addListener,Input.prototype.hasListener=function(type,channel,listener){var that=this;if("function"!=typeof listener)throw new TypeError("The 'listener' parameter must be a function.");if(void 0===channel&&(channel="all"),channel.constructor!==Array&&(channel=[channel]),void 0!==wm.MIDI_SYSTEM_MESSAGES[type]){for(var o=0;o<this._userHandlers.system[type].length;o++)if(this._userHandlers.system[type][o]===listener)return !0}else if(void 0!==wm.MIDI_CHANNEL_MESSAGES[type]){if(channel.indexOf("all")>-1){channel=[];for(var j=1;16>=j;j++)channel.push(j);}return this._userHandlers.channel[type]?channel.every(function(chNum){var listeners=that._userHandlers.channel[type][chNum];return listeners&&listeners.indexOf(listener)>-1}):!1}return !1},Input.prototype.removeListener=function(type,channel,listener){var that=this;if(void 0!==listener&&"function"!=typeof listener)throw new TypeError("The 'listener' parameter must be a function.");if(void 0===channel&&(channel="all"),channel.constructor!==Array&&(channel=[channel]),void 0!==wm.MIDI_SYSTEM_MESSAGES[type])if(void 0===listener)this._userHandlers.system[type]=[];else for(var o=0;o<this._userHandlers.system[type].length;o++)this._userHandlers.system[type][o]===listener&&this._userHandlers.system[type].splice(o,1);else if(void 0!==wm.MIDI_CHANNEL_MESSAGES[type]){if(channel.indexOf("all")>-1){channel=[];for(var j=1;16>=j;j++)channel.push(j);}if(!this._userHandlers.channel[type])return this;channel.forEach(function(chNum){var listeners=that._userHandlers.channel[type][chNum];if(listeners)if(void 0===listener)that._userHandlers.channel[type][chNum]=[];else for(var l=0;l<listeners.length;l++)listeners[l]===listener&&listeners.splice(l,1);});}else{if(void 0!==type)throw new TypeError("The specified event type is not supported.");this._initializeUserHandlers();}return this},Input.prototype._initializeUserHandlers=function(){for(var prop1 in wm.MIDI_CHANNEL_MESSAGES)wm.MIDI_CHANNEL_MESSAGES.hasOwnProperty(prop1)&&(this._userHandlers.channel[prop1]={});for(var prop2 in wm.MIDI_SYSTEM_MESSAGES)wm.MIDI_SYSTEM_MESSAGES.hasOwnProperty(prop2)&&(this._userHandlers.system[prop2]=[]);},Input.prototype._onMidiMessage=function(e){if(this._userHandlers.system.midimessage.length>0){var event={target:this,data:e.data,timestamp:e.timeStamp,type:"midimessage"};this._userHandlers.system.midimessage.forEach(function(callback){callback(event);});}e.data[0]<240?this._parseChannelEvent(e):e.data[0]<=255&&this._parseSystemEvent(e);},Input.prototype._parseChannelEvent=function(e){var data1,data2,command=e.data[0]>>4,channel=(15&e.data[0])+1;e.data.length>1&&(data1=e.data[1],data2=e.data.length>2?e.data[2]:void 0);var event={target:this,data:e.data,timestamp:e.timeStamp,channel:channel};command===wm.MIDI_CHANNEL_MESSAGES.noteoff||command===wm.MIDI_CHANNEL_MESSAGES.noteon&&0===data2?(event.type="noteoff",event.note={number:data1,name:wm._notes[data1%12],octave:wm.getOctave(data1)},event.velocity=data2/127,event.rawVelocity=data2):command===wm.MIDI_CHANNEL_MESSAGES.noteon?(event.type="noteon",event.note={number:data1,name:wm._notes[data1%12],octave:wm.getOctave(data1)},event.velocity=data2/127,event.rawVelocity=data2):command===wm.MIDI_CHANNEL_MESSAGES.keyaftertouch?(event.type="keyaftertouch",event.note={number:data1,name:wm._notes[data1%12],octave:wm.getOctave(data1)},event.value=data2/127):command===wm.MIDI_CHANNEL_MESSAGES.controlchange&&data1>=0&&119>=data1?(event.type="controlchange",event.controller={number:data1,name:this.getCcNameByNumber(data1)},event.value=data2):command===wm.MIDI_CHANNEL_MESSAGES.channelmode&&data1>=120&&127>=data1?(event.type="channelmode",event.controller={number:data1,name:this.getChannelModeByNumber(data1)},event.value=data2):command===wm.MIDI_CHANNEL_MESSAGES.programchange?(event.type="programchange",event.value=data1):command===wm.MIDI_CHANNEL_MESSAGES.channelaftertouch?(event.type="channelaftertouch",event.value=data1/127):command===wm.MIDI_CHANNEL_MESSAGES.pitchbend?(event.type="pitchbend",event.value=((data2<<7)+data1-8192)/8192):event.type="unknownchannelmessage",this._userHandlers.channel[event.type]&&this._userHandlers.channel[event.type][channel]&&this._userHandlers.channel[event.type][channel].forEach(function(callback){callback(event);});},Input.prototype.getCcNameByNumber=function(number){if(number=Math.floor(number),!(number>=0&&119>=number))throw new RangeError("The control change number must be between 0 and 119.");for(var cc in wm.MIDI_CONTROL_CHANGE_MESSAGES)if(wm.MIDI_CONTROL_CHANGE_MESSAGES.hasOwnProperty(cc)&&number===wm.MIDI_CONTROL_CHANGE_MESSAGES[cc])return cc;return void 0},Input.prototype.getChannelModeByNumber=function(number){if(number=Math.floor(number),!(number>=120&&status<=127))throw new RangeError("The control change number must be between 120 and 127.");for(var cm in wm.MIDI_CHANNEL_MODE_MESSAGES)if(wm.MIDI_CHANNEL_MODE_MESSAGES.hasOwnProperty(cm)&&number===wm.MIDI_CHANNEL_MODE_MESSAGES[cm])return cm},Input.prototype._parseSystemEvent=function(e){var command=e.data[0],event={target:this,data:e.data,timestamp:e.timeStamp};command===wm.MIDI_SYSTEM_MESSAGES.sysex?event.type="sysex":command===wm.MIDI_SYSTEM_MESSAGES.timecode?event.type="timecode":command===wm.MIDI_SYSTEM_MESSAGES.songposition?event.type="songposition":command===wm.MIDI_SYSTEM_MESSAGES.songselect?(event.type="songselect",event.song=e.data[1]):command===wm.MIDI_SYSTEM_MESSAGES.tuningrequest?event.type="tuningrequest":command===wm.MIDI_SYSTEM_MESSAGES.clock?event.type="clock":command===wm.MIDI_SYSTEM_MESSAGES.start?event.type="start":command===wm.MIDI_SYSTEM_MESSAGES["continue"]?event.type="continue":command===wm.MIDI_SYSTEM_MESSAGES.stop?event.type="stop":command===wm.MIDI_SYSTEM_MESSAGES.activesensing?event.type="activesensing":command===wm.MIDI_SYSTEM_MESSAGES.reset?event.type="reset":event.type="unknownsystemmessage",this._userHandlers.system[event.type]&&this._userHandlers.system[event.type].forEach(function(callback){callback(event);});},Output.prototype.send=function(status,data,timestamp){if(!(status>=128&&255>=status))throw new RangeError("The status byte must be an integer between 128 (0x80) and 255 (0xFF).");void 0===data&&(data=[]),Array.isArray(data)||(data=[data]);var message=[];return data.forEach(function(item,index){var parsed=Math.floor(item);if(!(parsed>=0&&255>=parsed))throw new RangeError("Data bytes must be integers between 0 (0x00) and 255 (0xFF).");message.push(parsed);}),this._midiOutput.send([status].concat(message),parseFloat(timestamp)||0),this},Output.prototype.sendSysex=function(manufacturer,data,options){if(!wm.sysexEnabled)throw new Error("Sysex message support must first be activated.");return options=options||{},manufacturer=[].concat(manufacturer),data.forEach(function(item){if(0>item||item>127)throw new RangeError("The data bytes of a sysex message must be integers between 0 (0x00) and 127 (0x7F).")}),data=manufacturer.concat(data,wm.MIDI_SYSTEM_MESSAGES.sysexend),this.send(wm.MIDI_SYSTEM_MESSAGES.sysex,data,this._parseTimeParameter(options.time)),this},Output.prototype.sendTimecodeQuarterFrame=function(value,options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.timecode,value,this._parseTimeParameter(options.time)),this},Output.prototype.sendSongPosition=function(value,options){value=Math.floor(value)||0,options=options||{};var msb=value>>7&127,lsb=127&value;return this.send(wm.MIDI_SYSTEM_MESSAGES.songposition,[msb,lsb],this._parseTimeParameter(options.time)),this},Output.prototype.sendSongSelect=function(value,options){if(value=Math.floor(value),options=options||{},!(value>=0&&127>=value))throw new RangeError("The song number must be between 0 and 127.");return this.send(wm.MIDI_SYSTEM_MESSAGES.songselect,[value],this._parseTimeParameter(options.time)),this},Output.prototype.sendTuningRequest=function(options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.tuningrequest,void 0,this._parseTimeParameter(options.time)),this},Output.prototype.sendClock=function(options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.clock,void 0,this._parseTimeParameter(options.time)),this},Output.prototype.sendStart=function(options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.start,void 0,this._parseTimeParameter(options.time)),this},Output.prototype.sendContinue=function(options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES["continue"],void 0,this._parseTimeParameter(options.time)),this},Output.prototype.sendStop=function(options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.stop,void 0,this._parseTimeParameter(options.time)),this},Output.prototype.sendActiveSensing=function(options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.activesensing,[],this._parseTimeParameter(options.time)),this},Output.prototype.sendReset=function(options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.reset,void 0,this._parseTimeParameter(options.time)),this},Output.prototype.stopNote=function(note,channel,options){if("all"===note)return this.sendChannelMode("allnotesoff",0,channel,options);var nVelocity=64;return options=options||{},options.rawVelocity?!isNaN(options.velocity)&&options.velocity>=0&&options.velocity<=127&&(nVelocity=options.velocity):!isNaN(options.velocity)&&options.velocity>=0&&options.velocity<=1&&(nVelocity=127*options.velocity),this._convertNoteToArray(note).forEach(function(item){wm.toMIDIChannels(channel).forEach(function(ch){this.send((wm.MIDI_CHANNEL_MESSAGES.noteoff<<4)+(ch-1),[item,Math.round(nVelocity)],this._parseTimeParameter(options.time));}.bind(this));}.bind(this)),this},Output.prototype.playNote=function(note,channel,options){var time,nVelocity=64;if(options=options||{},options.rawVelocity?!isNaN(options.velocity)&&options.velocity>=0&&options.velocity<=127&&(nVelocity=options.velocity):!isNaN(options.velocity)&&options.velocity>=0&&options.velocity<=1&&(nVelocity=127*options.velocity),time=this._parseTimeParameter(options.time),this._convertNoteToArray(note).forEach(function(item){wm.toMIDIChannels(channel).forEach(function(ch){this.send((wm.MIDI_CHANNEL_MESSAGES.noteon<<4)+(ch-1),[item,Math.round(nVelocity)],time);}.bind(this));}.bind(this)),!isNaN(options.duration)){options.duration<=0&&(options.duration=0);var nRelease=64;options.rawVelocity?!isNaN(options.release)&&options.release>=0&&options.release<=127&&(nRelease=options.release):!isNaN(options.release)&&options.release>=0&&options.release<=1&&(nRelease=127*options.release),this._convertNoteToArray(note).forEach(function(item){wm.toMIDIChannels(channel).forEach(function(ch){this.send((wm.MIDI_CHANNEL_MESSAGES.noteoff<<4)+(ch-1),[item,Math.round(nRelease)],(time||wm.time)+options.duration);}.bind(this));}.bind(this));}return this},Output.prototype.sendKeyAftertouch=function(note,channel,pressure,options){var that=this;if(options=options||{},1>channel||channel>16)throw new RangeError("The channel must be between 1 and 16.");(isNaN(pressure)||0>pressure||pressure>1)&&(pressure=.5);var nPressure=Math.round(127*pressure);return this._convertNoteToArray(note).forEach(function(item){wm.toMIDIChannels(channel).forEach(function(ch){that.send((wm.MIDI_CHANNEL_MESSAGES.keyaftertouch<<4)+(ch-1),[item,nPressure],that._parseTimeParameter(options.time));});}),this},Output.prototype.sendControlChange=function(controller,value,channel,options){if(options=options||{},"string"==typeof controller){if(controller=wm.MIDI_CONTROL_CHANGE_MESSAGES[controller],void 0===controller)throw new TypeError("Invalid controller name.")}else if(controller=Math.floor(controller),!(controller>=0&&119>=controller))throw new RangeError("Controller numbers must be between 0 and 119.");if(value=Math.floor(value)||0,!(value>=0&&127>=value))throw new RangeError("Controller value must be between 0 and 127.");return wm.toMIDIChannels(channel).forEach(function(ch){this.send((wm.MIDI_CHANNEL_MESSAGES.controlchange<<4)+(ch-1),[controller,value],this._parseTimeParameter(options.time));}.bind(this)),this},Output.prototype._selectRegisteredParameter=function(parameter,channel,time){var that=this;if(parameter[0]=Math.floor(parameter[0]),!(parameter[0]>=0&&parameter[0]<=127))throw new RangeError("The control65 value must be between 0 and 127");if(parameter[1]=Math.floor(parameter[1]),!(parameter[1]>=0&&parameter[1]<=127))throw new RangeError("The control64 value must be between 0 and 127");return wm.toMIDIChannels(channel).forEach(function(ch){that.sendControlChange(101,parameter[0],channel,{time:time}),that.sendControlChange(100,parameter[1],channel,{time:time});}),this},Output.prototype._selectNonRegisteredParameter=function(parameter,channel,time){var that=this;if(parameter[0]=Math.floor(parameter[0]),!(parameter[0]>=0&&parameter[0]<=127))throw new RangeError("The control63 value must be between 0 and 127");if(parameter[1]=Math.floor(parameter[1]),!(parameter[1]>=0&&parameter[1]<=127))throw new RangeError("The control62 value must be between 0 and 127");return wm.toMIDIChannels(channel).forEach(function(ch){that.sendControlChange(99,parameter[0],channel,{time:time}),that.sendControlChange(98,parameter[1],channel,{time:time});}),this},Output.prototype._setCurrentRegisteredParameter=function(data,channel,time){var that=this;if(data=[].concat(data),data[0]=Math.floor(data[0]),!(data[0]>=0&&data[0]<=127))throw new RangeError("The msb value must be between 0 and 127");return wm.toMIDIChannels(channel).forEach(function(ch){that.sendControlChange(6,data[0],channel,{time:time});}),data[1]=Math.floor(data[1]),data[1]>=0&&data[1]<=127&&wm.toMIDIChannels(channel).forEach(function(ch){that.sendControlChange(38,data[1],channel,{time:time});}),this},Output.prototype._deselectRegisteredParameter=function(channel,time){var that=this;return wm.toMIDIChannels(channel).forEach(function(ch){that.sendControlChange(101,127,channel,{time:time}),that.sendControlChange(100,127,channel,{time:time});}),this},Output.prototype.setRegisteredParameter=function(parameter,data,channel,options){var that=this;if(options=options||{},!Array.isArray(parameter)){if(!wm.MIDI_REGISTERED_PARAMETER[parameter])throw new Error("The specified parameter is not available.");parameter=wm.MIDI_REGISTERED_PARAMETER[parameter];}return wm.toMIDIChannels(channel).forEach(function(ch){that._selectRegisteredParameter(parameter,channel,options.time),that._setCurrentRegisteredParameter(data,channel,options.time),that._deselectRegisteredParameter(channel,options.time);}),this},Output.prototype.setNonRegisteredParameter=function(parameter,data,channel,options){var that=this;if(options=options||{},!(parameter[0]>=0&&parameter[0]<=127&&parameter[1]>=0&&parameter[1]<=127))throw new Error("Position 0 and 1 of the 2-position parameter array must both be between 0 and 127.");return data=[].concat(data),wm.toMIDIChannels(channel).forEach(function(ch){that._selectNonRegisteredParameter(parameter,channel,options.time),that._setCurrentRegisteredParameter(data,channel,options.time),that._deselectRegisteredParameter(channel,options.time);}),this},Output.prototype.incrementRegisteredParameter=function(parameter,channel,options){var that=this;if(options=options||{},!Array.isArray(parameter)){if(!wm.MIDI_REGISTERED_PARAMETER[parameter])throw new Error("The specified parameter is not available.");parameter=wm.MIDI_REGISTERED_PARAMETER[parameter];}return wm.toMIDIChannels(channel).forEach(function(ch){that._selectRegisteredParameter(parameter,channel,options.time),that.sendControlChange(96,0,channel,{time:options.time}),that._deselectRegisteredParameter(channel,options.time);}),this},Output.prototype.decrementRegisteredParameter=function(parameter,channel,options){if(options=options||{},!Array.isArray(parameter)){if(!wm.MIDI_REGISTERED_PARAMETER[parameter])throw new TypeError("The specified parameter is not available.");parameter=wm.MIDI_REGISTERED_PARAMETER[parameter];}return wm.toMIDIChannels(channel).forEach(function(ch){this._selectRegisteredParameter(parameter,channel,options.time),this.sendControlChange(97,0,channel,{time:options.time}),this._deselectRegisteredParameter(channel,options.time);}.bind(this)),this},Output.prototype.setPitchBendRange=function(semitones,cents,channel,options){var that=this;if(options=options||{},semitones=Math.floor(semitones)||0,!(semitones>=0&&127>=semitones))throw new RangeError("The semitones value must be between 0 and 127");if(cents=Math.floor(cents)||0,!(cents>=0&&127>=cents))throw new RangeError("The cents value must be between 0 and 127");return wm.toMIDIChannels(channel).forEach(function(ch){that.setRegisteredParameter("pitchbendrange",[semitones,cents],channel,{time:options.time});}),this},Output.prototype.setModulationRange=function(semitones,cents,channel,options){var that=this;if(options=options||{},semitones=Math.floor(semitones)||0,!(semitones>=0&&127>=semitones))throw new RangeError("The semitones value must be between 0 and 127");if(cents=Math.floor(cents)||0,!(cents>=0&&127>=cents))throw new RangeError("The cents value must be between 0 and 127");return wm.toMIDIChannels(channel).forEach(function(ch){that.setRegisteredParameter("modulationrange",[semitones,cents],channel,{time:options.time});}),this},Output.prototype.setMasterTuning=function(value,channel,options){var that=this;if(options=options||{},value=parseFloat(value)||0,-65>=value||value>=64)throw new RangeError("The value must be a decimal number larger than -65 and smaller than 64.");var coarse=Math.floor(value)+64,fine=value-Math.floor(value);fine=Math.round((fine+1)/2*16383);var msb=fine>>7&127,lsb=127&fine;return wm.toMIDIChannels(channel).forEach(function(ch){that.setRegisteredParameter("channelcoarsetuning",coarse,channel,{time:options.time}),that.setRegisteredParameter("channelfinetuning",[msb,lsb],channel,{time:options.time});}),this},Output.prototype.setTuningProgram=function(value,channel,options){var that=this;if(options=options||{},value=Math.floor(value),!(value>=0&&127>=value))throw new RangeError("The program value must be between 0 and 127");return wm.toMIDIChannels(channel).forEach(function(ch){that.setRegisteredParameter("tuningprogram",value,channel,{time:options.time});}),this},Output.prototype.setTuningBank=function(value,channel,options){var that=this;if(options=options||{},value=Math.floor(value)||0,!(value>=0&&127>=value))throw new RangeError("The bank value must be between 0 and 127");return wm.toMIDIChannels(channel).forEach(function(ch){that.setRegisteredParameter("tuningbank",value,channel,{time:options.time});}),this},Output.prototype.sendChannelMode=function(command,value,channel,options){if(options=options||{},"string"==typeof command){if(command=wm.MIDI_CHANNEL_MODE_MESSAGES[command],!command)throw new TypeError("Invalid channel mode message name.")}else if(command=Math.floor(command),!(command>=120&&127>=command))throw new RangeError("Channel mode numerical identifiers must be between 120 and 127.");if(value=Math.floor(value)||0,0>value||value>127)throw new RangeError("Value must be an integer between 0 and 127.");return wm.toMIDIChannels(channel).forEach(function(ch){this.send((wm.MIDI_CHANNEL_MESSAGES.channelmode<<4)+(ch-1),[command,value],this._parseTimeParameter(options.time));}.bind(this)),this},Output.prototype.sendProgramChange=function(program,channel,options){
var that=this;if(options=options||{},program=Math.floor(program),isNaN(program)||0>program||program>127)throw new RangeError("Program numbers must be between 0 and 127.");return wm.toMIDIChannels(channel).forEach(function(ch){that.send((wm.MIDI_CHANNEL_MESSAGES.programchange<<4)+(ch-1),[program],that._parseTimeParameter(options.time));}),this},Output.prototype.sendChannelAftertouch=function(pressure,channel,options){var that=this;options=options||{},pressure=parseFloat(pressure),(isNaN(pressure)||0>pressure||pressure>1)&&(pressure=.5);var nPressure=Math.round(127*pressure);return wm.toMIDIChannels(channel).forEach(function(ch){that.send((wm.MIDI_CHANNEL_MESSAGES.channelaftertouch<<4)+(ch-1),[nPressure],that._parseTimeParameter(options.time));}),this},Output.prototype.sendPitchBend=function(bend,channel,options){var that=this;if(options=options||{},isNaN(bend)||-1>bend||bend>1)throw new RangeError("Pitch bend value must be between -1 and 1.");var nLevel=Math.round((bend+1)/2*16383),msb=nLevel>>7&127,lsb=127&nLevel;return wm.toMIDIChannels(channel).forEach(function(ch){that.send((wm.MIDI_CHANNEL_MESSAGES.pitchbend<<4)+(ch-1),[lsb,msb],that._parseTimeParameter(options.time));}),this},Output.prototype._parseTimeParameter=function(time){var value,parsed=parseFloat(time);return "string"==typeof time&&"+"===time.substring(0,1)?parsed&&parsed>0&&(value=wm.time+parsed):parsed>wm.time&&(value=parsed),value},Output.prototype._convertNoteToArray=function(note){var notes=[];return Array.isArray(note)||(note=[note]),note.forEach(function(item){notes.push(wm.guessNoteNumber(item));}),notes},module.exports?module.exports=wm:scope.WebMidi||(scope.WebMidi=wm);}(commonjsGlobal);
});

class WebAudio {
    constructor() {
        this.name = "web_audio";
        this.prepared = false;
        this.midi = false;
        this.sources = [];
        this.keys = {};
    }
    source(name) {
        return this.sources[name];
    }
    get_context() {
        return this.context;
    }
    is_prepared() {
        return this.prepared;
    }
    componentDidLoad() {
        this.connect_debugger();
    }
    async connect_the_world() {
        this.connect_context();
        this.gain = this.context.createGain();
        this.connect_visualizers();
        this.connect_sources();
        this.connect_midi();
        this.prepared = true;
        return true;
    }
    connect_context() {
        this.context = (window["webkitAudioContext"]) ? new webkitAudioContext : new AudioContext;
        this.log("Connected to this.context");
    }
    connect_sources() {
        this.build_sources();
    }
    async build_sources() {
        this.log("Building sources");
        this._sources = Array.from(this.element.querySelectorAll('web-audio-source'));
        this.externalFiles = [];
        this._sources.forEach((source, index) => {
            this.log(`(${index}) Preparing ${source.name}`);
            this.sources[source.name] = source;
            let bufferLoader = new BufferLoader(this.context, [source.src], (bufferList) => {
                this.cache_sources(bufferList, source);
            });
            bufferLoader.load();
        }, this);
    }
    async cache_sources(bufferList, source) {
        await delay(20);
        bufferList.forEach((item) => {
            this.log(`Caching ${source.name}`);
            if (this.midi) {
                this.log(`Assigned ${source.name} to midi key ${source.midikey}, channel ${source.midichannel}`);
                if (this.keys[source.midichannel] == undefined) {
                    this.keys[source.midichannel] = [];
                }
                this.keys[source.midichannel][source.midikey] = source;
            }
            this._currentSource = source;
            this._currentSource.assignBuffer(this, item);
            this.log(`Source ${source.name} is ready`);
        });
        this._currentSource = null;
    }
    async connect_visualizers() {
        await delay(20);
        this.visualizers = Array.from(document.querySelectorAll(`web-audio-visualizer[for="${this.name}"]`));
        if (this.visualizers) {
            this.log(`Attaching visualizers`);
            this.visualizers.forEach((visualizer, index) => {
                if (index === 0) {
                    visualizer = visualizer.connect(this.context, this.context.destination);
                }
                else {
                    visualizer = visualizer.connect(this.context, this.previousVisualizer.analyser);
                }
                this.previousVisualizer = visualizer;
            });
        }
        else {
            this.log(`No visualizers for ${this.name}`);
        }
        if (this.visualizers.length >= 1) {
            this.gain.connect(this.previousVisualizer.analyser);
        }
        else {
            this.gain.connect(this.context.destination);
        }
    }
    connect_debugger() {
        this.debugger = document.querySelector(`web-audio-debugger[for="${this.name}"]`);
        this.log("Connected debugger");
    }
    log(string) {
        if (this.debugger) {
            this.debugger.addHistory(string);
        }
    }
    connect_midi() {
        if (this.midi) {
            webmidi_min.enable((err) => {
                if (err) {
                    this.log("Midi couldn't be enabled." + err);
                }
                else {
                    this.log("Midi is enabled");
                }
                var input = webmidi_min.inputs[0];
                if (input) {
                    input.addListener('noteon', 'all', (e) => {
                        this.log(`KEY: Channel: ${e.channel}, Note: ${e.note.number}, Name: ${e.note.name}, Oct: ${e.note.octave}`);
                        if (this.keys[e.channel]) {
                            this.keys[e.channel][e.note.number].gain().value = (e.data[2] / 175);
                            this.keys[e.channel][e.note.number].play();
                        }
                    });
                    input.addListener('pitchbend', 'all', (e) => {
                        this.log(`PITCH: Channel: ${e.channel}, Value: ${e.value}`);
                    });
                    input.addListener('controlchange', 'all', (e) => {
                        this.log(`CTRL: Channel: ${e.channel}, controller: ${e.controller.number}, Value: ${e.value}`);
                        var event = new CustomEvent('midi-controller-update', { detail: e });
                        document.dispatchEvent(event);
                    });
                    this.log("Listeners added for notes, pitch bend, and controllers.");
                }
            });
        }
    }
    static get is() { return "web-audio"; }
    static get properties() { return {
        "_currentSource": {
            "state": true
        },
        "_sources": {
            "state": true
        },
        "autoplay": {
            "type": "Any",
            "attr": "autoplay"
        },
        "connect_the_world": {
            "method": true
        },
        "context": {
            "state": true
        },
        "debugger": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "externalFiles": {
            "state": true
        },
        "gain": {
            "state": true
        },
        "get_context": {
            "method": true
        },
        "is_prepared": {
            "method": true
        },
        "keys": {
            "state": true
        },
        "midi": {
            "type": "Any",
            "attr": "midi"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "prepared": {
            "state": true
        },
        "previousVisualizer": {
            "state": true
        },
        "source": {
            "method": true
        },
        "sources": {
            "state": true
        },
        "visualizerNodes": {
            "state": true
        },
        "visualizers": {
            "state": true
        }
    }; }
}

class WebAudioSource {
    constructor() {
        this.inert = false;
        this.midikey = 0;
        this.midichannel = 1;
        this.status = "paused";
        this.effectsvolume = 100;
        this.effects = [];
        this.duration = 0.0;
        this.startTime = 0.0;
        this.pausedTime = 0.0;
        this.elapsedTime = 0.0;
        this.playing = false;
    }
    getBuffer() {
        return this.buffer;
    }
    webAudio() {
        return this.webAudioWrapper;
    }
    gain(place = "wet") {
        if (place === "wet") {
            return this.wetGain;
        }
        else if (place === "dry") {
            return this.dryGain;
        }
        else if (place === "channel") {
            return this.channelGain;
        }
    }
    getDuration() {
        return this.duration;
    }
    currentTime() {
        let current = 0;
        if (this.pausedTime) {
            current = this.pausedTime;
        }
        else {
            if (this.startTime) {
                current = this.context.currentTime - this.startTime;
            }
        }
        if (current >= this.duration) {
            current = this.duration;
        }
        return current;
    }
    ;
    prepare() {
        if (!this.inert) {
            this.source = this.context.createBufferSource();
            this.source.buffer = this.buffer;
            if (this.wetGain) {
                this.wetGain.gain.value = this.effectsvolume / 100;
                this.dryGain.gain.value = Math.abs((this.effectsvolume - 100) / 100);
            }
            else {
                this.dryGain.gain.value = 1;
            }
            if (this.wetGain) {
                this.source.connect(this.wetGain);
            }
            this.source.connect(this.dryGain);
            this.duration = this.source.buffer.duration;
        }
    }
    play() {
        if (!this.inert) {
            this.prepare();
            this.source.start(0, this.pausedTime);
            this.startTime = this.context.currentTime - this.pausedTime;
            this.pausedTime = 0;
            this.playing = true;
            this.tick();
            raf(() => { this.tick(); });
        }
        else {
            throw "Cannot play inert media.";
        }
    }
    skipTo(time) {
        this.stop();
        this.pausedTime = time / 1000;
        this.play();
    }
    pause() {
        this.elapsedTime = this.context.currentTime - this.startTime;
        this.stop();
        this.pausedTime = this.elapsedTime;
        this.playing = false;
    }
    toggle() {
        if (this.playing) {
            this.pause();
        }
        else {
            this.play();
        }
    }
    stop() {
        if (this.source) {
            this.source.disconnect();
            this.source.stop();
        }
        this.source = null;
        this.pausedTime = 0;
        this.startTime = 0;
        this.playing = false;
    }
    tick() {
        this.timeupdate.emit({
            time: this.currentTime(),
            duration: this.duration
        });
        if (this.source) {
            raf(() => { this.tick(); });
        }
    }
    assignBuffer(webAudio, buffer) {
        this.webAudioWrapper = webAudio.element;
        this.context = webAudio.context;
        this.buffer = buffer;
        if (!this.inert) {
            this.masterGain = webAudio.gain;
            this.channelGain = this.context.createGain();
            this.prepareEffects();
            if (Object.keys(this.effects).length > 0) {
                this.wetGain = this.context.createGain();
                let previous = "";
                Object.keys(this.effects).reverse().forEach((element, index) => {
                    if (index === 0) {
                        this.wetGain.connect(this.effects[element]);
                    }
                    else {
                        this.effects[previous].connect(this.effects[element]);
                    }
                    previous = element;
                });
                this.effects[previous].connect(this.channelGain);
            }
            this.dryGain = this.context.createGain();
            this.dryGain.connect(this.channelGain);
            this.channelGain.connect(this.masterGain);
        }
    }
    prepareEffects() {
        if (this.element.parentElement.nodeName !== "WEB-AUDIO") {
            let element = this.element.parentElement;
            while (element.nodeName !== "WEB-AUDIO") {
                this.effects[element.getAttribute("name")] = element.attachEffect(this.context, this.element);
                element = element.parentElement;
            }
        }
    }
    static get is() { return "web-audio-source"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "assignBuffer": {
            "method": true
        },
        "buffer": {
            "state": true
        },
        "channelGain": {
            "state": true
        },
        "context": {
            "state": true
        },
        "dryGain": {
            "state": true
        },
        "duration": {
            "state": true
        },
        "effects": {
            "state": true
        },
        "effectsvolume": {
            "type": Number,
            "attr": "effectsvolume",
            "reflectToAttr": true,
            "mutable": true
        },
        "elapsedTime": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "entry": {
            "state": true
        },
        "gain": {
            "method": true
        },
        "getBuffer": {
            "method": true
        },
        "getDuration": {
            "method": true
        },
        "inert": {
            "type": Boolean,
            "attr": "inert"
        },
        "masterGain": {
            "state": true
        },
        "midichannel": {
            "type": Number,
            "attr": "midichannel",
            "reflectToAttr": true,
            "mutable": true
        },
        "midikey": {
            "type": Number,
            "attr": "midikey",
            "reflectToAttr": true,
            "mutable": true
        },
        "name": {
            "type": String,
            "attr": "name",
            "reflectToAttr": true,
            "mutable": true
        },
        "pause": {
            "method": true
        },
        "pausedTime": {
            "state": true
        },
        "play": {
            "method": true
        },
        "playing": {
            "type": Boolean,
            "attr": "playing",
            "mutable": true
        },
        "prepare": {
            "method": true
        },
        "skipTo": {
            "method": true
        },
        "source": {
            "state": true
        },
        "src": {
            "type": String,
            "attr": "src",
            "reflectToAttr": true,
            "mutable": true
        },
        "startTime": {
            "state": true
        },
        "status": {
            "state": true
        },
        "stop": {
            "method": true
        },
        "toggle": {
            "method": true
        },
        "webAudio": {
            "method": true
        },
        "webAudioWrapper": {
            "state": true
        },
        "wetGain": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "timeupdate",
            "method": "timeupdate",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
}

export { Interview as StellarInterview, Progress as StellarProgress, WebAudio, WebAudioDebugger, WebAudioSource };
