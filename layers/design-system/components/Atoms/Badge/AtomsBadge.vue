<script setup lang="ts">
import type { AtomsBadgeProps } from "./AtomsBadgeProps";
const props = defineProps<AtomsBadgeProps>();

const label = computed(() => {
  return props.items > 99 ? `99+` : props.items;
});

const textSize = computed(() => {
  if (props.items < 99) {
    return "text-sm h-[20px] w-[20px]";
  } else if (props.items === 99) {
    return "text-tiny";
  } else {
    return "text-[7px]";
  }
});

const color = computed(() => {
  if (props.color === "grey") {
    return "bg-grey-base text-black-base";
  } else {
    return "bg-black-base text-white";
  }
});

const badgeStyle = computed(() => {
  return [textSize.value, color.value];
});
</script>

<template>
  <div
    :class="badgeStyle"
    class="h-[14px] w-[14px] py-0.5 px-1 rounded-full flex items-center justify-center"
  >
    <p>{{ label }}</p>
  </div>
</template>
