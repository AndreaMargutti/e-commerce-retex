<script lang="ts" setup>
import type { MoleculesCardProps } from "./MoleculesCardProps";
defineProps<MoleculesCardProps>();
</script>

<template>
  <div>
    <figure class="pb-[1.4rem]">
      <img :src="image.src" :alt="image.alt" class="aspect-square w-full" />
      <div class="px-6 pt-6 pb-5">
        <h2 class="text-black pb-3 text-xl">
          {{ title }}
        </h2>
        <h3 class="text-black pb-0 text-sm">
          {{ capitalize(subtitle ?? "") }}
        </h3>
      </div>
      <div class="flex gap-8 px-6 *:p-0">
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
    </figure>
  </div>
</template>
