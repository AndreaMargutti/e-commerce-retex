import AtomsLink from "../../Atoms/Link/AtomsLink.vue";
import TemplatesHeader from "./TemplatesHeader.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { http, HttpResponse } from "msw";

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
type Story = StoryObj<typeof TemplatesHeader>;

const linksHeader = [
  {
    id: 1,
    value: "Home",
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    value: "Sale",
    label: "Sale",
    href: "/sale",
  },
  {
    id: 3,
    value: "New Arrivals",
    label: "New Arrivals",
    href: "/new-arrivals",
  },
  {
    id: 4,
    value: "Women",
    label: "Women",
    href: "/women",
  },
  {
    id: 5,
    value: "Men",
    label: "Men",
    href: "/men",
  },
  {
    id: 6,
    value: "Kids",
    label: "Kids",
    href: "/kids",
  },
  {
    id: 7,
    value: "Gift Guide",
    label: "Gift Guide",
    href: "/gift-guide",
  },
  {
    id: 8,
    value: "Woolrich World",
    label: "Woolrich World",
    href: "/woolrich-world",
  },
];

export const Default: Story = {
  args: {
    size: "normal",
    isTransparent: false,
    links: linksHeader,
  },
  parameters: {
    msw: {
      handlers: [
        http.get("/api/mock-data/headerlinks", () => {
          return HttpResponse.json(linksHeader);
        }),
      ],
    },
  },
  render: (args) => ({
    components: { TemplatesHeader, AtomsLink },
    setup() {
      return { args };
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
