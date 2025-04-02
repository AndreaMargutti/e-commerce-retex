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
    label: 10,
    isTransparent: false,
    isVisible: true,
  },
  render: (args) => ({
    components: { AtomsBadge },
    setup() {
      return { args };
    },
    template: `<AtomsBadge v-bind="args" />`,
  }),
};
