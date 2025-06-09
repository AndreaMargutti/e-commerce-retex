export type HeroBannerProps = {
  backgroundImage: string;
  appendix?: string;
  title?: string;
  subtitle?: string;
  labels?: string[];
  positionX: "left" | "center" | "right";
  positionY: "top" | "middle" | "bottom";
};
