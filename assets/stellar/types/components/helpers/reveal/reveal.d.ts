export declare class Scatter {
    element: HTMLElement;
    animation: "fadeIn" | "fadeInUp" | "fadeInDown";
    outAnimation: "fadeOut" | "fadeOutUp" | "fadeOutDown";
    delay: number;
    timing: number;
    active: boolean;
    io: IntersectionObserver;
    children: any;
    componentWillLoad(): void;
    componentDidLoad(): void;
    addIntersectionObserver(): void;
    removeIntersectionObserver(): void;
    calculateTiming(): Promise<void>;
    out(): Promise<void>;
    in(): Promise<void>;
    render(): any;
}
