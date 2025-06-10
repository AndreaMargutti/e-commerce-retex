export type HeroBannerProps = {
  variant: "links" | "buttons";
  backgroundImage: string;
  appendix?: string;
  title?: string;
  fontStyle?: "capitalized" | "uppercase";
  subtitle?: string;
  labels?: string[];
  positionX: "left" | "center" | "right";
  positionY: "top" | "middle" | "bottom";
};
