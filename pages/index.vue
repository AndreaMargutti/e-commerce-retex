<script setup lang="ts">
const { wishListLength } = useWishlist();
const { cartLength } = useCart();
</script>

<template>
  <TemplatesHeader />
  <AtomsIconWrapper type="button" />
</template>
