<script lang="ts" setup>
import type { CenterCardProps } from "./CenterCardProps";

defineProps<CenterCardProps>();
</script>

<template>
  <div class="grid cols-cols-1 grid-cols-4 gap-4">
    <div v-for="card in cards" :key="card.title" class="center-card">
      <NuxtImg :src="card.image.src" :alt="card.image.alt" class="w-full" />
      <div class="flex flex-col gap-4">
        <h4 v-if="card.appendix">{{ card.appendix }}</h4>
        <h2>{{ card.title }}</h2>
        <div class="flex">
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
  </div>
</template>
