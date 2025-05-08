<script lang="ts" setup>
import type { AtomsInputFieldProps } from "./AtomsTextFieldProps";

defineProps<AtomsInputFieldProps>();
</script>

<template>
  <div class="border-b-1 max-w-[21rem]">
    <input
      :type="type"
      :placeholder="label"
      class="placeholder:text-black-base min-w-[21rem] pb-3"
    />
  </div>
</template>
