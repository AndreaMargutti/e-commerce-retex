<script lang="ts" setup>
import type { MolecularMobileMenuProps } from "./MoleculesMobileMenuProps";
defineProps<MolecularMobileMenuProps>();

const { data } = await useFetch<Menu>("/api/mock-data/menu");
const menu: MenuItem[] = data.value?.items || [];

function hasItems(item: MenuItem): boolean {
  return item.items !== undefined && item.items.length > 0;
}
const isSecondLayerOpen = ref(false);
const secondLayerItems = ref<MenuItem[] | null>(null);
const parentLabel = ref<string | null>(null);

const toggleMenu = () => {
  isSecondLayerOpen.value = !isSecondLayerOpen.value;
};

const openSecondLayer = (item: MenuItem) => {
  secondLayerItems.value = item.items || null;
  parentLabel.value = item.label;
  isSecondLayerOpen.value = true;
};

const hasAccordion = (item: MenuItem): boolean => {
  if (!item.hasOwnProperty("items")) {
    return false;
  } else {
    return true;
  }
};
</script>

<template>
  <div
    class="fixed w-full overflow-y-auto bg-white"
    :class="statusMenu ? 'top-[76px] h-[calc(100vh-76px)]' : 'top-[-100%]'"
  >
    <ul
      v-if="statusMenu && !isSecondLayerOpen"
      class="border-t-1 border-gray-20"
    >
      <li v-for="item in menu" :key="item.id">
        <AtomsButton
          size="large"
          type="tertiary"
          :label="item.label"
          :icon="{ hasIcon: hasItems(item), iconName: 'navigation-right' }"
          @click="hasItems(item) ? openSecondLayer(item) : null"
        />
      </li>
    </ul>
    <div v-if="isSecondLayerOpen">
      <div
        class="flex items-center px-4 py-2 max-h-[48px] border-y-1 border-gray-20"
      >
        <AtomsIcon :name="'navigation-chevron-right'" class="justify-start" />
        <AtomsButton
          size="large"
          type="tertiary"
          :label="parentLabel !== null ? parentLabel.toLocaleUpperCase() : ''"
          @click="toggleMenu"
          class="justify-center grow-1 -translate-x-3"
        />
      </div>
      <ul>
        <li>
          <AtomsButton
            :label="`Vedi tutti ${parentLabel}`"
            type="tertiary"
            size="large"
          />
        </li>
        <li v-for="item in secondLayerItems" :key="item.id">
          <AtomsButton
            type="tertiary"
            size="large"
            :label="item.label"
            v-if="!hasAccordion(item)"
            class="py-2"
          />
          <MoleculesAccordion
            :itemsReceived="item.items || []"
            :accordionLabel="item.label"
            v-else
          >
            <MoleculesAccordionContent>
              <AtomsButton
                type="tertiary"
                size="large"
                :label="accordionItem.label"
                v-for="accordionItem in item.items"
              />
            </MoleculesAccordionContent>
          </MoleculesAccordion>
        </li>
      </ul>
    </div>
  </div>
</template>
