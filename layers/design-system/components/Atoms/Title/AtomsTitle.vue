<script lang="ts" setup>
import type { AtomsTitleProps } from "./AtomsTitleProps";
defineProps<AtomsTitleProps>();
</script>

<template>
  <h2 class="text-white py-4">
    {{ capitalize(title ?? "") }}
  </h2>
</template>
