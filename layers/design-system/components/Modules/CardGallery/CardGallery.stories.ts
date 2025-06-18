import type { Meta, StoryObj } from "@storybook/vue3";
import CardGallery from "./CardGallery.vue";

const meta: Meta<typeof CardGallery> = {
  title: "Design System / Modules / CardGallery",
  component: CardGallery,
  argTypes: {
    title: { control: "text" },
    cards: { control: "object" },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { CardGallery },
    setup() {
      return { args };
    },
    template: "<CardGallery v-bind='args' />",
  }),
  args: {
    title: "Card Gallery Title",
    cards: [
      {
        title: "Card 1",
        text: "Description for card 1",
        image:
          "https://woolrich-cdn.thron.com/delivery/public/image/woolrich/83c3b993-ca3a-4392-8d22-6f02e59d2cb0/fdynkn/std/928x960/editorialimage?format=auto&scalemode=none&quality=100&dpr=120",
        imageAlt: "Card 1 Image",
        labels: [{ label: "Label 1", link: "#" }],
      },
      {
        title: "Card 2",
        text: "Description for card 2",
        image:
          "https://woolrich-cdn.thron.com/delivery/public/image/woolrich/b77dd455-c6e9-4149-af1f-860379bdfdae/fdynkn/std/762x1280/editorialimage?format=auto&scalemode=none&quality=80&dpr=120",
        imageAlt: "Card 2 Image",
        labels: [{ label: "Label 2", link: "#" }],
      },
    ],
  },
};
