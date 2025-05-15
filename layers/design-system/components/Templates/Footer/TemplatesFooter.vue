<script lang="ts" setup>
const { data: socialData } = await useFetch("/api/mock-data/social");
const footerSocial = socialData.value?.icons || [];

const { data: paymentData } = await useFetch("/api/mock-data/payments");
const footerPaymetns = paymentData.value?.icons || [];

const { data: footerListData } = await useFetch("/api/mock-data/footerlist");
const footerList = footerListData.value || [];
</script>

<template>
  <div v-for="footer in footerList.data">
    <MoleculesAccordion :accordionLabel="footer.label">
      <AtomsLink
        v-for="item in footer.items"
        :key="item.id"
        :name="item.label"
        :href="item.to"
        class="py-2 px-4"
      />
    </MoleculesAccordion>
  </div>
</template>
