<script setup lang="ts">
import type { AtomsTooltipProps } from "./AtomsTooltipProps";

defineProps<AtomsTooltipProps>();
</script>

<template>
  <div :class="`${type}-arrow`" class="arrow px-2 py-1">
    <span class="text-sm">{{ label }}</span>
  </div>
</template>

<style scoped>
.arrow {
  width: fit-content;
  position: relative;
  border: 1px solid var(--color-black-base);
}

.arrow:before,
.arrow:after {
  content: "";
  display: block;
  position: absolute;
  left: 50%;
  translate: -50%;
  width: 0;
  height: 0;
  border: 10px solid transparent;
}

.down-arrow:before,
.down-arrow:after {
  top: 100%;
  border-top-color: var(--color-black-base);
}

.up-arrow:before,
.up-arrow:after {
  bottom: 100%;
  border-bottom-color: var(--color-black-base);
}

.arrow:after {
  border: 9px solid transparent;
}

.down-arrow:after {
  border-top-color: white;
}

.up-arrow:after {
  border-bottom-color: white;
}
</style>
