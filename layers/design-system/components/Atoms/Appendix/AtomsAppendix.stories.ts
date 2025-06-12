import type { Meta, StoryObj } from "@storybook/vue3";
import AtomsAppendix from "./AtomsAppendix.vue";

const meta: Meta<typeof AtomsAppendix> = {
  component: AtomsAppendix,
  title: "Design System / Atoms / AtomsAppendix",
  // Removed unsupported 'documentation' property.
  argTypes: {
    appendix: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AtomsAppendix>;

export const Default: Story = {
  args: {
    appendix: "Appendix",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Lo sfondo rosso (`bg-red-500`) è applicato solo in questa storia per migliorare la visibilità del testo. Nel componente reale **non** è presente.",
      },
    },
  },
  render: (args) => ({
    components: { AtomsAppendix },
    setup() {
      return { args };
    },
    template: `
      <div class="bg-red-500">
        <AtomsAppendix v-bind="args" />
      </div>
    `,
  }),
};
