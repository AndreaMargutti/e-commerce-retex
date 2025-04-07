<script setup lang="ts">
const { wishListLength } = useWishlist();
const { cartLength } = useCart();
</script>

<template>
  <TemplatesHeader />
  <AtomsButton label="ciao" type="tertiary" />
</template>
