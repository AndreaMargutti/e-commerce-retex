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
    class="bg-gray-25 flex items-center justify-between p-4 w-full h-12"
    @click="openAccordion"
  >
    {{ buttonLabel }}
    <AtomsIcon :name="'navigation-chevron-down'" v-if="!status" />
    <AtomsIcon :name="'navigation-chevron-up'" v-else />
  </button>
</template>
