<script lang="ts" setup>
const route = useRoute();

const { data } = await useFetch(`/api/page${route.path}`);
</script>

<template>
  <div>
    {{ data }}
  </div>
</template>
