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
    <p class="font-medium leading-[19px] pb-2">
      {{ $t("RegistrationSuccess") }}
    </p>
    <p class="leading-[19px]">
      {{ $t("NewsletterSubscription") }}
    </p>
  </div>
  <p v-else class="font-medium leading-[19px]">
    {{ $t("RegistrationError") }}
  </p>
</template>
