<script lang="ts" setup>
import type { MoleculesNewsLetterFormTextProps } from "./MoleculesNewsLetterFormTextProps";

defineProps<MoleculesNewsLetterFormTextProps>();
</script>

<template>
  <section class="mt-4">
    <p v-show="!isSubscribed" class="text-md">
      {{ $t("PrivacyPolicy") }}
    </p>
    <div v-show="isSubscribed" class="text-md">
      <AtomsIcon name="navigation-check" style="height: 32px; width: 32px" />
      <p class="font-medium">{{ $t("RegistrationSuccess") }}</p>
      <p>
        {{ $t("NewsletterSubscription") }}
      </p>
    </div>
  </section>
</template>
π
