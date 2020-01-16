export declare class StellarMouseTrail {
    element: HTMLElement;
    count: number;
    speed: number;
    threedee: boolean;
    dots: Dot[];
    mouse: {
        x: number;
        y: number;
    };
    componentWillLoad(): void;
    componentDidLoad(): void;
    draw(): void;
    animate(): void;
    handleMouseMove(event: any): void;
}
declare class Dot {
    x: number;
    y: number;
    z: number;
    node: any;
    constructor(element: any, threedee: any, count: any, current: any);
    draw: () => void;
}
export {};
