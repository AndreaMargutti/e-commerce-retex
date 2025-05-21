export type AtomsButtonProps = {
  label: string;
  type: "primary" | "secondary" | "tertiary";
  onBackground?: boolean;
  isUnderline?: boolean;
  textSize: "small" | "medium" | "large";
  isDisabled?: boolean;
  iconName?: string;
};
