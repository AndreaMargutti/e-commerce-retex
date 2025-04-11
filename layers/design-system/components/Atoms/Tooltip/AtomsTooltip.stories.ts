import type { Meta, StoryObj } from "@storybook/vue3";
import AtomsTooltip from "./AtomsTooltip.vue";

const meta: Meta<typeof AtomsTooltip> = {
  component: AtomsTooltip,
  title: "Design System / Atoms / AtomsTooltip",
  argTypes: {
    direction: {
      options: ["up", "down"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AtomsTooltip>;

export const Default: Story = {
  args: {
    label: "tooltip",
    direction: "up",
  },
  render: (args) => ({
    components: { AtomsTooltip },
    setup() {
      return { args };
    },
    template: `<AtomsTooltip v-bind="args" />`,
  }),
};
