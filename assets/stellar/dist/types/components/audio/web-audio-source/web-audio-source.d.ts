import { EventEmitter } from '../../../stencil.core';
export declare class WebAudioSource {
    element: HTMLElement;
    webAudioWrapper: HTMLElement;
    src: string;
    name: string;
    inert: boolean;
    midikey: number;
    midichannel: number;
    status: string;
    effectsvolume: number;
    context: AudioContext;
    masterGain: GainNode;
    wetGain: GainNode;
    dryGain: GainNode;
    channelGain: GainNode;
    effects: Array<object>;
    source: AudioBufferSourceNode;
    buffer: AudioBuffer;
    entry: string;
    duration: number;
    startTime: number;
    pausedTime: number;
    elapsedTime: number;
    playing: boolean;
    timeupdate: EventEmitter;
    getBuffer(): Promise<AudioBuffer>;
    webAudio(): Promise<HTMLElement>;
    gain(place?: string): Promise<GainNode>;
    getDuration(): Promise<number>;
    currentTime(): number;
    prepare(): Promise<void>;
    play(): Promise<void>;
    skipTo(time: any): Promise<void>;
    pause(): Promise<void>;
    toggle(): Promise<void>;
    stop(): Promise<void>;
    tick(): void;
    assignBuffer(webAudio: any, buffer: any): Promise<void>;
    prepareEffects(): Promise<void>;
}
