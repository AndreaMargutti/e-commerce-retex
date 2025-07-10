<script lang="ts" setup>
import type { HeroBannerProps } from "./HeroBannerProps";
defineProps<HeroBannerProps>();
</script>

<template>
  <section class="relative size-full overflow-hidden">
    <div class="text-white pt-71 px-4 relative">
      <h6 class="pb-4">{{ appendix?.toLocaleUpperCase() }}</h6>
      <h2 class="pb-4">{{ title }}</h2>
      <h3 class="pb-4">{{ capitalize(subtitle ?? "") }}</h3>
      <div v-if="variant === 'links'" class="flex pb-21">
        <AtomsLink
          v-for="link in links"
          :key="link.label"
          :name="link.label"
          :href="link.href"
          icon="navigation-right"
          :is-uppercase="true"
          text-size="text-sm"
          icon-position="right"
          class="pe-6"
        />
      </div>
    </div>
    <div>
      <NuxtImg
        :src="backgroundImage"
        class="absolute top-0 left-0 -z-10 aspect-[3/4] object-cover object-[25%] h-full w-full lg:aspect-[12/5]"
      />
    </div>
    <div
      class="absolute left-0 top-0 -z-10 w-full h-full pointer-events-none bg-gradient-to-b from-[rgba(255,255,255,0.1)] from-10% to-[rgba(0,0,0,0.9)] to-90%"
    ></div>
  </section>
</template>
