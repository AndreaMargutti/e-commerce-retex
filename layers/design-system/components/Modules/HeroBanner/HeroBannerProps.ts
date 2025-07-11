export type HeroBannerProps = {
  variant: "links" | "buttons";
  backgroundImage: string;
  backgroundImageAlt: string;
  appendix?: string;
  title?: string;
  fontStyle?: "capitalized" | "uppercase";
  subtitle?: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
  position?:
    | "top-left"
    | "top-right"
    | "top-center"
    | "middle-left"
    | "middle-right"
    | "middle-center"
    | "bottom-left"
    | "bottom-right"
    | "bottom-center";
  buttons?: Array<{
    btnLabel: string;
    btnLink: string;
    btnType: "primary" | "secondary" | "tertiary";
  }>;
};
