interface SocialItem {
  id: number;
  label: string;
  href: string;
  icon: string;
}

interface Social {
  socials: SocialItem[];
}

export default defineEventHandler((event): Social => {
  return {
    socials: [
      {
        id: 1,
        label: "Instagram",
        href: "https://www.instagram.com/",
        icon: "instagram",
      },
      {
        id: 2,
        label: "Facebook",
        href: "https://www.facebook.com/",
        icon: "facebook",
      },
      {
        id: 3,
        label: "Youtube",
        href: "https://www.youtube.com/",
        icon: "youtube",
      },
      {
        id: 4,
        label: "Pinterest",
        href: "https://www.pinterest.com/",
        icon: "pinterest",
      },
      {
        id: 6,
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
        icon: "linkedin",
      },
    ],
  };
});
