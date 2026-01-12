<script setup lang="ts">
import BottlePreview from './BottlePreview.vue';
</script>

<template>
  <main>
    <section>
      <h1>Welcome to the Sunnee Kids Bottle Configurator!</h1>
      <p class="relative w-100 h-30 text-2xl pb-0 pt-30 left-70">
        <span role="img" aria-label="wave">🌊</span> Create your own sustainable thermal bottle and personalize it with your favorite colors. With your first order, you’ll receive a unique bottle designed to protect the sea and our planet.<br><br>
        Together, we can turn plastic waste into a valuable resource. Start designing your bottle now every choice makes a difference!
      </p>
    </section>
    <figure class="flex justify-center items-center relative left-70 bottom-35 -z-10">
      <BottlePreview
        capColor="rgb(251, 170, 161)"
        bodyColor="rgb(210, 251, 212)"
        bottomColor="rgb(183, 238, 251)"
      />
      <figcaption class="sr-only">Bottle preview with custom colors</figcaption>
    </figure>
  </main>
</template>
