<template>
  <main>
    <section>
      <h1>Thank you for customizing your Sunnee bottle!</h1>
      <p class="relative w-100 h-30 text-2xl pb-0 pt-30 left-70">
        Your unique design helps protect the sea and gives new life to plastic waste. Together,
        we’re building a more sustainable future one choice at a time.<br /><br />
        We can’t wait for you to enjoy your personalized bottle. Stay inspired and keep making a
        difference!
      </p>
    </section>
    <!-- Thank you message and summary -->
    <figure class="flex justify-center items-center relative left-70 bottom-35 -z-10">
      <BottlePreview />
      <figcaption class="sr-only">Bottle preview with your selected colors</figcaption>
    </figure>
    <!-- Bottle preview with the user's selected colors -->
  </main>
</template>
<script setup lang="ts">
import BottlePreview from './BottlePreview.vue'
</script>
<style scoped></style>
