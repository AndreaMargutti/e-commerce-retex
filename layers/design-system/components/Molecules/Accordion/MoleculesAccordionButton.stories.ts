import type { Meta, StoryObj } from "@storybook/vue3";
import MoleculesAccordionButton from "./MoleculesAccordionButton.vue";

const meta: Meta<typeof MoleculesAccordionButton> = {
  title: "Design System / Molecules / Accordion / MoleculesAccordionButton",
  component: MoleculesAccordionButton,
};
export default meta;

type Story = StoryObj<typeof MoleculesAccordionButton>;
export const Default: Story = {
  args: {
    buttonLabel: "label button",
  },

  render: (args) => ({
    components: { MoleculesAccordionButton },
    setup() {
      return { args };
    },
    template: `<MoleculesAccordionButton v-bind="args" />`,
  }),
};
