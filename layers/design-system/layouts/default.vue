<script setup lang="ts">
const { menuItems, init } = useHeaderLinks();
await init();
</script>

<template>
  <div>
    <TemplatesHeader
      :is-transparent="false"
      size="normal"
      :links="headerLinks"
    />
    <slot />
    <TemplatesFooter />
  </div>
</template>
