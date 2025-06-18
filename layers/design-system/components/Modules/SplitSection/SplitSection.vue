<script lang="ts" setup>
import type { SplitSectionProps } from "./SplitSectionProps";

const props = defineProps<SplitSectionProps>();

const flexDirection = computed(() => {
  return props.orientation === "right" ? "md:flex-row" : "md:flex-row-reverse";
});

const textDirection = computed(() => {
  let textAlign = "";
  switch (props.textPosition) {
    case "left":
      textAlign = "md:text-left";
      break;
    case "center":
      textAlign = "md:text-center";
      break;
    case "right":
      textAlign = "md:text-right";
      break;
    default:
      textAlign = "md:text-left";
      break;
  }

  return textAlign;
});

const textWeight = computed(() => {
  return `font-${props.fontWeight}`;
});
</script>

<template>
  <section>
    <figure :class="flexDirection" class="flex flex-col *:md:basis-1/2">
      <img
        :src="image.src"
        :alt="image.alt"
        class="pb-6 md:pb-0 aspect-3/2 md:apsect-12/5 md:max-w-1/2"
      />
      <div :class="textDirection" class="px-4 md:self-center">
        <h3 :class="textWeight" class="pb-4">{{ title }}</h3>
        <p class="text-sm leading-[17px] lg:text-base">{{ text }}</p>
      </div>
    </figure>
  </section>
</template>
