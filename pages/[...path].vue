<script lang="ts" setup>
const route = useRoute();

interface Module {
  name: string;
  // add other properties if needed
}

const { data: pageContent, error: pageError } = await useFetch<Module[]>(
  `/api/page${route.path}`,
);

if (pageError.value) {
  console.error("Error fetching page content:", pageError.value);
}
</script>

<template>
  <main>
    <div v-for="(module, key) in pageContent" :key="key">
      {{ module.name }}
    </div>

    <!--Little Style for 404 Error Page-->
    <div v-if="pageError" class="py-50">
      <h2 class="font-bold text-center">
        {{ pageError.statusCode }} - {{ pageError.statusMessage }}
      </h2>
    </div>
  </main>
</template>
