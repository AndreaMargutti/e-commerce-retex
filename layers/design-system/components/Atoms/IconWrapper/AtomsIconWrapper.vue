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
  <span :class="{ relative: type === 'link' }">
    <button v-if="type === 'button'" @click="emitClick">
      <AtomsIcon
        :name="iconName"
        :style="{ width: `${iconSize}px`, height: `${iconSize}px` }"
      />
    </button>
    <NuxtLink v-else to="#">
      <AtomsIcon :name="iconName" />
    </NuxtLink>
    <AtomsBadge
      v-show="badgeSize"
      :items="badgeSize || 0"
      class="absolute top-1.5 left-1.5"
    />
  </span>
</template>
