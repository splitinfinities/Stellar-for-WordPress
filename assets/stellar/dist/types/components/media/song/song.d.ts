import '../../../stencil.core';
import { EventEmitter } from '../../../stencil.core';
export declare class Song {
    element: HTMLElement;
    songChanged: EventEmitter;
    songChangedHandler(): void;
    src: string;
    playing: boolean;
    artwork: boolean;
    _index: number;
    player: HTMLStellarPlaylistElement | any;
    title: string;
    album: string;
    artist: string;
    genre: string;
    picture: string;
    error: Object;
    readonly url: string;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    updateDetails(details: any): void;
    details(): {
        'title': string;
        'album': string;
        'genre': string;
        'artist': string;
        'picture': string;
    };
    preload(): void;
    play(): void;
    switching(): void;
    getIndex(): number;
    setIndex(value: any): void;
    render(): JSX.Element;
}
