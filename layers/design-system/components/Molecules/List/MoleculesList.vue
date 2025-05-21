<script lang="ts" setup>
import type { MoleculesListProps } from "./MoleculesListProps";

defineProps<MoleculesListProps>();
</script>

<template>
  <ul class="">
    <li v-for="singleItem in items" :key="singleItem.label" class="py-2">
      <AtomsLink
        :name="singleItem.label"
        :href="singleItem.to"
        :is-uppercase="isUppercase"
      />
    </li>
    <li class="py-2">
      <AtomsLink :name="$t('SeeAll')" href="#" is-uppercase />
    </li>
  </ul>
</template>
