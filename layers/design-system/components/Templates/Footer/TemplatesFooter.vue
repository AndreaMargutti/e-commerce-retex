<script lang="ts" setup>
const { data: socialData } = await useFetch("/api/mock-data/social");
const footerSocial = socialData.value?.icons || [];

const { data: paymentData } = await useFetch("/api/mock-data/payments");
const footerPaymetns = paymentData.value?.icons || [];

const { data: footerDeliveryData } = await useFetch("/api/mock-data/delivery");
const footerDelivery = footerDeliveryData.value?.icons || [];
console.log(footerDelivery);

const { data: footerListData } = await useFetch("/api/mock-data/footerlist");
const footerList = footerListData.value || [];
</script>

<template>
  <div class="bg-gray-25">
    <div class="min-h-[331px] px-4 md:pt-16 lg:flex lg:gap-8 lg:px-8">
      <MoleculesNewsLetterForm
        title="Iscrivi alla Newsletter"
        class="basis-2/3"
      />

      <div class="py-10 lg:py-0 lg:min-w-fit">
        <MoleculesFooterList
          :title="$t('OurSocials')"
          :icons="footerSocial"
          type="social"
        />
      </div>
    </div>

    <section class="lg:flex lg:flex-wrap gap-8 lg:px-8">
      <div
        v-for="footer in footerList.data || []"
        :key="footer.id"
        class="flex-1/4 border-b-1 border-gray-75 last:border-0 lg:border-0"
      >
        <MoleculesAccordion
          :accordion-label="footer.label"
          accordion-type="footer"
          :items-received="footer.items"
        >
          <AtomsLink
            v-for="item in footer.items"
            :key="item.id"
            :name="item.label"
            :href="item.to"
            class="px-4 pb-4 lg:pl-8 lg:pb-6 flex-1/2 leading-[15px]"
          />
        </MoleculesAccordion>
      </div>
    </section>

    <MoleculesFooterList
      :title="$t('PaymentMethods')"
      :icons="footerPaymetns"
      type="payments"
    />
  </div>
</template>
