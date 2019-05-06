import { asTime } from '../../../utils';
export class Playlist {
    constructor() {
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
        return (h("div", { id: "player" },
            h("div", { class: "playlist-title" },
                h("slot", { name: "title" },
                    h("h6", null, "Playlist")),
                h("button", { class: "playlist", onClick: () => this.togglePlaylist() },
                    h("h6", { class: "list" },
                        h("stellar-asset", { name: "musical-notes" }),
                        "list"))),
            h("div", { class: "playlist-playing" },
                h("button", { onClick: () => this.pause(), class: "toggle-button", "data-playing": this.playing }, (this.playing)
                    ? h("ion-icon", { name: "md-pause" })
                    : h("ion-icon", { name: "md-play" })),
                !this.load && h("button", { onClick: () => { this.load = true; } }, "Load this playlist"),
                this.load && h("div", { class: "playlist-playing-details" },
                    h("h2", null, this.currentTrack.title),
                    h("h3", null, this.currentTrack.artist)),
                this.load &&
                    (this.currentTrack.picture !== undefined) &&
                    h("div", { class: "playlist-playing-image" },
                        h("img", { src: this.currentTrack.picture, onClick: () => this.toggleAlbumArtView() })),
                h("web-audio-visualizer", { type: this.view === "art" ? "circle" : "bars" })),
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
            h("div", { id: "playlist", class: `playlist-list ${this.playlist}` }, this.load && h("slot", null))));
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
        "load": {
            "state": true
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
            "name": "keydown",
            "method": "handleKeydown"
        }]; }
    static get style() { return "/**style-placeholder:stellar-playlist:**/"; }
}
