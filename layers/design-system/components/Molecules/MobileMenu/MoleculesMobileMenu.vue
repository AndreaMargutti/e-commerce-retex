<script lang="ts" setup>
import type { Menu, MenuItem } from "~/types/MenuItem";
const { data } = await useFetch<Menu>("/api/mock-data/menu");
const menu: MenuItem[] = data.value?.items || [];

function hasItems(item: MenuItem): boolean {
  return item.category !== undefined && item.category.length > 0;
}
const secondLayerItems = ref<MenuItem[] | null>(null);
const parentLabel = ref<string | null>(null);

const { isMenuMobileOpen, isSecondLayerOpen } = useMenuMobile();

const toggleMenu = () => {
  isSecondLayerOpen.value = !isSecondLayerOpen.value;
};

const openSecondLayer = (item: MenuItem) => {
  secondLayerItems.value = item.category || null;
  parentLabel.value = item.label;
  isSecondLayerOpen.value = true;
};

const hasAccordion = (item: MenuItem): boolean => "category" in item;
</script>

<template>
  <div
    class="fixed w-full overflow-y-auto bg-white flex flex-col"
    :class="
      isMenuMobileOpen ? 'top-[76px] h-[calc(100vh-76px)]' : 'top-[-100%]'
    "
  >
    <ul
      v-if="isMenuMobileOpen && !isSecondLayerOpen"
      class="border-y-1 border-gray-20"
    >
      <li
        v-for="item in menu"
        :key="item.id"
        class="min-h-12 flex items-center last:pb-12 font-medium"
      >
        <MoleculesAccordionLink v-if="!item.category">
          <AtomsLink :name="item.label" :href="item.to" text-size="text-base" />
        </MoleculesAccordionLink>
        <AtomsButton
          v-else
          text-size="large"
          type="tertiary"
          :label="item.label"
          :icon-name="item.category ? 'navigation-right' : ''"
          @click="hasItems(item) ? openSecondLayer(item) : null"
        />
      </li>
    </ul>
    <div v-if="!isSecondLayerOpen" class="flex flex-col px-4 min-h-[186px]">
      <AtomsLink
        name="Store Locator"
        href="/store-locator"
        icon="pin"
        text-size="16px"
        class="h-12"
      />
      <AtomsLink
        name="Wishlist"
        href="/wishlist"
        icon="wishlist"
        text-size="16px"
        class="h-12"
      />
    </div>
    <MoleculesMobileMenuDeliveryBanner v-show="!isSecondLayerOpen" />
    <div v-if="isSecondLayerOpen">
      <div
        class="flex items-center px-4 py-2 max-h-[48px] border-y-1 border-gray-20"
      >
        <AtomsIcon :name="'navigation-chevron-right'" class="justify-start" />
        <AtomsButton
          text-size="large"
          type="tertiary"
          :label="parentLabel !== null ? parentLabel.toLocaleUpperCase() : ''"
          class="justify-center grow-1 -translate-x-3"
          @click="toggleMenu"
        />
      </div>
      <ul>
        <li
          v-for="item in secondLayerItems"
          :key="item.id"
          class="min-h-12 font-medium"
        >
          <AtomsLink
            v-if="!hasAccordion(item)"
            text-size="text-base"
            :name="item.label"
            :href="item.to"
            class="py-2 px-4"
          />
          <MoleculesAccordion
            v-else
            :items-received="item.category || []"
            :accordion-label="item.label"
          >
            <AtomsLink
              v-for="accordionItem in item.category"
              :key="accordionItem.id"
              text-size="text-base"
              :name="accordionItem.label"
              :href="accordionItem.to"
              class="py-2 px-4 font-normal"
            />
          </MoleculesAccordion>
        </li>
      </ul>
    </div>
  </div>
</template>
