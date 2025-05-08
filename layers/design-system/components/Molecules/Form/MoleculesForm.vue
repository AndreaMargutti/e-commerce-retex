<script lang="ts" setup>
import type { MoleculesFormProps } from "./MoleculesFormProps";
defineProps<MoleculesFormProps>();

const formData = ref();

const submitForm = () => {
  const form = document.querySelector("form") as HTMLFormElement;
  if (form) {
    form.submit();
  }
};
</script>

<template>
  <form :method="formMethod">
    <slot></slot>
    <AtomsButton
      type="primary"
      textSize="medium"
      label="invia"
      @click="submitForm"
    />
  </form>
</template>
