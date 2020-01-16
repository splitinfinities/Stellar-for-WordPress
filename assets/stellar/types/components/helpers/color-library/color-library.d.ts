export declare class ColorLibrary {
    colors: string;
    shape: string;
    _colors: {
        "base": string;
        "white": string;
        "black": string;
        "black-alt": string;
        "gray": string[];
        "red": string[];
        "orange": string[];
        "yellow": string[];
        "lime": string[];
        "green": string[];
        "teal": string[];
        "cyan": string[];
        "blue": string[];
        "indigo": string[];
        "violet": string[];
        "fuschia": string[];
        "pink": string[];
    };
    componentWillLoad(): void;
    hexStyle: (color: any) => string;
    renderColorPallette(color: any): any[];
    render(): any;
}
