<script lang="ts" setup>
import type { AtomsBackgroundImageProps } from "./AtomsBackgroudImageProps";

defineProps<AtomsBackgroundImageProps>();
</script>

<template>
  <img
    :src="src"
    alt="Hero Banner Background"
    class="object-cover object-[25%] aspect-[3/4] md:object-center md:aspect-[12/5] w-full"
  />
</template>
