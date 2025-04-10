export type AtomsButtonProps = {
  label: string;
  type: "primary" | "secondary" | "tertiary";
  variant?: "withBackground" | "underline";
  size: "small" | "medium" | "large";
  isDisabled?: boolean;
  icon?: {
    hasIcon: boolean;
    iconName: string;
  };
};
