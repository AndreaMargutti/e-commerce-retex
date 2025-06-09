<script lang="ts" setup>
import type { HeroBannerProps } from "./HeroBannerProps";

const props = defineProps<HeroBannerProps>();

const positioningX = computed(() => {
  switch (props.positionX) {
    case "left":
      return "left-0 lg:ps-20";
    case "center":
      return "left-1/2 -translate-x-1/2";
    case "right":
      return "right-0 lg:pe-20";
    default:
      return "left-0"; // Default to left if no valid position is provided
  }
});

const positioningY = computed(() => {
  switch (props.positionY) {
    case "top":
      return "top-16";
    case "middle":
      return "top-1/2 -translate-y-1/2";
    case "bottom":
      return "bottom-21 md:bottom-8 lg:bottom-15 xl:bottom-30";
    default:
      return "bottom-21 md:bottom-8 lg:bottom-15 xl:bottom-30"; // Default to bottom if no valid position is provided
  }
});

const positioning = computed(() => {
  return `${positioningX.value} ${positioningY.value}`;
});

const labelsStyle = computed(() => {
  let labelClass = "";

  if (props.labels && props.labels.length > 3) {
    labelClass = "min-w-40 flex-wrap *:flex-1/3";
  } else {
    labelClass = "flex-nowrap";
  }
  return labelClass;
});
</script>

<template>
  <figure class="relative">
    <AtomsBackgroundImage :src="backgroundImage" />
    <AtomsGradient />
    <section :class="positioning" class="absolute">
      <div>
        <AtomsAppendix :appendix="appendix ?? ''" />
        <AtomsTitle :title="title ?? ''" />
        <AtomsSubtitle :subtitle="subtitle ?? ''" />
      </div>
      <div class="pt-8 flex gap-6 text-white" :class="labelsStyle">
        <AtomsLink
          v-for="(label, idx) in labels"
          :key="idx"
          :name="label"
          :href="'#'"
          :is-uppercase="true"
          icon="navigation-right"
          direction="row-reverse"
          +
          class="justify-end w-fit"
        >
          {{ label }}
        </AtomsLink>
      </div>
    </section>
  </figure>
</template>
