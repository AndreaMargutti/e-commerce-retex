import type { Meta, StoryObj } from "@storybook/vue3";
import AtomsButtons from "./AtomsButtons.vue";

const meta: Meta<typeof AtomsButtons> = {
  component: AtomsButtons,
  title: "Design System / Atoms / AtomsButtons",
};

export default meta;
type Story = StoryObj<typeof AtomsButtons>;
export const Default: Story = {
  args: {
    label: "LABEL",
    type: "primary",
  },
  render: (args) => ({
    components: { AtomsButtons },
    setup() {
      return { args };
    },
    template: `<AtomsButtons v-bind="args" />`,
  }),
};
