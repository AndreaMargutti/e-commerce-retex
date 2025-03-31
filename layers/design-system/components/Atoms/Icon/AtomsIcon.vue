<script setup lang="ts">
import type { AtomsIconProps } from "./AtomsIconProps";

defineProps<AtomsIconProps>();
</script>

<template>
  <Icon :name="`icon:${name}`" />
</template>
