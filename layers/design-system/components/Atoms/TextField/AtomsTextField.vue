<script lang="ts" setup>
import type { AtomsInputFieldProps } from "./AtomsTextFieldProps";
defineProps<AtomsInputFieldProps>();

const inputClick = ref(false);
const hasError = ref(false);
const isBlurred = ref(false);

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

const modelValue = defineModel<string>();
const cleanInput = () => {
  modelValue.value = "";
};

const inputState = computed((): string => {
  if (hasError.value && modelValue.value) {
    return "border-red-state";
  } else if (isBlurred.value && !hasError.value) {
    return "border-green-state";
  } else {
    return "";
  }
});

const handleError = () => {
  if (validateEmail(modelValue.value || "")) {
    hasError.value = false;
  } else {
    hasError.value = true;
  }
};

function handleBlur() {
  selectInput();
  isBlurred.value = true;
  handleError();
}

function handleFocus() {
  selectInput();
  isBlurred.value = false;
}
</script>

<template>
  <div class="relative border-b-1 max-h-14 mt-10" :class="inputState">
    <label
      :class="labelStyle"
      class="absolute transition-all duration-200 ease-in-out leading-none"
    >
      {{ label }}
    </label>
    <input
      v-model="modelValue"
      :type="type"
      :class="placeholderStyle"
      class="pb-3 w-full pr-10 placeholder:transition-all placeholder:delay-300 placeholder:duration-200 placeholder:ease-in-out"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <AtomsIconWrapper
      v-if="modelValue && !isBlurred"
      type="button"
      icon-name="close"
      class="absolute right-3 top-1/2 transform -translate-y-1/2"
      @mousedown.prevent
      @handle-click="cleanInput"
    />
    <AtomsIcon
      v-show="isBlurred && !hasError && modelValue"
      name="feedback-positive"
      class="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-state"
    />
    <AtomsIcon
      v-show="isBlurred && hasError && modelValue"
      name="feedback-negative"
      class="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-state"
    />
    <p class="absolute right-0 pt-1">{{ message }}</p>
  </div>
</template>
