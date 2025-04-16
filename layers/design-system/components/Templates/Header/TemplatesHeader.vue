<script setup lang="ts">
import type headerlinks from "~/server/api/mock-data/headerlinks.js";
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

const { wishListLength } = useWishlist();
const { cartLength } = useCart();
const { isLoggedIn } = useLogin();

const isMenuMobileOpen = ref(false);
const toggleMenuMobile = () => {
  isMenuMobileOpen.value = !isMenuMobileOpen.value;
};
</script>

<template>
  <header
    :class="headerClass"
    class="flex justify-between lg:text-end items-center px-4 md:px-8"
  >
    <div class="lg:space-x-4 lg:px-4 lg:order-2 lg:grow">
      <span class="mr-6 lg:hidden">
        <AtomsTooltipWrapper label="Menu">
          <AtomsIconWrapper
            type="button"
            iconName="menu"
            @handleClick="toggleMenuMobile"
          />
        </AtomsTooltipWrapper>
      </span>
      <span class="hidden lg:inline">
        <AtomsTooltipWrapper label="Search" direction="up">
          <AtomsIconWrapper
            type="button"
            tooltipLabel="Search"
            iconName="search"
          />
        </AtomsTooltipWrapper>
      </span>
      <span>
        <AtomsTooltipWrapper label="Account">
          <AtomsIconWrapper
            type="link"
            :iconName="isLoggedIn ? 'logged' : 'account'"
          >
          </AtomsIconWrapper>
        </AtomsTooltipWrapper>
      </span>
    </div>

    <div class="pr-4 lg:pr-10 min-xl :pr-10">
      <AtomsLogoDefault />
    </div>

    <div class="hidden lg:flex grow gap-4 flex-1/2 flex-wrap xl:gap-10">
      <AtomsLink
        v-for="link in links"
        :name="
          typeof link.label === 'string'
            ? link.label.toLocaleUpperCase()
            : link.label
        "
        :href="link.href"
        :key="link.value"
      />
    </div>

    <div class="space-x-4 lg:order-3">
      <span class="lg:hidden">
        <AtomsTooltipWrapper label="Search">
          <AtomsIconWrapper type="button" iconName="search" />
        </AtomsTooltipWrapper>
      </span>
      <span class="space-x-4 max-lg:hidden relative">
        <AtomsTooltipWrapper label="Store Locator">
          <AtomsIconWrapper type="link" iconName="pin" />
        </AtomsTooltipWrapper>
        <AtomsTooltipWrapper label="Wishlist">
          <AtomsIconWrapper
            type="link"
            :badgeSize="wishListLength"
            iconName="wishlist"
          />
        </AtomsTooltipWrapper>
      </span>
      <span class="text-center relative">
        <AtomsTooltipWrapper label="Cart">
          <AtomsIconWrapper
            type="link"
            :badgeSize="cartLength"
            iconName="cart"
          />
        </AtomsTooltipWrapper>
      </span>
    </div>
  </header>
  <MoleculesMobileMenu :statusMenu="isMenuMobileOpen" />
</template>
