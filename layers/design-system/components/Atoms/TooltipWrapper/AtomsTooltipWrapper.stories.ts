import type { Meta, StoryObj } from "@storybook/vue3";
import AtomsTooltipWrapper from "./AtomsTooltipWrapper.vue";
import { render } from "vue";
import AtomsIconWrapper from "../IconWrapper/AtomsIconWrapper.vue";

const meta: Meta<typeof AtomsTooltipWrapper> = {
  component: AtomsTooltipWrapper,
  title: "Design System / Atoms / TooltipWrapper",
  argTypes: {
    direction: {
      options: ["up", "down"],
      control: {
        type: "radio",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof AtomsTooltipWrapper>;
export const Default: Story = {
  args: {
    label: "tooltip",
    direction: "up",
  },
  render: (args) => ({
    components: { AtomsTooltipWrapper, AtomsIconWrapper },
    setup() {
      return { args };
    },
    template: `<AtomsTooltipWrapper v-bind="args">
    <AtomsIconWrapper type="button" iconName="account" />
    </AtomsTooltipWrapper>`,
  }),
};
