<script lang="ts" setup>
import type { AtomsInputFieldProps } from "./AtomsTextFieldProps";
import { validateEmail } from "#imports";
import type { ModelRef } from "vue";
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

const modelValue = defineModel<string>();
const cleanInput = () => {
  modelValue.value = "";
};

const inputState = computed(() => {
  if (validateEmail(modelValue.value || "")) {
    return "border-green-state";
  } else if (modelValue.value) {
    return "border-red-state";
  }
});

const stateIcon = computed(() => {
  if (validateEmail(modelValue.value || "")) {
    return "feedback-positive";
  } else if (modelValue.value) {
    return "feedback-negative";
  }
});

const typingTimeout = ref<number | null>(null);
const isTyping = ref(false);

function handleInput() {
  isTyping.value = true;
  if (typingTimeout.value) {
    clearTimeout(typingTimeout.value);
  }
  typingTimeout.value = window.setTimeout(() => {
    isTyping.value = false;
  }, 3000); // Adjust debounce time as needed
}
</script>

<template>
  <div
    class="relative border-b-1 max-w-[21rem] max-h-14 mt-10"
    :class="inputState"
  >
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
      @input="handleInput"
      :class="placeholderStyle"
      class="min-w-[21rem] pb-3 pr-10 placeholder:transition-all placeholder:delay-300 placeholder:duration-200 placeholder:ease-in-out"
    />
    <AtomsIconWrapper
      v-show="modelValue && isTyping"
      @handleClick="cleanInput"
      type="button"
      iconName="close"
      class="absolute right-3 top-1/2 transform -translate-y-1/2"
    />
    <AtomsIcon
      v-show="!isTyping && validateEmail(modelValue || '')"
      name="feedback-positive"
      class="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-state"
    />
    <AtomsIcon
      v-show="!isTyping && modelValue && !validateEmail(modelValue)"
      name="feedback-negative"
      class="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-state"
    />
    <p class="absolute right-0 pt-1">{{ message }}</p>
  </div>
</template>
