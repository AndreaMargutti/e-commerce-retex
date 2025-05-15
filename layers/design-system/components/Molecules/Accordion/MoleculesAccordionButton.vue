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
    class="bg-gray-25 lg:bg-transparent font-medium lg:text-xs flex items-center justify-between p-4 w-full h-12 lg:w-auto lg:p-b-6 lg:border-b-1"
    @click="openAccordion"
  >
    {{ buttonLabel }}
    <div class="block lg:hidden">
      <AtomsIcon :name="'navigation-chevron-down'" v-if="!status" />
      <AtomsIcon :name="'navigation-chevron-up'" v-else />
    </div>
  </button>
</template>
