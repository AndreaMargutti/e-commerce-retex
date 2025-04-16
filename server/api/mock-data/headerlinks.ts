export default defineEventHandler((event) => {
  return {
    headerLinks: [
      {
        id: 1,
        value: "Home",
        label: "Home",
        href: "/",
      },
      {
        id: 2,
        value: "Sale",
        label: "Sale",
        href: "/sale",
      },
      {
        id: 3,
        value: "New Arrivals",
        label: "New Arrivals",
        href: "/new-arrivals",
      },
      {
        id: 4,
        value: "Women",
        label: "Women",
        href: "/women",
      },
      {
        id: 5,
        value: "Men",
        label: "Men",
        href: "/men",
      },
      {
        id: 6,
        value: "Kids",
        label: "Kids",
        href: "/kids",
      },
      {
        id: 7,
        value: "Gift Guide",
        label: "Gift Guide",
        href: "/gift-guide",
      },
      {
        id: 8,
        value: "Woolrich World",
        label: "Woolrich World",
        href: "/woolrich-world",
      },
    ],
  };
});
