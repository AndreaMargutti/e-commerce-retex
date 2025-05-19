import type { Meta, StoryObj } from "@storybook/vue3";
import AtomsIconWrapper from "./AtomsIconWrapper.vue";
import AtomsIcon from "../Icon/AtomsIcon.vue";
import AtomsBadge from "../Badge/AtomsBadge.vue";

const meta: Meta<typeof AtomsIconWrapper> = {
  component: AtomsIconWrapper,
  subcomponents: { AtomsIcon, AtomsBadge },
  title: "Design System / Atoms / AtomsIconWrapper",
  argTypes: {
    type: {
      control: {
        type: "radio",
      },
      options: ["button", "link"],
    },
    iconName: {
      control: {
        type: "select",
      },
      options: ["cart", "wishlist"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof AtomsIconWrapper>;
export const Default: Story = {
  args: {
    type: "button",
    iconName: "cart",
    badgeSize: 0,
  },
  render: (args) => ({
    components: { AtomsIconWrapper, AtomsIcon, AtomsBadge },
    setup() {
      return { args };
    },
    template: `
    <AtomsIconWrapper v-bind="args">
      <AtomsIcon />
      <AtomsBadge />
    </AtomsIconWrapper>`,
  }),
};
