<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <div>
    ciao
    {{ route.params.slug }}
  </div>
</template>
