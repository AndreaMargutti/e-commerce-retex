<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

const { menuItems, init } = useHeaderLinks();
await init();

const { y } = useWindowScroll();
</script>

<template>
  <div>
    <TemplatesHeader
      size="normal"
      :links="menuItems"
      :is-transparent="y < 100"
    />
    <slot />
    <TemplatesFooter />
  </div>
</template>
