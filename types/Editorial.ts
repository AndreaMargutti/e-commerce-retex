export type Editorial = (HeroBanner | TextBlock | CardGallery | SplitSection)[];

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
  positioningY?: "top" | "middle" | "bottom";
  positioningX?: "left" | "center" | "right";
};

export type TextBlock = {
  name: "TextBlock";
  title?: string;
  text: string;
};

export type CardGallery = {
  name: "CardGallery";
  title?: string;
  cards: Array<{
    title: string;
    text: string;
    image: string;
    imageAlt: string;
    labels: Array<{
      label: string;
      link: string;
    }>;
  }>;
};

export type SplitSection = {
  name: "SplitSection";
  title?: string;
  text: string;
  image: {
    src: string;
    alt: string;
  };
  orientation: "left" | "right";
};
