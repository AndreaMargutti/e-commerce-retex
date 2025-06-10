export type Editorial = (HeroBanner | TextBlock)[];

export type HeroBanner = {
  name: string;
  variant: "links" | "buttons";
  image?: {
    src: string;
    alt: string;
  };
  title?: string;
  appendix?: string;
  subtitle?: string;
  links?: [
    {
      label: string;
      href: string;
      fontSize?: "small" | "medium" | "large";
    },
  ];
  buttons?: [
    {
      btnLabel?: string;
      btnLink?: string;
      btnType?: "primary" | "secondary" | "tertiary";
    },
  ];
};

export type TextBlock = {
  name: "TextBlock";
  text: string;
};
