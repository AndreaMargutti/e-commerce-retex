import type { Meta, StoryObj } from "@storybook/vue3";
import { fireEvent, userEvent, within } from "@storybook/test";

import AtomsButton from "./AtomsButton.vue";

const meta: Meta<typeof AtomsButton> = {
  component: AtomsButton,
  title: "Design System / Atoms / AtomsButton",
  argTypes: {
    type: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "select",
      },
    },
    textSize: {
      options: ["small", "medium", "large"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AtomsButton>;
export const Tertiary: Story = {
  args: {
    type: "tertiary",
    textSize: "medium",
    label: "button",
    onBackground: false,
    isUnderline: false,
    isDisabled: false,
    iconName: "navigation-right",
  },
  render: (args) => ({
    components: { AtomsButton },
    setup() {
      return { args };
    },
    template: `
    <AtomsButton v-bind="args" v-on="$attrs">
      <template #icon>
      </template>
    </AtomsButton>`,
  }),
};
