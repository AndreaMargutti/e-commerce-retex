<script lang="ts" setup>
import type { MolecularMobileMenuProps } from "./MoleculesMobileMenuProps";
defineProps<MolecularMobileMenuProps>();

const { data } = await useFetch<Menu>("/api/mock-data/menu");
const menu: MenuItem[] = data.value?.items || [];

function hasItems(item: MenuItem): boolean {
  return item.category !== undefined && item.category.length > 0;
}
const isSecondLayerOpen = ref(false);
const secondLayerItems = ref<MenuItem[] | null>(null);
const parentLabel = ref<string | null>(null);

const toggleMenu = () => {
  isSecondLayerOpen.value = !isSecondLayerOpen.value;
};

const openSecondLayer = (item: MenuItem) => {
  secondLayerItems.value = item.category || null;
  parentLabel.value = item.label;
  isSecondLayerOpen.value = true;
};

const hasAccordion = (item: MenuItem): boolean =>
  item.hasOwnProperty("category");
</script>

<template>
  <div
    class="fixed w-full overflow-y-auto bg-white flex flex-col"
    :class="statusMenu ? 'top-[76px] h-[calc(100vh-76px)]' : 'top-[-100%]'"
  >
    <ul
      v-if="statusMenu && !isSecondLayerOpen"
      class="border-y-1 border-gray-20"
    >
      <li v-for="item in menu" :key="item.id" class="min-h-12 last:pb-12">
        <MoleculesAccordionLink v-if="!item.category">
          <AtomsLink :name="item.label" :href="item.to" text-size="text-base" />
        </MoleculesAccordionLink>
        <AtomsButton
          textSize="large"
          type="tertiary"
          :label="item.label"
          :iconName="item.category ? 'navigation-right' : ''"
          @click="hasItems(item) ? openSecondLayer(item) : null"
          v-else
        />
      </li>
    </ul>
    <div
      class="flex flex-col gap-2 px-4 py-2 min-h-[186px]"
      v-if="!isSecondLayerOpen"
    >
      <AtomsLink
        name="Store Locator"
        href="/store-locator"
        icon="pin"
        class="h-12"
      />
      <AtomsLink
        name="Wishlist"
        href="/wishlist"
        icon="wishlist"
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
          textSize="large"
          type="tertiary"
          :label="parentLabel !== null ? parentLabel.toLocaleUpperCase() : ''"
          @click="toggleMenu"
          class="justify-center grow-1 -translate-x-3"
        />
      </div>
      <ul>
        <li v-for="item in secondLayerItems" :key="item.id" class="min-h-12">
          <AtomsLink
            v-if="!hasAccordion(item)"
            textSize="text-base"
            :name="item.label"
            :href="item.to"
            class="py-2 px-4"
          />
          <MoleculesAccordion
            v-else
            :itemsReceived="item.category || []"
            :accordionLabel="item.label"
          >
            <AtomsLink
              v-for="accordionItem in item.category"
              :key="accordionItem.id"
              textSize="text-base"
              :name="accordionItem.label"
              :href="accordionItem.to"
              class="py-2 px-4"
            />
          </MoleculesAccordion>
        </li>
      </ul>
    </div>
  </div>
</template>
