import type { CardGalleryProps } from "~/layers/design-system/components/Modules/CardGallery/CardGalleryProps";
import type { HeroBannerProps } from "~/layers/design-system/components/Modules/HeroBanner/HeroBannerProps";
import type { SplitSectionProps } from "~/layers/design-system/components/Modules/SplitSection/SplitSectionProps";
import type { TextBlockProps } from "~/layers/design-system/components/Modules/TextBlock/TextBlockProps";
import type {
  CardGallery,
  HeroBanner,
  SplitSection,
  TextBlock,
} from "~/types/Editorial";

export const normalizeHeroBanner = (module: HeroBanner): HeroBannerProps => {
  return {
    variant: module.data.variant ?? "links",
    backgroundImage: module.data.image?.src ?? "",
    backgroundImageAlt: module.data.image?.alt ?? "",
    positionX: module.data.positionX ?? "center",
    positionY: module.data.positionY ?? "middle",
    appendix: module.data.appendix ?? "",
    title: module.data.title ?? "",
    subtitle: module.data.subtitle ?? "",
    buttons: module.data.buttons ?? [],
  };
};

export const normalizeTextBlock = (module: TextBlock): TextBlockProps => {
  return {
    title: module.data.title ?? "",
    text: module.data.text ?? "Default text",
  };
};

export const normalizeCardGallery = (module: CardGallery): CardGalleryProps => {
  return {
    title: module.data.title ?? "",
    cards: module.data.cards ?? [],
  };
};

export const normalizeSplitSection = (
  module: SplitSection,
): SplitSectionProps => {
  return {
    orientation: module.data.orientation ?? "left",
    title: module.data.title ?? "",
    text: module.data.text ?? "",
    image: module.data.image ?? { src: "", alt: "" },
  };
};
