import '../../../stencil.core';
export declare class SkeletonImg {
    element: HTMLElement;
    width: number;
    height: number;
    loading: boolean;
    icon: boolean;
    observer: IntersectionObserver;
    componentWillLoad(): void;
    render(): JSX.Element[];
}
