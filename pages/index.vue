<script lang="ts" setup>
const { pageContent } = await usePageContent("en");

// const { data: editorialContent } = await useFetch("/api/pageContent/en");
</script>

<template>
  <main>
    <div v-for="(module, key) in pageContent" :key="key">
      {{ key }}
    </div>
  </main>
</template>
