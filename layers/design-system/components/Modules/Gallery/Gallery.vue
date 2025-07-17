<script lang="ts" setup>
import type { GalleryProps } from "./GalleryProps";

const props = defineProps<GalleryProps>();

const getLgColsLayout = computed(() => {
  switch (props.numOfCols) {
    case 3:
      return "lg:grid-cols-3";
    default:
      return "lg:grid-cols-4";
  }
});
</script>

<template>
  <div :class="getLgColsLayout" class="grid grid-cols-2"></div>
</template>
