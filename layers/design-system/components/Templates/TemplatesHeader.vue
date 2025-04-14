<script setup lang="ts">
const { headerLinks, init } = useHeaderLinks();
const { wishListLength } = useWishlist();
const { cartLength } = useCart();

await init();

const { isLoggedIn } = useLogin();
</script>

<template>
  <header
    class="hover:bg-white hover:text-black text-white flex justify-between lg:text-end items-center py-2 px-4 md:px-8 h-[76px]"
  >
    <div class="lg:space-x-4 lg:px-4 lg:order-2 lg:grow">
      <span class="mr-6 lg:hidden">
        <AtomsIconWrapper type="button" tooltipLabel="Menu">
          <AtomsIcon name="menu" class="hidden" />
          <AtomsTooltipWrapper label="menu" />
        </AtomsIconWrapper>
      </span>
      <span class="hidden lg:inline">
        <AtomsIconWrapper type="button" tooltipLabel="Search">
          <AtomsIcon name="search" />
          <AtomsTooltipWrapper label="Search" />
        </AtomsIconWrapper>
      </span>
      <span>
        <AtomsIconWrapper type="link" tooltipLabel="Account">
          <AtomsIcon name="account" v-if="!isLoggedIn" />
          <AtomsIcon name="logged" v-else />
          <AtomsTooltipWrapper label="Account" />
        </AtomsIconWrapper>
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

    <div class="space-x-4 lg:order-3">
      <span class="lg:hidden">
        <AtomsIconWrapper type="button" tooltipLabel="Search">
          <AtomsIcon name="search" />
          <AtomsTooltipWrapper label="Search" />
        </AtomsIconWrapper>
      </span>
      <span class="space-x-4 max-lg:hidden relative">
        <AtomsIconWrapper type="link" tooltipLabel="Store Locator">
          <AtomsIcon name="pin" />
          <AtomsTooltipWrapper label="Store Locator" />
        </AtomsIconWrapper>
        <AtomsIconWrapper type="link" :badgeSize="wishlistLength" class="group">
          <AtomsIcon name="wishlist" />
          <AtomsTooltipWrapper label="WishList" />
        </AtomsIconWrapper>
      </span>
      <span class="text-center relative">
        <AtomsIconWrapper
          type="link"
          :badgeSize="cartLength"
          tooltipLabel="Cart"
        >
          <AtomsIcon name="cart" />
          <AtomsTooltipWrapper label="Cart" />
        </AtomsIconWrapper>
      </span>
    </div>
  </header>
</template>
