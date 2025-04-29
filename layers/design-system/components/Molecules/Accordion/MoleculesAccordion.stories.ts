import type { Meta, StoryObj } from "@storybook/vue3";
import MoleculesAccordion from "./MoleculesAccordion.vue";

const meta: Meta<typeof MoleculesAccordion> = {
  title: "Design System/Molecules/Accordion / Accordion",
  component: MoleculesAccordion,
  argTypes: {
    accordionLabel: {
      control: "text",
      description: "Label for the accordion button",
    },
    itemsReceived: {
      control: "select",
      description: "Items to display inside the accordion",
    },
  },
};
export default meta;

type Story = StoryObj<typeof MoleculesAccordion>;

export const Default: Story = {
  args: {
    accordionLabel: "label button",

    itemsReceived: [
      {
        id: 1,
        label: "item 1",
        to: "",
      },
      {
        id: 2,
        label: "item 2",
        to: "",
      },
      {
        id: 3,
        label: "item 3",
        to: "",
      },
    ],
  },

  render: (args) => ({
    components: { MoleculesAccordion },
    setup() {
      return { args };
    },
    template: `
      <MoleculesAccordion
        :accordionLabel="args.accordionLabel"
        :itemsReceived="args.itemsReceived"
      >
        <template #default>
          <div v-for="item in args.itemsReceived" :key="item.id" class="p-2">
            <p>{{ item.label }}</p>
          </div>
        </template>
      </MoleculesAccordion>
    `,
  }),
};
