<script lang="ts" setup>
import type { MoleculesNewsLetterFormProps } from "./MoleculesNewsLetterFormProps";
import { validateEmail } from "#imports";
defineProps<MoleculesNewsLetterFormProps>();

const email: Ref<string> = ref("");
const error: Ref<boolean> = ref(false);
const isSubscribed: Ref<boolean> = ref(false);
const successMessage: Ref<boolean> = ref(false);

const submitForm = async () => {
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
      isSubscribed.value = true;
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
  <div>
    <form
      v-if="!isSubscribed"
      :method="formMethod"
      @submit.prevent="submitForm"
      class="flex flex-col gap-4 md:justify-items-stretch md:flex-row"
    >
      <AtomsTextField
        label="e-mail"
        type="email"
        v-model="email"
        class="md:flex-grow-1"
      />
      <AtomsButton
        type="primary"
        textSize="medium"
        label="invia"
        class="mt-4"
      />
    </form>
    <MoleculesNewsLetterFormText :isSubscribed="successMessage" />
  </div>
</template>
