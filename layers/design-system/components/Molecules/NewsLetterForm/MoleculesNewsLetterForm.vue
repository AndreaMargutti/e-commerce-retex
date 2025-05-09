<script lang="ts" setup>
import type { MoleculesNewsLetterFormProps } from "./MoleculesNewsLetterFormProps";
import { validateEmail } from "#imports";
defineProps<MoleculesNewsLetterFormProps>();

const email: Ref<string> = ref("");
const error: Ref<boolean> = ref(false);
const successMessage: Ref<boolean> = ref(false);

const submitForm = async () => {
  //TODO: remove this when the form is ready
  error.value = false;
  if (validateEmail(email.value)) {
    try {
      const form = document.querySelector("form") as HTMLFormElement;
      const { data, status } = await useFetch("/api/test", {
        method: "POST",
        body: {
          email: email.value,
        },
      });
      //TODO: remove this when the form is ready
      console.log("status", status);
      successMessage.value = status.value === "success" ? true : false;
    } catch (err) {
      error.value = true;
    }
  } else {
    console.log("error: invalid mail");
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
