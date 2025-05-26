<script lang="ts" setup>
import type { AtomsFormMessageProps } from "./AtomsFormMessageProps";
defineProps<AtomsFormMessageProps>();
</script>

<template>
  <AtomsIcon
    :name="status === 'success' ? 'navigation-check' : 'close'"
    icon-size="2em"
    class="mb-2"
  />
  <div v-if="status === 'success'">
    <p class="font-medium">{{ $t("RegistrationSuccess") }}</p>
    <p>
      {{ $t("NewsletterSubscription") }}
    </p>
  </div>
  <p v-else class="font-medium">
    {{ $t("RegistrationError") }}
  </p>
</template>
