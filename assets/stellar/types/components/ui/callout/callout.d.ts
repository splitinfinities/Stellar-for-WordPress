export declare class Callout {
    element: HTMLElement;
    type: "alert" | "error" | "info" | "success" | "default";
    theme: string;
    componentDidLoad(): void;
    handleTheme(): void;
    handleType(): void;
    render(): any;
}
