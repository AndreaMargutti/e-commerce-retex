<script lang="ts" setup>
import type { AtomsTooltipWrapperProps } from "./AtomsTooltipWrapperProps.ts";
withDefaults(defineProps<AtomsTooltipWrapperProps>(), {
  direction: "up",
});
</script>

<template>
  <span class="relative group">
    <slot></slot>
    <div
      class="absolute left-[50%] -translate-x-[50%] mt-2 hidden group-hover:block"
    >
      <AtomsTooltip :label="label" :direction="direction" />
    </div>
  </span>
</template>
