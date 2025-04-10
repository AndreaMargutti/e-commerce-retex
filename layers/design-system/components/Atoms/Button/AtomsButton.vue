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

const variantStyle = computed(() => {
  switch (props.variant) {
    case "withIcon":
      return "flex items-center gap-1 hover:underline active:underline";
      break;
    case "withBackground":
      return "text-white bg-photo-background hover:underline active:underline";
      break;
    case "underlineBig":
      return "font-medium underline";
      break;
    case "underlineSmall":
      return "font-medium underline";
  }
});

const sizeStyle = computed(() => {
  switch (props.size) {
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

const withIconStyle = computed(() =>
  props.icon?.hasIcon ? "flex items-center gap-1" : ""
);

const disableStyle = computed(() =>
  props.isDisabled ? "text-grey-state" : ""
);

const btnStyle = computed(() => {
  return [
    btnBaseStyle.value,
    variantStyle.value,
    sizeStyle.value,
    withIconStyle.value,
    disableStyle.value,
  ];
});

const capitalize = (label: string): string => {
  return label.charAt(0).toLocaleUpperCase() + label.slice(1);
};

const emit = defineEmits<{ (e: "handleClick"): void }>();

const emitClick = () => {
  if (props.isDisabled) {
    return;
  } else {
    emit("handleClick");
    console.log("Button clicked");
  }
};
</script>

<template>
  <button :class="btnStyle" @click="emitClick">
    {{
      variant !== "underlineBig" && variant !== "underlineSmall"
        ? label.toLocaleUpperCase()
        : capitalize(label)
    }}
    <AtomsIcon v-if="icon?.hasIcon" :name="icon.iconName" />
  </button>
</template>
