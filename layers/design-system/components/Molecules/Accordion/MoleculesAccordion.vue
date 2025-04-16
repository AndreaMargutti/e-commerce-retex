<script lang="ts" setup>
import type { MoleculesAccordionProps } from "./MoleculesAccordionProps";

defineProps<MoleculesAccordionProps<MenuItem>>();

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
  <MoleculesAccordionContent v-if="isContentShown">
    <div class="py-2">
      <slot></slot>
    </div>
  </MoleculesAccordionContent>
</template>
