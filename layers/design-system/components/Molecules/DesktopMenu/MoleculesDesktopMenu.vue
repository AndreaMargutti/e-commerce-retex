<script lang="ts" setup>
import type { MoleculesDesktopMenuProps } from "./MoleculesDesktopMenuProps";
defineProps<MoleculesDesktopMenuProps>();
</script>

<template>
  <ul class="flex flex-wrap absolute inset-y-full -left-0 right-0">
    <li v-for="(item, index) in items" :key="index" class="basis-1/6">
      <AtomsLink
        :name="item.label.toLocaleUpperCase()"
        :href="item.to"
        variant="desktopMenu"
      />
      <MoleculesList :items="item.items || []" />
    </li>
  </ul>
</template>
