import type { Meta, StoryObj } from "@storybook/vue3";
import AtomsBadge from "./AtomsBadge.vue";

const meta: Meta<typeof AtomsBadge> = {
  component: AtomsBadge,
  title: "Design System / Atoms / AtomsBadge",
  argTypes: {
    inverted: {
      control: {
        type: "boolean",
      },
    },
    size: {
      control: {
        type: "select",
      },
      options: ["small", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AtomsBadge>;
export const Default: Story = {
  args: {
    items: 9,
    inverted: false,
    size: "large",
  },
  render: (args) => ({
    components: { AtomsBadge },
    setup() {
      return { args };
    },
    template: `<AtomsBadge v-bind="args" />`,
  }),
};
