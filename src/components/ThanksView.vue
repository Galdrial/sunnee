<template>
  <div>
    <div>
      <!-- App principale -->
      <h1>Ecco la tua bottiglia!</h1>
    </div>
    <div class="bottle-container">
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
<script setup lang="ts">
import { useSunneeStore } from '@/stores/sunnee';
</script>
<style scoped>

</style>
