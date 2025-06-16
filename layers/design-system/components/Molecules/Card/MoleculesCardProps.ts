export type MoleculesCardProps = {
  title: string;
  subtitle?: string;
  image: {
    src: string;
    alt: string;
  };
  links?: {
    label: string;
    link: string;
  };
};
