'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-c90f54d2.js');

class WebAudioSequencer {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.name = "web_audio_sequencer";
        this.autoplay = false;
        this.taps = 4;
        this.context = () => {
            // @ts-ignore
            return document.querySelector('web-audio').get_context();
        };
        this.noteTime = 0.0;
        this.currentTap = 0;
        this.totalPlayTime = 0.0;
        this.custom = () => {
            // do nothing
        };
    }
    componentDidLoad() {
        if (this.autoplay) {
            this.play();
        }
    }
    schedule() {
        var currentTime = this.context().currentTime;
        // The sequence starts at startTime, so normalize currentTime so that it's 0 at the start of the sequence.
        currentTime -= this.startTime;
        while (this.noteTime < currentTime + 0.005) {
            this.totalPlayTime = this.noteTime + this.startTime;
            if (this.currentTap === 0) {
                this.iterations++;
            }
            this.custom();
            this.advance();
        }
        this.timer = setTimeout(() => {
            this.schedule();
        }, 0);
    }
    advance() {
        // Setting tempo to 60 BPM just for now
        var secondsPerBeat = 60 / this.tempo;
        this.currentTap++;
        if (this.currentTap == this.taps) {
            this.currentTap = 0;
        }
        // 0.25 because each square is a 16th note
        this.noteTime += 0.25 * secondsPerBeat;
    }
    async play() {
        if (!this.context()) {
            // @ts-ignore
            await document.querySelector('web-audio').connect_the_world();
        }
        this.iterations = 0;
        this.startTime = this.context().currentTime + 0.005 || 0.005;
        this.schedule();
    }
    async stop() {
        this.iterations = 0;
        this.startTime = null;
        this.currentTap = 0;
        clearTimeout(this.timer);
    }
    render() {
        return [
            __chunk_1.h("button", { class: "play", onClick: () => { this.play(); } }, "Play"),
            __chunk_1.h("button", { class: "stop", onClick: () => { this.stop(); } }, "Stop")
        ];
    }
}

exports.web_audio_sequencer = WebAudioSequencer;
