<script lang="ts" setup>
import type { CardGalleryProps } from "~/layers/design-system/components/Modules/CardGallery/CardGalleryProps";
import type { HeroBannerProps } from "~/layers/design-system/components/Modules/HeroBanner/HeroBannerProps";
import type { TextBlockProps } from "~/layers/design-system/components/Modules/TextBlock/TextBlockProps";
import type { SplitSectionProps } from "~/layers/design-system/components/Modules/SplitSection/SplitSectionProps";
import type {
  HeroBanner,
  CardGallery,
  Editorial,
  SplitSection,
  TextBlock,
} from "~/types/Editorial";

const route = useRoute();
const { data: pageContent } = await useFetch<Editorial>(
  `/api/page${route.path}`,
);

if (!pageContent.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not Found",
  });
}

const normalizeHero = (module: HeroBanner): HeroBannerProps => {
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

const normalizeTextBlock = (module: TextBlock): TextBlockProps => {
  return {
    title: module.data.title ?? "",
    text: module.data.text ?? "Default text",
  };
};

const normalizeCardGallery = (module: CardGallery): CardGalleryProps => {
  return {
    title: module.data.title ?? "",
    cards: module.data.cards ?? [],
  };
};

const normalizeSplitSection = (module: SplitSection): SplitSectionProps => {
  return {
    orientation: module.data.orientation ?? "left",
    title: module.data.title ?? "",
    text: module.data.text ?? "",
    image: module.data.image ?? { src: "", alt: "" },
  };
};
</script>

<template>
  <main>
    <div v-for="(module, key) in pageContent" :key="key">
      <ModulesHeroBanner
        v-if="module.name === 'HeroBanner'"
        v-bind="normalizeHero(module)"
      />
      <ModulesTextBlock
        v-else-if="module.name === 'TextBlock'"
        v-bind="normalizeTextBlock(module)"
      />
      <ModulesCardGallery
        v-else-if="module.name === 'CardGallery'"
        v-bind="normalizeCardGallery(module)"
      />
      <ModulesSplitSection
        v-else-if="module.name === 'SplitSection'"
        v-bind="normalizeSplitSection(module)"
      />
    </div>
  </main>
</template>
