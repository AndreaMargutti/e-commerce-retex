<script lang="ts" setup>
import capitalize from "~/utils/capitalize";
import type { AtomsButtonProps } from "./AtomsButtonProps";
const props = defineProps<AtomsButtonProps>();

const btnBaseStyle = computed((): string => {
  let result = "";
  switch (props.type) {
    case "primary":
      result =
        "bg-black-base text-white font-medium py-3 px-16 hover:bg-white hover:text-black-base hover:border-black-base hover:border-1";
      break;
    case "tertiary":
      result =
        "text-black-state hover:underline active:underline underline-offset-4";
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
  }
});

const onBackground = computed(() => {
  if (props.onBackground) {
    switch (props.type) {
      case "tertiary":
        return "py-4 text-white text-shadow-btn";
    }
  }
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
    class="flex items-center justify-between px-4 py-2 w-full"
    @click="emitClick"
  >
    {{ capitalize(label) }}
    <span v-if="iconName">
      <AtomsIcon :name="iconName" />
    </span>
  </button>
</template>
