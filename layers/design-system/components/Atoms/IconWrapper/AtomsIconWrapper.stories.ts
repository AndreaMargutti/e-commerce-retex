import type { Meta, StoryObj } from "@storybook/vue3";
import AtomsIconWrapper from "./AtomsIconWrapper.vue";
import AtomsIcon from "../Icon/AtomsIcon.vue";

const meta: Meta<typeof AtomsIconWrapper> = {
  component: AtomsIconWrapper,
  title: "Design System / Atoms / AtomsIconWrapper",
};
export default meta;
type Story = StoryObj<typeof AtomsIconWrapper>;
export const Default: Story = {
  args: {
    type: "button",
    badgeSize: 0,
  },
  render: (args) => ({
    components: { AtomsIconWrapper, AtomsIcon },
    setup() {
      return { args };
    },
    template: `
    <AtomsIconWrapper v-bind="args">
      <AtomsIcon name="cart" />
    </AtomsIconWrapper>`,
  }),
};
