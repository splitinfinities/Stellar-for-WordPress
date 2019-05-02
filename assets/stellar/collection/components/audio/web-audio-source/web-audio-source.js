import raf from 'raf';
export class WebAudioSource {
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
