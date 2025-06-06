<script lang="ts" setup>
const route = useRoute();

const { data: editorialContent } = await useFetch(
  `/api/pageContent/${route.params.slug}`,
);
</script>

<template>
  <div>
    {{ route.params.slug }}
    {{ editorialContent }}
  </div>
</template>
