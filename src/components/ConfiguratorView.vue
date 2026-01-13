
<script setup lang="ts">
// Import the store for managing bottle state and steps
import { useSunneeStore } from '@/stores/sunnee';
import { onMounted, watch } from 'vue';

// On mount, synchronize the step with the URL
onMounted(() => {
  const match = window.location.pathname.match(/step-(\d)/)
  if (match) {
    const stepStr = match[1]
    if (stepStr !== undefined) {
      const stepNum = parseInt(stepStr, 10)
      if (stepNum >= 1 && stepNum <= 3) {
        sunneeStore.step = stepNum
      }
    }
  }
})
const sunneeStore = useSunneeStore()

// Update URL on every step change
watch(
  () => sunneeStore.step,
  (newStep) => {
    // Update only if we are on the configurator page
    if (window.location.pathname.startsWith('/configurator')) {
      const stepUrl = `/configurator/step-${newStep}`
      window.history.replaceState(null, '', stepUrl)
    }
  },
  { immediate: true },
)

// Handle color selection for each bottle part based on the current step
function handleColorClick(value: string) {
  if (sunneeStore.step === 1) {
    sunneeStore.setCapColor(value)
  } else if (sunneeStore.step === 2) {
    sunneeStore.setBodyColor(value)
  } else if (sunneeStore.step === 3) {
    sunneeStore.setBottomColor(value)
  }
}
</script>
<template>
  <!-- Configurator layout with bottle preview -->
  <section class="page-grid">
    <div class="page-content">
      <h1>Choose the color of the
      <h1 v-if="sunneeStore.step === 1">CAP</h1>
      <h1 v-else-if="sunneeStore.step === 2">BODY</h1>
      <h1 v-else-if="sunneeStore.step === 3">BOTTOM</h1>
    </h1>
      <!-- Selettori colori -->
      <div id="color-selection" class="grid grid-cols-5 gap-6 justify-items-center items-center">
        <button
          v-for="[name, value] in Object.entries(sunneeStore.colors)"
          :key="name"
          :aria-label="name.charAt(0).toUpperCase() + name.slice(1)"
          @click="handleColorClick(value)"
          class="rounded-full w-25 h-25 text-xl font-bold shadow-2xl hover:scale-105 transition"
          :style="{ backgroundColor: value }"
        >
          {{ name.charAt(0).toUpperCase() + name.slice(1) }}
        </button>
      </div>
      <nav class="button-controls" aria-label="Step navigation">
       <div>
        <router-link to="/configurator" style="text-decoration: none">
          <button v-on:click="useSunneeStore().reset()" type="button" class="btn-secondary" data-icon="reset">
            Reset
          </button>
        </router-link>
      </div>
      <div class="flex gap-4">
        <button v-if="sunneeStore.step !== 1" @click="sunneeStore.stepBack" type="button" class="btn-primary" data-icon="back">Back</button>
        <button v-else type="button" class="btn-primary invisible">Back</button>
        <router-link v-if="sunneeStore.step == 3" to="/thanks" style="text-decoration: none">
          <button type="button" class="btn-primary" data-icon="send">Send !</button>
        </router-link>
        <button v-else @click="sunneeStore.advanceStep" type="button" class="btn-primary" data-icon="next">Next</button>
      </div>
    </nav>
    </div>
    <figure class="-z-10 bottle-preview">
        <img
          src="../assets/img/cap.png"
          alt="Bottle cap"
          class="bottle-layer"
          :style="{ backgroundColor: useSunneeStore().capColor, mixBlendMode: 'multiply' }"
        />
        <img
          src="../assets/img/body.png"
          alt="Bottle body"
          class="bottle-layer"
          :style="{ backgroundColor: useSunneeStore().bodyColor, mixBlendMode: 'multiply' }"
        />
        <img
          src="../assets/img/bottom.png"
          alt="Bottle bottom"
          class="bottle-layer"
          :style="{ backgroundColor: useSunneeStore().bottomColor, mixBlendMode: 'multiply' }"
        />
        <img src="../assets/img/mask.png" alt="Bottle mask overlay" class="bottle-layer" />
        <img src="../assets/img/logo.png" alt="Sunnee Kids logo" class="bottle-layer" />
        <figcaption class="sr-only">Bottle preview with selected colors</figcaption>
      </figure>
  </section>

</template>
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
.button-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10rem;
}
.bottle-preview {
  position:relative;
  margin:auto;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 22rem;
  height: 32rem;
  bottom: 7rem;
}
@media (max-width: 800px) {
  .page-grid {
    grid-template-columns: 1fr;
    gap: 0;
    display: flex;
    flex-direction: column;
  }
  
  .page-content {
    padding-left: 0;
    text-align: center;
    padding-top: 0;
    display: contents;
  }
  
  .page-content h1 {
    order: 1;
  }
  
  .bottle-preview {
    order: 2;
    width: 16rem;
    height: 24rem;
    bottom: 0;
    margin-bottom: 3rem;
  }
  
  #color-selection {
    order: 3;
    margin-top: 3rem;
  }
  
  #color-selection button {
    width: 5rem;
    height: 5rem;
    font-size: 1rem;
  }
  
  .button-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 0;
    flex-wrap: wrap;
    gap: 1rem;
    order: 4;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
  
  .button-controls > div {
    display: contents;
  }
  
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.25rem;
  }
}
</style>

