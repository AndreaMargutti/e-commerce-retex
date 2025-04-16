import type { HeaderLink } from "~/types/headerLinks";

export type TemplatesHeaderProps = {
  size?: "small" | "normal";
  isTransparent?: boolean;
  links: HeaderLink[];
};
