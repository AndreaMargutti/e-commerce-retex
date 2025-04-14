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
      :class="[direction === 'down' ? 'bottom-8 mb-2' : 'mt-2']"
      class="absolute left-[50%] -translate-x-[50%] hidden group-hover:block"
    >
      <AtomsTooltip :label="label" :direction="direction" />
    </div>
  </span>
</template>
