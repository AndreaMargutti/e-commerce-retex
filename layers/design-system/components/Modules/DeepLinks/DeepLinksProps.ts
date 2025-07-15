export type DeepLinksProps = {
  cards: [
    {
      title: string;
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
