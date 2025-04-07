<script lang="ts" setup>
import type { AtomsButtonsProps } from "./AtomsButtonsProps.ts";
defineProps<AtomsButtonsProps>();
</script>
<template>
  {{ type }}
  <button class="text-sm">{{ label }}</button>
</template>
