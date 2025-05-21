<script setup lang="ts">
import { NuxtLink } from "#components";
import type { AtomsIconWrapperProps } from "./AtomsIconWrapperProps";

withDefaults(defineProps<AtomsIconWrapperProps>(), {
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
      <AtomsIcon :name="iconName" />
    </button>
    <NuxtLink v-else to="#">
      <AtomsIcon :name="iconName" />
    </NuxtLink>
    <AtomsBadge
      v-show="badgeSize"
      :items="badgeSize || 0"
      size="large"
      :inverted="false"
      class="absolute top-1.5 left-1.5"
    />
  </span>
</template>
