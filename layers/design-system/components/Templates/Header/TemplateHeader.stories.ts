import AtomsLink from "../../Atoms/Link/AtomsLink.vue";
import TemplatesHeader from "./TemplatesHeader.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

const meta: Meta<typeof TemplatesHeader> = {
  title: "Design System /Templates / Header",
  component: TemplatesHeader,
  argTypes: {
    size: {
      options: ["small", "normal"],
      control: {
        type: "radio",
      },
    },
    isTransparent: {
      options: [true, false],
      control: {
        type: "boolean",
      },
    },
  },
};
export default meta;
type Story = StoryFn<typeof TemplatesHeader>;

export const Default: Story = {
  args: {
    size: "normal",
    isTransparent: false,
  },
  render: (args) => ({
    components: { TemplatesHeader, AtomsLink },
    setup() {
      const headerLinks = [
        { value: "home", label: "Home", href: "/" },
        { value: "about", label: "About", href: "/about" },
        { value: "contact", label: "Contact", href: "/contact" },
      ];
      return { args, headerLinks };
    },
    template: `<TemplatesHeader v-bind="args">
      <AtomsLink
        v-for="link in headerLinks"
        :key="link.value"
        :href="link.href"
        :class="['header-link', link.value]"
      >
        link 
      </AtomsLink>
    </TemplatesHeader>`,
  }),
};
