<script lang="ts" setup>
const { data } = useFetch("/api/menu");
const menu = data.value?.items;
console.log(menu);

function hasItems(item: MenuItem): boolean {
  return item.items !== undefined && item.items.length > 0;
}
</script>

<template>
  <ul>
    <li v-for="item in menu">
      <AtomsButton
        :label="item.label"
        :icon="{ hasIcon: hasItems(item), iconName: 'navigation-right' }"
      />
    </li>
  </ul>
</template>
