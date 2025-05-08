<script lang="ts" setup>
const { data: socialData } = await useFetch("/api/mock-data/social");
const footerSocial = socialData.value?.icons || [];

const { data: paymentData } = await useFetch("/api/mock-data/payments");
const footerPaymetns = paymentData.value?.icons || [];
</script>

<template>
  <MoleculesNewsLetterForm formMethod="POST" news-letter-text="email-inviata" />
</template>
