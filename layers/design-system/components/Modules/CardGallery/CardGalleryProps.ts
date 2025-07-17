export type CardGalleryProps = {
  title?: string;
  numberOfCols?: 3 | 4;
  cards: Array<{
    title: string;
    text: string;
    image: string;
    imageAlt: string;
    links: [
      {
        label: string;
        link: string;
      },
    ];
  }>;
};
