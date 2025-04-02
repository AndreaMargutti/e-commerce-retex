<script setup lang="ts">
import type { AtomsBadgeProps } from "./AtomsBadgeProps";
const props = defineProps<AtomsBadgeProps>();

const computedClasses = computed(() => {
  return {
    "bg-gray-20": props.isTransparent,
    "bg-black-base text-white": !props.isTransparent,
  };
});

const sizeClasses = computed(() => {
  return {
    "size-5 text-sm": props.label !== "99+",
    "size-4 text-[7px]": props.label === "99+",
  };
});

const visibilityClasses = computed(() => {
  return {
    hidden: !props.isVisible,
    block: props.isVisible,
  };
});

const combinedClasses = computed(() => {
  return {
    ...computedClasses.value,
    ...sizeClasses.value,
    ...visibilityClasses.value,
  };
});
</script>

<template>
  <div
    :class="combinedClasses"
    class="py-0.5 px-1 rounded-full flex items-center justify-center"
  >
    <p>{{ label }}</p>
  </div>
</template>
