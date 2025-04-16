<script setup lang="ts">
const { headerLinks, init } = useHeaderLinks();

await init();
</script>

<template>
  <div>
    <TemplatesHeader
      :isTransparent="false"
      size="normal"
      :links="headerLinks"
    />
    <slot />
    <!--TODO: insert footer when done-->
  </div>
</template>
