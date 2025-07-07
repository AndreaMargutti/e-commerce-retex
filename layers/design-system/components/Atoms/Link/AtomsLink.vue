<script setup lang="ts">
import type { AtomsLinkProps } from "./AtomsLinkProps";
const props = withDefaults(defineProps<AtomsLinkProps>(), {
  textSize: "text-xs xl:text-sm",
});

const iconPosition = computed(() => {
  if (props.iconPosition === "right") {
    return "flex-row-reverse";
  } else {
    return "";
  }
});

const propsStyle = computed(() => {
  return [iconPosition.value, props.textSize];
});
</script>

<template>
  <NuxtLink
    :to="href"
    :class="propsStyle"
    class="flex items-center gap-3 hover:cursor-pointer hover:underline underline-offset-5"
  >
    <AtomsIcon v-if="icon" :name="icon" size="20px" class="flex-shrink-0" />
    {{ isUppercase ? name.toLocaleUpperCase() : capitalize(name) }}
  </NuxtLink>
</template>
