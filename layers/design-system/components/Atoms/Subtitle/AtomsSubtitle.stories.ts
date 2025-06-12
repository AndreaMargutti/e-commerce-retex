import type { Meta, StoryObj } from "@storybook/vue3";
import AtomsSubtitle from "./AtomsSubtitle.vue";

const meta: Meta<typeof AtomsSubtitle> = {
  component: AtomsSubtitle,
  title: "Design System / Atoms / AtomsSubtitle",
  argTypes: {
    subtitle: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AtomsSubtitle>;
export const Default: Story = {
  args: {
    subtitle: "Subtitle",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The red background (`bg-red-500`) is applied only in this story to enhance text visibility. The actual component does **not** have this background.",
      },
    },
  },
  render: (args) => ({
    components: { AtomsSubtitle },
    setup() {
      return { args };
    },
    template: `
      <div class="bg-red-500">
        <AtomsSubtitle v-bind="args" />
      </div>
    `,
  }),
};
