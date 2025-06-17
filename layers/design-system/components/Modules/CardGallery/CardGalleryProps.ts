export type CardGalleryProps = {
  title?: string;
  cards: Array<{
    title: string;
    text: string;
    image: string;
    imageAlt: string;
    labels: [
      {
        label: string;
        link: string;
      },
    ];
  }>;
};
