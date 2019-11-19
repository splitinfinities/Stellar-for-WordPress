export declare class SkeletonText {
    element: HTMLElement;
    as: string | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    width: number;
    loading: boolean;
    observer: IntersectionObserver;
    componentWillLoad(): void;
    render(): any;
}
