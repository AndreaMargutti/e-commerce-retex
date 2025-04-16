import type { Meta, StoryObj } from "@storybook/vue3";
import AtomsBadge from "./AtomsBadge.vue";

const meta: Meta<typeof AtomsBadge> = {
  component: AtomsBadge,
  title: "Design System / Atoms / AtomsBadge",
  argTypes: {
    color: {
      options: ["grey", "black"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AtomsBadge>;
export const Default: Story = {
  args: {
    items: 10,
    color: "grey",
  },
  render: (args) => ({
    components: { AtomsBadge },
    setup() {
      return { args };
    },
    template: `<AtomsBadge v-bind="args" />`,
  }),
};
