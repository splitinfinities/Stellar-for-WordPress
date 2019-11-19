export declare class AnimateText {
    element: HTMLElement;
    method: string | "glitch" | "lettering" | "weight" | "fade";
    verticalBlur: number;
    horizontalBlur: number;
    blurHorizontal(): void;
    blurVertical(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): any;
}
