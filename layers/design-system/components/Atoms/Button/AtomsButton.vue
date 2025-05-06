<script lang="ts" setup>
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
      result = "text-black-state";
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
        return "py-4 text-white text-shadow-black text-shadow-lg bg-gray-25";
    }
  }
});

const isUnderline = computed(() => {
  if (props.isUnderline) {
    return "hover:underline active:underline underline-offset-4";
  }
});

const withIconStyle = computed(() =>
  props.iconName ? "hover:underline active:underline underline-offset-4" : ""
);

const disableStyle = computed(() =>
  props.isDisabled ? "[&&]:text-gray-state bg-gray-20" : ""
);

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
  <button :class="btnStyle" @click="emitClick">
    {{ capitalize.capitalize(label) }}
    <div>
      <AtomsIcon v-if="iconName" :name="iconName" />
    </div>
  </button>
</template>
