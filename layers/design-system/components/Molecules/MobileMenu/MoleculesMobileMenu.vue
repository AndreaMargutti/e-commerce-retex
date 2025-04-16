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
</script>

<template>
  <div class="relative">
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
    <div class="absolute top-0 left-0 right-0" v-if="isSecondLayerOpen">
      <div class="flex items-center px-4 py-2 max-h-[48px]">
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
            class="border-b-1 border-gray-20"
          />
        </li>
        <li v-for="item in secondLayerItems" :key="item.id" class="py-2">
          <AtomsButton type="tertiary" size="large" :label="item.label" />
        </li>
      </ul>
    </div>
  </div>
</template>
