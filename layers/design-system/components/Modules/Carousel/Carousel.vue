<script lang="ts" setup>
import type { CarouselProps } from "./CarouselProps";
import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true }, [Autoplay()]);

function scrollTo(index: number) {
  emblaApi.value?.scrollTo(index);
}
defineProps<CarouselProps>();
</script>

<template>
  <div class="embla overflow-hidden">
    <div ref="emblaRef" class="embla__viewport">
      <div class="embla__container flex">
        <div v-for="slide in slides" :key="slide.id" class="embla__slide">
          <NuxtImg :src="slide.url" :alt="slide.alt" class="w-full" />
        </div>
      </div>
    </div>
    <div class="flex gap-2 justify-center relative bottom-5">
      <button
        v-for="(slide, id) in slides"
        :key="slide.id"
        class="embla__to border-2 border-gray-state min-w-10"
        @click="scrollTo(id)"
      />
    </div>
  </div>
</template>

<style scoped>
.embla {
  overflow: hidden;
}

.embla__container {
  display: flex;
}

.embla__slide {
  flex: 0 0 100%; /* Slide covers 80% of the viewport */
  min-width: 0;
}
</style>
