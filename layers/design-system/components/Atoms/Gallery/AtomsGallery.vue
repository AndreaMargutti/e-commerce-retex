<script lang="ts" setup>
import type { AtomsGalleryProps } from "./AtomsGalleryProps";

const props = defineProps<AtomsGalleryProps>();

const getLgCols = computed(() => {
  return props.numOfCols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";
});
</script>

<template>
  <div :class="getLgCols" class="grid gap-4 grid-cols-1 md:grid-cols-2">
    <slot></slot>
  </div>
</template>
