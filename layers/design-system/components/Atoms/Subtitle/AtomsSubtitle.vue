<script lang="ts" setup>
import type { AtomsSubtitleProps } from "./AtomsSubtitleProps";
defineProps<AtomsSubtitleProps>();
</script>

<template>
  <h3 class="text-white">{{ capitalize(subtitle ?? "") }}</h3>
</template>
