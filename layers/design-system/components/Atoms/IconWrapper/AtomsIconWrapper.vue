<script setup lang="ts">
import type { AtomsIconWrapperProps } from "./AtomsIconWrapperProps";

defineProps<AtomsIconWrapperProps>();
</script>

<template>
  <button v-if="type === 'button'">
    <slot name="button-slot"></slot>
  </button>
  <a href="#" v-else-if="type === 'link'">
    <slot name="link-slot"></slot>
  </a>
</template>
