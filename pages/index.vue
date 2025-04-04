<script setup lang="ts">
const { wishListLength } = useWishlist();
const { cartLength } = useCart();
</script>

<template>
  <TemplatesHeader />
  <AtomsTooltip label="sono un tooltip" />
</template>
