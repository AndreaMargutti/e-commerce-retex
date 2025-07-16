export type CenterCardProps = {
  cards: [
    {
      title: string;
      appendix?: string;
      image: {
        src: string;
        alt: string;
      };
      link: {
        label: string;
        href: string;
      };
    },
  ];
};
