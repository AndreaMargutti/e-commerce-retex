import type { Meta, StoryObj } from "@storybook/vue3";

import AtomsIcon from "./AtomsIcon.vue";

const meta: Meta<typeof AtomsIcon> = {
  component: AtomsIcon,
  title: "Design System / Atoms / AtomsIcon",
};

export default meta;
type Story = StoryObj<typeof AtomsIcon>;
export const Default: Story = {
  render: (args) => ({
    components: { AtomsIcon },
    setup() {
      return { args };
    },
    template: `<AtomsIcon v-bind="args" />`,
    args: {
      name: "string",
    },
  }),
};
