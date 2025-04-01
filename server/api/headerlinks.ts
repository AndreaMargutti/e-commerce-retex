export default defineEventHandler((event) => {
  return {
    headerLinks: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Sale",
        href: "/sale",
      },
      {
        label: "New Arrivals",
        href: "/new-arrivals",
      },
      {
        label: "Women",
        href: "/women",
      },
      {
        label: "Men",
        href: "/men",
      },
      {
        label: "Kids",
        href: "/kids",
      },
      {
        label: "Gift Guide",
        href: "/gift-guide",
      },
      {
        label: "Woolrich World",
        href: "/woolrich-world",
      },
    ],
  };
});
