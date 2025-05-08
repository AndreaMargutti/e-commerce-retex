import type { Meta, StoryObj } from "@storybook/vue3";
import AtomsInputField from "./AtomsTextField.vue";

const meta: Meta<typeof AtomsInputField> = {
  component: AtomsInputField,
  title: "Design System / Atoms / AtomsInputField",
  argTypes: {
    type: {
      options: ["text", "email", "password"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AtomsInputField>;

export const Default: Story = {
  args: {
    label: "Text Field",
    type: "text",
  },
  render: (args) => ({
    components: { AtomsInputField },
    setup() {
      return { args };
    },
    template: `<AtomsInputField v-bind="args" />`,
  }),
};
