import '../../../stencil.core';
export declare class Blur {
    element: HTMLElement;
    vertical: number;
    horizontal: number;
    generatedId: string;
    hostData(): {
        id: string;
    };
    supported_match(): boolean;
    supported(): any;
    setBlurFilter(): Promise<void>;
    componentDidLoad(): void;
    generateId(): string;
    render(): JSX.Element[];
}
