'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');

const StellarAutoScroll = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.speed = 2;
        this.startPosition = 0;
        this.loop = false;
        this.autoplay = false;
    }
    componentDidLoad() {
        if (this.autoplay) {
            this.play();
        }
    }
    async play() {
        this.scroll();
    }
    async stop() {
        clearTimeout(this.timeout);
        this.timeout = undefined;
    }
    scroll() {
        window.scrollBy(0, 1);
        this.timeout = setTimeout(this.scroll.bind(this), this.speed);
        if ((document.body.scrollHeight - window.innerHeight) == window.pageYOffset) {
            if (this.loop) {
                window.scrollTo(this.startPosition, 0);
            }
            else {
                this.stop();
            }
        }
    }
};

exports.stellar_auto_scroll = StellarAutoScroll;
