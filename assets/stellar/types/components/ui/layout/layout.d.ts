export declare class Layout {
    element: HTMLElement;
    type: string;
    size: "tiny" | "small" | "medium" | "large" | "full" | "flush";
    padding: "none" | "tiny" | "small" | "medium" | "large";
    align: "baseline" | "center" | "top" | "bottom";
    componentWillLoad(): void;
    componentDidLoad(): void;
    refresh(): Promise<void>;
    render(): any;
}
