<script lang="ts" setup>
import type { GalleryProps } from "./GalleryProps";

const props = defineProps<GalleryProps>();

const getLgColsLayout = computed(() => {
  switch (props.numOfCols) {
    case 3:
      return "lg:grid-cols-3";
    default:
      return "lg:grid-cols-3";
  }
});
</script>

<template>
  <h2 class="black text-center pt-11 pb-7 uppercase text-2-5xl leading-[37px]">
    {{ title }}
  </h2>
  <div :class="getLgColsLayout" class="grid grid-cols-2 gap-4">
    <slot></slot>
  </div>
</template>
