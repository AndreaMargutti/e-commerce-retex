declare global {
  interface MenuItem {
    id: number;
    label: string;
    to: string;
    category?: MenuItem[];
  }

  type Menu = {
    items: MenuItem[];
  };
}

export {};
