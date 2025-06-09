<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps({
  error: {
    type: Object as () => NuxtError,
    default: () => ({ statusCode: 500, message: "Unknown error" }),
  },
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div>
    <h2>Something's wrong here</h2>
    <p>
      This is a 404 error, which means you've clicked on a bad link or entered
      an invalid URL.
    </p>
    <p class="mt-10">
      Please, check your URL or return to
      <NuxtLink to="/en" class="underline" @click="handleError">
        Woolrich homepage
      </NuxtLink>
    </p>
  </div>
</template>
