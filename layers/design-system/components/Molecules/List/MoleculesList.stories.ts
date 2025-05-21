import type { Meta, StoryObj } from "@storybook/vue3";
import MoleculesList from "./MoleculesList.vue";

const meta: Meta<typeof MoleculesList> = {
  title: "Design System /Molecules / List",
  component: MoleculesList,
};

export default meta;

type Story = StoryObj<typeof MoleculesList>;

export const Default: Story = {
  render: (args) => ({
    components: { MoleculesList },
    setup() {
      return { args };
    },
    template: `<MoleculesList v-bind="args" />`,
  }),
  args: {
    items: [
      {
        id: 1,
        label: "Item 1",
        to: "",
      },
      {
        id: 2,
        label: "Item 2",
        to: "",
      },
      {
        id: 3,
        label: "Item 3",
        to: "",
      },
    ],
  },
};
