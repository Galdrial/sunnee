<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useSunneeStore } from '@/stores/sunnee';
</script>

<template>
  <div>
    <div class="flex flex-row justify-between items-center">
        <img
          src="../assets/img/logo2.png"
          alt="layer-label"
          style="position: relative; width: 150px; z-index: 10"
        />
      <router-link to="/" style="text-decoration: none">
        <button v-on:click="useSunneeStore().reset()" type="button" class="custom-pill-btn">
          Home
        </button>
      </router-link>
    </div>
    <div>
      <!-- App principale -->
      <h1 class="text-6xl font-bold text-center pt-4 pr-55">Scegli il colore del fondo</h1>
    </div>
    <button v-on:click="useSunneeStore().setBottomColor('rgb(210, 251, 212)')"
      class="verde"
      type="button"
      style="
        position: absolute;
        left: 500px;
        top: 320px;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        font-size: 25px;
        font-weight: bolder;
        background-color: rgb(210, 251, 212);
        border: 2px solid rgb(59, 197, 66);
        cursor: pointer;
      "
    ></button>
    <button v-on:click="useSunneeStore().setBottomColor('rgb(251, 170, 161)')"
      class="rosso"
      type="button"
      style="
        position: absolute;
        left: 640px;
        top: 320px;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        font-size: 25px;
        font-weight: bolder;
        background-color: rgb(251, 170, 161);
        border: 2px solid rgb(197, 59, 59);
        cursor: pointer;
      "
    ></button>
    <button v-on:click="useSunneeStore().setBottomColor('rgb(183, 238, 251)')"
      class="azzurro"
      type="button"
      style="
        position: absolute;
        left: 780px;
        top: 320px;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        font-size: 25px;
        font-weight: bolder;
        background-color: rgb(183, 238, 251);
        border: 2px solid rgb(0, 123, 255);
        cursor: pointer;
      "
    ></button>
    <button v-on:click="useSunneeStore().setBottomColor('whitesmoke')"
      class="bianco"
      type="button"
      style="
        position: absolute;
        left: 920px;
        top: 320px;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        font-size: 25px;
        font-weight: bolder;
        background-color: whitesmoke;
        border: 2px solid grey;
        cursor: pointer;
      "
    ></button>
    <button   v-on:click="useSunneeStore().setBottomColor('rgb(183, 183, 251)')"
      class="viola"
      type="button"
      style="
        position: absolute;
        left: 1060px;
        top: 320px;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        font-size: 25px;
        font-weight: bolder;
        background-color: rgb(183, 183, 251);
        border: 2px solid rgb(123, 0, 255);
        cursor: pointer;
      "
    ></button>
    <button   v-on:click="useSunneeStore().setBottomColor('rgb(251, 183, 238)')"
      class="rosa"
      type="button"
      style="
        position: absolute;
        left: 500px;
        top: 460px;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        font-size: 25px;
        font-weight: bolder;
        background-color: rgb(251, 183, 238);
        border: 2px solid rgb(251, 130, 255);
        cursor: pointer;
      "
    ></button>
    <button  v-on:click="useSunneeStore().setBottomColor('rgb(140, 139, 139)')"
      class="grigio"
      type="button"
      style="
        position: absolute;
        left: 640px;
        top: 460px;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        font-size: 25px;
        font-weight: bolder;
        background-color: rgb(140, 139, 139);
        border: 2px solid rgb(44, 44, 44);
        cursor: pointer;
      "
    ></button>
    <button v-on:click="useSunneeStore().setBottomColor('rgb(251, 183, 140)')"
      class="arancio"
      type="button"
      style="
        position: absolute;
        left: 780px;
        top: 460px;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        font-size: 25px;
        font-weight: bolder;
        background-color: rgb(251, 183, 140);
        border: 2px solid rgb(255, 125, 0);
        cursor: pointer;
      "
    ></button>
    <button v-on:click="useSunneeStore().setBottomColor('gold')"
      class="oro"
      type="button"
      style="
        position: absolute;
        left: 920px;
        top: 460px;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        font-size: 25px;
        font-weight: bolder;
        background-color: gold;
        border: 2px solid rgb(200, 150, 0);
        cursor: pointer;
      "
    ></button>
    <button v-on:click="useSunneeStore().setBottomColor('silver')"
      class="silver"
      type="button"
      style="
        position: absolute;
        left: 1060px;
        top: 460px;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        font-size: 25px;
        font-weight: bolder;
        background-color: silver;
        border: 2px solid rgb(120, 120, 120);
        cursor: pointer;
      "
    ></button>
    <div class="absolute top-156 left-126">
      <router-link to="/configurator" style="text-decoration: none">
    <button v-on:click="useSunneeStore().reset()" type="button" class="custom-pill-btn">Reset</button>
    </router-link>
    </div>
    <div class="flex gap-4 absolute top-156 left-212">
        <router-link to="/step-2" style="text-decoration: none">
          <button type="button" class="custom-pill-btn">Back</button>
        </router-link>
        <router-link to="/thanks" style="text-decoration: none">
          <button type="button" class="custom-pill-btn">Send</button>
        </router-link>
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
