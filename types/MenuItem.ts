export type MenuItem = {
  id: number;
  label: string;
  to: string;
  category?: MenuItem[];
};

export type Menu = {
  items: MenuItem[];
};
