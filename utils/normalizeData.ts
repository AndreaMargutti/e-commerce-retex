import type { CardGalleryProps } from "~/layers/design-system/components/Modules/CardGallery/CardGalleryProps";
import type { HeroBannerProps } from "~/layers/design-system/components/Modules/HeroBanner/HeroBannerProps";
import type { SplitSectionProps } from "~/layers/design-system/components/Modules/SplitSection/SplitSectionProps";
import type { TextBlockProps } from "~/layers/design-system/components/Modules/TextBlock/TextBlockProps";
import type { CarouselProps } from "~/layers/design-system/components/Modules/Carousel/CarouselProps";
import type {
  CardGallery,
  Carousel,
  HeroBanner,
  SplitSection,
  TextBlock,
} from "~/types/Editorial";

export const normalizeHeroBanner = (module: HeroBanner): HeroBannerProps => {
  return {
    variant: module.data.variant ?? "links",
    backgroundImage: module.data.image?.src ?? "",
    backgroundImageAlt: module.data.image?.alt ?? "",
    position: module.data.position ?? undefined,
    appendix: module.data.appendix ?? "",
    title: module.data.title ?? "",
    subtitle: module.data.subtitle ?? "",
    links: module.data.links ?? [],
    buttons: module.data.buttons ?? [],
  };
};

export const normalizeTextBlock = (module: TextBlock): TextBlockProps => {
  return {
    title: module.data.title ?? "",
    text: module.data.text ?? "",
  };
};

export const normalizeCardGallery = (module: CardGallery): CardGalleryProps => {
  return {
    title: module.data.title ?? "",
    numberOfCols: module.data.numberOfCols ?? 3,
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
    isFullWidth: module.data.isFullWidth ?? true,
  };
};

export const normalizeCarousel = (module: Carousel): CarouselProps => {
  return {
    slides: module.data.slides ?? [],
  };
};
