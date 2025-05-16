import type { Meta, StoryObj } from "@storybook/vue3";
import TemplatesFooter from "./TemplatesFooter.vue";

const meta: Meta<typeof TemplatesFooter> = {
  title: "Design System / Templates / Footer",
  component: TemplatesFooter,
};
export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: (args) => ({
    components: { TemplatesFooter },
    setup() {
      return { args };
    },
    template: `<TemplatesFooter v-bind="args" />`,
  }),
};
