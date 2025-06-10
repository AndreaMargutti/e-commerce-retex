export type Editorial = (HeroBanner | TextBlock)[];

export type HeroBanner = {
  name: string;
  variant?: "links" | "buttons";
  image?: {
    src: string;
    alt: string;
  };
  title?: string;
  fontStyle?: "capitalized" | "uppercase";

  appendix?: string;
  subtitle?: string;
  links?: [
    {
      label: string;
      href: string;
    },
  ];
  buttons?: [
    {
      btnLabel: string;
      btnLink: string;
      btnType: "primary" | "secondary" | "tertiary";
    },
  ];
};

export type TextBlock = {
  name: "TextBlock";
  text: string;
};
