<script setup lang="ts">
import type { AtomsLinkProps } from "./AtomsLinkProps";

defineProps<AtomsLinkProps>();
</script>

<template>
  <NuxtLink
    :to="href"
    class="text-xs xl:text-sm hover:underline underline-offset-5"
  >
    {{ typeof name === string ? name.toLocaleUpperCase() : name }}
  </NuxtLink>
</template>
