<script lang="ts" setup>
import type { AtomsInputFieldProps } from "./AtomsTextFieldProps";
defineProps<AtomsInputFieldProps>();

const inputClick = ref(false);

function selectInput() {
  inputClick.value = !inputClick.value;
}

const labelStyle = computed((): string => {
  if (inputClick.value || modelValue.value) {
    return "bottom-10 text-tiny";
  } else {
    return "bottom-3 delay-300";
  }
});

const placeholderStyle = computed((): string => {
  if (!inputClick.value) {
    return "placeholder:opacity-0";
  } else {
    return "placeholder:opacity-100 placeholder:text-black-base";
  }
});

const modelValue = defineModel();
const cleanInput = () => {
  modelValue.value = "";
};
</script>

<template>
  <div class="relative border-b-1 max-w-[21rem] max-h-14 mt-10">
    <label
      :class="labelStyle"
      class="absolute transition-all duration-200 ease-in-out"
    >
      {{ label }}
    </label>
    <input
      v-model="modelValue"
      :type="type"
      :placeholder="label"
      @focus="selectInput"
      @blur="selectInput"
      :class="placeholderStyle"
      class="min-w-[21rem] pb-3 pr-10 placeholder:transition-all placeholder:delay-300 placeholder:duration-200 placeholder:ease-in-out"
    />
    <AtomsIconWrapper
      v-show="modelValue"
      @handleClick="cleanInput"
      type="button"
      iconName="close"
      class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
    />
    <p class="absolute right-0 pt-1">{{ message }}</p>
  </div>
</template>
