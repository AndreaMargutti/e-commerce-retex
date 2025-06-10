export type Editorial = {
  name: string;
  variant: "links" | "buttons";
  image?: string;
  title?: string;
  appendix?: string;
  subtitle?: string;
  labels?: string[];
  fontStyle?: "capitalized" | "uppercase";
  btnLabel?: string;
  btnLink?: string;
  btnType?: "primary" | "secondary" | "tertiary";

  // TODO: add other properties if needed
};
