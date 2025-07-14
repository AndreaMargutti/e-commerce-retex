export type CardGalleryProps = {
  title?: string;
  numberOfCols?: number;
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
