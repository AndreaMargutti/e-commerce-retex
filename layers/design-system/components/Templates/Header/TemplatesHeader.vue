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

const { wishListLength } = useWishlist();
const { cartLength } = useCart();

const { isLoggedIn } = useLogin();
console.log(props.links);
</script>

<template>
  <header
    :class="headerClass"
    class="flex justify-between lg:text-end items-center px-4 md:px-8"
  >
    <div class="lg:space-x-4 lg:px-4 lg:order-2 lg:grow">
      <span class="mr-6 lg:hidden">
        <AtomsTooltipWrapper label="Menu">
          <AtomsIconWrapper type="button" icon-name="menu" />
        </AtomsTooltipWrapper>
      </span>
      <span class="hidden lg:inline">
        <AtomsTooltipWrapper label="Search" direction="up">
          <AtomsIconWrapper
            type="button"
            tooltip-label="Search"
            icon-name="search"
          />
        </AtomsTooltipWrapper>
      </span>
      <span>
        <AtomsTooltipWrapper label="Account">
          <AtomsIconWrapper
            type="link"
            :icon-name="isLoggedIn ? 'logged' : 'account'"
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
        :key="link.value"
        :name="
          typeof link.label === 'string'
            ? link.label.toLocaleUpperCase()
            : link.label
        "
        :href="link.href"
      />
    </div>

    <div class="space-x-4 lg:order-3">
      <span class="lg:hidden">
        <AtomsTooltipWrapper label="Search">
          <AtomsIconWrapper type="button" icon-name="search" />
        </AtomsTooltipWrapper>
      </span>
      <span class="space-x-4 max-lg:hidden relative">
        <AtomsTooltipWrapper label="Store Locator">
          <AtomsIconWrapper type="link" icon-name="pin" />
        </AtomsTooltipWrapper>
        <AtomsTooltipWrapper label="Wishlist">
          <AtomsIconWrapper
            type="link"
            :badge-size="wishListLength"
            icon-name="wishlist"
          />
        </AtomsTooltipWrapper>
      </span>
      <span class="text-center relative">
        <AtomsTooltipWrapper label="Cart">
          <AtomsIconWrapper
            type="link"
            :badge-size="cartLength"
            icon-name="cart"
          />
        </AtomsTooltipWrapper>
      </span>
    </div>
  </header>
</template>
