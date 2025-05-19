<script setup lang="ts">
import type { AtomsLinkProps } from "./AtomsLinkProps";

const props = withDefaults(defineProps<AtomsLinkProps>(), {
  textSize: "text-xs xl:text-sm",
});
</script>

<template>
  <div class="flex items-center gap-2 hover:cursor-pointer">
    <NuxtLink
      :to="href"
      :class="textSize"
      class="hover:underline underline-offset-5"
    >
      <span v-if="icon">
        <AtomsIcon :name="icon" class="scale-125" />
      </span>
      {{ isUppercase ? name.toLocaleUpperCase() : capitalize(name) }}
    </NuxtLink>
  </div>
</template>
