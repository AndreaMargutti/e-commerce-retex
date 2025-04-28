<script lang="ts" setup>
import type { MoleculesListProps } from "./MoleculesListProps";

defineProps<MoleculesListProps<MenuItem>>();
</script>

<template>
  <ul>
    <li v-for="(item, index) in items" :key="index" class="">
      <AtomsLink :name="item.label" :href="item.to" variant="header">
        <!-- <MoleculesList v-if="item.items" :items="item.items" /> -->
      </AtomsLink>
    </li>
  </ul>
</template>
