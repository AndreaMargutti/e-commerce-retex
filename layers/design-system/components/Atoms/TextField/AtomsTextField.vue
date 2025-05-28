<script lang="ts" setup>
import type { AtomsInputFieldProps } from "./AtomsTextFieldProps";
const props = defineProps<AtomsInputFieldProps>();

const isClicked = ref(false);
const hasError = ref(false);

function selectInput() {
  isClicked.value = !isClicked.value;
}

const labelStyle = computed((): string => {
  if (isClicked.value || modelValue.value) {
    return "bottom-10 text-tiny";
  } else {
    return "bottom-3";
  }
});

const modelValue = defineModel<string>();
const cleanInput = () => {
  modelValue.value = "";
};

const inputState = computed((): string => {
  if (hasError.value && modelValue.value) {
    return "border-red-state";
  } else if (!hasError.value) {
    return "border-green-state";
  } else {
    return "";
  }
});

const handleError = () => {
  switch (props.type) {
    case "email":
      if (validateEmail(modelValue.value || "")) {
        hasError.value = false;
      } else {
        hasError.value = true;
      }
      break;
  }
};

function handleBlur() {
  selectInput();
  handleError();
}

function handleFocus() {
  selectInput();
}
</script>

<template>
  <div class="relative border-b-1 mt-10" :class="inputState">
    <label
      :class="labelStyle"
      class="absolute transition-all duration-200 ease-in-out leading-none"
    >
      {{ label.toLocaleUpperCase() }}
    </label>
    <input
      v-model="modelValue"
      :type="type"
      class="w-full pr-10 pb-3 leading-tight"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <AtomsIconWrapper
      v-if="modelValue"
      type="button"
      icon-name="close"
      icon-wrapper-size="1em"
      class="absolute right-3 top-1/2 transform -translate-y-1/2"
      @mousedown.prevent
      @handle-click="cleanInput"
    />
    <AtomsIcon
      v-show="!hasError && modelValue"
      icon-size="1.5em"
      name="feedback-positive"
      class="absolute right-10 top-1/2 transform -translate-y-1/2 text-green-state"
    />
    <AtomsIcon
      v-show="hasError && modelValue"
      name="feedback-negative"
      icon-size="1.5em"
      class="absolute right-10 top-1/2 transform -translate-y-1/2 text-red-state"
    />
    <p v-if="messagge" class="absolute right-0 pt-1">{{ message }}</p>
  </div>
</template>
