import '../../../stencil.core';
export declare class Dropdown {
    element: HTMLElement;
    position: "left" | "center" | "right";
    icon: boolean;
    label: string;
    open: boolean;
    ease: TweenInstance;
    blur: number;
    timeout: any;
    componentDidLoad(): void;
    observeOpen(): void;
    onToggle(): void;
    render(): JSX.Element;
}
