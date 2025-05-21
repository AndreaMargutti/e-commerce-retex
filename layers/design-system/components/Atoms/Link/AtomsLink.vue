<script setup lang="ts">
import type { AtomsLinkProps } from "./AtomsLinkProps";
const props = withDefaults(defineProps<AtomsLinkProps>(), {
  textSize: "text-xs xl:text-sm",
});

const route = useRoute();

function blockNavigation(event: MouseEvent) {
  if (route.path === props.href) {
    event.preventDefault();
  }
}
</script>

<template>
  <NuxtLink
    :to="href"
    :class="textSize"
    class="flex items-center gap-2 hover:cursor-pointer hover:underline underline-offset-5"
    @click="blockNavigation"
  >
    <AtomsIcon v-if="icon" :name="icon" size="20px" />
    {{ isUppercase ? name.toLocaleUpperCase() : capitalize(name) }}
  </NuxtLink>
</template>
