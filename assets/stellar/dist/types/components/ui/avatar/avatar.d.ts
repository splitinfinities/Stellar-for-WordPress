import '../../../stencil.core';
export declare class Avatar {
    element: HTMLElement;
    src: string;
    tooltip: boolean;
    size: string;
    color: string;
    name: string;
    initials: string;
    shape: "circle" | "square" | "rectangle" | "diamond" | "hexagon" | "star" | "message";
    processing: boolean;
    colorAuto: boolean;
    colors: string[];
    componentWillLoad(): void;
    hostData(): {
        class: string;
    };
    formatName(): void;
    render(): JSX.Element;
}
