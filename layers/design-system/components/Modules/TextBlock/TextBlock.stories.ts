import type { Meta, StoryObj } from "@storybook/vue3";
import TextBlock from "./TextBlock.vue";

const meta: Meta<typeof TextBlock> = {
  component: TextBlock,
  title: "Design System / Modules / TextBlock",
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextBlock>;
export const Default: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This component displays a block of text. The text is set via the `text` prop.",
      },
    },
  },
  render: (args) => ({
    components: { TextBlock },
    setup() {
      return { args };
    },
    template: `
        <TextBlock v-bind="args" />
    `,
  }),
};
