import '../../../stencil.core';
export declare class Accordion {
    element: HTMLElement;
    open: boolean;
    tight: boolean;
    name: string;
    label: string;
    blur: number;
    ease: TweenInstance;
    expander: HTMLElement;
    observer: MutationObserver;
    els: any;
    componentWillLoad(): void;
    componentDidLoad(): void;
    refresh(): Promise<void>;
    attachObserver(): void;
    componentWillUnload(): void;
    currentClasses(): string;
    openClass(): "" | "open";
    updateTabIndex(): void;
    handleClick(): void;
    render(): JSX.Element;
}
