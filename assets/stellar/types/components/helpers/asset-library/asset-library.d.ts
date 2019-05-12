import '../../../stencil.core';
import "ionicons";
export declare class AssetLibrary {
    element: HTMLElement;
    icons: any;
    kind: number;
    componentWillLoad(): void;
    fetchIcons(): Promise<void>;
    render(): JSX.Element;
}
