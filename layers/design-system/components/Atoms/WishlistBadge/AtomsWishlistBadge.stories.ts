import type { Meta, StoryObj } from "@storybook/vue3";
import AtomsWishlistBadge from "./AtomsWishlistBadge.vue";

const meta: Meta<typeof AtomsWishlistBadge> = {
  component: AtomsWishlistBadge,
  title: "Design System / Atoms / AtomsBadge",
};

export default meta;
type Story = StoryObj<typeof AtomsWishlistBadge>;
export const Default: Story = {
  args: {
    label: 10,
    isTransparent: false,
    isVisible: true,
  },
  render: (args) => ({
    components: { AtomsWishlistBadge },
    setup() {
      return { args };
    },
    template: `<AtomsWishlistBadge v-bind="args" />`,
  }),
};
