<script setup lang="ts">
const { wishListNumber } = useWishlist();
</script>

<template>
  <TemplatesHeader />
  <AtomsWishlistBadge :wishListItems="wishListNumber" />
</template>
