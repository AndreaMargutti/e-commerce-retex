// If the correct path is 'types/menu' relative to the project root, use:
import type { Menu } from "~/types/MenuItem";

export default defineEventHandler((): Menu => {
  return {
    items: [
      {
        id: 0,
        label: "Editorials",
        to: "/en",
        category: [
          {
            id: 1,
            label: "about",
            to: "/about",
          },
          {
            id: 10,
            label: "outdoor foundation",
            to: "/outdoor-foundation",
          },
          {
            id: 11,
            label: "our mission",
            to: "/our-mission",
          },
          {
            id: 12,
            label: "shooping guide",
            to: "/shopping-guide",
          },
        ],
      },
      {
        id: 2,
        label: "Men",
        to: "/men",
      },
      {
        id: 3,
        label: "Women",
        to: "/women",
        category: [
          {
            id: 30,
            label: "See all women",
            to: "/women",
          },
          {
            id: 31,
            label: "Outerwear",
            to: "/women/outerwear",
          },
          {
            id: 32,
            label: "Clothing",
            to: "/women/clothing",
            category: [
              {
                id: 321,
                label: "Parka",
                to: "/women/clothing/parka",
              },
              {
                id: 322,
                label: "Coats",
                to: "/women/clothing/coats",
              },
              {
                id: 323,
                label: "Jackets",
                to: "/women/clothing/jackets",
              },
              {
                id: 324,
                label: "Lightweight Down Jackets",
                to: "/women/clothing/lightweight-down-jackets",
              },
              {
                id: 325,
                label: "Down Jackets",
                to: "/women/clothing/down-jackets",
              },
              {
                id: 326,
                label: "Bombers",
                to: "/women/clothing/bombers",
              },
              {
                id: 327,
                label: "Vests",
                to: "/women/clothing/vests",
              },
              {
                id: 328,
                label: "Raincoats",
                to: "/women/clothing/raincoats",
              },
            ],
          },
          {
            id: 33,
            label: "Accessories",
            to: "/women/accessories",
            category: [
              {
                id: 331,
                label: "Bags",
                to: "/women/accessories/bags",
              },
              {
                id: 332,
                label: "Belts",
                to: "/women/accessories/belts",
              },
              {
                id: 333,
                label: "Scarves",
                to: "/women/accessories/scarves",
              },
              {
                id: 334,
                label: "Gloves",
                to: "/women/accessories/gloves",
              },
              {
                id: 335,
                label: "Hats",
                to: "/women/accessories/hats",
              },
              {
                id: 336,
                label: "Sunglasses",
                to: "/women/accessories/sunglasses",
              },
              {
                id: 337,
                label: "Wallets",
                to: "/women/accessories/wallets",
              },
              {
                id: 338,
                label: "Umbrellas",
                to: "/women/accessories/umbrellas",
              },
              {
                id: 339,
                label: "Backpacks",
                to: "/women/accessories/backpacks",
              },
              {
                id: 340,
                label: "Keychains",
                to: "/women/accessories/keychains",
              },
              {
                id: 341,
                label: "Foulards",
                to: "/women/accessories/foulards",
              },
              {
                id: 342,
                label: "Necklaces",
                to: "/women/accessories/necklaces",
              },
              {
                id: 343,
                label: "Bracelets",
                to: "/women/accessories/bracelets",
              },
              {
                id: 344,
                label: "Earrings",
                to: "/women/accessories/earrings",
              },
              {
                id: 345,
                label: "Rings",
                to: "/women/accessories/rings",
              },
              {
                id: 346,
                label: "Brooches",
                to: "/women/accessories/brooches",
              },
              {
                id: 347,
                label: "Anklets",
                to: "/women/accessories/anklets",
              },
              {
                id: 348,
                label: "Hair Clips",
                to: "/women/accessories/hair-clips",
              },
              {
                id: 349,
                label: "Hair Ties",
                to: "/women/accessories/hair-ties",
              },
              {
                id: 350,
                label: "Cases",
                to: "/women/accessories/cases",
              },
            ],
          },
          {
            id: 34,
            label: "Shoes",
            to: "/women/shoes",
            category: [
              {
                id: 341,
                label: "Boots",
                to: "/women/shoes/boots",
              },
              {
                id: 342,
                label: "Ankle Boots",
                to: "/women/shoes/ankle-boots",
              },
              {
                id: 343,
                label: "Sneakers",
                to: "/women/shoes/sneakers",
              },
            ],
          },
        ],
      },
    ],
  };
});
