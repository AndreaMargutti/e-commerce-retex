<script setup lang="ts">
const { menuItems, init } = useHeaderLinks();
await init();

const { data: socialData } = await useFetch("/api/mock-data/social");
const footerSocial = socialData.value?.icons || [];
const { data: paymentData } = await useFetch("/api/mock-data/payments");
const footerPaymetns = paymentData.value?.icons || [];
</script>

<template>
  <div>
    <TemplatesHeader :isTransparent="false" size="normal" :links="menuItems" />
    <slot />
    <!--TODO: add footer when done-->
  </div>
</template>
