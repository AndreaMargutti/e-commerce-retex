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
      return "bottom-20 lg:bottom-30";
    default:
      return "bottom-21 md:bottom-8 lg:bottom-15 xl:bottom-30"; // Default to bottom if no valid position is provided
  }
});

const positioning = computed(() => {
  return `${positioningX.value} ${positioningY.value}`;
});

const labelsStyle = computed(() => {
  let labelClass = "";

  if (props.links && props.links.length > 3 && props.positionX === "center") {
    labelClass =
      "min-w-40 flex-wrap *:flex-1/4 left-1/3 -translate-x-1/3 text-center";
  } else if (props.links && props.links.length > 3) {
    labelClass = "min-w-40 flex-wrap *:flex-1/4";
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
        <AtomsTitle :title="title ?? ''" :font-style="fontStyle" />
        <AtomsSubtitle :subtitle="subtitle ?? ''" />
      </div>
      <div
        v-if="variant === 'links'"
        class="lg:pt-8 flex gap-6 text-white absolute"
        :class="[labelsStyle]"
      >
        <AtomsLink
          v-for="link in links"
          :key="link.label"
          :name="link.label"
          :href="link.href"
          :is-uppercase="true"
          icon="navigation-right"
          direction="row-reverse"
          class="justify-end w-fit"
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
