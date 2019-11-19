export declare class Avatar {
    element: HTMLElement;
    src: string;
    notooltip: boolean;
    size: string;
    color: string;
    name: string;
    initials: string;
    shape: "circle" | "square" | "rectangle" | "diamond" | "hexagon" | "star" | "message";
    processing: boolean;
    colorAuto: boolean;
    colors: string[];
    componentWillLoad(): void;
    formatName(): void;
    render(): any;
}
