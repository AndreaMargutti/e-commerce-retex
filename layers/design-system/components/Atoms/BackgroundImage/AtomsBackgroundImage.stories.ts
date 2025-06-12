import type { Meta, StoryObj } from "@storybook/vue3";
import AtomsBackgroundImage from "./AtomsBackgroundImage.vue";

const meta: Meta<typeof AtomsBackgroundImage> = {
  component: AtomsBackgroundImage,
  title: "Design System / Atoms / AtomsBackgroundImage",
  argTypes: {
    src: {
      control: {
        type: "select",
      },
      options: [
        "https://woolrich-cdn.thron.com/delivery/public/image/woolrich/9e066b5b-a554-4e04-af93-68c4f68aa1f7/fdynkn/std/1024x960/editorialimage?format=auto&scalemode=none&quality=80&dpr=120",
        "https://woolrich-cdn.thron.com/delivery/public/image/woolrich/70a6027d-9c78-4465-9303-cad0f087f13e/fdynkn/std/1024x960/editorialimage?format=auto&scalemode=none&quality=80&dpr=120",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof AtomsBackgroundImage>;
export const Default: Story = {
  args: {
    src: "https://woolrich-cdn.thron.com/delivery/public/image/woolrich/9e066b5b-a554-4e04-af93-68c4f68aa1f7/fdynkn/std/1024x960/editorialimage?format=auto&scalemode=none&quality=80&dpr=120",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This component displays a background image. The image is set via the `src` prop.",
      },
    },
  },
  render: (args) => ({
    components: { AtomsBackgroundImage },
    setup() {
      return { args };
    },
    template: `<AtomsBackgroundImage v-bind="args" />`,
  }),
};
