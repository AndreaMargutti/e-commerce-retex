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
    <div class="min-h-[331px] px-4 md:pt-16 lg:flex lg:gap-8 lg:px-8">
      <MoleculesNewsLetterForm />

      <div class="py-10 lg:py-0 lg:min-w-fit">
        <MoleculesFooterList
          title="Our Socials"
          :icons="footerSocial"
          type="social"
        />
      </div>
    </div>

    <!-- inizio accordion -->
    <section class="lg:flex lg:flex-wrap gap-8 lg:px-8">
      <div v-for="footer in footerList.data" :key="footer.id" class="flex-1/4">
        <MoleculesAccordion
          :accordionLabel="footer.label"
          accordionType="footer"
        >
          <AtomsLink
            v-for="item in footer.items"
            :key="item.id"
            :name="item.label"
            :href="item.to"
            class="px-4 py-2 lg:px-8 lg:pb-8 flex-1/2"
          />
        </MoleculesAccordion>
      </div>
    </section>

    <MoleculesFooterList
      title="Payments Methods"
      :icons="footerPaymetns"
      type="payments"
      class="border-t-1 border-gray-75"
    />
  </div>
</template>
