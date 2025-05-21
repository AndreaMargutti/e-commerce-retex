<script lang="ts" setup>
import type { MenuItem } from "~/types/MenuItem";
import type { MoleculesAccordionProps } from "./MoleculesAccordionProps";

defineProps<MoleculesAccordionProps<MenuItem>>();

const { status, changeStatus } = useAccordion();
</script>

<template>
  <MoleculesAccordionButton
    :button-label="accordionLabel"
    @open-accordion="changeStatus"
  />
  <div v-if="status" class="py-2 lg:hidden">
    <slot></slot>
  </div>

  <div
    v-if="accordionType === 'footer'"
    class="hidden lg:flex lg:flex-wrap lg:pt-6"
  >
    <slot></slot>
  </div>
</template>
