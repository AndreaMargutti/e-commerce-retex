type Menu = {
  items: MenuItem[];
};

export default defineEventHandler((event): Menu => {
  return {
    items: [
      {
        id: 1,
        label: "nuovi arrivi",
        to: "/nuovi-arrivi",
      },
      {
        id: 2,
        label: "uomo",
        to: "/uomo",
      },
      {
        id: 3,
        label: "donna",
        to: "/donna",
        items: [
          {
            id: 4,
            label: "Capispalla",
            to: "/donna/capispalla",
          },
          {
            id: 5,
            label: "Abbigliamento",
            to: "/donna/abbigliamento",
          },
        ],
      },
    ],
  };
});
