<script lang="ts" setup>
import type { TextBlockProps } from "./TextBlockProps";

defineProps<TextBlockProps>();
</script>

<template>
  <div
    class="bg-white-state text-black-base font-medium text-md leading-[17px] text-center px-10 py-10 max-w-[80%] mx-auto"
  >
    <h2 v-if="title" class="font-normal pb-[24px]">{{ title }}</h2>
    <p class="leading-[21px]">{{ text }}</p>
  </div>
</template>
