<script lang="ts" setup>
import type { AtomsInputFieldProps } from "./AtomsInputFieldProps";

defineProps<AtomsInputFieldProps>();
</script>

<template>
  <div>
    <input
      :type="type"
      :placeholder="label"
      class="border-b-1 pb-3 placeholder:text-black-base min-w-[21rem]"
    />
  </div>
</template>
