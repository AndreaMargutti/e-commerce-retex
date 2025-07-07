import type { HeaderLink } from "~/types/MenuItem";

export type TemplatesHeaderProps = {
  size?: "small" | "normal";
  isTransparent?: boolean;
  links: HeaderLink[];
};
