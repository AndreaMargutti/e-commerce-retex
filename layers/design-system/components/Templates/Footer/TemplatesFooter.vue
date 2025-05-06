<script lang="ts" setup>
const { data: socialData } = await useFetch("/api/mock-data/social");
const footerSocial = socialData.value?.icons || [];

const { data: paymentData } = await useFetch("/api/mock-data/payments");
const footerPaymetns = paymentData.value?.icons || [];
</script>

<template>
  <MoleculesFooterList title="Socials" type="social" :icons="footerSocial" />
  <MoleculesFooterList
    title="Payments Method"
    type="payments"
    :icons="footerPaymetns"
  />
  <AtomsButton type="primary" label="BUTTON" text-size="small" />
  <AtomsInputField label="Ciao" type="text" />
</template>
