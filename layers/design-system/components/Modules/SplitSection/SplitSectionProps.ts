export type SplitSectionProps = {
  title?: string;
  text: string;
  image: {
    src: string;
    alt: string;
  };
  orientation: "left" | "right";
  isFullWidth?: boolean;
};
