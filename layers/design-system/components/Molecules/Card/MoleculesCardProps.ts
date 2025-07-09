export type MoleculesCardProps = {
  title: string;
  subtitle?: string;
  image: {
    src: string;
    alt: string;
  };
  links?: Array<{
    label: string;
    href: string;
  }>;
};
