import type { Meta, StoryObj } from "@storybook/vue3";
import AtomsGradient from "./AtomsGradient.vue";

const meta: Meta<typeof AtomsGradient> = {
  component: AtomsGradient,
  title: "Design System / Atoms / AtomsGradient",
};

export default meta;

type Story = StoryObj<typeof AtomsGradient>;
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "This component displays a gradient background.",
      },
    },
  },
  render: (args) => ({
    components: { AtomsGradient },
    setup() {
      return { args };
    },
    template: `<AtomsGradient v-bind="args" />`,
  }),
};
