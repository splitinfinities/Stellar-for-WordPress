import '../../../stencil.core';
export declare class Image360 {
    element: HTMLElement;
    src: string;
    poster: string;
    width: number;
    height: number;
    viewer: any;
    image: HTMLElement;
    io: IntersectionObserver;
    ready: boolean;
    componentDidLoad(): void;
    addIntersectionObserver(): void;
    handleInScreen(): void;
    handleOffScreen(): void;
    prepare(): void;
    destroy(): void;
    render(): JSX.Element;
}
