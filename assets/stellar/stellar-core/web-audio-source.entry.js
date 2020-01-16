import { r as registerInstance, d as createEvent, g as getElement } from './index-cc4604b3.js';
import './_commonjsHelpers-bccf23a2.js';
import { a as raf } from './index-6fbfcb49.js';

const WebAudioSource = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.inert = false;
        this.midikey = 0;
        this.midichannel = 1;
        this.prepared = false;
        this.status = "paused";
        this.effectsvolume = 100;
        this.effects = [];
        this.instances = [];
        this.duration = 0.0;
        this.startTime = 0.0;
        this.pausedTime = 0.0;
        this.elapsedTime = 0.0;
        this.playing = false;
        this.update = createEvent(this, "update", 7);
    }
    async getBuffer() {
        return this.buffer;
    }
    async webAudio() {
        return this.webAudioWrapper;
    }
    async gain(place = "wet") {
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
    async getDuration() {
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
    async prepare() {
        if (!this.inert && this.context) {
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
            this.prepared = true;
        }
    }
    async play() {
        if (!this.inert) {
            await this.prepare();
            if (this.source) {
                this.source.start(0, this.pausedTime);
                this.startTime = this.context.currentTime - this.pausedTime;
                this.pausedTime = 0;
                this.playing = true;
                this.tick();
                raf(() => { this.tick(); });
            }
        }
        else {
            throw "Cannot play inert media.";
        }
    }
    async skipTo(time) {
        await this.stop();
        this.pausedTime = time / 1000;
        await this.play();
    }
    async pause() {
        this.elapsedTime = this.context.currentTime - this.startTime;
        await this.stop();
        this.pausedTime = this.elapsedTime;
        this.playing = false;
    }
    async toggle() {
        if (this.playing) {
            await this.pause();
        }
        else {
            await this.play();
        }
    }
    async stop() {
        if (this.source) {
            await this.source.disconnect();
            await this.source.stop();
        }
        this.source = null;
        this.pausedTime = 0;
        this.startTime = 0;
        this.playing = false;
    }
    tick() {
        this.update.emit({
            time: this.currentTime(),
            duration: this.duration
        });
        if (this.source) {
            raf(() => { this.tick(); });
        }
    }
    async assignBuffer(webAudio, buffer) {
        this.webAudioWrapper = webAudio.element;
        this.context = webAudio.context;
        this.buffer = buffer;
        if (!this.inert) {
            this.masterGain = webAudio.gain;
            this.channelGain = this.context.createGain();
            await this.prepareEffects();
            if (Object.keys(this.effects).length > 0) {
                // Make the source and gain
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
    async prepareEffects() {
        if (this.element.parentElement.nodeName !== "WEB-AUDIO") {
            let element = this.element.parentElement;
            while (element.nodeName !== "WEB-AUDIO") {
                this.effects[element.getAttribute("name")] = await element.attachEffect(this.context, this.element);
                element = element.parentElement;
            }
        }
    }
    get element() { return getElement(this); }
};

export { WebAudioSource as web_audio_source };
