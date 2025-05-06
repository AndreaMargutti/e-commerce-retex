<script lang="ts" setup>
import type { MoleculesDesktopMenuProps } from "./MoleculesDesktopMenuProps";
defineProps<MoleculesDesktopMenuProps>();
</script>

<template>
  <ul
    class="flex flex-wrap px-8 fixed top-[76px] -left-0 right-0 h-[100vh] overflow-auto bg-white"
  >
    <li v-for="(item, index) in items" :key="index" class="basis-1/6">
      <MoleculesDesktopMenuLink>
        <AtomsLink
          :name="item.label.toLocaleUpperCase()"
          :href="item.to"
          :isUppercase="true"
        />
      </MoleculesDesktopMenuLink>
      <MoleculesList :items="item.category || []" :isUppercase="false" />
    </li>
  </ul>
</template>
