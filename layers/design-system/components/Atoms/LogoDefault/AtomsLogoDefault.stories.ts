import { setup, type Meta, type StoryObj } from "@storybook/vue3";
import AtomsLogoDefault from "./AtomsLogoDefault.vue";

const meta: Meta<typeof AtomsLogoDefault> = {
  component: AtomsLogoDefault,
  title: "Design System / Atoms / AtomsLogoDefault",
};

export default meta;
type Story = StoryObj<typeof AtomsLogoDefault>;
export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { AtomsLogoDefault },
    setup() {
      return { args };
    },
    template: "<AtomsLogoDefault />",
  }),
};
