<script lang="ts" setup>
import type { AtomsTitleProps } from "./AtomsTitleProps";
const props = withDefaults(defineProps<AtomsTitleProps>(), {
  fontStyle: "capitalized",
});

const textColor = computed(() => `text-${props.color}`);
</script>

<template>
  <h2 :class="textColor">
    {{
      fontStyle === "capitalized"
        ? capitalize(title ?? "")
        : title.toLocaleUpperCase()
    }}
  </h2>
</template>
