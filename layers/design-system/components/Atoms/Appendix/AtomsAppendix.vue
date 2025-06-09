<script lang="ts" setup>
import type { AtomsAppendixProps } from "./AtomsAppendixProps";
defineProps<AtomsAppendixProps>();
</script>

<template>
  <h6 class="text-white">{{ appendix?.toLocaleUpperCase() }}</h6>
</template>
