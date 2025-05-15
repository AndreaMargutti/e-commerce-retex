<script lang="ts" setup>
const { data: socialData } = await useFetch("/api/mock-data/social");
const footerSocial = socialData.value?.icons || [];

const { data: paymentData } = await useFetch("/api/mock-data/payments");
const footerPaymetns = paymentData.value?.icons || [];

const { data: footerListData } = await useFetch("/api/mock-data/footerlist");
const footerList = footerListData.value || [];
</script>

<template>
  <div class="bg-gray-25">
    <div class="min-h-[331px] px-4 md:pt-16 lg:gap-8">
      <MoleculesNewsLetterForm />

      <div class="py-10">
        <MoleculesFooterList
          title="Our Socials"
          :icons="footerSocial"
          type="social"
        />
      </div>
    </div>

    <!-- inizio accordion -->
    <div class="lg:flex justify-evenly flex-1/3">
      <div v-for="footer in footerList.data" :key="footer.id">
        <MoleculesAccordion :accordionLabel="footer.label">
          <AtomsLink
            v-for="item in footer.items"
            :key="item.id"
            :name="item.label"
            :href="item.to"
            class="px-4"
          />
        </MoleculesAccordion>
      </div>
    </div>

    <MoleculesFooterList
      title="Payments Methods"
      :icons="footerPaymetns"
      type="payments"
      class="border-t-1 border-gray-75"
    />
  </div>
</template>
