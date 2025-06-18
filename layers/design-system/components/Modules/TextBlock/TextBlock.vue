<script lang="ts" setup>
import type { TextBlockProps } from "./TextBlockProps";

defineProps<TextBlockProps>();
</script>

<template>
  <div
    class="bg-white-state text-black-base font-medium text-sm md:text-md leading-[17px] text-center px-10 md:px-56 py-10"
  >
    <h2 class="font-normal pb-[24px]">{{ title }}</h2>
    <span>{{ text }}</span>
  </div>
</template>
