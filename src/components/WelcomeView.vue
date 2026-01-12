<script setup lang="ts">
  import { useSunneeStore } from '@/stores/sunnee';
  const sunneeStore = useSunneeStore();
</script>

<template>
    <div>
      <!-- App principale -->
      <h1>Personalizza la tua bottiglia!</h1>
    </div>
    <div class="bottle-container">
      <img
        src="../assets/img/cap.png"
        :style="{ backgroundColor: sunneeStore.colors.red }"
        class="layer mix-blend-multiply"
      />
      <img
        src="../assets/img/body.png"
        :style="{ backgroundColor: sunneeStore.colors.green }"
        class="layer mix-blend-multiply"
      />
      <img
        src="../assets/img/bottom.png"
        :style="{ backgroundColor: sunneeStore.colors.skyblue }"
        class="layer mix-blend-multiply"
      />
      <img src="../assets/img/mask.png" class="layer" />
      <img src="../assets/img/logo.png" class="layer" />
    </div>
  
</template>
