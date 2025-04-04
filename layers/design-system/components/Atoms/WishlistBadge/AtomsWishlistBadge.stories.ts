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
    items: 10,
  },
  render: (args) => ({
    components: { AtomsWishlistBadge },
    setup() {
      return { args };
    },
    template: `<AtomsWishlistBadge v-bind="args" />`,
  }),
};
