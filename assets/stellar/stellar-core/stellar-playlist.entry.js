import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';
import './chunk-452e3210.js';
import './chunk-aefb00c1.js';
import { p as asTime } from './chunk-15cea9da.js';
import './chunk-f26db59a.js';

class Playlist {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.load = false;
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
    async prepare(element) {
        if (this.currentPlaylistItem) {
            this.currentPlaylistItem.switching();
        }
        this.currentPlaylistItem = element;
        this.audio.src = this.currentPlaylistItem.src;
        this.audio.load();
        this.current = await this.currentPlaylistItem.getIndex();
        this.currentPlaylistItem.playing = true;
        this.currentTrack = await this.currentPlaylistItem.details();
    }
    async play() {
        this.playing = true;
        this.audio.play();
        if (!this.context) {
            var context = new AudioContext();
            const src = context.createMediaElementSource(this.audio);
            const waanalyser = await this.visualizer.connect(context);
            src.connect(waanalyser.analyser);
            waanalyser.analyser.connect(context.destination);
            this.context = context;
        }
    }
    async pause() {
        if (!this.audio.paused) {
            this.playing = false;
            this.audio.pause();
        }
        else {
            this.playing = true;
            this.audio.play();
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
        song.play();
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
    render() {
        return (h("div", { id: "player" }, h("div", { class: "playlist-title" }, h("slot", { name: "title" }, h("h6", null, "Playlist")), h("button", { class: "playlist", onClick: () => this.togglePlaylist() }, h("h6", { class: "list" }, h("stellar-asset", { name: "musical-notes" }), "list"))), h("div", { class: "playlist-playing" }, h("button", { onClick: () => this.pause(), class: "toggle-button", "data-playing": this.playing }, (this.playing)
            ? h("ion-icon", { name: "md-pause" })
            : h("ion-icon", { name: "md-play" })), !this.load && h("button", { onClick: () => { this.load = true; } }, "Load this playlist"), this.load && h("div", { class: "playlist-playing-details" }, h("h2", null, this.currentTrack.title), h("h3", null, this.currentTrack.artist)), this.load &&
            (this.currentTrack.picture !== undefined) &&
            h("div", { class: "playlist-playing-image" }, h("img", { src: this.currentTrack.picture, onClick: () => this.toggleAlbumArtView() })), h("web-audio-visualizer", { tag: this.audio, type: this.view === "art" ? "circle" : "bars" })), h("div", { id: "controls", class: "controls" }, h("button", { onClick: () => this.previous(), class: "button previous" }, h("stellar-asset", { name: "skip-backward" })), h("button", { onClick: () => this.next(), class: "button next" }, h("stellar-asset", { name: "skip-forward" }))), h("div", { class: "playlist-progress" }, h("h6", { id: "currentTime" }, this.currentTime), h("h6", { id: "totalTime" }, this.duration), h("progress", { id: "progress", max: "100", value: this.progress_value })), h("audio", { id: "playlist-audio", preload: "auto", tabindex: "0", controls: true }, h("source", { id: "source", type: "audio/mp3" })), h("div", { id: "playlist", class: `playlist-list ${this.playlist}` }, this.load && h("slot", null))));
    }
    get element() { return getElement(this); }
    static get style() { return ":host,\n:host * {\n	-webkit-font-smoothing: antialiased;\n	-moz-osx-font-smoothing: grayscale;\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n}\n\n:host {\n	--color-one: var(--theme-base1);\n	--color-two: var(--theme-base9);\n	--color-three: var(--theme-base5);\n	--color-four: var(--theme-base7);\n	--color-bg: var(--theme-base0);\n	--color-bg-active: var(--theme-base1);\n	--color-bg-playing: var(--theme-base2);\n	--color-line: var(--theme-base1);\n}\n\n:host-context(.dark-mode):host {\n	--color-one: var(--theme-base9);\n	--color-two: var(--theme-base1);\n	--color-three: var(--theme-base5);\n	--color-four: var(--theme-base2);\n	--color-bg: var(--black-alt);\n	--color-bg-active: var(--theme-base8);\n	--color-bg-playing: var(--theme-base8);\n	--color-line: var(--black);\n}\n\n:host {\n	display: block;\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n	background: var(--color-bg);\n	max-width: 650px;\n	width: 100%;\n	margin: 0 auto;\n}\n\n:host button {\n	-webkit-appearance: none;\n	-moz-appearance: none;\n	appearance: none;\n	background: none;\n	outline: 0;\n	border: 0;\n	cursor: pointer;\n}\n\n:host audio {\n	display: none;\n}\n\n:host web-audio-visualizer {\n    height: 0;\n	margin-top: 1rem;\n	opacity: 0;\n	-webkit-transition: all 0.25s var(--ease) 0s;\n	transition: all 0.25s var(--ease) 0s;\n	pointer-events: none;\n}\n\n:host([playing]) web-audio-visualizer {\n	opacity: 1;\n	height: 10rem;\n}\n\n:host h6 {\n	font-size: 0.75rem;\n	margin: 0;\n	text-transform: uppercase;\n	color: var(--color-two);\n	letter-spacing: .23em;\n	z-index: 1;\n}\n\n:host h6.list {\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-align: center;\n	align-items: center;\n}\n\n:host h6.list stellar-asset {\n	margin-right: 0.5rem;\n}\n\n:host .playlist-playing,\n:host .playlist-progress,\n:host .playlist-playing-details,\n:host .playlist-title {\n	-webkit-transition: all 0.1875s ease-in-out 0s;\n	transition: all 0.1875s ease-in-out 0s;\n}\n:host .playlist-playing-image {\n	-webkit-transition: all 0.25s ease-in-out 0s;\n	transition: all 0.25s ease-in-out 0s;\n}\n:host .playlist-title {\n	background: var(--color-one);\n	height: 40px;\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-align: center;\n	align-items: center;\n	-ms-flex-pack: justify;\n	justify-content: space-between;\n	padding: 10px 30px;\n}\n:host .playlist-playing-details {\n	margin-right: 30px;\n}\n:host .playlist-playing {\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-wrap: wrap;\n	flex-wrap: wrap;\n	-ms-flex-align: center;\n	align-items: center;\n	margin: 30px;\n}\n:host .playlist-playing h2,\n:host .playlist-playing h3 {\n	font-weight: 400;\n	margin: 0;\n}\n:host .playlist-playing h2 {\n	color: var(--color-two);\n	font-weight: 700;\n	font-size: 17px;\n	overflow: hidden;\n	width: 100%;\n}\n:host .playlist-playing h3 {\n	color: var(--color-four);\n	font-size: 16px;\n	overflow: hidden;\n	width: 100%;\n}\n:host .playlist-progress {\n	display: -ms-flexbox;\n	display: flex;\n	position: relative;\n	-ms-flex-align: baseline;\n	align-items: baseline;\n	-ms-flex-pack: justify;\n	justify-content: space-between;\n	width: 100%;\n	padding: 0 15px 15px;\n}\n:host .playlist-progress progress {\n	-webkit-appearance: none;\n	-moz-appearance: none;\n	appearance: none;\n	position: absolute;\n	height: 3px;\n	bottom: 0;\n	left: 0;\n	width: 100%;\n	-webkit-transition: all 0.075s ease-in-out 0.25s;\n	transition: all 0.075s ease-in-out 0.25s;\n	cursor: pointer;\n	z-index: 2;\n}\n:host .playlist-progress progress:hover {\n	-webkit-transition: all 0.075s ease-in-out 0s;\n	transition: all 0.075s ease-in-out 0s;\n	height: 16px;\n	bottom: -8px;\n}\n:host .playlist-progress progress[value]::-moz-progress-bar {\n	background-color: var(--color-line);\n}\n:host .playlist-progress progress[value]::-webkit-progress-bar {\n	background-color: var(--color-line);\n}\n:host .playlist-progress progress[value]::-webkit-progress-value {\n	background-color: var(--color-three);\n}\n:host .playlist-list {\n	max-height: 50vh;\n	overflow: auto;\n	-webkit-transition: all 0.2s ease 0s;\n	transition: all 0.2s ease 0s;\n}\n:host .playlist-list.hide {\n	max-height: 0;\n}\n:host .controls {\n	display: -ms-flexbox;\n	display: flex;\n	display: none;\n	margin: 1em 0;\n}\n:host .controls .button {\n	font-size: 2rem;\n	width: 50%;\n	-ms-flex: 12 6 200px;\n	flex: 12 6 200px;\n}\n:host .controls .button stellar-asset {\n	display: inline-block;\n}\n:host .playlist-playing-image {\n	margin: auto 0 auto auto;\n	width: 5rem;\n	-ms-flex: 0 0 5rem;\n	flex: 0 0 5rem;\n	height: 5rem;\n	cursor: pointer;\n}\n:host .playlist-playing-image img {\n	width: 100%;\n	background: white;\n	border: 1px solid var(--color-one);\n	border-radius: 3px;\n	height: auto;\n	-webkit-box-shadow: 0 3px 3px 0px var(--color-one);\n	box-shadow: 0 3px 3px 0px var(--color-one);\n}\n:host .playlist-playing .toggle-button {\n	padding: 0;\n	margin-right: 20px;\n	width: 50px;\n	-ms-flex: 0 0 50px;\n	flex: 0 0 50px;\n	height: 50px;\n	padding: 14px;\n	border-radius: 100%;\n	background: var(--color-three);\n	color: white;\n}\n:host .playlist-playing .toggle-button path {\n	fill: var(--color-bg);\n}\n:host .playlist-playing .toggle-button[data-playing=\"false\"] {\n	padding: 14px 12px 14px 16px;\n}\n:host .st0 {\n	fill: var(--color-three);\n}\n:host .st1 {\n	fill: #fff;\n}\n\n:host([view=\"art\"]) .playlist-playing {\n	position: relative;\n	margin: 0;\n	padding: 0;\n	overflow: hidden;\n}\n\n:host([view=\"art\"]) web-audio-visualizer {\n	height: 100%;\n	position: absolute;\n	bottom: 0;\n	z-index: 2;\n	-webkit-transition: all 0s var(--ease) 0s;\n	transition: all 0s var(--ease) 0s;\n}\n\n:host([view=\"art\"]) .playlist-playing .toggle-button {\n	display: none;\n}\n\n:host([view=\"art\"]) .playlist-playing .playlist-playing-details {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    padding: 2rem;\n    background: var(--color-one);\n    left: 0;\n    right: 0;\n    text-align: center;\n	mix-blend-mode: hard-light;\n	margin: 0;\n	-webkit-transform: translateY(100%);\n	transform: translateY(100%);\n	z-index: 3;\n}\n\n:host([view=\"art\"]:hover) .playlist-playing-details {\n	-webkit-transform: translateY(0%);\n	transform: translateY(0%);\n}\n\n:host([view=\"art\"]) .playlist-progress {\n	padding: 0 15px 0px;\n}\n\n:host([view=\"art\"]) .playlist-progress h6 {\n	display: none;\n}\n\n:host([view=\"art\"]) .playlist-playing-image {\n    width: 100%;\n    margin: 0 auto;\n    -ms-flex: none;\n    flex: none;\n    height: auto;\n}\n\n:host([view=\"art\"]) .playlist-playing-image:hover,\n:host([view=\"art\"]) .playlist-playing-image:focus {\n	-webkit-transform: scale(1.025);\n	transform: scale(1.025);\n	cursor: pointer;\n}\n\n:host([view=\"art\"]) .playlist-playing-image img {\n	width: 100%;\n}\n\n:host([view=\"art\"]) .controls {\n	display: none;\n}"; }
}

export { Playlist as stellar_playlist };
