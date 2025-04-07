<script setup lang="ts">
import type { AtomsLinkProps } from "./AtomsLinkProps";

const props = defineProps<AtomsLinkProps>();
</script>

<template>
  <NuxtLink
    v-if="type === 'link'"
    :to="`${href}`"
    class="text-xs xl:text-sm hover:underline underline-offset-5"
  >
    {{ label }}
  </NuxtLink>
  <button v-else-if="type === 'button'">{{}}</button>
</template>
