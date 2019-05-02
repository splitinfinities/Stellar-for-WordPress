import '../../../stencil.core';
export declare class Video {
    element: HTMLElement;
    width: number;
    height: number;
    preload: string;
    autoplay: boolean;
    muted: boolean;
    playsinline: boolean;
    poster: string;
    controls: boolean;
    overlay: boolean;
    video: HTMLVideoElement;
    io: IntersectionObserver;
    componentDidLoad(): void;
    setDimensions(): void;
    addIntersectionObserver(): void;
    handleInScreen(): void;
    handleOffScreen(): void;
    render(): JSX.Element;
}
