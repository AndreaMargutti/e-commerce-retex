<script lang="ts" setup>
const { data } = await useFetch<Menu>("/api/mock-data/menu");
const menu: MenuItem[] = data.value?.items || [];
console.log(menu);

function hasItems(item: MenuItem): boolean {
  return item.items !== undefined && item.items.length > 0;
}

const isOpen = ref(false);
const secondLayerItems = ref<MenuItem[] | null>(null);
const parentLabel = ref<string | null>(null);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const openSecondLayer = (item: MenuItem) => {
  secondLayerItems.value = item.items || null;
  parentLabel.value = item.label;
  isOpen.value = true;
};
</script>

<template>
  <div class="relative">
    <ul v-if="!isOpen" class="border-t-1">
      <li v-for="item in menu" :key="item.id">
        <AtomsButton
          size="small"
          type="tertiary"
          :label="item.label"
          :icon="{ hasIcon: hasItems(item), iconName: 'navigation-right' }"
          @click="hasItems(item) ? openSecondLayer(item) : null"
        />
      </li>
    </ul>
    <div class="absolute top-0 left-0" v-if="isOpen">
      <div
        @click="toggleMenu"
        class="text-center border-b-gray-20 border-b-1 uppercase"
      >
        {{ parentLabel }}
      </div>
      <ul>
        <li>Vedi tutti {{ parentLabel }}</li>
        <li v-for="item in secondLayerItems" :key="item.id">
          <AtomsButton type="tertiary" size="small" :label="item.label" />
        </li>
      </ul>
    </div>
  </div>
</template>
