<script lang="ts" setup>
const route = useRoute();

const { pageContent, error } = await usePageContent(
  route.params.slug as string,
);
</script>

<template>
  <div>
    {{ route.params.slug }}
    {{ pageContent }}
    {{ error }}
  </div>
</template>
