import type { Meta, StoryObj } from "@storybook/vue3";
import MoleculesCard from "./MoleculesCard.vue";

const meta: Meta<typeof MoleculesCard> = {
  title: "Design System /Molecules / Card",
  component: MoleculesCard,
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: "Card Title",
    subtitle: "Card Subtitle",
    image: {
      src: "https://woolrich-cdn.thron.com/delivery/public/image/woolrich/83c3b993-ca3a-4392-8d22-6f02e59d2cb0/fdynkn/std/928x960/editorialimage?format=auto&scalemode=none&quality=100&dpr=120",
      alt: "Placeholder Image",
    },
    labels: [
      { label: "Label 1", href: "#" },
      { label: "Label 2", href: "#" },
    ],
  },
  render: (args) => ({
    components: { MoleculesCard },
    setup() {
      return { args };
    },
    template: `<MoleculesCard v-bind="args" />`,
  }),
};
