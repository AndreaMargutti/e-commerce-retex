<script lang="ts" setup>
import type { ImageCardProps } from "./ImageCardProps";

defineProps<ImageCardProps>();
</script>

<template>
  <AtomsGallery :num-of-cols="4">
    <figure v-for="card in cards" :key="card.title" class="relative">
      <NuxtImg :src="card.image.src" :alt="card.image.alt" class="w-full" />
      <div class="absolute bottom-0 text-white ps-8 pb-8">
        <h6 class="leading-[19px] pb-1 lg:text-2xl lg:leading-[29px]">
          {{ card.title }}
        </h6>
        <div class="flex">
          <AtomsLink
            :href="card.link.href"
            :name="card.link.label"
            :is-uppercase="true"
            icon-position="right"
            icon="navigation-right"
            class=""
          />
        </div>
      </div>
    </figure>
  </AtomsGallery>
</template>
