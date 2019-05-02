import '../../../stencil.core';
export declare class Video360 {
    element: HTMLElement;
    src: string;
    poster: string;
    width: number;
    height: number;
    viewer: any;
    video: HTMLElement;
    componentDidLoad(): void;
    render(): JSX.Element[];
}
