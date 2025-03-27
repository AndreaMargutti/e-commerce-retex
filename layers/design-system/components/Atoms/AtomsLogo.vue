<script setup lang="ts">
import type { AtomsLogoProps } from "./AtomsLogoProps.ts";

const props = withDefaults(defineProps<AtomsLogoProps>(), {
  size: "sm",
});
// const logoSize = "bg-red-500 w-[7rem] h-[4rem]";
const logoSize = computed(() => {
  let sizeClass = "";
  switch (props.size) {
    case "sm":
      sizeClass = "text-[4rem]";
      break;
    case "lg":
      sizeClass = "text-[51px]";
      break;
    case "xl":
      sizeClass = "text-[4.5rem]";
      break;
  }
  return sizeClass;
});
</script>

<template>
  <Icon name="my-icon:logo-default" :class="logoSize" />
</template>
