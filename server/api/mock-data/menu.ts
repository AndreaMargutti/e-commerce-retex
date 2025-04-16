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
        items: [
          {
            id: 31,
            label: "Capispalla",
            to: "/uomo/capispalla",
          },
          {
            id: 32,
            label: "Abbigliamento",
            to: "/uomo/abbigliamento",
          },
        ],
      },
      {
        id: 3,
        label: "donna",
        to: "/donna",
        items: [
          {
            id: 31,
            label: "Capispalla",
            to: "/donna/capispalla",
          },
          {
            id: 32,
            label: "Abbigliamento",
            to: "/donna/abbigliamento",
            items: [
              {
                id: 321,
                label: "T-shirt",
                to: "/donna/abbigliamento/t-shirt",
              },
              {
                id: 322,
                label: "Pantaloni",
                to: "/donna/abbigliamento/pantaloni",
              },
              {
                id: 323,
                label: "Gonne",
                to: "/donna/abbigliamento/gonne",
              },
            ],
          },
          {
            id: 33,
            label: "Accessori",
            to: "/donna/accessori",
            items: [
              {
                id: 331,
                label: "Borse",
                to: "/donna/accessori/borse",
              },
            ],
          },
        ],
      },
    ],
  };
});
