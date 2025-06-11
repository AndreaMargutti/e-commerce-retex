<script lang="ts" setup>
import type { HeroBannerProps } from "./HeroBannerProps";

const props = defineProps<HeroBannerProps>();

const positioningX = computed(() => {
  switch (props.positionX) {
    case "left":
      return "left-0 ps-4 lg:ps-20";
    case "center":
      return "left-1/2 -translate-x-1/2 text-center";
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
      return "bottom-23 md:bottom-10 lg:bottom-30";
    default:
      return "bottom-21 md:bottom-8 lg:bottom-10 xl:bottom-30"; // Default to bottom if no valid position is provided
  }
});

const positioning = computed(() => {
  return `${positioningX.value} ${positioningY.value}`;
});

const labelsStyle = computed(() => {
  let labelClass = "";
  if (props.links) {
    if (props.links.length > 3) {
      labelClass = "grid grid-cols-2";
    } else {
      labelClass = "flex justify-center";
    }
  }

  return labelClass;
});
</script>

<template>
  <figure class="relative">
    <AtomsBackgroundImage :src="backgroundImage" />
    <AtomsGradient />
    <section :class="positioning" class="absolute pb-4 max-w-1/2">
      <div>
        <AtomsAppendix :appendix="appendix ?? ''" />
        <AtomsTitle
          :title="title ?? ''"
          :font-style="fontStyle"
          class="lg:text-center"
        />
        <AtomsSubtitle :subtitle="subtitle ?? ''" />
      </div>
      <div
        v-if="variant === 'links'"
        class="lg:pt-8 text-white max-w-2/3 mx-auto gap-[1.5rem]"
        :class="labelsStyle"
      >
        <AtomsLink
          v-for="link in links"
          :key="link.label"
          :name="link.label"
          :href="link.href"
          :is-uppercase="true"
          icon="navigation-right"
          direction="row-reverse"
          class="justify-between"
        >
          {{ link.label }}
        </AtomsLink>
      </div>
      <div
        v-else-if="variant === 'buttons'"
        class="flex justify-center whitespace-nowrap"
      >
        <AtomsButton
          v-for="button in buttons"
          :key="button.btnLabel"
          :label="button.btnLabel ?? ''"
          :type="button.btnType ?? 'primary'"
          text-size="medium"
          :href="button.btnLink"
          :is-uppercase="true"
          :on-background="true"
          class="max-w-[60%] justify-center"
        />
      </div>
    </section>
  </figure>
</template>
