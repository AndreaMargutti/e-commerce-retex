export type MoleculesCardProps = {
  title: string;
  subtitle?: string;
  image: {
    src: string;
    alt: string;
  };
  labels?: Array<{
    label: string;
    href: string;
  }>;
};
