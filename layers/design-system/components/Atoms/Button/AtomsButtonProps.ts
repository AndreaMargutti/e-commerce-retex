export type AtomsButtonProps = {
  label: string;
  type: "primary" | "secondary" | "tertiary";
  textSize: "small" | "medium" | "large";
  onBackground?: boolean;
  isUnderline?: boolean;
  isDisabled?: boolean;
  iconName?: string | undefined;
};
