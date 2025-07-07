<script lang="ts" setup>
import type { AtomsBackgroundImageProps } from "./AtomsBackgroudImageProps";

defineProps<AtomsBackgroundImageProps>();
</script>

<template>
  <NuxtImg
    :src="src"
    :alt="alt"
    class="object-cover object-[25%] aspect-[3/4] md:object-center md:aspect-[12/5] w-full"
  />
</template>
