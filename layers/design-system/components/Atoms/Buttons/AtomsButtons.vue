<script lang="ts" setup>
import type { AtomsButtonsProps } from "./AtomsButtonsProps.ts";
const props = defineProps<AtomsButtonsProps>();

const typeClass = computed(() => {
  switch (props.type) {
    case "tertiary":
      return "text-sm";
  }
});
</script>
<template>
  <!-- {{ typeClass }} -->
  <button :class="typeClass" class="flex gap-2 items-center">
    <p v-if="isUppercase">
      {{ label.toLocaleUpperCase() }}
    </p>
    <p v-else>{{ label }}</p>
    <AtomsIcon name="navigation-right" v-if="hasIcon" />
  </button>
</template>
