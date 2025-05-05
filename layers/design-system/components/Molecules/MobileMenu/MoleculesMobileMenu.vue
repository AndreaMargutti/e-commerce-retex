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
      <li v-for="item in menu" :key="item.id" class="last:pb-[3rem]">
        <AtomsButton
          textSize="large"
          type="tertiary"
          :label="item.label"
          :iconName="item.category ? 'navigation-right' : ''"
          @click="hasItems(item) ? openSecondLayer(item) : null"
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
        variant="accordion"
        linkIcon="pin"
        class="h-12"
      />
      <AtomsLink
        name="Wishlist"
        href="/wishlist"
        variant="accordion"
        linkIcon="wishlist"
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
        <li v-for="item in secondLayerItems" :key="item.id">
          <AtomsButton
            type="tertiary"
            textSize="large"
            :label="item.label"
            v-if="!hasAccordion(item)"
            class="py-2"
          />
          <MoleculesAccordion
            :itemsReceived="item.category || []"
            :accordionLabel="item.label"
            v-else
          >
            <MoleculesAccordionContent>
              <AtomsButton
                type="tertiary"
                textSize="large"
                :label="accordionItem.label"
                v-for="accordionItem in item.category"
              />
            </MoleculesAccordionContent>
          </MoleculesAccordion>
        </li>
      </ul>
    </div>
  </div>
</template>
