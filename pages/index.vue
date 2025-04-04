<script setup lang="ts">
const { wishListLength } = useWishlist();
const { cartLength } = useCart();
</script>

<template>
  <TemplatesHeader />
  <AtomsWishlistBadge :items="wishListLength" />
  <AtomsWishlistBadge :items="cartLength" />
</template>
