<script lang="ts" setup>
const route = useRoute();

interface Module {
  name: string;
  // add other properties if needed
}

const { data: pageContent } = await useFetch<Module[]>(
  `/api/page${route.path}`,
);
</script>

<template>
  <main>
    <div v-for="(module, key) in pageContent" :key="key">
      {{ module.name }}
    </div>
  </main>
</template>
