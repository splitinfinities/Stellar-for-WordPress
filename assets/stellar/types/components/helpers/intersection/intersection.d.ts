export declare class Intersection {
    el: HTMLElement;
    multiple: boolean;
    in: Function;
    out: Function;
    margin: string;
    element: HTMLElement | string;
    io: any;
    componentWillLoad(): void;
    componentDidUnload(): void;
    addIntersectionObserver(): void;
    removeIntersectionObserver(): void;
}
