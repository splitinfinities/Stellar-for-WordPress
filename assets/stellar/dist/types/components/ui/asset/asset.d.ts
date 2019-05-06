import '../../../stencil.core';
import "ionicons";
export declare class Asset {
    src: string;
    name: string;
    language: string;
    align: string;
    ariaLabel: string;
    componentWillLoad(): void;
    block: boolean;
    render(): JSX.Element;
}
