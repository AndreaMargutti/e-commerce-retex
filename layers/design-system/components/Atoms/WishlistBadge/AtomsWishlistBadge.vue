<script setup lang="ts">
import type { AtomsWishlistBadgeProps } from "./AtomsWishlistBadgeProps";
const props = defineProps<AtomsWishlistBadgeProps>();

const wishListLabel = computed(() => {
  return props.wishListItems.length > 99 ? `99+` : props.wishListItems.length;
});

const wishlistVisibility = computed(() => {
  return props.wishListItems.length > 0 ? "block" : "hidden";
});

const wishListSize = computed(() => {
  if (props.wishListItems.length < 99) {
    return "size-5 text-sm text-white";
  } else {
    return "size-4 text-[7px] text-white";
  }
});

// TODO: Add a prop to change the color of the badge

const wishListClasses = computed(() => {
  return [wishlistVisibility.value, wishListSize.value];
});
</script>

<template>
  <div
    :class="wishListClasses"
    class="bg-black-base py-0.5 px-1 rounded-full flex items-center justify-center"
  >
    <p>{{ wishListLabel }}</p>
  </div>
</template>
