import type { FooterIcons } from "~/types/FooterIcons";
export default defineEventHandler((): FooterIcons => {
  return {
    icons: [
      {
        id: 1,
        label: "Visa",
        href: "https://www.visa.com/",
        icon: "visa",
      },
      {
        id: 2,
        label: "Mastercard",
        href: "https://www.mastercard.com/",
        icon: "mastercard",
      },
      {
        id: 3,
        label: "PayPal",
        href: "https://www.paypal.com/",
        icon: "paypal",
      },
      {
        id: 4,
        label: "Amex",
        href: "https://www.americanexpress.com/",
        icon: "amex",
      },
      {
        id: 5,
        label: "Klarna",
        href: "https://www.klarna.com/",
        icon: "klarna",
      },
    ],
  };
});
