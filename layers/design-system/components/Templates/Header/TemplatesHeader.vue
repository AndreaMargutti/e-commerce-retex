<script setup lang="ts">
import type { TemplatesHeaderProps } from "./TemplatesHeaderProps.ts";

const props = withDefaults(defineProps<TemplatesHeaderProps>(), {
  size: "normal",
  isTransparent: true,
});

const isTransparentLocal = ref(props.isTransparent);

watch(
  () => props.isTransparent,
  (val) => {
    isTransparentLocal.value = val;
  },
);

const transparentStyle = computed(() => {
  if (isTransparentLocal.value) {
    return "bg-transparent text-white hover:bg-white hover:text-black";
  } else {
    return "bg-white text-black";
  }
});

const headerSize = computed(() => {
  switch (props.size) {
    case "small":
      return "h-[40px] py-1";
    default: //normal
      return "h-[76px] py-2";
  }
});

const headerClass = computed(() => {
  return [transparentStyle.value, headerSize.value];
});

const { wishListLength } = useWishlist();
const { cartLength } = useCart();
const { isLoggedIn } = useLogin();

const { isMenuMobileOpen, toggleMenuMobile } = useMenuMobile();

watch(
  () => isMenuMobileOpen.value,
  (open) => {
    if (open) {
      isTransparentLocal.value = false;
    } else {
      isTransparentLocal.value = props.isTransparent;
    }
  },
);
</script>

<template>
  <header
    :class="headerClass"
    class="flex justify-between lg:text-end items-center px-4 md:px-8 fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  >
    <div class="lg:space-x-4 lg:px-4 lg:order-2 lg:grow">
      <span class="mr-6 lg:hidden">
        <AtomsTooltipWrapper label="Menu">
          <AtomsIconWrapper
            v-if="!isMenuMobileOpen"
            type="button"
            icon-name="menu"
            @handle-click="toggleMenuMobile"
          />
          <AtomsIconWrapper
            v-else
            type="button"
            icon-name="close"
            @handle-click="toggleMenuMobile"
          />
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
      <div
        v-for="link in links"
        :key="link.id"
        class="group relative after:content-[''] after:p-0 after:absolute after:-z-10 after:-inset-[5px] after:pb-15"
      >
        <AtomsLink
          :key="link.id"
          :name="link.label"
          :href="link.to"
          :is-uppercase="true"
          icon-position="left"
        />
        <MoleculesDesktopMenu
          v-if="link.category"
          :items="link.category"
          class="hidden group-hover:flex"
        />
      </div>
    </div>

    <div class="space-x-6 lg:space-x-4 lg:order-3">
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
  <MoleculesMobileMenu :status-menu="isMenuMobileOpen" class="lg:hidden" />
</template>
