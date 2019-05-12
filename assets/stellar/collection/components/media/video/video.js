import properties from 'css-custom-properties';
export class Video {
    constructor() {
        this.trackInView = true;
        this.preload = "auto";
        this.autoplay = false;
        this.muted = false;
        this.playsinline = false;
        this.controls = true;
        this.duration = 0.0;
        this.startTime = 0.0;
        this.pausedTime = 0.0;
        this.currentTime = 0.0;
        this.playing = false;
    }
    componentDidLoad() {
        this.video_tag = this.element.querySelector('video');
        this.video_tag.onplay = () => {
            this.playing = true;
            this.played.emit(this.eventData);
            this.timeupdate.emit(this.eventData);
        };
        this.video_tag.onpause = () => {
            this.playing = false;
            this.pausedTime = this.video_tag.currentTime;
            this.paused.emit(this.eventData);
            this.timeupdate.emit(this.eventData);
        };
        this.video_tag.onloadedmetadata = () => {
            this.setDimensions();
            this.duration = this.video_tag.duration;
            this.loaded.emit(this.eventData);
        };
        this.trackInView && this.addIntersectionObserver();
    }
    get eventData() {
        return {
            playing: this.playing,
            currentTime: this.currentTime,
            pausedTime: this.pausedTime,
            startTime: this.startTime,
            duration: this.duration,
        };
    }
    startInterval() {
        if (this.playing) {
            this.interval = setInterval(() => {
                this.currentTime = this.video_tag.currentTime;
                this.timeupdate.emit(this.eventData);
            }, 30);
        }
        else {
            clearInterval(this.interval);
        }
    }
    setDimensions() {
        this.width = (!this.width) ? this.video_tag.videoWidth : this.width;
        this.height = (!this.height) ? this.video_tag.videoHeight : this.height;
        properties.set({
            "--width": `${this.width}`,
            "--height": `${this.height}`,
            "--aspect-ratio": `${this.height / this.width * 100}%`
        }, this.element);
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
            this.io.observe(this.element.querySelector('video'));
        }
        else {
            setTimeout(() => {
                this.handleInScreen();
            }, 300);
        }
    }
    handleInScreen() {
        this.video_tag.play();
    }
    handleOffScreen() {
        this.video_tag.currentTime = 0;
        this.video_tag.pause();
    }
    async getDuration() {
        return this.video_tag.duration;
    }
    async play() {
        this.video_tag.play();
    }
    async pause() {
        this.video_tag.pause();
    }
    async toggle() {
        if (this.video_tag.paused) {
            this.play();
        }
        else {
            this.pause();
        }
    }
    async stop() {
        this.skipTo(0);
        this.video_tag.pause();
    }
    async skipTo(time) {
        await this.pause();
        this.video_tag.currentTime = (time * 1000);
        await this.play();
    }
    render() {
        return (h("video", { preload: this.preload, width: this.width, height: this.height, autoplay: this.autoplay, muted: this.muted, playsinline: this.playsinline, poster: this.poster, controls: this.controls },
            h("slot", null)));
    }
    static get is() { return "stellar-video"; }
    static get properties() { return {
        "autoplay": {
            "type": Boolean,
            "attr": "autoplay"
        },
        "controls": {
            "type": Boolean,
            "attr": "controls"
        },
        "currentTime": {
            "state": true
        },
        "duration": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "getDuration": {
            "method": true
        },
        "height": {
            "type": Number,
            "attr": "height",
            "reflectToAttr": true,
            "mutable": true
        },
        "interval": {
            "state": true
        },
        "io": {
            "state": true
        },
        "muted": {
            "type": Boolean,
            "attr": "muted"
        },
        "overlay": {
            "type": Boolean,
            "attr": "overlay"
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
            "mutable": true,
            "watchCallbacks": ["startInterval"]
        },
        "playsinline": {
            "type": Boolean,
            "attr": "playsinline"
        },
        "poster": {
            "type": String,
            "attr": "poster"
        },
        "preload": {
            "type": String,
            "attr": "preload"
        },
        "skipTo": {
            "method": true
        },
        "startTime": {
            "state": true
        },
        "stop": {
            "method": true
        },
        "toggle": {
            "method": true
        },
        "trackInView": {
            "type": Boolean,
            "attr": "track-in-view"
        },
        "video_tag": {
            "type": "Any",
            "attr": "video_tag",
            "mutable": true
        },
        "width": {
            "type": Number,
            "attr": "width",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "timeupdate",
            "method": "timeupdate",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "played",
            "method": "played",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "paused",
            "method": "paused",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "loaded",
            "method": "loaded",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:stellar-video:**/"; }
}
