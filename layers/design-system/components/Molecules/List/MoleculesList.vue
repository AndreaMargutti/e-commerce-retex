<script lang="ts" setup>
import type { MoleculesListProps } from "./MoleculesListProps";

defineProps<MoleculesListProps<MenuItem>>();
</script>

<template>
  <ul>
    <li v-for="singleItem in items">
      <AtomsLink
        :name="singleItem.label"
        :href="singleItem.to"
        variant="header"
      />
    </li>
  </ul>
</template>
