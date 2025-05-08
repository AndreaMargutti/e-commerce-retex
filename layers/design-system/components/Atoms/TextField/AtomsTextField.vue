<script lang="ts" setup>
import type { AtomsInputFieldProps } from "./AtomsTextFieldProps";
defineProps<AtomsInputFieldProps>();

const inputClick = ref(false);

function selectInput() {
  inputClick.value = !inputClick.value;
}

const labelStyle = computed((): string => {
  if (!inputClick.value) {
    return "bottom-3";
  } else {
    return "bottom-10 uppercase text-tiny";
  }
});

const placeholderStyle = computed((): string => {
  if (!inputClick.value) {
    return "placeholder:opacity-0";
  } else {
    return "placeholder:opacity-100 placeholder:text-black-base";
  }
});

const textData = ref("");
</script>

<template>
  <div class="relative border-b-1 max-w-[21rem] max-h-14 mt-10">
    <label
      :class="labelStyle"
      class="absolute transition-all duration-300 ease-in-out"
    >
      {{ label }}
    </label>
    <input
      v-model="textData"
      :type="type"
      :placeholder="label"
      @focus="selectInput"
      @blur="selectInput"
      :class="placeholderStyle"
      class="min-w-[21rem] pb-3 palceholder:transition-all placeholder:delay-300 placeholder:duration-200 placeholder:ease-in-out"
    />
    <p class="absolute right-0 pt-1">{{ message }}</p>
  </div>
  {{ textData }}
</template>
