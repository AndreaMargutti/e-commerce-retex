<script lang="ts" setup>
import type { MoleculesNewsLetterFormProps } from "./MoleculesNewsLetterFormProps";
defineProps<MoleculesNewsLetterFormProps>();

const email: Ref<string> = ref("");

const submitForm = async () => {
  const form = document.querySelector("form") as HTMLFormElement;
  const { data } = await useFetch("/api/test", {
    method: "POST",
    body: {
      email: email.value,
    },
  });
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
      message="Inserici qui la tua mail"
      v-model="email"
    />
    <AtomsButton type="primary" textSize="medium" label="invia" class="mt-4" />
  </form>
</template>
