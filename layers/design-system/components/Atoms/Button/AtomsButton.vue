<script lang="ts" setup>
import type { AtomsButtonProps } from "./AtomsButtonProps";
const props = defineProps<AtomsButtonProps>();

const btnBaseStyle = computed(() => {
  switch (props.type) {
    case "tertiary":
      return "text-black-state";
      break;
  }
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
        return "py-4 text-white text-shadow-black text-shadow-lg bg-gray-25";
    }
  }
});

const isUnderline = computed(() => {
  if (props.isUnderline) {
    return "hover:underline active:underline";
  }
});

const withIconStyle = computed(() =>
  props.iconName ? "hover:underline active:underline" : ""
);

const disableStyle = computed(() => (props.isDisabled ? "text-grey-25" : ""));

const btnStyle = computed(() => {
  return [
    btnBaseStyle.value,
    textSize.value,
    onBackground.value,
    isUnderline.value,
    withIconStyle.value,
    disableStyle.value,
  ];
});

const capitalize = useCapitalize();

const emit = defineEmits<{ (e: "click"): void }>();

const emitClick = () => {
  if (props.isDisabled) return;
  emit("click");
};
</script>

<template>
  <div class="flex items-center justify-between px-4 py-2">
    <button :class="btnStyle" @click="emitClick">
      {{ capitalize.capitalize(label) }}
    </button>
    <AtomsIcon v-if="iconName" :name="iconName" />
  </div>
</template>
