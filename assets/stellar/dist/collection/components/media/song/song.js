import { leadingZeroIndex, relPathAsAbs } from "../../../utils";
import jsmediatags from 'jsmediatags/dist/jsmediatags.js';
import smallIndexedDb from 'small-indexeddb';
export class Song {
    constructor() {
        this._index = 0;
    }
    songChangedHandler() {
        this.songChanged.emit(this._index);
    }
    get url() {
        return window.location.origin + relPathAsAbs(this.src);
    }
    async componentWillLoad() {
        const transaction = await smallIndexedDb('songs');
        const details = await transaction('readonly', store => store.get(this.src));
        if (!details) {
            jsmediatags.read(this.url, {
                onSuccess: async (tag) => {
                    var itemToSave = {
                        title: tag.tags.title,
                        album: tag.tags.album,
                        genre: tag.tags.genre,
                        artist: tag.tags.artist,
                        picture: tag.tags.picture
                    };
                    if (tag.tags.picture) {
                        var base64String = "";
                        for (var i = 0; i < tag.tags.picture.data.length; i++) {
                            base64String += String.fromCharCode(tag.tags.picture.data[i]);
                        }
                        var base64 = "data:image/jpeg;base64," + window.btoa(base64String);
                        itemToSave.picture = base64;
                        await transaction('readwrite', store => store.put(base64, itemToSave.album + "_picture"));
                    }
                    else {
                        itemToSave.picture = undefined;
                    }
                    await transaction('readwrite', store => store.put(JSON.stringify(itemToSave), this.src));
                    this.updateDetails(itemToSave);
                },
                onError: (error) => {
                    this.error = error;
                }
            });
        }
        else {
            var songDetails = JSON.parse(details);
            const picture = await transaction('readonly', store => store.get(songDetails.album + "_picture"));
            songDetails.picture = picture;
            this.updateDetails(songDetails);
        }
    }
    componentDidLoad() {
        this.player = this.element.parentElement;
    }
    updateDetails(details) {
        this.title = details.title;
        this.album = details.album;
        this.genre = details.genre;
        this.artist = details.artist;
        this.picture = details.picture;
    }
    details() {
        return {
            'title': this.title,
            'album': this.album,
            'genre': this.genre,
            'artist': this.artist,
            'picture': this.picture
        };
    }
    preload() {
        var audio = new Audio();
        audio.src = this.src;
        audio.preload = "auto";
        audio.volume = 1;
    }
    play() {
        if (!this.playing) {
            this.songChangedHandler();
            this.playing = true;
            this.player.prepare(this.element);
            this.player.play();
        }
    }
    switching() {
        this.playing = false;
    }
    getIndex() {
        return this._index;
    }
    setIndex(value) {
        this._index = value;
    }
    render() {
        return (h("button", { onClick: () => this.play() },
            h("span", { class: "index" },
                !this.playing && leadingZeroIndex(this._index),
                this.playing && h("stellar-asset", { name: "play" })),
            h("div", { class: "tracklisting" },
                this.artwork && h("img", { src: this.picture, class: "preview-image" }),
                h("h2", null,
                    h("span", null, this.title || "Loading..."),
                    " / ",
                    this.artist || "Loading...")),
            h("img", { src: this.picture, class: "backdrop" })));
    }
    static get is() { return "stellar-song"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "_index": {
            "state": true
        },
        "album": {
            "state": true
        },
        "artist": {
            "state": true
        },
        "artwork": {
            "type": Boolean,
            "attr": "artwork"
        },
        "details": {
            "method": true
        },
        "element": {
            "elementRef": true
        },
        "error": {
            "state": true
        },
        "genre": {
            "state": true
        },
        "getIndex": {
            "method": true
        },
        "picture": {
            "state": true
        },
        "play": {
            "method": true
        },
        "player": {
            "state": true
        },
        "playing": {
            "type": Boolean,
            "attr": "playing",
            "reflectToAttr": true,
            "mutable": true
        },
        "preload": {
            "method": true
        },
        "setIndex": {
            "method": true
        },
        "src": {
            "type": String,
            "attr": "src"
        },
        "switching": {
            "method": true
        },
        "title": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "songChanged",
            "method": "songChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:stellar-song:**/"; }
}
