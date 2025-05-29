<script lang="ts" setup>
import type { MoleculesNewsLetterFormProps } from "./MoleculesNewsLetterFormProps";
defineProps<MoleculesNewsLetterFormProps>();

const email: Ref<string> = ref("");
const isFormSent: Ref<boolean> = ref(false);
const messageStatus: Ref<boolean | null> = ref(null);

const submitForm = async () => {
  if (validateEmail(email.value)) {
    try {
      const _formData = await $fetch("/api/test", {
        method: "POST",
        body: { email: email.value },
      });
      isFormSent.value = true;
      messageStatus.value = true;
    } catch {
      isFormSent.value = true;
      messageStatus.value = false;
    }
  }
};
</script>

<template>
  <div>
    <h5 class="font-medium text-xs pt-10 md:pt-0 leading-none">
      {{ title?.toLocaleUpperCase() }}
    </h5>
    <form
      v-if="!isFormSent"
      method="POST"
      class="flex flex-col gap-4 md:flex-row"
      @submit.prevent="submitForm"
    >
      <AtomsTextField
        v-model="email"
        type="email"
        label="e-mail"
        class="md:flex-grow-1"
        :has-success="formSuccess"
      />
      <AtomsButton
        type="primary"
        text-size="medium"
        class="mt-4 md:w-auto md:h-12 md:self-end"
        :label="$t('Send')"
      />
    </form>
    <div :class="!isFormSent ? 'pt-4' : 'pt-10'">
      <AtomsPolicyText v-if="!isFormSent" />
      <AtomsFormMessage v-else :status="messageStatus ? 'success' : 'error'" />
    </div>
  </div>
</template>
