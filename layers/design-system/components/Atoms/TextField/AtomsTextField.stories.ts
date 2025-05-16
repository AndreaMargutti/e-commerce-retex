import type { Meta, StoryObj } from "@storybook/vue3";
import AtomsTextField from "./AtomsTextField.vue";

const meta: Meta<typeof AtomsTextField> = {
  component: AtomsTextField,
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
type Story = StoryObj<typeof AtomsTextField>;

export const Default: Story = {
  args: {
    label: "Text Field",
    type: "text",
  },
  render: (args) => ({
    components: { AtomsTextField },
    setup() {
      return { args };
    },
    template: `<AtomsTextField v-bind="args" />`,
  }),
};
