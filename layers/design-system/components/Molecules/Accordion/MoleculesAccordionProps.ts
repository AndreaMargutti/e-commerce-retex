export type MoleculesAccordionProps<T> = {
  itemsReceived: Array<T>;
  accordionLabel: string;
  accordionType: "header" | "footer";
};
