<script lang="ts" setup>
import type { MoleculesAccordionProps } from "./MoleculesAccordionProps";

defineProps<MoleculesAccordionProps<MenuItem>>();

const isContentShown = ref(false);
const toggleContent = () => {
  isContentShown.value = !isContentShown.value;
};

const { status, changeStatus } = useMenu();
</script>

<template>
  <MoleculesAccordionButton
    @openAccordion="changeStatus"
    :buttonLabel="accordionLabel"
  />
  <div class="py-2 lg:pt-6" v-if="status">
    <slot></slot>
  </div>
</template>
