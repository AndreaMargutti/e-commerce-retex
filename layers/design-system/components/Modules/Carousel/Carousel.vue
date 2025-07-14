<script lang="ts" setup>
import type { CarouselProps } from "./CarouselProps";
import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true }, [Autoplay()]);

function scrollNext() {
  emblaApi.value?.scrollNext();
}
function scrollPrev() {
  emblaApi.value?.scrollPrev();
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
    <button class="embla__prev" @click="scrollPrev">Prev</button>
    <button class="embla__next" @click="scrollNext">Next</button>
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
