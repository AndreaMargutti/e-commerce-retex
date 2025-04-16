<script lang="ts" setup>
import type { MoleculesAccordionProps } from "./MoleculesAccordionProps";

defineProps<MoleculesAccordionProps>();

const isContentShown = ref(false);
const toggleContent = () => {
  isContentShown.value = !isContentShown.value;
};
</script>

<template>
  <MoleculesAccordionButton
    @openAccordion="toggleContent"
    :buttonLabel="accordionLabel"
  />
  <MoleculesAccordionContent v-show="isContentShown">
  </MoleculesAccordionContent>
</template>
