export type HeroBannerProps = {
  variant: "links" | "buttons";
  backgroundImage: string;
  appendix?: string;
  title?: string;
  fontStyle?: "capitalized" | "uppercase";
  subtitle?: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
  positionX: "left" | "center" | "right";
  positionY: "top" | "middle" | "bottom";
  buttons?: Array<{
    btnLabel: string;
    btnLink: string;
    btnType: "primary" | "secondary" | "tertiary";
  }>;
};
