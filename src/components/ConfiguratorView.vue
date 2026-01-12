<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useSunneeStore } from '@/stores/sunnee'
</script>

<template>
  <div>
    <div class="flex flex-col gap-4 sm:flex-row sm:pr-58 items-center justify-center">
      <!-- App principale -->
      <h1 class="text-5xl font-bold text-center py-4 px-2 sm:pr-20 sm:pl-48">
        Scegli il colore del tappo
      </h1>
      <button class="custom-step-btn">Step 1/3</button>
    </div>
    <div class="grid grid-cols-5 gap-6 justify-items-center items-center w-213 pt-22 pl-48">
      <button
        v-on:click="useSunneeStore().setCapColor('rgb(210, 251, 212)')"
        class="rounded-full w-30 h-30 text-xl font-bold border-2 border-green-500 bg-[rgb(210,251,212)] shadow-md hover:scale-105 transition"
        aria-label="Verde"
      ></button>
      <button
        v-on:click="useSunneeStore().setCapColor('rgb(251, 170, 161)')"
        class="rounded-full w-30 h-30 text-xl font-bold border-2 border-red-500 bg-[rgb(251,170,161)] shadow-md hover:scale-105 transition"
        aria-label="Rosso"
      ></button>
      <button
        v-on:click="useSunneeStore().setCapColor('rgb(183, 238, 251)')"
        class="rounded-full w-30 h-30 text-xl font-bold border-2 border-blue-400 bg-[rgb(183,238,251)] shadow-md hover:scale-105 transition"
        aria-label="Azzurro"
      ></button>
      <button
        v-on:click="useSunneeStore().setCapColor('whitesmoke')"
        class="rounded-full w-30 h-30 text-xl font-bold border-2 border-gray-400 bg-[whitesmoke] shadow-md hover:scale-105 transition"
        aria-label="Bianco"
      ></button>
      <button
        v-on:click="useSunneeStore().setCapColor('rgb(183, 183, 251)')"
        class="rounded-full w-30 h-30 text-xl font-bold border-2 border-indigo-500 bg-[rgb(183,183,251)] shadow-md hover:scale-105 transition"
        aria-label="Viola"
      ></button>
      <button
        v-on:click="useSunneeStore().setCapColor('rgb(251, 183, 238)')"
        class="rounded-full w-30 h-30 text-xl font-bold border-2 border-pink-400 bg-[rgb(251,183,238)] shadow-md hover:scale-105 transition"
        aria-label="Rosa"
      ></button>
      <button
        v-on:click="useSunneeStore().setCapColor('rgb(140, 139, 139)')"
        class="rounded-full w-30 h-30 text-xl font-bold border-2 border-gray-600 bg-[rgb(140,139,139)] shadow-md hover:scale-105 transition"
        aria-label="Grigio"
      ></button>
      <button
        v-on:click="useSunneeStore().setCapColor('rgb(251, 183, 140)')"
        class="rounded-full w-30 h-30 text-xl font-bold border-2 border-orange-400 bg-[rgb(251,183,140)] shadow-md hover:scale-105 transition"
        aria-label="Arancio"
      ></button>
      <button
        v-on:click="useSunneeStore().setCapColor('gold')"
        class="rounded-full w-30 h-30 text-xl font-bold border-2 border-yellow-400 bg-[gold] shadow-md hover:scale-105 transition"
        aria-label="Oro"
      ></button>
      <button
        v-on:click="useSunneeStore().setCapColor('silver')"
        class="rounded-full w-30 h-30 text-xl font-bold border-2 border-gray-300 bg-[silver] shadow-md hover:scale-105 transition"
        aria-label="Argento"
      ></button>
    </div>
    <div class="flex pt-18 pl-44 justify-start gap-48">
    <div>
      <router-link to="/configurator" style="text-decoration: none">
        <button v-on:click="useSunneeStore().reset()" type="button" class="custom-pill-btn">
          Reset
        </button>
      </router-link>
    </div>
    <div>
      <router-link to="/configurator" style="text-decoration: none">
        <button type="button" class="custom-pill-btn invisible">Back</button>
      </router-link>
      <router-link to="/step-2" style="text-decoration: none">
        <button type="button" class="custom-pill-btn">Next</button>
      </router-link>
    </div>
    </div>
    <div class="bottle-container-configurator">
      <!--     <img src=" sfondo.png" class="layer cap" />
  <img src="sfondo1.png" class="layer cap" />
  <img src="sbottom.png" class="layer cap"> -->

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
</template>
