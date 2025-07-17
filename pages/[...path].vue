<script lang="ts" setup>
import type { Editorial } from "~/types/Editorial";

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
</script>

<template>
  <main>
    <div v-for="(module, key) in pageContent" :key="key">
      <ModulesHeroBanner
        v-if="module.name === 'HeroBanner'"
        v-bind="normalizeHeroBanner(module)"
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
      <ModulesCarousel
        v-if="module.name === 'Carousel'"
        v-bind="normalizeCarousel(module)"
      />
      <ModulesImageCard
        v-if="module.name === 'DeepLinks'"
        v-bind="normalizeDeepLinks(module)"
      />
      <ModulesCenterCard
        v-if="module.name === 'CenterCard'"
        v-bind="normalizeCenterCard(module)"
      />
    </div>
  </main>
</template>
