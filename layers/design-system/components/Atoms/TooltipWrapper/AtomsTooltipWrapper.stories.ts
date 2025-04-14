import type { Meta, StoryObj } from "@storybook/vue3";
import AtomsTooltipWrapper from "./AtomsTooltipWrapper.vue";
import AtomsTooltip from "../Tooltip/AtomsTooltip.vue";
import { render } from "vue";

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
    components: { AtomsTooltipWrapper, AtomsTooltip },
    setup() {
      return { args };
    },
    template: `<TooltipWrapper v-bind="args">
    <AtomsTooltip :label="args.label" :direction="args.direction" />
    </TooltipWrapper>`,
  }),
};
