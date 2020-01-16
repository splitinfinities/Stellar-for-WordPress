export declare class Content {
    element: HTMLElement;
    open: boolean;
    for: string;
    behavior: string;
    ease: TweenInstance;
    blur: number;
    parent: any;
    tab: HTMLStellarTabElement;
    componentWillLoad(): void;
    handleOpen(): void;
    handleActive(event: CustomEvent): Promise<void>;
    render(): any;
}
