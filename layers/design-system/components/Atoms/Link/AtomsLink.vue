<script setup lang="ts">
import type { AtomsLinkProps } from "./AtomsLinkProps";

const props = defineProps<AtomsLinkProps>();

const variantStyle = computed(() => {
  if (props.variant === "header") {
    return "text-xs xl:text-sm hover:underline underline-offset-5";
  } else if (props.variant === "accordion") {
    return "text-base font-normal";
  }
});
</script>

<template>
  <div class="flex items-center gap-2">
    <AtomsIcon v-if="variant === 'accordion'" :name="linkIcon || ''" />
    <NuxtLink :to="href" :class="variantStyle">
      {{
        typeof name === "string" && variant !== "accordion"
          ? name.toLocaleUpperCase()
          : name
      }}
    </NuxtLink>
    <slot />
  </div>
</template>
