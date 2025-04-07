<script setup lang="ts">
import type { AtomsLinkProps } from "./AtomsLinkProps";

defineProps<AtomsLinkProps>();
</script>

<template>
  <NuxtLink
    :to="href"
    class="text-xs xl:text-sm hover:underline underline-offset-5"
  >
    {{ name }}
  </NuxtLink>
</template>
