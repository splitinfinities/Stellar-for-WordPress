import '../../../stencil.core';
export declare class Interview {
    element: HTMLElement;
    randomId: number;
    src: string;
    color: string;
    playing: boolean;
    width: number;
    height: number;
    aspectRatio: number;
    visualization: "circle" | "bars" | "wave" | "bars2";
    audio: HTMLWebAudioElement;
    audio_source: HTMLWebAudioSourceElement;
    io: IntersectionObserver;
    loaded: boolean;
    loading: boolean;
    visible: boolean;
    updateFunc: Function;
    duration: number;
    current: number;
    interviewLines: any;
    componentWillLoad(): void;
    componentDidLoad(): Promise<void>;
    addIntersectionObserver(): void;
    cache: WeakMap<object, any>;
    handleTimeUpdate(event: any): void;
    readonly time: number;
    handleInScreen(): Promise<void>;
    attachContext(): Promise<void>;
    handleOffScreen(): Promise<void>;
    play(): Promise<void>;
    skipTo(time: number): Promise<void>;
    pause(): Promise<void>;
    toggle(): Promise<void>;
    handleClick(): Promise<void>;
    handleCurrentClick(): void;
    render(): JSX.Element;
}
