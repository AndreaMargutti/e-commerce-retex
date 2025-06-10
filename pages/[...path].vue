<script lang="ts" setup>
import type { Editorial } from "~/types/Editorial";
const route = useRoute();

const { data: pageContent } = await useFetch<Editorial[]>(
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
        :variant="module.variant"
        position-x="center"
        position-y="middle"
        :background-image="module.image ?? ''"
        :title="module.title ?? ''"
        :font-style="module.fontStyle ?? undefined"
      />
    </div>
  </main>
</template>
