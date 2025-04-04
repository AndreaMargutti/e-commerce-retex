<script setup lang="ts">
import type { AtomsTooltipProps } from "./AtomsTooltipProps";

defineProps<AtomsTooltipProps>();
</script>

<template>
  <div class="arrow py-2 px-1">
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
  top: 100%;
  translate: -50%;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top-color: black;
}

.arrow:after {
  border: 9px solid transparent;
  border-top-color: white;
}
</style>
