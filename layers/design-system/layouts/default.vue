<script setup lang="ts">
const { menuItems, init } = useHeaderLinks();
await init();
</script>

<template>
  <div>
    <TemplatesHeader :isTransparent="false" size="normal" :links="menuItems" />
    <slot />
    <!--TODO: add footer when done-->
    <TemplatesFooter />
  </div>
</template>
