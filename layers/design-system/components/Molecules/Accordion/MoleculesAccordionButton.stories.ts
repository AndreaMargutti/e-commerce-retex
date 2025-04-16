import type { Meta, StoryObj } from "@storybook/vue3";
import MolecluesAccordionButton from "./MoleculesAccordionButton.vue";
import type MoleculesAccordionButton from "./MoleculesAccordionButton.vue";

const meta: Meta<typeof MoleculesAccordionButton> = {
  title: "Design System / Molecules / Accordion / MoleculesAccordionButton",
  component: MolecluesAccordionButton,
};
export default meta;

type Story = StoryObj<typeof MolecluesAccordionButton>;
const Default: Story = {
  render: (args) => ({
    components: { MolecluesAccordionButton },
    setup() {
      return { args };
    },
    template: `<MoleculesAccordionButton v-bind="args" />`,
  }),
};
