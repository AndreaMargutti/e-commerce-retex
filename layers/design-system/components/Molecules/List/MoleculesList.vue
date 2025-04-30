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
        variant="header"
      />
    </li>
    <li class="py-2">
      <AtomsLink :name="$t('vedi tutti')" href="#" variant="desktopMenu" />
    </li>
  </ul>
</template>
