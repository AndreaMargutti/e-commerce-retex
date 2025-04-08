<script setup lang="ts">
const { headerLinks, init } = useHeaderLinks();
const { wishListLength } = useWishlist();
const { cartLength } = useCart();

onServerPrefetch(() => {
  init();
});

const isLogged = ref(false);
// TODO: Add logic to change background color
</script>

<template>
  <header
    class="bg-white flex justify-between lg:text-end items-center py-2 px-4 md:px-8"
  >
    <div class="lg:space-x-4 px-4 lg:order-2 lg:grow">
      <span class="mr-6 lg:hidden">
        <AtomsIconWrapper type="button">
          <AtomsIcon name="menu" class="hidden" />
        </AtomsIconWrapper>
      </span>
      <span>
        <AtomsIconWrapper type="link">
          <AtomsIcon name="account" v-if="!isLogged" />
          <AtomsIcon name="logged" v-else />
        </AtomsIconWrapper>
      </span>
    </div>

    <div class="lg:pr-4 min-xl :pr-10">
      <AtomsLogoDefault />
    </div>

    <div class="hidden lg:flex grow gap-4 xl:gap-10">
      <AtomsLink
        v-for="{ id, label, href } in headerLinks"
        :name="label.toLocaleUpperCase()"
        :href="href"
        :key="id"
      />
    </div>

    <div class="space-x-6 lg:order-3 lg:relative">
      <span class="search-icon">
        <AtomsIconWrapper type="button">
          <AtomsIcon name="search" />
        </AtomsIconWrapper>
      </span>
      <span class="max-lg:hidden relative">
        <AtomsIconWrapper type="link">
          <AtomsIcon name="pin" class="mr-4" />
        </AtomsIconWrapper>
        <AtomsIconWrapper type="link">
          <AtomsIcon name="wishlist" />
        </AtomsIconWrapper>
        <AtomsBadge :items="wishListLength" class="absolute top-1.5 left-10" />
      </span>
      <span class="text-center relative">
        <AtomsIconWrapper type="link">
          <AtomsIcon name="cart" />
        </AtomsIconWrapper>
        <AtomsBadge :items="cartLength" class="absolute top-1.5 left-1.5" />
      </span>
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
