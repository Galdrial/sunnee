<template>
  <!-- Thank you page after bottle configuration -->
  <section class="page-grid">
    <div class="page-content">
      <h1>Thank you for customizing your Sunnee bottle!</h1>
      <p class="text-2xl leading-relaxed">
        Your unique design helps protect the sea and gives new life to plastic waste. Together,
        we’re building a more sustainable future one choice at a time.<br /><br />
          We can’t wait for you to enjoy your personalized bottle and see the positive impact you’re making. Stay inspired and keep making a difference every day !
      </p>
      <div class="button-wrapper">
        <router-link to="/configurator" style="text-decoration: none">
          <button v-on:click="useSunneeStore().reset()" type="button" class="btn-primary">
            Restart
          </button>
        </router-link>
      </div>
    </div>
    <figure class="-z-10 bottle-preview">
      <BottlePreview />
      <figcaption class="sr-only">Bottle preview with your selected colors</figcaption>
    </figure>
  </section>
</template>
<script setup lang="ts">
// Import store for reset functionality and bottle preview component
import { useSunneeStore } from '@/stores/sunnee';
import BottlePreview from './BottlePreview.vue';
</script>
<style scoped>
.page-grid {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;
  align-items: center !important;
  width: 90%;
  margin: auto;
  min-height: 80vh;
}
.page-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-top: 3rem;
  padding-left: 4rem;
}
.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10rem;
}
.bottle-preview {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding-bottom: 14rem;
}
@media (max-width: 800px) {
  .page-grid {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .page-content {
    padding-left: 0;
    text-align: center;
    padding-top: 0;
  }
  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 0;
  }
  h1 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
  }
}
</style>
