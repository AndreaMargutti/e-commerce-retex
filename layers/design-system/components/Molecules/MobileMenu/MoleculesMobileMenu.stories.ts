import type { Meta, StoryObj } from "@storybook/vue3";
import MoleculesMobileMenu from "./MoleculesMobileMenu.vue";

const meta: Meta<typeof MoleculesMobileMenu> = {
  title: "Design System / Molecules / Menu / Mobile Menu",
  component: MoleculesMobileMenu,
};
export default meta;

type Story = StoryObj<typeof MoleculesMobileMenu>;

export const Default: Story = {
  args: {
    statusMenu: true,
  },
  render: (args) => ({
    components: { MoleculesMobileMenu },
    setup() {
      return { args };
    },
    template: '<MoleculesMobileMenu v-bind="args" />',
  }),
};
