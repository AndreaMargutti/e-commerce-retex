<script lang="ts" setup>
import type { MoleculesCardProps } from "./MoleculesCardProps";
defineProps<MoleculesCardProps>();
</script>

<template>
  <div class="pb-[1.4rem] flex flex-col">
    <NuxtImg :src="image.src" :alt="image.alt" class="aspect-square w-full" />

    <div class="px-6 pt-6 pb-5">
      <h2 class="text-black pb-3 text-xl">
        {{ title }}
      </h2>
      <h3 class="text-black pb-0 text-sm">
        {{ capitalize(subtitle ?? "") }}
      </h3>
    </div>
    <div class="flex gap-8 mt-auto">
      <AtomsLink
        v-for="link in links ?? []"
        :key="link.label"
        :name="link.label"
        :href="link.href"
        icon="navigation-right"
        :is-uppercase="true"
        icon-position="right"
        class="justify-end px-6"
      />
    </div>
  </div>
</template>
