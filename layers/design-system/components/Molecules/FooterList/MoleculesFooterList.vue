<script lang="ts" setup>
import type { MoleculesFooterListProps } from "./MoleculesFooterListProps";

const props = defineProps<MoleculesFooterListProps>();

const paymentClasses = computed((): string => {
  let classes = "";
  switch (props.type) {
    case "payments":
      classes =
        "block text-center md:flex items-center bg-gray-200 h-[4.5rem] justify-center pt-6 md:pt-0";
  }
  return classes;
});
</script>

<template>
  <div :class="paymentClasses">
    <h5
      class="font-medium text-xs"
      :class="type === 'social' ? 'mb-10' : 'mr-4 block md:inline'"
    >
      <!--aggiungere mb-10 per type social-->
      {{ title.toLocaleUpperCase() }}
    </h5>
    <div class="*:mr-6">
      <AtomsIconWrapper
        v-for="{ id, href, label, icon } in icons"
        :key="id"
        type="link"
        :iconName="type === 'social' ? icon : `${icon}-off`"
        :href="href"
      />
    </div>
  </div>
</template>
