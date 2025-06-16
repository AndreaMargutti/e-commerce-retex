<script lang="ts" setup></script>

<template>
  <section>
    <figure class="aspect-square pb-[1.4rem]">
      <img
        src="https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149124864.jpg"
        alt="text-test"
      />
      <div class="px-6 pt-6 pb-5">
        <AtomsTitle title="TITOLO" color="black" class="pb-2" />
        <AtomsSubtitle subtitle="ciao" color="black" class="pb-0" />
      </div>
      <div class="flex gap-8 px-6 *:p-0">
        <AtomsLink
          name="Label"
          href="/"
          icon="navigation-right"
          :is-uppercase="true"
          direction="row-reverse"
          class="justify-end px-6"
        />
      </div>
    </figure>
  </section>
</template>
