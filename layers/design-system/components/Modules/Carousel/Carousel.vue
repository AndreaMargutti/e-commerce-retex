<script lang="ts" setup>
import type { CarouselProps } from "./CarouselProps";
import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true }, [Autoplay()]);

function scrollTo(index: number) {
  emblaApi.value?.scrollTo(index);
  emblaApi.value?.plugins().autoplay.reset();
}

defineProps<CarouselProps>();

const slideIndex = ref(0);
const atSlideChange = () => {
  slideIndex.value = emblaApi.value?.selectedScrollSnap() ?? 0;
};

onMounted(() => {
  if (emblaApi.value) emblaApi.value.on("select", atSlideChange);
});
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
        :class="id === slideIndex ? 'loader' : ''"
        class="embla__to min-w-10 min-h-1 bg-gray-base shadow-sm hover:cursor-pointer"
        @click="scrollTo(id)"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.embla {
  overflow: hidden;
}

.embla__container {
  display: flex;
  max-height: 700px;
}

.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}

.loader {
  background: linear-gradient(#fff) 0/0% no-repeat #bdbdbd;
  animation: l1 4.5s infinite linear;
}

@keyframes l1 {
  100% {
    background-size: 100%;
  }
}
</style>
