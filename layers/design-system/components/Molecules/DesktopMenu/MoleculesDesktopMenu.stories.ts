import type { Meta, StoryObj } from "@storybook/vue3";
import MoleculesDesktopMenu from "./MoleculesDesktopMenu.vue";

const meta: Meta<typeof MoleculesDesktopMenu> = {
  title: "Design System/Molecules/Desktop Menu",
  component: MoleculesDesktopMenu,
};
export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: (args) => ({
    components: { MoleculesDesktopMenu },
    setup() {
      return { args };
    },
    template: '<MoleculesDesktopMenu v-bind="args" />',
  }),
  args: {
    items: [
      {
        label: "Nuovi Arrivi",
        to: "/",
        id: 0,
        items: [
          {
            label: "Submenu 1",
            to: "/submenu1",
            id: 0,
          },
          {
            label: "Submenu 2",
            to: "/submenu2",
            id: 0,
          },
        ],
      },
      {
        label: "Uomo",
        to: "/uomo",
        id: 0,
      },
      {
        label: "Donna",
        to: "/donna",
        id: 0,
      },
    ],
  },
};
