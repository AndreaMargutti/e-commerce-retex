<script setup lang="ts">
import { NuxtLink } from "#components";
import type { AtomsIconWrapperProps } from "./AtomsIconWrapperProps";

defineProps<AtomsIconWrapperProps>();
</script>

<template>
  <button v-if="type === 'button'">
    <slot name="button-slot"></slot>
  </button>
  <NuxtLink to="#" v-else-if="type === 'link'">
    <slot name="link-slot"></slot>
  </NuxtLink>
</template>
