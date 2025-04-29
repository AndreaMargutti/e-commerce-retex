declare global {
  interface FooterIcon {
    id: number;
    label: string;
    href: string;
    icon: string;
  }

  interface FooterIcons {
    icons: SocialItem[];
  }
}
export {};
