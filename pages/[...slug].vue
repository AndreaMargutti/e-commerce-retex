<script lang="ts" setup>
const route = useRoute();

// const { data } = await useFetch(`/api/pageContent/${route.params.slug}`);
</script>

<template>
  <div>
    {{ route.params.slug }}
  </div>
</template>
