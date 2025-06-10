import type { Meta, StoryObj } from "@storybook/vue3";
import AtomsTitle from "./AtomsTitle.vue";

const meta: Meta<typeof AtomsTitle> = {
  component: AtomsTitle,
  title: "Design System / Atoms / AtomsTitle",
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    fontStyle: {
      control: {
        type: "select",
      },
      options: ["capitalized", "uppercase"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof AtomsTitle>;

export const Default: Story = {
  args: {
    title: "Title",
    fontStyle: "capitalized",
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
    components: { AtomsTitle },
    setup() {
      return { args };
    },
    template: `
      <div class="bg-red-500">
        <AtomsTitle v-bind="args" />
      </div>
    `,
  }),
};
