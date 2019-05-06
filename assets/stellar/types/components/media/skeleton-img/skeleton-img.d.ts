export declare class SkeletonImg {
    element: HTMLElement;
    width: number;
    height: number;
    block: boolean;
    loading: boolean;
    icon: boolean;
    observer: IntersectionObserver;
    componentWillLoad(): void;
    render(): any[];
}
