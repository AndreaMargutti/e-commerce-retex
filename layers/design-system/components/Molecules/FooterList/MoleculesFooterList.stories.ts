import type { Meta, StoryObj } from "@storybook/vue3";
import MoleculesFooterList from "./MoleculesFooterList.vue";

const meta: Meta<typeof MoleculesFooterList> = {
  title: "Design System / Molecules / Footer / Footer List",
  component: MoleculesFooterList,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PaymentsList: Story = {
  render: (args) => ({
    components: { MoleculesFooterList },
    setup() {
      return { args };
    },
    template: '<MoleculesFooterList v-bind="args" />',
  }),
  args: {
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
    title: "Payments Methods:",
    type: "payments",
  },
};

export const SocialList: Story = {
  render: (args) => ({
    components: { MoleculesFooterList },
    setup() {
      return { args };
    },
    template: '<MoleculesFooterList v-bind="args" />',
  }),
  args: {
    icons: [
      {
        id: 1,
        label: "Instagram",
        href: "https://www.instagram.com/",
        icon: "instagram",
      },
      {
        id: 2,
        label: "Facebook",
        href: "https://www.facebook.com/",
        icon: "facebook",
      },
      {
        id: 3,
        label: "Youtube",
        href: "https://www.youtube.com/",
        icon: "youtube",
      },
      {
        id: 4,
        label: "Pinterest",
        href: "https://www.pinterest.com/",
        icon: "pinterest",
      },
      {
        id: 6,
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
        icon: "linkedin",
      },
    ],
    title: "Follow Us:",
    type: "social",
  },
};
