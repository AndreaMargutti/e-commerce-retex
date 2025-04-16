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
                label: "Parka",
                to: "/donna/abbigliamento/parka",
              },
              {
                id: 322,
                label: "Cappotti",
                to: "/donna/abbigliamento/cappotti",
              },
              {
                id: 323,
                label: "Giacche",
                to: "/donna/abbigliamento/giacche",
              },
              {
                id: 324,
                label: "Piumini leggeri",
                to: "/donna/abbigliamento/piumini-leggeri",
              },
              {
                id: 325,
                label: "Piumini",
                to: "/donna/abbigliamento/piumini",
              },
              {
                id: 326,
                label: "Bomber",
                to: "/donna/abbigliamento/bomber",
              },
              {
                id: 327,
                label: "Gilet",
                to: "/donna/abbigliamento/gilet",
              },
              {
                id: 328,
                label: "Impermeabili",
                to: "/donna/abbigliamento/impermeabili",
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
