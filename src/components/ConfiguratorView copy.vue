<script setup lang="ts">
import { useSunneeStore } from '@/stores/sunnee'
const sunneeStore = useSunneeStore()

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
    <div>
      <!-- App principale -->
      <h1 class="h1Configurator">Scegli il colore del</h1>
      <h2 v-if="sunneeStore.step === 1" class="h2Configurator">TAPPO</h2>
      <h2 v-else-if="sunneeStore.step === 2" class="h2Configurator">CORPO</h2>
      <h2 v-else-if="sunneeStore.step === 3" class="h2Configurator">FONDO</h2>
    </div>
    <div class="flex flex-row items-center w-full justify-center">
      <div class="grid grid-cols-5 gap-6 justify-items-center items-center w-200 pl-55 pb-40">
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
      <div class="bottle-container right-6 bottom-40">
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
      </div>
    </div>
    <div class="relative bottom-35 flex pl-54 justify-start gap-26">
      <div>
        <router-link to="/configuratorcopy" style="text-decoration: none">
          <button v-on:click="useSunneeStore().reset()" type="button" class="custom-pill-btn">
            Reset
          </button>
        </router-link>
      </div>
      <div class="flex gap-4">
        
          <button v-if="sunneeStore.step !== 1" @click="sunneeStore.stepBack" type="button" class="custom-pill-btn">Back</button>
          <button v-else type="button" class="custom-pill-btn invisible">Back</button>
      
          <router-link v-if="sunneeStore.step == 3" to="/thanks" style="text-decoration: none">
            <button type="button" class="custom-pill-btn">Send</button>
          </router-link>
          <button v-else @click="sunneeStore.advanceStep" type="button" class="custom-pill-btn">Next</button>
       
      </div>
    </div>
  </main>
</template>
