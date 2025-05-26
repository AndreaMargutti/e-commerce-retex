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
      const { data: _data, status } = await useFetch("/api/test", {
        method: "POST",
        body: {
          email: email.value,
        },
      });
      isSubscribed.value = true;
      successMessage.value = status.value === "success" ? true : false;
    } catch (err) {
      error.value = true;
      console.error("error: ", err);
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
      class="flex flex-col gap-4 md:flex-row"
      @submit.prevent="submitForm"
    >
      <AtomsTextField
        v-model="email"
        label="e-mail"
        type="email"
        class="md:flex-grow-1"
      />
      <AtomsButton
        type="primary"
        text-size="medium"
        class="mt-4 md:w-auto md:h-12 md:self-end"
        :label="$t('Send')"
      />
    </form>
    <MoleculesNewsLetterFormText :is-subscribed="successMessage" />
  </div>
</template>
