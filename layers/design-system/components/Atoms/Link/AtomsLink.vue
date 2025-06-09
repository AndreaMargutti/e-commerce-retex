<script setup lang="ts">
import type { AtomsLinkProps } from "./AtomsLinkProps";
const props = withDefaults(defineProps<AtomsLinkProps>(), {
  textSize: "text-xs xl:text-sm",
});

const direction = computed(() => {
  if (props.direction === "row-reverse") {
    return "flex-row-reverse";
  } else {
    return "";
  }
});

const propsStyle = computed(() => {
  return [direction.value, props.textSize];
});
</script>

<template>
  <NuxtLink
    :to="href"
    :class="propsStyle"
    class="flex items-center gap-2 hover:cursor-pointer hover:underline underline-offset-5"
  >
    <AtomsIcon v-if="icon" :name="icon" size="20px" />
    {{ isUppercase ? name.toLocaleUpperCase() : capitalize(name) }}
  </NuxtLink>
</template>
