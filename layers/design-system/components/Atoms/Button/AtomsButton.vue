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
    case "withBackground":
      return "text-white bg-photo-background hover:underline active:underline";
      break;
    case "underline":
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
  props.icon?.hasIcon ? "hover:underline active:underline" : ""
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

const emit = defineEmits<{ (e: "click"): void }>();

const emitClick = () => {
  if (props.isDisabled) return;
  emit("click");
};
</script>

<template>
  <div class="flex items-center justify-between px-4 py-2" @click="emitClick">
    <button :class="btnStyle">
      {{ capitalize(label) }}
    </button>
    <AtomsIcon v-if="icon?.hasIcon" :name="icon?.iconName" />
  </div>
</template>
