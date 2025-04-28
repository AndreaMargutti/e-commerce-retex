<script lang="ts" setup>
import type { MoleculesListProps } from "./MoleculesListProps";

defineProps<MoleculesListProps<MenuItem>>();
</script>

<template>
  <ul class="absolute inset-y-10">
    <li v-for="singleItem in items" class="py-2">
      <AtomsLink
        :name="singleItem.label"
        :href="singleItem.to"
        variant="header"
      />
    </li>
  </ul>
</template>
