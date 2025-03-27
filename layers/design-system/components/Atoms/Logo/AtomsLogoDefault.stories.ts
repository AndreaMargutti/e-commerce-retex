import type { Meta, StoryObj } from "@storybook/vue3";

import AtomsLogo from "./AtomsLogoDefault.vue";

const meta: Meta<typeof AtomsLogo> = {
  component: AtomsLogo,
  title: "Design System / Atoms / AtomsLogo",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AtomsLogo>;
export const Default: Story = {
  render: () => ({
    components: { AtomsLogo },
    template: `<AtomsLogo />`,
  }),
};
