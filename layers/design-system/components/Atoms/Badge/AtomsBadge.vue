<script setup lang="ts">
import type { AtomsBadgeProps } from "./AtomsBadgeProps";
const props = withDefaults(defineProps<AtomsBadgeProps>(), {
  size: "large",
  inverted: false,
});

const label = computed((): string | number => {
  return props.items > 99 ? `99+` : props.items;
});

const badgeSize = computed((): string => {
  if (props.size === "small") {
    return "h-3.5 w-3.5";
  } else if (props.size === "large") {
    return "h-5 w-5";
  } else return "";
});

const textSize = computed((): string => {
  switch (props.size) {
    case "small":
      if (props.items > 99) {
        return "text-[7px]";
      } else {
        return "text-tiny";
      }
      break;
    case "large":
      if (props.items > 99) {
        return "text-tiny";
      } else {
        return "text-sm";
      }
      break;
    default:
      return "text-sm";
  }
});

const isInverted = computed(() => {
  if (props.inverted) {
    return "bg-black-base text-white";
  } else {
    return "bg-gray-base text-black-base";
  }
});

const badgeStyle = computed((): string[] => {
  return [badgeSize.value, textSize.value, isInverted.value];
});
</script>

<template>
  <div
    :class="badgeStyle"
    class="py-0.5 px-1 rounded-full flex items-center justify-center"
  >
    <p>{{ label }}</p>
  </div>
</template>
