declare global {
  interface MenuItem {
    id: number;
    label: string;
    to: string;
    items?: MenuItem[];
  }

  type Menu = {
    items: MenuItem[];
  };
}

export {};
