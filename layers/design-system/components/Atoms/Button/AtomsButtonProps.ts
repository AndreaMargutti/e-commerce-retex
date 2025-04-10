export type AtomsButtonProps = {
  label: string;
  type: "primary" | "secondary" | "tertiary";
  variant: "withIcon" | "withBackground" | "underlineBig" | "underlineSmall";
  size: "small" | "medium" | "large";
  isDisabled?: boolean;
  icon?: {
    hasIcon: boolean;
    iconName: string;
  };
};
