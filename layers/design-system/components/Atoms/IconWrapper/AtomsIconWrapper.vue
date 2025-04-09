<script setup lang="ts">
import { NuxtLink } from "#components";
import type { AtomsIconWrapperProps } from "./AtomsIconWrapperProps";

const props = withDefaults(defineProps<AtomsIconWrapperProps>(), {
  type: "link",
});

const { cartLength } = useCart();
const { wishListLength } = useWishlist();

const badgeType = computed(() => {
  if (props.badge === "cart") {
    return cartLength.value;
  } else if (props.badge === "wishlist") {
    return wishListLength.value;
  } else {
    return 0;
  }
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
    <NuxtLink to="#" v-else-if="type === 'link'">
      <slot></slot>
    </NuxtLink>
    <AtomsBadge :items="badgeType" class="absolute top-1.5 left-1.5" />
  </span>
</template>
