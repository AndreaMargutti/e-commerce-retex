<script lang="ts" setup>
const { data } = useFetch("/api/menu");
const menu = data.value?.items;
console.log(menu);

function menuItems(menu: MenuItem) {
  if (menu.items !== undefined && menu.items.length > 0) {
    console.log(menu.items);
    return menu.items;
  }
}

function hasItems(item: MenuItem): boolean {
  return item.items !== undefined && item.items.length > 0;
}

const isOpen = ref(false);

const openMenu = () => {
  console.log("open menu");
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="relative">
    <ul v-if="!isOpen">
      <li v-for="item in menu">
        <AtomsButton
          :label="item.label"
          :icon="{ hasIcon: hasItems(item), iconName: 'navigation-right' }"
          @click="openMenu"
        />
      </li>
    </ul>
    <!--TODO: finire secondo livello del menu-->
    <div class="absolute top-0 left-0" v-if="isOpen">
      <div @click="openMenu">Torna Indietro</div>
      <ul>
        <li v-for="item in menuItems(menu)"></li>
      </ul>
    </div>
  </div>
</template>
