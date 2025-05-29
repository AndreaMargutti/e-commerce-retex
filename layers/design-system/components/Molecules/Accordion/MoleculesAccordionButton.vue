<script lang="ts" setup>
import type { MoleculesAccordionButtonProps } from "./MoleculesAccordionButtonProps";

defineProps<MoleculesAccordionButtonProps>();

const emit = defineEmits(["openAccordion"]);

const openAccordion = () => {
  changeStatus();
  emit("openAccordion");
};

const { status, changeStatus } = useAccordion();
</script>

<template>
  <button
    class="bg-gray-25 lg:bg-transparent font-medium flex items-center justify-between p-4 w-full h-12 lg:text-sm lg:text-start uppercase lg:pb-6 lg:ps-8 lg:border-b-1 lg:border-gray-75"
    @click="openAccordion"
  >
    {{ buttonLabel }}
    <span class="lg:hidden">
      <AtomsIcon v-if="!status" :name="'navigation-chevron-down'" />
      <AtomsIcon v-else :name="'navigation-chevron-up'" />
    </span>
  </button>
</template>
