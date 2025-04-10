import type { Meta, StoryObj } from "@storybook/vue3";
import { fireEvent, userEvent, within } from "@storybook/test";

import AtomsButton from "./AtomsButton.vue";

const meta: Meta<typeof AtomsButton> = {
  component: AtomsButton,
  title: "Design System / Atoms / AtomsButton",
};

export default meta;
type Story = StoryObj<typeof AtomsButton>;
export const Default: Story = {
  args: {
    type: "tertiary",
    variant: "underline",
    size: "medium",
    label: "button",
    isDisabled: false,
    icon: {
      hasIcon: true,
      iconName: "navigation-right",
    },
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
