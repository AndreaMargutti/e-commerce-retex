<script setup lang="ts">
import type { TemplatesHeaderProps } from "./TemplatesHeaderProps.ts";
const props = withDefaults(defineProps<TemplatesHeaderProps>(), {
  size: "normal",
  isTransparent: false,
});

const transparentStyle = computed(() => {
  if (props.isTransparent) {
    return "bg-transparent text-white hover:bg-white hover:text-black";
  } else {
    return "bg-white text-black";
  }
});

const headerSize = computed(() => {
  switch (props.size) {
    case "small":
      return "h-[40px] py-1";
      break;

    default: //normal
      return "h-[76px] py-2";
      break;
  }
});

const headerClass = computed(() => {
  return [transparentStyle.value, headerSize.value];
});

const { headerLinks, init } = useHeaderLinks();
const { wishListLength } = useWishlist();
const { cartLength } = useCart();

await init();

const { isLoggedIn } = useLogin();
</script>

<template>
  <header
    :class="headerClass"
    class="flex justify-between lg:text-end items-center px-4 md:px-8"
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
