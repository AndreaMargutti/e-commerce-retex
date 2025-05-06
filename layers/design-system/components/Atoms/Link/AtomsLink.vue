<script setup lang="ts">
import type { AtomsLinkProps } from "./AtomsLinkProps";

const props = defineProps<AtomsLinkProps>();
const { capitalize } = useCapitalize();
</script>

<template>
  <div class="flex items-center gap-2 hover:cursor-pointer">
    <span v-show="icon">
      <AtomsIcon :name="icon" class="scale-125" />
    </span>
    <NuxtLink
      :to="href"
      class="text-xs xl:text-sm hover:underline underline-offset-5"
    >
      {{ isUppercase ? name.toLocaleUpperCase() : capitalize(name) }}
    </NuxtLink>
  </div>
</template>
