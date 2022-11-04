export enum ModalPositionX {
  center = "center",
  right = "right",
  left = "left",
}

export enum ModalPositionY {
  center = "center",
  right = "right",
  left = "left",
}

export interface ModalConfig {
  title: string;
  shoHeader: boolean;
  positionX: ModalPositionX;
  positionY: ModalPositionY;
  padding: string;
  showOverlay: boolean;
}
