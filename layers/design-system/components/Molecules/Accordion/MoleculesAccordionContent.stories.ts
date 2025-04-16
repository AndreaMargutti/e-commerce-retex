import type { Meta, StoryObj } from "@storybook/vue3";
import MoleculesAccordionContent from "./MoleculesAccordionContent.vue";

const meta: Meta<typeof MoleculesAccordionContent> = {
  component: MoleculesAccordionContent,
  title: "Design System/ Molecules / Accordion / MoleculesAccordionContent",
};
export default meta;

type Story = StoryObj<typeof MoleculesAccordionContent>;
export const Default: Story = {
  render: () => ({
    components: { MoleculesAccordionContent },
    setup() {
      return {};
    },
    template: `<MoleculesAccordionContent>
        <p>Accordion Content</p>
    </MoleculesAccordionContent>`,
  }),
};
