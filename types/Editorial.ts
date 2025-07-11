export type Editorial = (HeroBanner | TextBlock | CardGallery | SplitSection)[];

export type HeroBanner = {
  name: "HeroBanner";
  data: {
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
  };
};

export type TextBlock = {
  name: "TextBlock";
  data: {
    title?: string;
    text: string;
  };
};

export type CardGallery = {
  name: "CardGallery";
  data: {
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
};

export type SplitSection = {
  name: "SplitSection";
  data: {
    title?: string;
    text: string;
    image: {
      src: string;
      alt: string;
    };
    orientation: "left" | "right";
  };
};
