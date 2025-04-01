export default defineEventHandler((event) => {
  return {
    headerLinks: [
      {
        id: 1,
        label: "Home",
        href: "/",
      },
      {
        id: 2,
        label: "Sale",
        href: "/sale",
      },
      {
        id: 3,
        label: "New Arrivals",
        href: "/new-arrivals",
      },
      {
        id: 4,
        label: "Women",
        href: "/women",
      },
      {
        id: 5,
        label: "Men",
        href: "/men",
      },
      {
        id: 6,
        label: "Kids",
        href: "/kids",
      },
      {
        id: 7,
        label: "Gift Guide",
        href: "/gift-guide",
      },
      {
        id: 8,
        label: "Woolrich World",
        href: "/woolrich-world",
      },
    ],
  };
});
