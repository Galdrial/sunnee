<script setup lang="ts">
// BottlePreview component: shows the bottle with customizable colors
import { useSunneeStore } from '@/stores/sunnee';
import { computed } from 'vue';
// Props allow overriding the default store colors (used for home preview)
const props = defineProps<{
  capColor?: string;
  bodyColor?: string;
  bottomColor?: string;
}>();
const sunneeStore = useSunneeStore();

// Use props if provided, otherwise fallback to store state
const cap = computed(() => props.capColor ?? sunneeStore.capColor);
const body = computed(() => props.bodyColor ?? sunneeStore.bodyColor);
const bottom = computed(() => props.bottomColor ?? sunneeStore.bottomColor);
</script>

<template>
  <div class="bottle-container">
    <!-- Cap image with dynamic color -->
    <img
      src="../assets/img/cap.png"
      alt="Bottle cap"
      class="bottle-layer"
      :style="{ backgroundColor: cap, mixBlendMode: 'multiply' }"
    />
    <!-- Body image with dynamic color -->
    <img
      src="../assets/img/body.png"
      alt="Bottle body"
      class="bottle-layer"
      :style="{ backgroundColor: body, mixBlendMode: 'multiply' }"
    />
    <!-- Bottom image with dynamic color -->
    <img
      src="../assets/img/bottom.png"
      alt="Bottle bottom"
      class="bottle-layer"
      :style="{ backgroundColor: bottom, mixBlendMode: 'multiply' }"
    />
    <!-- Mask and logo overlays -->
    <img src="../assets/img/mask.png" alt="Bottle mask overlay" class="bottle-layer" />
    <img src="../assets/img/logo.png" alt="Sunnee Kids logo" class="bottle-layer" />
  </div>
</template>
