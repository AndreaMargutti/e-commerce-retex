<script lang="ts" setup>
import type { MoleculesDesktopMenuProps } from "./MoleculesDesktopMenuProps";
defineProps<MoleculesDesktopMenuProps>();
</script>

<template>
  <div class="absolute inset-y-full left-0 right-0">
    <MoleculesList :items="items" />
  </div>
</template>
