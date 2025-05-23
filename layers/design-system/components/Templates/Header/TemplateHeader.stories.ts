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
    label: "Home",
    href: "/",
    items: [],
  },
  {
    id: 2,
    label: "Sale",
    href: "/sale",
    items: [],
  },
  {
    id: 3,
    label: "New Arrivals",
    href: "/new-arrivals",
    items: [],
  },
  {
    id: 4,
    label: "Women",
    href: "/women",
    items: [
      { id: 1, label: "Clothing", href: "/women/clothing" },
      { id: 2, label: "Accessories", href: "/women/accessories" },
    ],
  },
  {
    id: 5,
    label: "Men",
    href: "/men",
    items: [
      { id: 1, label: "Clothing", href: "/men/clothing" },
      { id: 2, label: "Accessories", href: "/men/accessories" },
    ],
  },
  {
    id: 6,
    label: "Kids",
    href: "/kids",
    items: [],
  },
  {
    id: 7,
    label: "Gift Guide",
    href: "/gift-guide",
    items: [],
  },
  {
    id: 8,
    label: "Woolrich World",
    href: "/woolrich-world",
    items: [],
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
    components: { TemplatesHeader },
    setup() {
      return { args };
    },
    template: `<TemplatesHeader v-bind="args" />`,
  }),
};
