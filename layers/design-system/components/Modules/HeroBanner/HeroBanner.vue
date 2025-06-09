<script lang="ts" setup>
import type { HeroBannerProps } from "./HeroBannerProps";

defineProps<HeroBannerProps>();
</script>

<template>
  <figure class="relative">
    <img :src="backgroundImage" alt="Hero Banner Background" />
    <h2 class="text-white absolute bottom-1/2 left-1/2 -translate-x-1/2">
      {{ title }}
    </h2>
  </figure>
</template>
