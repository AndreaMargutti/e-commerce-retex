<script lang="ts" setup>
import type { CardGalleryProps } from "./CardGalleryProps";

defineProps<CardGalleryProps>();
</script>

<template>
  <h2 class="black text-center pt-11 pb-7 uppercase">
    {{ title }}
  </h2>
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
    <MoleculesCard
      v-for="card in cards"
      :key="card.title"
      :title="card.title"
      :subtitle="card.text"
      :image="{ src: card.image, alt: card.title }"
      :links="card.links?.map((l) => ({ label: l.label, href: l.link }))"
    />
  </div>
</template>
