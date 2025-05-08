import type { Meta, StoryObj } from "@storybook/vue3";
import MoleculesNewsLetterForm from "./MoleculesNewsLetterForm.vue";

const meta: Meta<typeof MoleculesNewsLetterForm> = {
  title: "Design System / Molecules / Form / NewsLetterForm",
  component: MoleculesNewsLetterForm,
};

export default meta;

type Story = StoryObj<typeof MoleculesNewsLetterForm>;

export const Default: Story = {
  render: (args) => ({
    components: { MoleculesNewsLetterForm },
    setup() {
      return {
        args,
      };
    },
    template: `
        <MoleculesNewsLetterForm v-bind="args" />`,
  }),
};
