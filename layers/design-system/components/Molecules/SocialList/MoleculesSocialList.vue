<script lang="ts" setup>
const { data } = await useFetch("/api/mock-data/social");
const socials = data.value?.socials;
</script>

<template>
  <h5 class="font-medium text-xs mb-10">{{ "Social".toLocaleUpperCase() }}</h5>
  <div class="*:mr-6">
    <AtomsIconWrapper
      v-for="{ id, href, label, icon } in socials"
      :key="id"
      type="link"
      :iconName="icon"
      :href="href"
    />
  </div>
</template>
