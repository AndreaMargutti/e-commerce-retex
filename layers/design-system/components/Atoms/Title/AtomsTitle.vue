<script lang="ts" setup>
import type { AtomsTitleProps } from "./AtomsTitleProps";
withDefaults(defineProps<AtomsTitleProps>(), {
  fontStyle: "capitalized",
});
</script>

<template>
  <h2 class="text-white py-4 text-center">
    {{
      fontStyle === "capitalized"
        ? capitalize(title ?? "")
        : title.toLocaleUpperCase()
    }}
  </h2>
</template>
