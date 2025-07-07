<script lang="ts" setup>
import type { HeroBannerProps } from "./HeroBannerProps";

const props = defineProps<HeroBannerProps>();

const positioningX = computed(() => {
  switch (props.positionX) {
    case "left":
      return "left-0";
    case "center":
      return "left-1/2 -translate-x-1/2 text-center";
    case "right":
      return "right-0";
    default:
      return "left-0"; // Default to left if no valid position is provided
  }
});

const positioningY = computed(() => {
  switch (props.positionY) {
    case "top":
      return "top-[20%] -translate-y-[20%] md:top-1/4";
    case "middle":
      return "top-[50%] -translate-y-1/2";
    case "bottom":
      return "bottom-[20%] translate-y-[20%] md:bottom-1/8";
    default:
      return "top-1/2 -translate-y-1/2"; // Default to bottom if no valid position is provided
  }
});

const positioning = computed(() => {
  return `${positioningX.value} ${positioningY.value}`;
});

const labelsStyle = computed(() => {
  let labelClass = "";

  if ((props.links?.length ?? 0) > 3 || (props.buttons?.length ?? 0) > 3) {
    labelClass = "grid grid-cols-2";
  } else {
    labelClass = "flex justify-center";
  }

  return labelClass;
});

const labelPosition = computed(() => {
  let labelClass = "";

  if (props.positionX === "left" && (props.links?.length ?? 0) > 3) {
    labelClass = "gap-6 ";
  } else if (props.positionX === "center" && (props.links?.length ?? 0) > 3) {
    labelClass = "max-w-2/3 mx-auto gap-[1.5rem]";
  } else if (props.positionX === "right" && (props.links?.length ?? 0) > 3) {
    labelClass = "gap-6 pe-4 lg:pe-20";
  }

  return labelClass;
});
</script>

<template>
  <figure class="relative">
    <AtomsBackgroundImage :src="backgroundImage" />
    <AtomsGradient />
    <section :class="positioning" class="absolute py-15 px-8 max-w-1/2">
      <div>
        <AtomsAppendix :appendix="appendix ?? ''" />
        <AtomsTitle
          :title="title ?? ''"
          :font-style="fontStyle"
          color="white"
          class="py-4"
        />
        <AtomsSubtitle :subtitle="subtitle ?? ''" color="white" class="pb-4" />
      </div>
      <div
        v-if="variant === 'links'"
        class="lg:pt-8 text-white gap-[1.5rem]"
        :class="[labelsStyle, labelPosition]"
      >
        <AtomsLink
          v-for="link in links"
          :key="link.label"
          :name="link.label"
          :href="link.href"
          :is-uppercase="true"
          icon="navigation-right"
          icon-position="right"
          class="justify-between"
        >
          {{ link.label }}
        </AtomsLink>
      </div>
      <div
        v-else-if="variant === 'buttons'"
        class="whitespace-nowrap mx-auto gap-4 md:gap-8 justify-items-center lg:justify-items-normal lg:max-w-2/3"
        :class="labelsStyle"
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
