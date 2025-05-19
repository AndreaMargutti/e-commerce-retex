<template>
  <div class="flex justify-between items-center px-4 py-2 bg-gray-25 mt-auto">
    <h4 class="text-sm font-medium">
      {{ $t("DeliveryCountry").toLocaleUpperCase() }}
    </h4>
    <span class="flex items-center gap-2">
      <AtomsIcon name="IT" />
      <p>{{ $t("Italy").toLocaleUpperCase() }}</p>
    </span>
  </div>
</template>
