<script setup lang="ts">
const { menuItems, init } = useHeaderLinks();
await init();
</script>

<template>
  <div>
    <TemplatesHeader size="normal" :links="menuItems" />
    <div>
      <slot />
      <TemplatesFooter />
    </div>
  </div>
</template>
