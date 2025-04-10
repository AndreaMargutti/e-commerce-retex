declare global {
  interface MenuItem {
    id: number;
    label: string;
    to: string;
    items?: MenuItem[];
  }
}

export {};
