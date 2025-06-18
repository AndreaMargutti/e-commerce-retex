<script lang="ts" setup>
import type { MoleculesCardProps } from "./MoleculesCardProps";
defineProps<MoleculesCardProps>();
</script>

<template>
  <section>
    <figure class="pb-[1.4rem]">
      <img :src="image.src" :alt="image.alt" class="aspect-square w-full" />
      <div class="px-6 pt-6 pb-5">
        <AtomsTitle :title="title" color="black" class="pb-2 text-md" />
        <AtomsSubtitle
          :subtitle="subtitle ?? ''"
          color="black"
          class="pb-0 text-sm"
        />
      </div>
      <div class="flex gap-8 px-6 *:p-0">
        <AtomsLink
          v-for="link in labels ?? []"
          :key="link.label"
          :name="link.label"
          :href="link.href"
          icon="navigation-right"
          :is-uppercase="true"
          direction="row-reverse"
          class="justify-end px-6"
        />
      </div>
    </figure>
  </section>
</template>
