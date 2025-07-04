import type { Meta, StoryObj } from "@storybook/vue3";
import SplitSection from "./SplitSection.vue";

const meta: Meta<typeof SplitSection> = {
  title: "Design System / Modules / SplitSection",
  component: SplitSection,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { SplitSection },
    setup() {
      return { args };
    },
    template: "<SplitSection v-bind='args' />",
  }),
  args: {
    title: "Split Section Title",
    image: {
      src: "https://woolrich-cdn.thron.com/delivery/public/image/woolrich/83c3b993-ca3a-4392-8d22-6f02e59d2cb0/fdynkn/std/928x960/editorialimage?format=auto&scalemode=none&quality=100&dpr=120",
      alt: "Split Section Image",
    },
  },
};
