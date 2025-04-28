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
              {
                id: 332,
                label: "Cinture",
                to: "/donna/accessori/cinture",
              },
              {
                id: 333,
                label: "Sciarpe",
                to: "/donna/accessori/sciarpe",
              },
              {
                id: 334,
                label: "Guanti",
                to: "/donna/accessori/guanti",
              },
              {
                id: 335,
                label: "Cappelli",
                to: "/donna/accessori/cappelli",
              },
              {
                id: 336,
                label: "Occhiali da sole",
                to: "/donna/accessori/occhiali-da-sole",
              },
              {
                id: 337,
                label: "Portafogli",
                to: "/donna/accessori/portafogli",
              },
              {
                id: 338,
                label: "Ombrelli",
                to: "/donna/accessori/ombrelli",
              },
              {
                id: 339,
                label: "Zaini",
                to: "/donna/accessori/zaini",
              },
              {
                id: 340,
                label: "Portachiavi",
                to: "/donna/accessori/portachiavi",
              },
              {
                id: 341,
                label: "Foulard",
                to: "/donna/accessori/foulard",
              },
              {
                id: 342,
                label: "Collane",
                to: "/donna/accessori/collane",
              },
              {
                id: 343,
                label: "Bracciali",
                to: "/donna/accessori/bracciali",
              },
              {
                id: 344,
                label: "Orecchini",
                to: "/donna/accessori/orecchini",
              },
              {
                id: 345,
                label: "Anelli",
                to: "/donna/accessori/anelli",
              },
              {
                id: 346,
                label: "Spille",
                to: "/donna/accessori/spille",
              },
              {
                id: 347,
                label: "Cavigliere",
                to: "/donna/accessori/cavigliere",
              },
              {
                id: 348,
                label: "Fermagli",
                to: "/donna/accessori/fermagli",
              },
              {
                id: 349,
                label: "Elastici per capelli",
                to: "/donna/accessori/elastici-per-capelli",
              },
              {
                id: 350,
                label: "Custodie",
                to: "/donna/accessori/custodie",
              },
            ],
          },
          {
            id: 34,
            label: "Scarpe",
            to: "/donna/scarpe",
            items: [
              {
                id: 341,
                label: "Stivali",
                to: "/donna/scarpe/stivali",
              },
              {
                id: 342,
                label: "Stivaletti",
                to: "/donna/scarpe/stivaletti",
              },
              {
                id: 343,
                label: "Sneakers",
                to: "/donna/scarpe/sneakers",
              },
            ],
          },
        ],
      },
    ],
  };
});
