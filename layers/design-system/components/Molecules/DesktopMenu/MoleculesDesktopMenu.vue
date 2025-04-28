<script lang="ts" setup>
import type { MoleculesDesktopMenuProps } from "./MoleculesDesktopMenuProps";
defineProps<MoleculesDesktopMenuProps>();
</script>

<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <AtomsLink :name="item.label" :href="item.to" variant="header">
          <MoleculesList :items="item.items || []" />
          <p>VEDI TUTTI</p>
        </AtomsLink>
      </li>
    </ul>
  </div>
</template>
