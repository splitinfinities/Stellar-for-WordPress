export class WebAudioSequencer {
    constructor() {
        this.name = "web_audio_sequencer";
        this.autoplay = false;
        this.taps = 4;
        this.context = () => {
            return document.querySelector('web-audio').get_context();
        };
        this.noteTime = 0.0;
        this.currentTap = 0;
        this.totalPlayTime = 0.0;
        this.custom = () => {
        };
    }
    componentDidLoad() {
        if (this.autoplay) {
            this.play();
        }
    }
    schedule() {
        var currentTime = this.context().currentTime;
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
        var secondsPerBeat = 60 / this.tempo;
        this.currentTap++;
        if (this.currentTap == this.taps) {
            this.currentTap = 0;
        }
        this.noteTime += 0.25 * secondsPerBeat;
    }
    async play() {
        if (!this.context()) {
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
            h("button", { class: "play", onClick: () => { this.play(); } }, "Play"),
            h("button", { class: "stop", onClick: () => { this.stop(); } }, "Stop")
        ];
    }
    static get is() { return "web-audio-sequencer"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "autoplay": {
            "type": Boolean,
            "attr": "autoplay"
        },
        "context": {
            "state": true
        },
        "currentTap": {
            "state": true
        },
        "custom": {
            "type": "Any",
            "attr": "custom"
        },
        "iterations": {
            "state": true
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "noteTime": {
            "state": true
        },
        "play": {
            "method": true
        },
        "startTime": {
            "state": true
        },
        "stop": {
            "method": true
        },
        "taps": {
            "type": Number,
            "attr": "taps"
        },
        "tempo": {
            "type": Number,
            "attr": "tempo"
        },
        "timer": {
            "state": true
        },
        "totalPlayTime": {
            "state": true
        }
    }; }
}
