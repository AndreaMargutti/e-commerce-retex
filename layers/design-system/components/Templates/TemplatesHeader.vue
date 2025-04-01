<script setup lang="ts">
const { headerLinks, init } = useHeaderLinks();

onMounted(() => {
  init();
});

const isLogged = ref(false);
</script>

<template>
  <header
    class="flex max-lg:justify-between lg:text-end items-center py-2 px-4 md:px-8"
  >
    <div class="space-x-6 lg:space-x-4 px-4 lg:order-2 lg:grow">
      <span class="lg:hidden">
        <AtomsIcon name="menu" class="hidden" />
      </span>
      <div>
        <AtomsIcon name="account" v-if="!isLogged" />
        <AtomsIcon name="logged" v-else />
      </div>
    </div>

    <div class="lg:pr-4 min-[1440px]:pr-10">
      <AtomsLogoDefault />
    </div>

    <div class="hidden lg:flex grow gap-4 min-[1440px]:gap-10">
      <AtomsLink
        v-for="{ id, label, href } in headerLinks"
        :name="label.toLocaleUpperCase()"
        :href="href"
        :key="id"
      />
    </div>

    <div class="space-x-6 lg:space-x-4 lg:order-3 lg:relative">
      <span class="search-icon">
        <AtomsIcon name="search" />
      </span>
      <span class="max-lg:hidden space-x-4">
        <AtomsIcon name="pin" />
        <AtomsIcon name="wishlist" />
      </span>
      <AtomsIcon name="cart" />
    </div>
  </header>
</template>

<style scoped>
@media screen and (min-width: 1024px) {
  .search-icon {
    position: absolute;
    left: calc(-100% + 16px);
  }
}
</style>
