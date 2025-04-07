<script lang="ts" setup>
import { AtomsButtonProps } from "./AtomsButtonProps";
const props = defineProps<AtomsButtonProps>();
</script>

<template>
  <button>
    <p>{{ label }}</p>
  </button>
</template>
