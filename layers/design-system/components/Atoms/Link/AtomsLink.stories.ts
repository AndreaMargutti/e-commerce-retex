import type { Meta, StoryObj } from "@storybook/vue3";

import AtomsLink from "./AtomsLink.vue";

const meta: Meta<typeof AtomsLink> = {
  component: AtomsLink,
  title: "Design System / Atoms / AtomsLink",
  argTypes: {
    variant: {
      options: ["header", "accordion", "desktopMenu"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AtomsLink>;

export const Link: Story = {
  args: {
    name: "uomo",
    href: "/uomo",
    variant: "header",
  },
  render: (args) => ({
    components: { AtomsLink },
    setup() {
      return { args };
    },
    template: '<AtomsLink v-bind="args" />',
  }),
};
