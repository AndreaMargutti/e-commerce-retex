<script lang="ts" setup>
const route = useRoute();

const { pageContent } = await usePageContent("en");

// const { data: editorialContent } = await useFetch("/api/pageContent/en");
</script>

<template>
  <div>
    {{ route.path }}
    {{ pageContent }}
  </div>
</template>
