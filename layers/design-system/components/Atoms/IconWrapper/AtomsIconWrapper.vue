<script setup lang="ts">
import { NuxtLink } from "#components";
import type { AtomsIconWrapperProps } from "./AtomsIconWrapperProps";

const props = withDefaults(defineProps<AtomsIconWrapperProps>(), {
  type: "link",
});

const emit = defineEmits(["handleClick"]);
const emitClick = () => {
  emit("handleClick");
};
</script>

<template>
  <span class="relative">
    <button v-if="type === 'button'" @click="emitClick">
      <slot></slot>
    </button>
    <NuxtLink to="#" v-else>
      <slot></slot>
    </NuxtLink>
    <AtomsBadge
      v-show="badgeSize"
      :items="badgeSize"
      class="absolute top-1.5 left-1.5"
    />
  </span>
</template>
