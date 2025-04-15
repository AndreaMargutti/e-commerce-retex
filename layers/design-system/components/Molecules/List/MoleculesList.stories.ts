import type { Meta, StoryObj } from "@storybook/vue3";
import MoleculesList from "./MoleculesList.vue";
import { http, HttpResponse } from "msw";

const meta: Meta<typeof MoleculesList> = {
  title: "Design System / Molecules / MoleculesList",
  component: MoleculesList,
};
export default meta;
type Story = StoryObj<typeof MoleculesList>;
export const Default: Story = {
  render: () => ({
    components: { MoleculesList },
    setup() {
      return {};
    },
    template: `<MoleculesList />`,
  }),
};
