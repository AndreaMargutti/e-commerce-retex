<script lang="ts" setup>
import type { TextBlockProps } from "./TextBlockProps";

defineProps<TextBlockProps>();
</script>

<template>
  <div>
    {{ text }}
  </div>
</template>
