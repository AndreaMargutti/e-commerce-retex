import type { Meta, StoryObj } from "@storybook/vue3";

import AtomsLink from "./AtomsLink.vue";
import { name } from "eslint-plugin-prettier/recommended";

const meta: Meta<typeof AtomsLink> = {
  component: AtomsLink,
  title: "Design System / Atoms / AtomsLink",
};

export default meta;
type Story = StoryObj<typeof AtomsLink>;

export const Link: Story = {
  args: {
    name: "uomo",
    href: "/uomo",
  },
  render: (args) => ({
    components: { AtomsLink },
    setup() {
      return { args };
    },
    template: '<AtomsLink v-bind="args" />',
  }),
};
