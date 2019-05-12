import { asTime } from '../../../utils';
export class Playlist {
    constructor() {
        this.visualizationColor = "gray";
        this.autoplay = false;
        this.playlist = "show";
        this.name = "Playlist";
        this.remember = true;
        this.artwork = false;
        this.view = "playlist";
        this.playing = false;
        this.load = false;
        this.loading = false;
        this.current = 0;
        this.currentTrack = {
            title: 'Loading...',
            artist: 'One sec...',
            picture: undefined
        };
        this.progress_value = 0;
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
            var context = new AudioContext();
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
        console.log(this.load);
        if (!this.load) {
            this.load = true;
            this.load_songs.emit({});
        }
        this.pause();
    }
    render() {
        return (h("div", { id: "player" },
            h("div", { class: "playlist-title" },
                h("h6", null, this.name),
                h("button", { class: "playlist", onClick: () => this.togglePlaylist() },
                    h("h6", { class: "list" },
                        h("stellar-asset", { name: "musical-notes" }),
                        "list"))),
            h("div", { class: "playlist-playing" },
                h("button", { onClick: () => { this.handlePlay(); }, class: "toggle-button", "data-playing": this.playing }, (this.playing)
                    ? h("ion-icon", { name: "md-pause" })
                    : h("ion-icon", { name: "md-play" })),
                !this.load && h("stellar-button", { tag: "button", size: "tiny", onClick: () => { this.load = true; this.load_songs.emit({}); } },
                    "Load ",
                    this.name || "this playlist"),
                this.load && h("div", { class: "playlist-playing-details" },
                    h("h2", null, this.currentTrack.title || 'Loading...'),
                    h("h3", null, this.currentTrack.artist || 'One Sec...')),
                this.load &&
                    h("div", { class: "playlist-playing-image" },
                        this.loading && h("stellar-progress", { indeterminate: true }),
                        !this.loading && (this.currentTrack.picture !== undefined) && h("img", { src: this.currentTrack.picture, onClick: () => this.toggleAlbumArtView() })),
                h("web-audio-visualizer", { type: this.view === "art" ? "circle" : "bars", color: this.visualizationColor })),
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
        "duration": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "load": {
            "type": Boolean,
            "attr": "load",
            "reflectToAttr": true,
            "mutable": true
        },
        "loading": {
            "type": Boolean,
            "attr": "loading"
        },
        "name": {
            "type": String,
            "attr": "name"
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
        "visualizationColor": {
            "type": String,
            "attr": "visualization-color"
        },
        "visualizer": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "load_songs",
            "method": "load_songs",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "keydown",
            "method": "handleKeydown"
        }, {
            "name": "loaded",
            "method": "handleSongLoaded"
        }]; }
    static get style() { return "/**style-placeholder:stellar-playlist:**/"; }
}
