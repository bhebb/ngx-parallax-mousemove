export interface ParallaxProperties {
  relativeInput?: boolean;
  clipRelativeInput?: boolean;

  hoverOnly?: boolean;
  inputElement?: HTMLElement;
  calibrateX?: boolean;
  calibrateY?: boolean;
  invertX?: boolean;
  invertY?: boolean;
  limitX?: number;
  limitY?: number;
  scalarX?: number;
  scalarY?: number;
  frictionX?: number;
  frictionY?: number;
  originX?: number;
  originY?: number;
  precision?: number;
  pointerEvents?: boolean;
  onReady?: Function;
}
