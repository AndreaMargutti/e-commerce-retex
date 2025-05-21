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
  <div v-if="status" class="py-2">
    <slot></slot>
  </div>
</template>
