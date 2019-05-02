import { h } from '../stellar-core.core.js';

import './chunk-7646164d.js';
import './chunk-340b8099.js';
import './chunk-9f751763.js';
import { o as asTime } from './chunk-a955a305.js';
import './chunk-5ce278cb.js';

class Playlist {
    constructor() {
        this.title = "title";
        this.dark = false;
        this.autoplay = false;
        this.current = 0;
        this.currentTrack = {
            title: 'Loading...',
            artist: 'One sec...',
            picture: undefined
        };
        this.playlist = "show";
        this.remember = true;
        this.artwork = false;
        this.view = "playlist";
        this.playing = false;
        this.progress_value = 0;
    }
    componentWillLoad() {
        var playlist = localStorage.getItem('playlist');
        this.playlist = playlist;
    }
    componentDidLoad() {
        this.visualizer = this.element.shadowRoot.querySelector('web-audio-visualizer');
        this.audio = this.element.shadowRoot.querySelector('audio');
        this.progress = this.element.shadowRoot.querySelector('progress');
        this.playlistItems = this.element.querySelectorAll('stellar-song');
        this.currentPlaylistItem = this.element.querySelector('stellar-song[playing]');
        var allSongs = Array.from(this.playlistItems);
        allSongs.forEach((element, index) => {
            element.setIndex(index);
        });
        if (this.audio) {
            this.audio.volume = .70;
        }
        var playing = this.element.querySelector('stellar-song[playing]') || this.element.querySelector('stellar-song');
        playing.playing = true;
        this.prepare(playing);
        if (this.autoplay) {
            this.play();
        }
        if (this.remember) {
            this.loadFromStorage();
        }
        this.handleTimeUpdates();
        this.handleProgressClick();
    }
    handleProgressClick() {
        this.progress.addEventListener('click', (e) => {
            var x = e.offsetX;
            var clickedValue = x / this.progress.offsetWidth;
            this.audio.currentTime = clickedValue * this.audio.duration;
        });
    }
    handleTimeUpdates() {
        this.audio.addEventListener("timeupdate", () => {
            this.currentTime = asTime(parseFloat(this.audio.currentTime.toString()).toFixed(10));
            this.duration = asTime(parseFloat(this.audio.duration.toString()).toFixed(10));
            const value = (this.audio.currentTime !== 0 && this.audio.duration !== 0) ? ((this.audio.currentTime / this.audio.duration) * 100) : 0;
            this.progress_value = value;
            localStorage.setItem('track', this.current.toString());
            localStorage.setItem('time', this.audio.currentTime.toString());
        });
        this.audio.addEventListener('ended', this.next.bind(this));
    }
    handleSpacebarKey() {
        this.pause();
    }
    handleLeftKey() {
        this.previous();
    }
    handleRightKey() {
        this.next();
    }
    loadFromStorage() {
        var track = parseInt(localStorage.getItem('track'));
        var time = parseFloat(localStorage.getItem('time'));
        var playlist = localStorage.getItem('playlist');
        this.playlist = playlist;
        if (track && time) {
            var itemToPlay = this.playlistItems[track];
            itemToPlay.play();
            this.audio.currentTime = time;
        }
    }
    prepare(element) {
        if (this.currentPlaylistItem) {
            this.currentPlaylistItem.switching();
        }
        this.currentPlaylistItem = element;
        this.audio.src = this.currentPlaylistItem.src;
        this.audio.load();
        this.current = this.currentPlaylistItem.getIndex();
        this.currentPlaylistItem.playing = true;
        this.currentTrack = this.currentPlaylistItem.details();
    }
    play() {
        this.playing = true;
        this.audio.play();
        if (!this.context) {
            var context = new AudioContext();
            const src = context.createMediaElementSource(this.audio);
            const waanalyser = this.visualizer.connect(context);
            src.connect(waanalyser.analyser);
            waanalyser.analyser.connect(context.destination);
            this.context = context;
        }
    }
    pause() {
        if (!this.audio.paused) {
            this.playing = false;
            this.audio.pause();
        }
        else {
            this.playing = true;
            this.audio.play();
        }
    }
    next() {
        var song;
        song = this.element.querySelector('stellar-song[playing]');
        if (this.current === this.playlistItems.length - 1) {
            song = this.element.querySelector('stellar-song:first-child');
        }
        else {
            song = song.nextElementSibling;
        }
        song.play();
    }
    previous() {
        var song;
        song = this.element.querySelector('stellar-song[playing]');
        song.removeAttribute('playing');
        if (this.current === 0) {
            song = this.element.querySelector('stellar-song:last-child');
        }
        else {
            song = song.previousElementSibling;
        }
        song.setAttribute('playing', true);
        song.play();
    }
    togglePlaylist() {
        if (this.playlist === "show") {
            this.playlist = "hide";
        }
        else {
            this.playlist = "show";
        }
        localStorage.setItem('playlist', this.playlist);
    }
    toggleAlbumArtView() {
        if (this.view === "playlist") {
            this.view = "art";
        }
        else {
            this.view = "playlist";
        }
    }
    render() {
        return (h("div", { id: "player" },
            h("div", { class: "playlist-title" },
                h("h6", null, this.title),
                h("button", { class: "playlist", onClick: () => this.togglePlaylist() },
                    h("h6", { class: "list" },
                        h("stellar-asset", { name: "musical-notes" }),
                        "list"))),
            h("div", { class: "playlist-playing" },
                h("button", { onClick: () => this.pause(), class: "toggle-button", "data-playing": this.playing }, (this.playing)
                    ? h("ion-icon", { name: "md-pause" })
                    : h("ion-icon", { name: "md-play" })),
                h("div", { class: "playlist-playing-details" },
                    h("h2", null, this.currentTrack.title),
                    h("h3", null, this.currentTrack.artist)),
                (this.currentTrack.picture !== undefined)
                    ?
                        h("div", { class: "playlist-playing-image" },
                            h("img", { src: this.currentTrack.picture, onClick: () => this.toggleAlbumArtView() }))
                    :
                        h("div", null),
                h("web-audio-visualizer", { tag: this.audio, type: "bars" })),
            h("div", { id: "controls", class: "controls" },
                h("button", { onClick: () => this.previous(), class: "button previous" },
                    h("stellar-asset", { name: "skip-backward" })),
                h("button", { onClick: () => this.next(), class: "button next" },
                    h("stellar-asset", { name: "skip-forward" }))),
            h("div", { class: "playlist-progress" },
                h("h6", { id: "currentTime" }, this.currentTime),
                h("h6", { id: "totalTime" }, this.duration),
                h("progress", { id: "progress", max: "100", value: this.progress_value })),
            h("audio", { id: "playlist-audio", preload: "auto", tabindex: "0", controls: true },
                h("source", { id: "source", type: "audio/mp3" })),
            h("div", { id: "playlist", class: `playlist-list ${this.playlist}` },
                h("slot", null))));
    }
    static get is() { return "stellar-playlist"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "artwork": {
            "type": Boolean,
            "attr": "artwork",
            "reflectToAttr": true,
            "mutable": true
        },
        "audio": {
            "state": true
        },
        "autoplay": {
            "type": Boolean,
            "attr": "autoplay"
        },
        "context": {
            "state": true
        },
        "current": {
            "state": true
        },
        "currentPlaylistItem": {
            "state": true
        },
        "currentTime": {
            "state": true
        },
        "currentTrack": {
            "state": true
        },
        "dark": {
            "type": "Any",
            "attr": "dark"
        },
        "duration": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "next": {
            "method": true
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
            "reflectToAttr": true,
            "mutable": true
        },
        "playlist": {
            "type": String,
            "attr": "playlist",
            "reflectToAttr": true,
            "mutable": true
        },
        "playlistItems": {
            "state": true
        },
        "prepare": {
            "method": true
        },
        "previous": {
            "method": true
        },
        "progress": {
            "state": true
        },
        "progress_value": {
            "state": true
        },
        "remember": {
            "type": Boolean,
            "attr": "remember"
        },
        "title": {
            "type": String,
            "attr": "title"
        },
        "view": {
            "type": String,
            "attr": "view",
            "reflectToAttr": true,
            "mutable": true
        },
        "visualizer": {
            "state": true
        }
    }; }
    static get listeners() { return [{
            "name": "keydown.space",
            "method": "handleSpacebarKey"
        }, {
            "name": "keydown.left",
            "method": "handleLeftKey"
        }, {
            "name": "keydown.right",
            "method": "handleRightKey"
        }]; }
    static get style() { return ":host,:host *{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color-one:var(--theme-base1);--color-two:var(--theme-base9);--color-three:var(--theme-base5);--color-four:var(--theme-base7);--color-bg:var(--theme-base0);--color-bg-active:var(--theme-base1);--color-bg-playing:var(--theme-base2);--color-line:var(--theme-base1)}:host-context(.dark-mode):host{--color-one:var(--theme-base9);--color-two:var(--theme-base1);--color-three:var(--theme-base5);--color-four:var(--theme-base2);--color-bg:var(--black-alt);--color-bg-active:var(--theme-base8);--color-bg-playing:var(--theme-base8);--color-line:var(--black)}:host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--color-bg);max-width:650px;margin:0 auto}:host button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;outline:0;border:0;cursor:pointer}:host audio{display:none}:host web-audio-visualizer{height:0;margin-top:1rem;opacity:0;-webkit-transition:all .25s var(--ease) 0s;transition:all .25s var(--ease) 0s;pointer-events:none}:host([playing]) web-audio-visualizer{opacity:1;height:10rem}:host h6{font-size:.75rem;margin:0;text-transform:uppercase;color:var(--color-two);letter-spacing:.23em;z-index:1}:host h6.list{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host h6.list stellar-asset{margin-right:.5rem}:host .playlist-playing,:host .playlist-playing-details,:host .playlist-progress,:host .playlist-title{-webkit-transition:all .1875s ease-in-out 0s;transition:all .1875s ease-in-out 0s}:host .playlist-playing-image{-webkit-transition:all .25s ease-in-out 0s;transition:all .25s ease-in-out 0s}:host .playlist-title{background:var(--color-one);height:40px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:10px 30px}:host .playlist-playing-details{margin-right:30px}:host .playlist-playing{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;margin:30px}:host .playlist-playing h2,:host .playlist-playing h3{font-weight:400;margin:0}:host .playlist-playing h2{color:var(--color-two);font-weight:700;font-size:17px;overflow:hidden;width:100%}:host .playlist-playing h3{color:var(--color-four);font-size:16px;overflow:hidden;width:100%}:host .playlist-progress{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:baseline;align-items:baseline;-ms-flex-pack:justify;justify-content:space-between;width:100%;padding:0 15px 15px}:host .playlist-progress progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:absolute;height:3px;bottom:0;left:0;width:100%;-webkit-transition:all 75ms ease-in-out .25s;transition:all 75ms ease-in-out .25s;cursor:pointer;z-index:2}:host .playlist-progress progress:hover{-webkit-transition:all 75ms ease-in-out 0s;transition:all 75ms ease-in-out 0s;height:16px;bottom:-8px}:host .playlist-progress progress[value]::-moz-progress-bar{background-color:var(--color-line)}:host .playlist-progress progress[value]::-webkit-progress-bar{background-color:var(--color-line)}:host .playlist-progress progress[value]::-webkit-progress-value{background-color:var(--color-three)}:host .playlist-list{max-height:50vh;overflow:auto;-webkit-transition:all .2s ease 0s;transition:all .2s ease 0s}:host .playlist-list.hide{max-height:0}:host .controls{display:-ms-flexbox;display:flex;display:none;margin:1em 0}:host .controls .button{font-size:2rem;width:50%;-ms-flex:12 6 200px;flex:12 6 200px}:host .controls .button stellar-asset{display:inline-block}:host .playlist-playing-image{margin:auto 0 auto auto;width:5rem;-ms-flex:0 0 5rem;flex:0 0 5rem;height:5rem;cursor:pointer}:host .playlist-playing-image img{width:100%;background:#fff;border:1px solid var(--color-one);border-radius:3px;height:auto;-webkit-box-shadow:0 3px 3px 0 var(--color-one);box-shadow:0 3px 3px 0 var(--color-one)}:host .playlist-playing .toggle-button{padding:0;margin-right:20px;width:50px;-ms-flex:0 0 50px;flex:0 0 50px;height:50px;padding:14px;border-radius:100%;background:var(--color-three);color:#fff}:host .playlist-playing .toggle-button path{fill:var(--color-bg)}:host .playlist-playing .toggle-button[data-playing=false]{padding:14px 12px 14px 16px}:host .st0{fill:var(--color-three)}:host .st1{fill:#fff}:host([view=art]) .playlist-playing{position:relative;margin:0;padding:0;overflow:hidden}:host([view=art]) web-audio-visualizer{height:50%;position:absolute;bottom:0;z-index:2;mix-blend-mode:multiply;-webkit-transition:all 0s var(--ease) 0s;transition:all 0s var(--ease) 0s}:host([view=art]) .playlist-playing .toggle-button{display:none}:host([view=art]) .playlist-playing .playlist-playing-details{position:absolute;bottom:0;width:100%;padding:2rem;background:var(--color-one);left:0;right:0;text-align:center;mix-blend-mode:hard-light;margin:0;-webkit-transform:translateY(100%);transform:translateY(100%);z-index:3}:host([view=art]:hover) .playlist-playing-details{-webkit-transform:translateY(0);transform:translateY(0)}:host([view=art]) .playlist-progress{padding:0 15px 0}:host([view=art]) .playlist-progress h6{display:none}:host([view=art]) .playlist-playing-image{width:100%;margin:0 auto;-ms-flex:none;flex:none;height:auto}:host([view=art]) .playlist-playing-image:focus,:host([view=art]) .playlist-playing-image:hover{-webkit-transform:scale(1.025);transform:scale(1.025);cursor:pointer}:host([view=art]) .playlist-playing-image img{width:100%}:host([view=art]) .controls{display:none}"; }
}

export { Playlist as StellarPlaylist };
