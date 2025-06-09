<script lang="ts" setup>
const route = useRoute();

interface Module {
  name: string;
  // add other properties if needed
}

const { data: pageContent } = await useFetch<Module[]>(
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
      <HeroBanner v-if="module.name === 'HeroBanner'" />
    </div>
  </main>
</template>
