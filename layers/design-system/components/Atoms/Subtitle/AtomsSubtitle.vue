<script lang="ts" setup>
import type { AtomsSubtitleProps } from "./AtomsSubtitleProps";
const props = defineProps<AtomsSubtitleProps>();

const textColor = computed(() => `text-${props.color}`);
</script>

<template>
  <h3 :class="textColor">{{ capitalize(subtitle ?? "") }}</h3>
</template>
