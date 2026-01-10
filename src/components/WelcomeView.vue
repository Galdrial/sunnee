<template>
  <div>
    <div class="flex flex-row justify-between items-center">
      <img
        src="../assets/img/logo2.png"
        alt="layer-label"
        style="position: relative; width: 150px; z-index: 10"
      />
      <router-link to="/configurator" style="text-decoration: none">
      <button type="button" class="custom-pill-btn">Start</button>
      </router-link>
    </div>
    <div>
      <!-- App principale -->
      <h1 class="text-6xl font-bold text-center pt-4">Personalizza la tua bottiglia!</h1>
    </div>
    <div class="bottle-container">
      <img
        src="../assets/img/cap.png"
        class="layer cap"
        style="background-color: rgb(251, 170, 161); mix-blend-mode: multiply"
      />
      <img
        src="../assets/img/body.png"
        class="layer body"
        style="background-color: rgb(210, 251, 212); mix-blend-mode: multiply"
      />
      <img
        src="../assets/img/bottom.png"
        class="layer bottom"
        style="background-color: rgb(183, 238, 251); mix-blend-mode: multiply"
      />
      <img src="../assets/img/mask.png" class="layer body" />
      <img src="../assets/img/logo.png" class="layer label" />
    </div>
  </div>
</template>
<style scoped>

</style>
