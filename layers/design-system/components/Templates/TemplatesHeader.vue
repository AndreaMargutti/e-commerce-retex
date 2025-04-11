<script setup lang="ts">
const { headerLinks, init } = useHeaderLinks();
const { wishListLength } = useWishlist();
const { cartLength } = useCart();

await init();

const { isLoggedIn } = useLogin();
// TODO: Add logic to change background color
</script>

<template>
  <header
    class="bg-white flex justify-between lg:text-end items-center py-2 px-4 md:px-8 h-[76px]"
  >
    <div class="lg:space-x-4 px-4 lg:order-2 lg:grow">
      <span class="mr-6 lg:hidden">
        <AtomsIcon name="menu" class="hidden" />
      </span>
      <span class="hidden lg:inline">
        <AtomsIconWrapper type="button">
          <AtomsIcon name="search" />
        </AtomsIconWrapper>
      </span>
      <span>
        <AtomsIcon name="account" v-if="!isLoggedIn" />
        <AtomsIcon name="logged" v-else />
      </span>
    </div>

    <div class="pr-4 lg:pr-10 min-xl :pr-10">
      <AtomsLogoDefault />
    </div>

    <div class="hidden lg:flex grow gap-4 flex-1/2 flex-wrap xl:gap-10">
      <AtomsLink
        v-for="{ value, label, href } in headerLinks"
        :name="typeof label === 'string' ? label.toLocaleUpperCase() : label"
        :href="href"
        :key="value"
      />
    </div>

    <div class="space-x-6 lg:order-3">
      <span class="lg:hidden">
        <AtomsIcon name="search" />
      </span>
      <span class="max-lg:hidden relative">
        <AtomsIconWrapper type="link">
          <AtomsIcon name="pin" class="mr-4" />
        </AtomsIconWrapper>
        <AtomsIconWrapper type="link" :badgeSize="wishlistLength">
          <AtomsIcon name="wishlist" />
        </AtomsIconWrapper>
      </span>
      <span class="text-center relative">
        <AtomsIconWrapper type="link">
          <AtomsIcon name="cart" />
        </AtomsIconWrapper>
      </span>
    </div>
  </header>
</template>
