<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

const { menuItems, init } = useHeaderLinks();
await init();

const { y } = useWindowScroll();
</script>

<template>
  <div ref="page">
    <TemplatesHeader
      size="normal"
      :links="menuItems"
      :is-transparent="y < 50"
    />
    <div>
      <slot />
      <TemplatesFooter />
    </div>
  </div>
</template>
