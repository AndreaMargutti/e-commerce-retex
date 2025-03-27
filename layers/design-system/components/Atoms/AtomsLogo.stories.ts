import type { Meta, StoryObj } from "@storybook/vue3";

import AtomsLogo from "./AtomsLogo.vue";

const meta: Meta<typeof AtomsLogo> = {
  component: AtomsLogo,
  title: "Design System / Atoms / AtomsLogo",
  args: {
    size: "sm",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AtomsLogo>;
export const Default: Story = {
  render: (args) => ({
    components: { AtomsLogo },
    setup() {
      return { args };
    },
    template: `<AtomsLogo v-bind="args" />`,
  }),
};
