<script setup lang="ts">
import type { AtomsBadgeProps } from "./AtomsBadgeProps";
const props = defineProps<AtomsBadgeProps>();

const label = computed(() => {
  return props.items > 99 ? `99+` : props.items;
});

const visibility = computed(() => {
  return props.items > 0 ? "block" : "hidden";
});

const size = computed(() => {
  if (props.items < 99) {
    return "text-sm";
  } else {
    return "text-[7px]";
  }
});

// TODO: Add a prop to change the color of the badge

const classes = computed(() => {
  return [visibility.value, size.value];
});
</script>

<template>
  <div
    :class="classes"
    class="size-4 text-white bg-black-base py-0.5 px-1 rounded-full flex items-center justify-center"
  >
    <p>{{ label }}</p>
  </div>
</template>
