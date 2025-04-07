<script setup lang="ts">
import { NuxtLink } from "#components";
import type { AtomsIconWrapperProps } from "./AtomsIconWrapperProps";

withDefaults(defineProps<AtomsIconWrapperProps>(), {
  type: "link",
});
</script>

<template>
  <button v-if="type === 'button'">
    <slot></slot>
  </button>
  <NuxtLink to="#" v-else-if="type === 'link'">
    <slot></slot>
  </NuxtLink>
</template>
