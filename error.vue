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
    <h2>{{ error?.statusCode }}</h2>
    <p>{{ error?.statusMessage }}</p>
    <button @click="handleError">Clear errors</button>
  </div>
</template>
