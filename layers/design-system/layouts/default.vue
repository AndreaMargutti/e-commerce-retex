<script setup lang="ts">
const { menuItems, init } = useHeaderLinks();
await init();
</script>

<template>
  <div>
    <TemplatesHeader :is-transparent="false" size="normal" :links="menuItems" />
    <slot />
    <TemplatesFooter />
  </div>
</template>
