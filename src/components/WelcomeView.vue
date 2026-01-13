<script setup lang="ts">
// Import the bottle preview component for visualizing the bottle
import BottlePreview from './BottlePreview.vue';
</script>

<template>
  <!-- Welcome message and project introduction -->
  <section class="welcome-grid">
    <div class="welcome-text">
      <h1>Welcome to the Sunnee Kids Bottle Configurator!</h1>
      <p class="text-2xl leading-relaxed">
        Create your own sustainable thermal bottle and personalize it with your favorite colors. With
        your first order, you’ll receive a unique bottle designed to protect the sea and our
        planet.<br /><br />
        Together, we can turn plastic waste into a valuable resource. Start designing your bottle now
        every choice makes a difference !
      </p>
      <div class="start-btn-wrapper">
        <router-link to="/configurator" style="text-decoration: none">
          <button type="button" class="custom-pill-btn large-round-btn">Start</button>
        </router-link>
      </div>
    </div>
    <figure class="-z-10 welcome-bottle">
      <BottlePreview
        capColor="rgb(251, 170, 161)"
        bodyColor="rgb(210, 251, 212)"
        bottomColor="rgb(183, 238, 251)"
      />
      <figcaption class="sr-only">Bottle preview with custom colors</figcaption>
    </figure>
  </section>

</template>
<style scoped>
.welcome-grid {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;
  align-items: center !important;
  width: 90%;
  margin: auto;
  min-height: 80vh;
}
.welcome-text {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-top: 3rem;
  padding-left: 4rem;
}
.start-btn-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10rem;
}
.welcome-bottle {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding-bottom: 14rem;
}
@media (max-width: 800px) {
  .welcome-grid {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .welcome-text {
    padding-left: 0;
    text-align: center;
    padding-top: 0;
  }
  .start-btn-wrapper {
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