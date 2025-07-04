<script lang="ts" setup>
import type {
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
</script>

<template>
  <main>
    <div v-for="(module, key) in pageContent" :key="key">
      <ModulesHeroBanner
        v-if="module.name === 'HeroBanner'"
        :variant="module.variant ?? 'links'"
        :position-x="module.positioningX ?? 'center'"
        :position-y="module.positioningY ?? 'middle'"
        :background-image="module.image?.src ?? ''"
        :title="module.title ?? ''"
        :appendix="module.appendix ?? ''"
        :subtitle="module.subtitle ?? ''"
        :font-style="module.fontStyle"
        :buttons="module.buttons ?? []"
        :links="module.links ?? []"
      />
      <ModulesTextBlock
        v-if="module.name === 'TextBlock'"
        :title="module.title"
        :text="(module as TextBlock).text ?? ''"
      />
      <ModulesCardGallery
        v-if="module.name === 'CardGallery'"
        :title="module.title"
        :cards="(module as CardGallery).cards ?? []"
      />
      <ModulesSplitSection
        v-if="module.name === 'SplitSection'"
        :orientation="(module as SplitSection).orientation"
        :title="module.title"
        :text="(module as SplitSection).text"
        :image="module.image ?? { src: '', alt: '' }"
      />
    </div>
  </main>
</template>
