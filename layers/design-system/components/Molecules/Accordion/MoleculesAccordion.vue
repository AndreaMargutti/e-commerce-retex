<script lang="ts" setup>
const isContentShown = ref(false);
const toggleContent = () => {
  isContentShown.value = !isContentShown.value;
};
</script>

<template>
  <MoleculesAccordionButton label="ciao" @openAccordion="toggleContent" />
  <MoleculesAccordionContent v-show="isContentShown">
  </MoleculesAccordionContent>
</template>
