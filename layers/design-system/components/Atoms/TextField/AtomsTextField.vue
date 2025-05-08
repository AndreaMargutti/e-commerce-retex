<script lang="ts" setup>
import type { AtomsInputFieldProps } from "./AtomsTextFieldProps";
defineProps<AtomsInputFieldProps>();

const inputClick = ref(false);

function selectInput() {
  inputClick.value = !inputClick.value;
}

const labelStyle = computed((): string => {
  if (!inputClick.value) {
    return "absolute bottom-3";
  } else {
    return "absolute bottom-10 uppercase text-tiny";
  }
});

const placeholderStyle = computed((): string => {
  if (!inputClick.value) {
    return "placeholder:opacity-0";
  } else {
    return "placeholder:text-black-base";
  }
});

const textData = ref("");
</script>

<template>
  <div class="relative border-b-1 max-w-[21rem] max-h-14">
    <label :class="labelStyle">
      {{ label }}
    </label>
    <input
      :type="type"
      :placeholder="label"
      @focus="selectInput"
      @blur="selectInput"
      :class="placeholderStyle"
      class="min-w-[21rem] pb-3"
    />
    <p class="absolute right-0 pt-1">{{ message }}</p>
    <!-- {{ textData }} -->
  </div>
</template>
