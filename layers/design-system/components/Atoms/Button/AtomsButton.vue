<script lang="ts" setup>
import capitalize from "~/utils/capitalize";
import type { AtomsButtonProps } from "./AtomsButtonProps";
const props = defineProps<AtomsButtonProps>();

const btnBaseStyle = computed((): string => {
  let result = "";
  switch (props.type) {
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
      break;
    case "medium":
      return "text-sm";
      break;
    case "large":
      return "text-base";
  }
});

const onBackground = computed(() => {
  if (props.onBackground) {
    switch (props.type) {
      case "tertiary":
        return "py-4 text-white text-shadow-btn bg-gray-25";
    }
  }
});

const withIconStyle = computed(() =>
  props.iconName ? "hover:underline active:underline underline-offset-4" : ""
);

const disableStyle = computed(() => (props.isDisabled ? "text-grey-25" : ""));

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
    @click="emitClick"
    class="flex items-center justify-between px-4 py-2 w-full"
  >
    {{ capitalize(label) }}
    <span v-if="iconName">
      <AtomsIcon :name="iconName" />
    </span>
  </button>
</template>
