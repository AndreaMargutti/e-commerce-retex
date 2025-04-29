import type { Meta, StoryObj } from "@storybook/vue3";
import MoleculesFooterList from "./MoleculesFooterList.vue";

const meta: Meta<typeof MoleculesFooterList> = {
  title: "Design System / Molecules / Footer List",
  component: MoleculesFooterList,
  argTypes: {
    title: {
      control: {
        type: "select",
      },
      options: ["Social Media", "Payments Methods"],
    },
    type: {
      options: ["social", "payments"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
