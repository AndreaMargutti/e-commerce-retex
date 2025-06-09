<script lang="ts" setup>
import type { HeroBannerProps } from "./HeroBannerProps";

const props = defineProps<HeroBannerProps>();

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
  <!--TODO: rimanere solo con il figure-->
  <figure class="relative">
    <AtomsBackgroundImage :src="backgroundImage" />
    <!-- Gradient overlay with Tailwind, fixed to cover image at all breakpoints -->
    <div
      class="absolute left-0 top-0 w-full h-full pointer-events-none bg-gradient-to-b from-[rgba(255,255,255,0.1)] from-10% to-[rgba(0,0,0,0.9)] to-90% md:bg-gradient-to-b md:from-transparent md:to-black md:from-0% md:to-100%"
    ></div>
    <section
      class="absolute bottom-21 md:bottom-8 lg:bottom-15 xl:bottom-30 px-4 lg:ps-28"
    >
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
