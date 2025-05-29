<script lang="ts" setup>
import capitalize from "~/utils/capitalize";
import type { AtomsButtonProps } from "./AtomsButtonProps";
const props = defineProps<AtomsButtonProps>();

const btnBaseStyle = computed((): string => {
  let result = "";
  switch (props.type) {
    case "primary":
      result =
        "bg-black-base text-xs leading-[14px] uppercase text-white font-medium py-4 px-16 justify-center hover:bg-white hover:text-black-base border-black-base border-1";
      break;
    case "tertiary":
      result =
        "justify-between text-black-state hover:underline active:underline underline-offset-4";
      break;
  }
  return result;
});

const textSize = computed(() => {
  switch (props.textSize) {
    case "small":
      return "text-xs";
    case "medium":
      return "text-sm";
    case "large":
      return "text-base";
    default:
      return "";
  }
});

const onBackground = computed(() => {
  if (props.onBackground) {
    switch (props.type) {
      case "tertiary":
        return "py-4 text-white text-shadow-btn";
      default:
        return "";
    }
  }
  return "";
});

const withIconStyle = computed(() =>
  props.iconName ? "hover:underline active:underline underline-offset-4" : "",
);

const disableStyle = computed(() =>
  props.isDisabled ? "[&&]:text-gray-state bg-gray-20" : "",
);

const btnStyle = computed(() => {
  return [
    btnBaseStyle.value,
    textSize.value,
    onBackground.value,
    withIconStyle.value,
    disableStyle.value,
  ];
});

const emit = defineEmits<{ (e: "click"): void }>();

const emitClick = () => {
  if (props.isDisabled) return;
  emit("click");
};
</script>

<template>
  <button
    :class="btnStyle"
    class="flex items-center px-4 py-2 w-full"
    @click="emitClick"
  >
    {{ capitalize(label) }}
    <span v-if="iconName">
      <AtomsIcon :name="iconName" />
    </span>
  </button>
</template>
