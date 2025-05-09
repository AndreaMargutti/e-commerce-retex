<script lang="ts" setup>
import type { MoleculesNewsLetterFormTextProps } from "./MoleculesNewsLetterFormTextProps";

defineProps<MoleculesNewsLetterFormTextProps>();
</script>

<template>
  <p v-show="!isSubscribed" class="text-md">
    Ho letto
    <a href="" class="font-semibold underline">l’informativa sulla privacy</a> e
    chiedo di iscrivermi alla Newsletter per rimanere aggiornato su tutte le
    novità del mondo Woolrich. Questo sito è protetto da reCAPTCHA e si
    applicano
    <a href="" class="font-semibold underline">le norme sulla privacy</a> e i
    <a href="" class="font-semibold underline">termini di servizio</a> di
    Google.
  </p>
  <div v-show="isSubscribed" class="text-md">
    <AtomsIcon name="navigation-check" />
    <p class="font-medium">Email Signdup succesfull</p>
    <p>
      You will always be updated on all the offers of Woolrich products and the
      news of our World.
    </p>
  </div>
</template>
π
