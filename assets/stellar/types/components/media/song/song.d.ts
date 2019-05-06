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
    details(): Promise<{
        'title': string;
        'album': string;
        'genre': string;
        'artist': string;
        'picture': string;
    }>;
    preload(): Promise<void>;
    play(): Promise<void>;
    switching(): Promise<void>;
    getIndex(): Promise<number>;
    setIndex(value: any): Promise<void>;
    render(): any;
}
