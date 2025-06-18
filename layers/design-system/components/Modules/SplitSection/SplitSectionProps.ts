export type SplitSectionProps = {
  title?: string;
  text: string;
  textPosition?: "left" | "center" | "right";
  fontWeight?: "normal" | "bold";
  image: {
    src: string;
    alt: string;
  };
  orientation: "left" | "right";
};
