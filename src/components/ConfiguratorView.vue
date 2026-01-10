<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.bottle-container {
  position: absolute;
  width: 350px;
  height: 500px;
  left: 1200px;
  top: 250px;
  margin: 0 auto;
}

.layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
<template>
  <div>
    <div class="flex flex-row justify-between items-center">
      <RouterLink to="/" style="text-decoration: none">
        <img
          src="../assets/img/logo2.png"
          alt="layer-label"
          style="position: relative; width: 150px; z-index: 10"
        />
      </RouterLink>
    </div>
    <div>
      <!-- App principale -->
      <h1 class="text-6xl font-bold text-center pt-4">Scegli il colore del tappo</h1>
    </div>
    <button
      class="verde"
      type="button"
      style="
        position: absolute;
        left: 500px;
        top: 420px;
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
    <button
      class="rosso"
      type="button"
      style="
        position: absolute;
        left: 640px;
        top: 420px;
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
    <button
      class="azzurro"
      type="button"
      style="
        position: absolute;
        left: 780px;
        top: 420px;
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
    <button
      class="giallo"
      type="button"
      style="
        position: absolute;
        left: 920px;
        top: 420px;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        font-size: 25px;
        font-weight: bolder;
        background-color: rgb(251, 251, 183);
        border: 2px solid rgb(255, 255, 0);
        cursor: pointer;
      "
    ></button>
    <button
      class="viola"
      type="button"
      style="
        position: absolute;
        left: 1060px;
        top: 420px;
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
    <button
      class="rosa"
      type="button"
      style="
        position: absolute;
        left: 500px;
        top: 560px;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        font-size: 25px;
        font-weight: bolder;
        background-color: rgb(251, 183, 238);
        border: 2px solid rgb(255, 192, 203);
        cursor: pointer;
      "
    ></button>
    <button
      class="grigio"
      type="button"
      style="
        position: absolute;
        left: 640px;
        top: 560px;
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
    <button
      class="arancio"
      type="button"
      style="
        position: absolute;
        left: 780px;
        top: 560px;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        font-size: 25px;
        font-weight: bolder;
        background-color: rgb(251, 183, 140);
        border: 2px solid rgb(255, 165, 0);
        cursor: pointer;
      "
    ></button>
    <button
      class="oro"
      type="button"
      style="
        position: absolute;
        left: 920px;
        top: 560px;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        font-size: 25px;
        font-weight: bolder;
        background-color: gold;
        border: 2px solid gold;
        cursor: pointer;
      "
    ></button>
    <button
      class="silver"
      type="button"
      style="
        position: absolute;
        left: 1060px;
        top: 560px;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        font-size: 25px;
        font-weight: bolder;
        background-color: silver;
        border: 2px solid silver;
        cursor: pointer;
      "
    ></button>
    <div class="bottle-container">
      <!--     <img src=" sfondo.png" class="layer cap" />
  <img src="sfondo1.png" class="layer cap" />
  <img src="sfondo2.png" class="layer cap"> -->

      <img
        src="../assets/img/tappo2.png"
        class="layer cap"
        style="background-color: rgb(251, 170, 161); mix-blend-mode: multiply"
      />
      <img
        src="../assets/img/corpo2.png"
        class="layer body"
        style="background-color: rgb(210, 251, 212); mix-blend-mode: multiply"
      />
      <img
        src="../assets/img/fondo2.png"
        class="layer bottom"
        style="background-color: rgb(183, 238, 251); mix-blend-mode: multiply"
      />
      <img src="../assets/img/mask.png" class="layer body" />
      <img src="../assets/img/logo.png" class="layer label" />
    </div>
  </div>
</template>
