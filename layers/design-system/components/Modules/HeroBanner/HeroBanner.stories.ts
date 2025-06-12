import type { Meta, StoryObj } from "@storybook/vue3";
import HeroBanner from "./HeroBanner.vue";

const meta: Meta<typeof HeroBanner> = {
  component: HeroBanner,
  title: "Design System / Modules / HeroBanner",
  parameters: {
    docs: {
      description: {
        component:
          "Il componente HeroBanner mostra un'immagine di background, titolo, sottotitolo e una call to action (link o bottoni).",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["links", "buttons"],
      description: "Tipo di call to action: links o buttons",
    },
    backgroundImage: {
      control: "text",
      description: "URL dell'immagine di background",
    },
    appendix: {
      control: "text",
      description: "Testo aggiuntivo sopra il titolo",
    },
    title: {
      control: "text",
      description: "Titolo principale",
    },
    fontStyle: {
      control: "select",
      options: ["capitalized", "uppercase"],
      description: "Stile del font del titolo",
    },
    subtitle: {
      control: "text",
      description: "Sottotitolo",
    },
    links: {
      control: "object",
      description: "Array di link per la variante links",
    },
    positionX: {
      control: "select",
      options: ["left", "center", "right"],
      description: "Allineamento orizzontale del contenuto",
    },
    positionY: {
      control: "select",
      options: ["top", "middle", "bottom"],
      description: "Allineamento verticale del contenuto",
    },
    buttons: {
      control: "object",
      description: "Array di bottoni per la variante buttons",
    },
  },
};

export default meta;

type Story = StoryObj<typeof HeroBanner>;

// Variante con un bottone
export const WithButton: Story = {
  args: {
    variant: "buttons",
    backgroundImage:
      "https://woolrich-cdn.thron.com/delivery/public/image/woolrich/9e066b5b-a554-4e04-af93-68c4f68aa1f7/fdynkn/std/1024x960/editorialimage?format=auto&scalemode=none&quality=80&dpr=120",
    title: "Scopri la nuova collezione",
    fontStyle: "capitalized",
    positionX: "center",
    positionY: "middle",
    buttons: [{ btnLabel: "Acquista ora", btnLink: "#", btnType: "primary" }],
  },
  render: (args) => ({
    components: { HeroBanner },
    setup: () => ({ args }),
    template: `<HeroBanner v-bind="args" />`,
  }),
  parameters: {
    docs: {
      description: {
        story: "HeroBanner con una call to action a bottone.",
      },
    },
  },
};

export const WithThreeButton: Story = {
  args: {
    variant: "buttons",
    backgroundImage:
      "https://woolrich-cdn.thron.com/delivery/public/image/woolrich/9e066b5b-a554-4e04-af93-68c4f68aa1f7/fdynkn/std/1024x960/editorialimage?format=auto&scalemode=none&quality=80&dpr=120",
    title: "Scopri la nuova collezione",
    fontStyle: "capitalized",
    positionX: "center",
    positionY: "middle",
    buttons: [
      { btnLabel: "Acquista ora", btnLink: "#", btnType: "primary" },
      { btnLabel: "Acquista ora", btnLink: "#", btnType: "primary" },
      { btnLabel: "Acquista ora", btnLink: "#", btnType: "primary" },
    ],
  },
  render: (args) => ({
    components: { HeroBanner },
    setup: () => ({ args }),
    template: `<HeroBanner v-bind="args" />`,
  }),
  parameters: {
    docs: {
      description: {
        story: "HeroBanner con una call to action a bottone.",
      },
    },
  },
};

export const WithFourButton: Story = {
  args: {
    variant: "buttons",
    backgroundImage:
      "https://woolrich-cdn.thron.com/delivery/public/image/woolrich/9e066b5b-a554-4e04-af93-68c4f68aa1f7/fdynkn/std/1024x960/editorialimage?format=auto&scalemode=none&quality=80&dpr=120",
    title: "Scopri la nuova collezione",
    fontStyle: "capitalized",
    positionX: "center",
    positionY: "middle",
    buttons: [
      { btnLabel: "Acquista ora", btnLink: "#", btnType: "primary" },
      { btnLabel: "Acquista ora", btnLink: "#", btnType: "primary" },
      { btnLabel: "Acquista ora", btnLink: "#", btnType: "primary" },
      { btnLabel: "Acquista ora", btnLink: "#", btnType: "primary" },
    ],
  },
  render: (args) => ({
    components: { HeroBanner },
    setup: () => ({ args }),
    template: `<HeroBanner v-bind="args" />`,
  }),
  parameters: {
    docs: {
      description: {
        story: "HeroBanner con una call to action a bottone.",
      },
    },
  },
};

// Variante con 4 labels
export const WithFourLabels: Story = {
  args: {
    variant: "links",
    backgroundImage:
      "https://woolrich-cdn.thron.com/delivery/public/image/woolrich/9e066b5b-a554-4e04-af93-68c4f68aa1f7/fdynkn/std/1024x960/editorialimage?format=auto&scalemode=none&quality=80&dpr=120",
    appendix: "Nuovi Arrivi",
    title: "Primavera 2024",
    fontStyle: "uppercase",
    subtitle: "Scopri tutte le novità della stagione.",
    links: [
      { label: "Uomo", href: "#" },
      { label: "Donna", href: "#" },
      { label: "Bambini", href: "#" },
      { label: "Accessori", href: "#" },
    ],
    positionX: "left",
    positionY: "bottom",
  },
  render: (args) => ({
    components: { HeroBanner },
    setup: () => ({ args }),
    template: `<HeroBanner v-bind="args" />`,
  }),
  parameters: {
    docs: {
      description: {
        story: "HeroBanner con quattro link label come call to action.",
      },
    },
  },
};

export const WithThreeLabels: Story = {
  args: {
    variant: "links",
    backgroundImage:
      "https://woolrich-cdn.thron.com/delivery/public/image/woolrich/9e066b5b-a554-4e04-af93-68c4f68aa1f7/fdynkn/std/1024x960/editorialimage?format=auto&scalemode=none&quality=80&dpr=120",
    appendix: "Nuovi Arrivi",
    title: "Primavera 2024",
    fontStyle: "uppercase",
    subtitle: "Scopri tutte le novità della stagione.",
    links: [
      { label: "Uomo", href: "#" },
      { label: "Donna", href: "#" },
      { label: "Bambini", href: "#" },
    ],
    positionX: "center",
    positionY: "middle",
  },
  render: (args) => ({
    components: { HeroBanner },
    setup: () => ({ args }),
    template: `<HeroBanner v-bind="args" />`,
  }),
  parameters: {
    docs: {
      description: {
        story: "HeroBanner con quattro link label come call to action.",
      },
    },
  },
};
