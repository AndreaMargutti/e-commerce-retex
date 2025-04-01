<template>
  <header
    class="flex max-lg:justify-between lg:text-end items-center py-2 px-4 md:px-8"
  >
    <div class="space-x-6 lg:space-x-4 px-4 lg:order-2 lg:grow">
      <AtomsIcon name="menu" />
      <AtomsIcon name="account" />
    </div>

    <div class="mx-[37px]">
      <AtomsLogoDefault />
    </div>

    <div class="hidden lg:flex grow gap-4">
      <AtomsLink v-for="n in 10" name="HOME" href="/" />
    </div>

    <div class="space-x-6 lg:space-x-4 lg:order-3">
      <AtomsIcon name="search" />
      <AtomsIcon name="cart" />
    </div>
  </header>
</template>
