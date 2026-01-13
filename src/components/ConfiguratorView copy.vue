<script setup lang="ts">
// Import the store for managing bottle state and steps
import { useSunneeStore } from '@/stores/sunnee';
import { onMounted, watch } from 'vue';
// All'avvio, sincronizza lo step con l'URL
onMounted(() => {
  const match = window.location.pathname.match(/step-(\d)/);
  if (match) {
    const stepStr = match[1];
    if (stepStr !== undefined) {
      const stepNum = parseInt(stepStr, 10);
      if (stepNum >= 1 && stepNum <= 3) {
        sunneeStore.step = stepNum;
      }
    }
  }
});
const sunneeStore = useSunneeStore()

// Aggiorna l'URL ad ogni cambio step
watch(
  () => sunneeStore.step,
  (newStep) => {
    // Aggiorna solo se siamo nella pagina configurator
    if (window.location.pathname.startsWith('/configurator')) {
      const stepUrl = `/configurator/step-${newStep}`;
      window.history.replaceState(null, '', stepUrl);
    }
  },
  { immediate: true }
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
  <main>
    <!-- Step title and current part selection -->
    <section>
      <h1 class="h1Configurator">Choose the color of the</h1>
      <h2 v-if="sunneeStore.step === 1" class="h2Configurator">CAP</h2>
      <h2 v-else-if="sunneeStore.step === 2" class="h2Configurator">BODY</h2>
      <h2 v-else-if="sunneeStore.step === 3" class="h2Configurator">BOTTOM</h2>
    </section>
    <!-- Color selection buttons and bottle preview -->
    <section class="flex flex-row items-center w-full justify-center">
      <div class="grid grid-cols-5 gap-6 justify-items-center items-center w-200 pl-55 pb-40">
        <!-- Color selection buttons -->
        <button
          v-for="[name, value] in Object.entries(sunneeStore.colors)"
          :key="name"
          :aria-label="name.charAt(0).toUpperCase() + name.slice(1)"
          @click="handleColorClick(value)"
          class="rounded-full w-25 h-25 text-xl font-bold border-2 shadow-md hover:scale-105 transition"
          :style="{ backgroundColor: value }"
        >
          {{ name.charAt(0).toUpperCase() + name.slice(1) }}
        </button>
      </div>
      <!-- Bottle preview with current selected colors -->
      <figure class="bottle-container right-6 bottom-40">
        <img
          src="../assets/img/cap.png"
          class="layer cap"
          :style="{ backgroundColor: useSunneeStore().capColor, mixBlendMode: 'multiply' }"
        />
        <img
          src="../assets/img/body.png"
          class="layer body"
          :style="{ backgroundColor: useSunneeStore().bodyColor, mixBlendMode: 'multiply' }"
        />
        <img
          src="../assets/img/bottom.png"
          class="layer bottom"
          :style="{ backgroundColor: useSunneeStore().bottomColor, mixBlendMode: 'multiply' }"
        />
        <img src="../assets/img/mask.png" class="layer body" />
        <img src="../assets/img/logo.png" class="layer label" />
        <figcaption class="sr-only">Bottle preview with selected colors</figcaption>
      </figure>
    </section>
    <!-- Navigation buttons for steps -->
    <nav class="relative bottom-35 flex pl-54 justify-start gap-26" aria-label="Step navigation">
      <div>
        <router-link to="/configurator" style="text-decoration: none">
          <button v-on:click="useSunneeStore().reset()" type="button" class="custom-pill-btn-reset">
            Reset
          </button>
        </router-link>
      </div>
      <div class="flex gap-4">
        <button v-if="sunneeStore.step !== 1" @click="sunneeStore.stepBack" type="button" class="custom-pill-btn">Back</button>
        <button v-else type="button" class="custom-pill-btn invisible">Back</button>
        <router-link v-if="sunneeStore.step == 3" to="/thanks" style="text-decoration: none">
          <button type="button" class="custom-pill-btn">Send !</button>
        </router-link>
        <button v-else @click="sunneeStore.advanceStep" type="button" class="custom-pill-btn">Next</button>
      </div>
    </nav>
  </main>
</template>
