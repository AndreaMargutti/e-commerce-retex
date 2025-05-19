<script setup lang="ts">
import capitalize from "~/utils/capitalize";
import type { AtomsLinkProps } from "./AtomsLinkProps";

const props = withDefaults(defineProps<AtomsLinkProps>(), {
  textSize: "text-xs xl:text-sm",
});
</script>

<template>
  <div class="flex items-center gap-2 hover:cursor-pointer">
    <span v-if="icon">
      <AtomsIcon :name="icon!" class="scale-125" />
    </span>
    <NuxtLink
      :to="href"
      :class="textSize"
      class="hover:underline underline-offset-5"
    >
      {{ isUppercase ? name.toLocaleUpperCase() : capitalize(name) }}
    </NuxtLink>
  </div>
</template>
