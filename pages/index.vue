<script setup lang="ts">
const { wishListLength } = useWishlist();
const { cartLength } = useCart();
</script>

<template>
  <TemplatesHeader />
  <AtomsButtons type="tertiary" label="ciao" />
</template>
