<script lang="ts" setup>
import type { MoleculesAccordionButtonProps } from "./MoleculesAccordionButtonProps";

defineProps<MoleculesAccordionButtonProps>();

const isAccordionOpen = ref(false);
const emit = defineEmits(["openAccordion"]);

const openAccordion = () => {
  isAccordionOpen.value = !isAccordionOpen.value;
  emit("openAccordion");
};
</script>

<template>
  <button
    class="bg-gray-25 flex items-center justify-between w-full p-4"
    @click="openAccordion"
  >
    <p class="text-md">{{ label }}</p>
    <AtomsIcon :name="'navigation-chevron-down'" v-if="!isAccordionOpen" />
    <AtomsIcon :name="'navigation-chevron-up'" v-else />
  </button>
</template>
