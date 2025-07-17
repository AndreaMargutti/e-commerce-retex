<script lang="ts" setup>
import { NuxtImg } from "#components";
import type { SplitSectionProps } from "./SplitSectionProps";

const props = withDefaults(defineProps<SplitSectionProps>(), {
  orientation: "left",
  isFullWidth: true,
});

const flexDirection = computed(() => {
  return props.orientation === "right" ? "md:flex-row" : "md:flex-row-reverse";
});
</script>

<template>
  <section :class="isFullWidth ? '' : 'px-13'">
    <figure :class="flexDirection" class="flex flex-col *:md:basis-1/2">
      <NuxtImg
        :src="image.src"
        :alt="image.alt"
        class="mb-6 md:mb-0 md:pb-0 aspect-3/2 md:aspect-4/3 md:max-w-1/2"
      />
      <div class="px-4 pb-10 md:self-center">
        <h3 class="pb-4">{{ title }}</h3>
        <p class="text-sm leading-[17px] lg:text-base">{{ text }}</p>
      </div>
    </figure>
  </section>
</template>
