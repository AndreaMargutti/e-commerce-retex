export type AtomsLinkProps = {
  type: "link" | "button";
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  label: string;
  href?: string;
};
