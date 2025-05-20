<script lang="ts" setup>
import type { MoleculesAccordionButtonProps } from "./MoleculesAccordionButtonProps";

defineProps<MoleculesAccordionButtonProps>();

const emit = defineEmits(["openAccordion"]);

const openAccordion = () => {
  changeStatus();
  emit("openAccordion");
};

const { status, changeStatus } = useMenu();
</script>

<template>
  <button
    class="bg-gray-25 font-medium flex items-center justify-between p-4 w-full h-12"
    @click="openAccordion"
  >
    {{ buttonLabel }}
    <AtomsIcon v-if="!status" :name="'navigation-chevron-down'" />
    <AtomsIcon v-else :name="'navigation-chevron-up'" />
  </button>
</template>
