import '../../../stencil.core';
export declare class Tabs {
    element: HTMLElement;
    height: string;
    name: string;
    noanimation: boolean;
    size: string | "tiny" | "small" | "medium" | "large";
    block: boolean;
    vertical: boolean;
    behavior: string;
    tabsList: Array<HTMLStellarTabElement>;
    contentsList: Array<HTMLStellarContentElement>;
    ease: TweenInstance;
    blur: number;
    tabs(): Promise<HTMLStellarTabElement[]>;
    contents(): Promise<HTMLStellarContentElement[]>;
    blurring(): void;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): Promise<void>;
    render(): JSX.Element;
}
