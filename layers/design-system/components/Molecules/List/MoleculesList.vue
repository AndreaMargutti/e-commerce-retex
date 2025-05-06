<script lang="ts" setup>
import type { MoleculesListProps } from "./MoleculesListProps";

defineProps<MoleculesListProps<MenuItem>>();
</script>

<template>
  <ul class="">
    <li v-for="singleItem in items" class="py-2">
      <AtomsLink
        :name="singleItem.label"
        :href="singleItem.to"
        :isUppercase="isUppercase"
      />
    </li>
    <li class="py-2">
      <AtomsLink :name="$t('vedi tutti')" href="#" :isUppercase="true" />
    </li>
  </ul>
</template>
