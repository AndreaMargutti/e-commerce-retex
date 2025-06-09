<script setup lang="ts">
const { menuItems, init } = useHeaderLinks();
await init();
</script>

<template>
  <div>
    <TemplatesHeader :is-transparent="true" size="normal" :links="menuItems" />
    <div>
      <slot />
      <TemplatesFooter />
    </div>
  </div>
</template>
