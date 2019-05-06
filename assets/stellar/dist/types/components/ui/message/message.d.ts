import '../../../stencil.core';
export declare class Message {
    element: HTMLElement;
    type: "alert" | "error" | "info" | "success";
    size: "full" | "default";
    closable: boolean;
    remember: boolean;
    name: string;
    shown: boolean;
    striped: boolean;
    theme: string;
    componentWillLoad(): void;
    hostData(): {
        class: string;
    };
    handleClose(): void;
    render(): JSX.Element;
}
