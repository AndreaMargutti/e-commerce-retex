import type { Meta, StoryObj } from "@storybook/vue3";
import AppTitle from "./AppTitle.vue";

const meta: Meta<typeof AppTitle> = {
  title: "AppTitle",
  component: AppTitle,
};

export default meta;

type Story = StoryObj<typeof AppTitle>;

export const AppTitleStory: Story = {
  render: () => ({
    components: { AppTitle },
    template: `
       <AppTitle />
        `,
  }),
};
