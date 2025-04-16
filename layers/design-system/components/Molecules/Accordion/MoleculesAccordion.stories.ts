import type { Meta, StoryObj } from "@storybook/vue3";
import MoleculesAccordion from "./MoleculesAccordion.vue";

const meta: Meta<typeof MoleculesAccordion> = {
  component: MoleculesAccordion,
  title: "Design System / Molecules / Accordion / MoleculesAccordion",
};
export default meta;
type Story = StoryObj<typeof MoleculesAccordion>;
export const Default: Story = {
  render: (args) => ({
    components: { MoleculesAccordion },
    setup() {
      return { args };
    },
    template: `<MoleculesAccordion v-bind="args" />`,
  }),
};
