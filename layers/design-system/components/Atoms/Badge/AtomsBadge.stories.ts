import type { Meta, StoryObj } from "@storybook/vue3";
import AtomsBadge from "./AtomsBadge.vue";

const meta: Meta<typeof AtomsBadge> = {
  component: AtomsBadge,
  title: "Design System / Atoms / AtomsBadge",
};

export default meta;
type Story = StoryObj<typeof AtomsBadge>;
export const Default: Story = {
  args: {
    items: 10,
  },
  render: (args) => ({
    components: { AtomsBadge },
    setup() {
      return { args };
    },
    template: `<AtomsBadge v-bind="args" />`,
  }),
};
