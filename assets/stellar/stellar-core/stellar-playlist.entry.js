import { r as registerInstance, d as createEvent, h, g as getElement } from './index-cc4604b3.js';
import './colors-eb996d31.js';
import './_commonjsHelpers-bccf23a2.js';
import './css-custom-properties.min-d9d14253.js';
import { c as asTime } from './index-26976b63.js';
import './main-e9832563.js';
import './moment-5e7e00c2.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';
import './utils-06e0aad6.js';
import './index-88205cad.js';

const PlaylistCss = ":host,\n:host * {\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tbox-sizing: border-box;\n}\n\n:host {\n\t--color-one: var(--theme-base1);\n\t--color-two: var(--theme-base9);\n\t--color-three: var(--theme-base5);\n\t--color-four: var(--theme-base7);\n\t--color-bg: var(--theme-base0);\n\t--color-bg-active: var(--theme-base1);\n\t--color-bg-playing: var(--theme-base2);\n\t--color-line: var(--theme-base1);\n  contain: content;\n}\n\n:host([dark]) {\n\t--color-one: var(--theme-base9);\n\t--color-two: var(--theme-base1);\n\t--color-three: var(--theme-base7);\n\t--color-four: var(--theme-base2);\n\t--color-bg: var(--black-alt);\n\t--color-bg-active: var(--theme-base8);\n\t--color-bg-playing: var(--theme-base8);\n\t--color-line: var(--black);\n}\n\n:host {\n\tdisplay: block;\n\tbox-sizing: border-box;\n\tbackground: var(--color-bg);\n\tmax-width: 650px;\n\twidth: 100%;\n\tmargin: 0 auto;\n}\n\n:host button {\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\tappearance: none;\n\tbackground: none;\n\toutline: 0;\n\tborder: 0;\n\tcursor: pointer;\n}\n\n:host button.playlist {\n\tmargin: 0 0.5rem 0 auto;\n}\n\n:host button.switch-view {\n\tmargin: 0 0.5rem 0 0;\n}\n\n:host audio {\n\tdisplay: none;\n}\n\n:host #player {\n\tposition: relative;\n}\n\n:host stellar-color-picker {\n\tz-index: 99;\n}\n\n:host web-audio-visualizer {\n    height: 0;\n\tmargin-top: 1rem;\n\topacity: 0;\n\ttransition: all 0.25s var(--ease) 0s;\n\twidth: 100%;\n}\n\n:host([playing]) web-audio-visualizer {\n\topacity: 1;\n\theight: 10rem;\n}\n\n:host h6 {\n\tfont-size: 0.75rem;\n\tmargin: 0;\n\ttext-transform: uppercase;\n\tcolor: var(--color-two);\n\tletter-spacing: .23em;\n\tz-index: 1;\n}\n\n:host h6.list {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n:host h6.list ion-icon {\n\tmargin-right: 0.5rem;\n}\n\n:host .playlist-playing,\n:host .playlist-progress,\n:host .playlist-playing-details,\n:host .playlist-title {\n\ttransition: all 0.1875s ease-in-out 0s;\n}\n:host .playlist-playing-image {\n\ttransition: all 0.25s ease-in-out 0s;\n}\n:host .playlist-title {\n\tbackground: var(--color-one);\n\theight: 3rem;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 0.5rem 1rem;\n}\n:host .playlist-playing-details {\n\tmargin-right: 30px;\n}\n:host .playlist-playing {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\tpadding: 2rem 1rem 3rem;\n\tposition: relative;\n}\n:host .playlist-playing h2,\n:host .playlist-playing h3 {\n\tfont-weight: 400;\n\tmargin: 0;\n}\n:host .playlist-playing h2 {\n\tcolor: var(--color-two);\n\tfont-weight: 700;\n\tfont-size: 17px;\n\toverflow: hidden;\n\twidth: 100%;\n}\n:host .playlist-playing h3 {\n\tcolor: var(--color-four);\n\tfont-size: 16px;\n\toverflow: hidden;\n\twidth: 100%;\n}\n:host .playlist-progress {\n\tdisplay: flex;\n\tposition: absolute;\n\talign-items: baseline;\n\tjustify-content: space-between;\n\twidth: 100%;\n\tpadding: 0 15px 15px;\n\tz-index: 5;\n\tbottom: 0;\n\tleft: 0;\n}\n\n:host .playlist-progress {\n\ttransition: all 100ms ease 0s;\n\topacity: 0;\n\ttransform: translateY(-10px);\n\tmax-height: 0;\n}\n\n:host .playlist-progress.load {\n\topacity: 1;\n\ttransform: translateY(0px);\n\tmax-height: 100px;\n}\n\n:host .playlist-progress progress {\n\t-webkit-appearance: none;\n\tappearance: none;\n\tposition: absolute;\n\theight: 3px;\n\tbottom: 0;\n\tleft: 0;\n\twidth: 100%;\n\ttransition: all 0.075s ease-in-out 0.25s;\n\tcursor: pointer;\n\tz-index: 2;\n}\n:host .playlist-progress progress:hover {\n\ttransition: all 0.075s ease-in-out 0s;\n\theight: 16px;\n\tbottom: -8px;\n}\n:host .playlist-progress progress[value]::-moz-progress-bar {\n\tbackground-color: var(--color-line);\n}\n:host .playlist-progress progress[value]::-webkit-progress-bar {\n\tbackground-color: var(--color-line);\n}\n:host .playlist-progress progress[value]::-webkit-progress-value {\n\tbackground-color: var(--color-three);\n}\n:host .playlist-list {\n\tmax-height: 24rem;\n\toverflow: auto;\n\ttransition: all 0.2s ease 0s;\n}\n:host .playlist-list.hide {\n\tmax-height: 0;\n}\n:host .controls {\n\tdisplay: flex;\n\tdisplay: none;\n\tmargin: 1em 0;\n}\n:host .controls .button {\n\tfont-size: 2rem;\n\twidth: 50%;\n\tflex: 12 6 200px;\n}\n:host .controls .button ion-icon {\n\tdisplay: inline-block;\n}\n:host .playlist-playing-image {\n\tmargin: auto 0 auto auto;\n\twidth: 5rem;\n\tflex: 0 0 5rem;\n\theight: 5rem;\n\tcursor: pointer;\n}\n:host .playlist-playing-image img {\n\twidth: 100%;\n\tbackground: white;\n\tborder-radius: 3px;\n\theight: auto;\n\tbox-shadow: 0 3px 3px 0px rgba(232,232,232,0.6);\n}\n:host .playlist-playing .toggle-button {\n\tpadding: 0;\n\tmargin-right: 2rem;\n\twidth: 3rem;\n\theight: 3rem;\n\tpadding: 14px;\n\tborder-radius: 100%;\n\tbackground: var(--color-three);\n\tcolor: white;\n\tposition: relative;\n}\n:host .playlist-playing .toggle-button ion-icon {\n    font-size: 2rem;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n:host .playlist-playing .toggle-button ion-icon[name=\"play\"] {\n    transform: translate(-43%, -50%);\n}\n:host .playlist-playing .toggle-button[data-playing=\"false\"] {\n\tpadding: 14px 12px 14px 16px;\n}\n:host .st0 {\n\tfill: var(--color-three);\n}\n:host .st1 {\n\tfill: #fff;\n}\n\n:host skeleton-img {\n\tdisplay: none;\n}\n\n:host([view=\"art\"]) .playlist-playing {\n\tposition: relative;\n\tmargin: 0;\n\tpadding: 0;\n\toverflow: hidden;\n}\n\n:host([view=\"art\"]) web-audio-visualizer {\n\theight: 100%;\n\tposition: absolute;\n\tbottom: 0;\n\tz-index: 2;\n\ttransition: all 0s var(--ease) 0s;\n}\n\n:host([view=\"art\"]) .playlist-playing .toggle-button {\n\tdisplay: none;\n}\n\n:host([view=\"art\"]) .playlist-playing .playlist-playing-details {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    padding: 2rem;\n    background: var(--color-one);\n    left: 0;\n    right: 0;\n    text-align: center;\n\tmix-blend-mode: hard-light;\n\tmargin: 0;\n\ttransform: translateY(100%);\n\tz-index: 3;\n}\n\n:host([view=\"art\"]:hover) .playlist-playing-details {\n\ttransform: translateY(0%);\n}\n\n:host([view=\"art\"]) .playlist-progress {\n\tpadding: 0 15px 0px;\n}\n\n:host([view=\"art\"]) .playlist-progress h6 {\n\tdisplay: none;\n}\n\n:host([view=\"art\"]) .playlist-playing stellar-button {\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 50%;\n\tz-index: 3;\n\ttransform: translate(-50%, -50%) !important;\n}\n\n:host([view=\"art\"]) skeleton-img,\n:host([view=\"art\"]) .playlist-playing-image {\n\tdisplay: block;\n    width: 100%;\n    margin: 0 auto;\n    flex: none;\n\theight: 0;\n    padding-bottom: 100%;\n}\n\n:host([view=\"art\"]) .playlist-playing-image:hover,\n:host([view=\"art\"]) .playlist-playing-image:focus {\n\ttransform: scale(1.025);\n\tcursor: pointer;\n}\n\n:host([view=\"art\"]) .playlist-playing-image img {\n\twidth: 100%;\n}\n\n:host([view=\"art\"]) .controls {\n\tdisplay: none;\n}\n\n:host([dark]) .playlist-playing-image img {\n\tbox-shadow: 0 3px 3px 0px rgba(24,24,24,0.6);\n}\n\n:host([dark]) web-audio-visualizer {\n\tfilter: hue-rotate(180deg) invert(80%);\n}\n";

const Playlist = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.visualizationColor = "gray";
        this.visualizationType = "bars";
        this.autoplay = false;
        this.playlist = "show";
        this.name = "Playlist";
        this.remember = true;
        this.artwork = false;
        this.view = "playlist";
        this.playing = false;
        this.load = false;
        this.loading = false;
        this.dark = false;
        this.current = 0;
        this.currentTrack = {
            title: 'Loading...',
            artist: 'One sec...',
            picture: undefined
        };
        this.progressValue = 0;
        this.load_songs = createEvent(this, "load_songs", 7);
    }
    componentWillLoad() {
        this.loadFromStorage();
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
        this.handleUpdates();
        this.handleProgressClick();
    }
    cycleVisualizations() {
        // this.view === "art" ? "circle" : "bars";
        if (this.visualizationType === "circle") {
            this.visualizationType = "bars";
        }
        else if (this.visualizationType === "bars") {
            this.visualizationType = "bars2";
        }
        else if (this.visualizationType === "bars2") {
            this.visualizationType = "wave";
        }
        else if (this.visualizationType === "wave") {
            this.visualizationType = "circle";
        }
    }
    handleProgressClick() {
        this.progress.addEventListener('click', (e) => {
            var x = e.offsetX;
            var clickedValue = x / this.progress.offsetWidth;
            this.audio.currentTime = clickedValue * this.audio.duration;
        });
    }
    handleUpdates() {
        this.audio.addEventListener("update", () => {
            this.currentTime = asTime(parseFloat(this.audio.currentTime.toString()).toFixed(10));
            this.duration = asTime(parseFloat(this.audio.duration.toString()).toFixed(10));
            const value = (this.audio.currentTime !== 0 && this.audio.duration !== 0) ? ((this.audio.currentTime / this.audio.duration) * 100) : 0;
            this.progressValue = value;
        });
        this.audio.addEventListener('ended', this.next.bind(this));
    }
    handleKeydown(event) {
        if (event.key === "space") {
            this.pause();
        }
        else if (event.key === "left") {
            this.previous();
        }
        else if (event.key === "right") {
            this.next();
        }
    }
    async handleSongLoaded(event) {
        const el = event.detail.el;
        if (el.playing) {
            await this.prepare(el);
            await this.play(true);
        }
    }
    loadFromStorage() {
        var playlist = localStorage.getItem('playlist');
        if (playlist === "show" || playlist === "hide") {
            this.playlist = playlist;
        }
    }
    async prepare(element) {
        if (this.currentPlaylistItem) {
            this.currentPlaylistItem.switching();
        }
        this.currentTrack = {
            title: 'Loading...',
            artist: 'One sec...',
            picture: undefined
        };
        this.currentPlaylistItem = element;
        this.audio.src = this.currentPlaylistItem.src;
        await this.audio.load();
        this.current = await this.currentPlaylistItem.getIndex();
        this.currentPlaylistItem.playing = true;
        this.currentTrack = await this.currentPlaylistItem.details();
    }
    async play(skipDefault = false) {
        if (!skipDefault) {
            this.currentTrack = {
                title: 'Loading...',
                artist: 'One sec...',
                picture: undefined
            };
        }
        this.loading = true;
        this.playing = true;
        await this.audio.play();
        if (!this.context) {
            // @ts-ignore
            const context = new (window.AudioContext || window.webkitAudioContext)();
            ;
            const src = context.createMediaElementSource(this.audio);
            const waanalyser = await this.visualizer.connect(context);
            src.connect(waanalyser.analyser);
            waanalyser.analyser.connect(context.destination);
            this.context = context;
        }
        this.currentTrack = await this.currentPlaylistItem.details();
        this.loading = false;
    }
    async pause() {
        if (!this.audio.paused) {
            this.playing = false;
            await this.audio.pause();
        }
        else {
            this.playing = true;
            await this.audio.play();
        }
    }
    async next() {
        var song;
        song = this.element.querySelector('stellar-song[playing]');
        if (this.current === this.playlistItems.length - 1) {
            song = this.element.querySelector('stellar-song:first-child');
        }
        else {
            song = song.nextElementSibling;
        }
        await song.play();
    }
    async previous() {
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
    async handlePlay() {
        if (!this.load) {
            this.load = true;
            this.load_songs.emit({});
        }
        this.pause();
    }
    render() {
        return (h("div", { id: "player" }, h("div", { class: "playlist-title" }, h("h6", null, this.name), h("button", { class: "playlist", onClick: () => this.togglePlaylist() }, h("h6", { class: "list" }, h("ion-icon", { name: "musical-notes" }), "list")), h("button", { class: "switch-view", onClick: () => this.toggleAlbumArtView(), "data-playing": this.playing }, h("h6", { class: "list" }, (this.view === "art")
            ? h("ion-icon", { name: "albums" })
            : h("ion-icon", { name: "radio" }), (this.view === "art")
            ? "Art"
            : "Player")), h("stellar-color-picker", { val: this.visualizationColor, notransparent: true, onUpdate: (e) => { this.visualizationColor = e.detail; } })), h("div", { class: "playlist-playing" }, h("button", { onClick: () => { this.handlePlay(); }, class: "toggle-button", "data-playing": this.playing }, (this.playing)
            ? h("ion-icon", { name: "pause" })
            : h("ion-icon", { name: "play" })), !this.load && h("stellar-button", { tag: "button", size: "tiny", onClick: () => { this.load = true; this.load_songs.emit({}); } }, "Load ", this.name || "this playlist"), this.load && h("div", { class: "playlist-playing-details" }, h("h2", null, this.currentTrack.title || 'Loading...'), h("h3", null, this.currentTrack.artist || 'One Sec...')), this.load &&
            h("div", { class: "playlist-playing-image" }, this.loading && h("stellar-progress", { indeterminate: true }), !this.loading && (this.currentTrack.picture !== undefined) && h("img", { src: this.currentTrack.picture, onClick: () => this.toggleAlbumArtView() })), (!this.load && this.currentTrack.picture === undefined) && h("skeleton-img", { width: 1024, height: 1024, block: true, loading: true }), h("web-audio-visualizer", { type: this.visualizationType, color: this.visualizationColor, onClick: () => { this.cycleVisualizations(); }, width: 1024, height: this.view === "art" ? 1024 : 256 }), h("div", { class: `playlist-progress ${this.load ? "load" : "noload"}` }, h("h6", { id: "currentTime" }, this.currentTime), h("h6", { id: "totalTime" }, this.duration), h("progress", { id: "progress", max: "100", value: this.progressValue }))), h("div", { id: "controls", class: "controls" }, h("button", { onClick: () => this.previous(), class: "button previous" }, h("ion-icon", { name: "skip-backward" })), h("button", { onClick: () => this.next(), class: "button next" }, h("ion-icon", { name: "skip-forward" }))), h("audio", { id: "playlist-audio", preload: "auto", tabindex: "0", controls: true }, h("source", { id: "source", type: "audio/mp3" })), h("div", { id: "playlist", class: `playlist-list ${this.playlist}` }, this.load && h("slot", null))));
    }
    get element() { return getElement(this); }
    static get style() { return PlaylistCss; }
};
Tunnel.injectProps(Playlist, ['dark']);

export { Playlist as stellar_playlist };
