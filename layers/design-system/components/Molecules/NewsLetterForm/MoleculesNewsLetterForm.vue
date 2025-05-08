<script lang="ts" setup>
import type { MoleculesNewsLetterFormProps } from "./MoleculesNewsLetterFormProps";
defineProps<MoleculesNewsLetterFormProps>();

const email: Ref<string> = ref("");
const error: Ref<boolean> = ref(false);
const successMessage: Ref<string> = ref("");

const submitForm = async () => {
  error.value = false;
  try {
    const form = document.querySelector("form") as HTMLFormElement;
    const { data, status } = await useFetch("/api/test", {
      method: "POST",
      body: {
        email: email.value,
      },
    });
    successMessage.value = status.value;
  } catch (err) {
    error.value = true;
  }
};
</script>

<template>
  <form
    :method="formMethod"
    @submit.prevent="submitForm"
    class="flex flex-col gap-4"
  >
    <AtomsTextField
      label="e-mail"
      type="email"
      message="Inserici qui la tua e-mail"
      v-model="email"
    />
    <AtomsButton type="primary" textSize="medium" label="invia" class="mt-4" />
  </form>
  {{ successMessage }}
  <p v-if="successMessage">
    {{ newsLetterText }}
  </p>
</template>
