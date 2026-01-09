<template>
  <div>
  <div class="flex flex-row justify-between items-center">
    <img src="./assets/img/logo2.png" alt="layer-label" style="position: relative; width: 150px; z-index: 10;">
  <button type="button" class="custom-pill-btn">Inizia</button>
  </div>
    <div>
    <!-- App principale -->
     <h1 class="text-6xl font-bold text-center pt-4">Personalizza la tua bottiglia!</h1>
  </div>
  <div class="bottle-container">
<!--     <img src=" sfondo.png" class="layer cap" />
  <img src="sfondo1.png" class="layer cap" />
  <img src="sfondo2.png" class="layer cap"> -->
  
  <img src="./assets/img/tappo2.png" class="layer cap" style="background-color:rgb(251, 170, 161);mix-blend-mode:multiply;" />
  <img src="./assets/img/corpo2.png" class="layer body" style="background-color: rgb(210, 251, 212);mix-blend-mode: multiply" />
  <img src="./assets/img/fondo2.png" class="layer bottom" style="background-color:rgb(183, 238, 251);mix-blend-mode: multiply" />
   <img src="./assets/img/mask.png" class="layer body" />
  <img src="./assets/img/logo.png" class="layer label" />
  </div>
  </div>
</template>
<style scoped>
    .bottle-container {
      position: relative;
      width: 350px;
      height: 500px;
      margin: 0 auto;
    }

    .layer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  .custom-pill-btn {
    position: relative;
    border-radius: 50px;
    font-size: 25px;
    font-weight: bolder;
    color: white;
    background-color: rgb(132, 190, 135);
    border: 0px;
    padding: 5px 50px;
    cursor: pointer;
    height: 65px;
    width: auto;
    display: inline-block;
  }
  </style>