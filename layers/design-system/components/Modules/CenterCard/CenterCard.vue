<script lang="ts" setup>
import type { CenterCardProps } from "./CenterCardProps";

defineProps<CenterCardProps>();
</script>

<template>
  <AtomsGallery :num-of-cols="4">
    <div v-for="card in cards" :key="card.title" class="center-card">
      <NuxtImg :src="card.image.src" :alt="card.image.alt" class="w-full" />
      <div class="flex flex-col items-center">
        <h4 v-if="card.appendix" class="pt-6 uppercase text-sm leading-[17px]">
          {{ card.appendix }}
        </h4>
        <h2 class="py-6 text-2-5xl leading-[34px] uppercase">
          {{ card.title }}
        </h2>
        <div class="flex pb-6">
          <AtomsLink
            :name="card.link.label"
            :href="card.link.href"
            :is-uppercase="true"
            icon="navigation-right"
            icon-position="right"
          />
        </div>
      </div>
    </div>
  </AtomsGallery>
</template>
