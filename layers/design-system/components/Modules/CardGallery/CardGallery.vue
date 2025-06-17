<script lang="ts" setup>
import type { CardGalleryProps } from "./CardGalleryProps";

defineProps<CardGalleryProps>();
</script>

<template>
  <AtomsTitle
    :title="title ?? ''"
    color="black"
    class="text-center pt-11 pb-7"
  />
  <div class="grid md:grid-cols-2 lg:grid-cols-3">
    <MoleculesCard
      v-for="card in cards"
      :key="card.title"
      :title="card.title"
      :subtitle="card.text"
      :image="{ src: card.image, alt: card.title }"
      :labels="card.labels?.map((l) => ({ label: l.label, href: l.link }))"
    />
  </div>
</template>
