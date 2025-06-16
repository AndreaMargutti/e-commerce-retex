export type MoleculesCardProps = {
  title: string;
  subtitle?: string;
  image: {
    src: string;
    alt: string;
  };
  links?: [
    {
      label: string;
      href: string;
    },
  ];
};
