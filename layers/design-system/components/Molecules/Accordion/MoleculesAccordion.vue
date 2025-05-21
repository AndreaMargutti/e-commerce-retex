<script lang="ts" setup>
import type { MenuItem } from "~/types/MenuItem";
import type { MoleculesAccordionProps } from "./MoleculesAccordionProps";

defineProps<MoleculesAccordionProps<MenuItem>>();

const { status, changeStatus } = useMenu();
</script>

<template>
  <MoleculesAccordionButton
    :button-label="accordionLabel"
    @open-accordion="changeStatus"
  />
  <div class="py-2 lg:hidden" v-if="status">
    <slot></slot>
  </div>

  <div
    class="hidden lg:flex lg:flex-wrap lg:pt-6"
    v-if="accordionType === 'footer'"
  >
    <slot></slot>
  </div>
</template>
