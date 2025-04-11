<script lang="ts" setup>
const { data } = useFetch("/api/menu");
const menu = data.value?.items;
console.log(menu);

function hasItems(item: MenuItem): boolean {
  return item.items !== undefined && item.items.length > 0;
}

const isOpen = ref(false);
const secondLayerItems = ref<MenuItem[] | null>(null);

const toggleMenu = () => {
  console.log("open menu");
  isOpen.value = !isOpen.value;
};

const openSecondLayer = (item: MenuItem) => {
  if (hasItems(item)) {
    secondLayerItems.value = item.items;
    isOpen.value = true;
  }
};
</script>

<template>
  <div class="relative">
    <ul v-if="!isOpen">
      <li v-for="item in menu" :key="item.id">
        <AtomsButton
          :label="item.label"
          :icon="{ hasIcon: hasItems(item), iconName: 'navigation-right' }"
          @click="hasItems(item) ? openSecondLayer(item) : null"
        />
      </li>
    </ul>
    <div class="absolute top-0 left-0" v-if="isOpen">
      <div @click="toggleMenu">Torna Indietro</div>
      <ul>
        <li v-for="item in secondLayerItems" :key="item.id">
          <AtomsButton :label="item.label" />
        </li>
      </ul>
    </div>
  </div>
</template>
