<script setup lang="ts">
import type { AtomsLinkProps } from "./AtomsLinkProps";
withDefaults(defineProps<AtomsLinkProps>(), {
  textSize: "text-xs xl:text-sm",
});
</script>

<template>
  <NuxtLink
    :to="href"
    :class="textSize"
    class="flex items-center gap-2 hover:cursor-pointer hover:underline underline-offset-5"
  >
    <AtomsIcon v-if="icon" :name="icon" size="20px" />
    {{ isUppercase ? name.toLocaleUpperCase() : capitalize(name) }}
  </NuxtLink>
</template>
